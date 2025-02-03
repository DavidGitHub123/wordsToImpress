import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import * as Notifs from "expo-notifications";
import * as Device from "expo-device";
import IconButton from "../components/IconButton";
import Constants from "expo-constants";
import { mainStyles } from "../components/mainStyles";
import { GetWordOfTheDay } from "./WordOfDay";
import NotificationModal, {
  get12HourFormat,
  getMinuteFormat,
  getAMPM,
} from "../components/NotificationModal";

Notifs.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification(
  title,
  body,
  hour,
  minute,
  notificationName,
  url,
) {
  if (Platform.OS === "andriod") {
    await Notifs.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { notificationName, url },
      },
      trigger: { hour, minute, type: "daily", repeats: true },
    });
  } else {
    await Notifs.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: { notificationName, url },
      },
      trigger: {
        hour,
        minute,
        repeats: true,
      },
    });
  }
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifs.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifs.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifs.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifs.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error("Project ID not found");
      }
      token = (
        await Notifs.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

export default function Notifications({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [time, setTime] = useState(new Date(Date.now()));
  const [update, setUpdate] = useState(false);
  const [currNotifs, setCurrNotifs] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();
  const vocabMasteryArry = ["Rapid Fire", "Word Match", "Quick Quiz", "Fill in the Blank", 'Fast Match', 'Anagram Fun'];
  const wordOfTheDay = GetWordOfTheDay();
  useEffect(() => {
    registerForPushNotificationsAsync();
    Notifs.getAllScheduledNotificationsAsync().then(
      (n) => n && setCurrNotifs(),
    );

    if (Platform.OS === "android") {
      Notifs.getNotificationChannelsAsync();
    }
    responseListener.current = Notifs.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url;
        navigation.navigate(url);
      },
    );

    return () => {
      notificationListener.current &&
        Notifs.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifs.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const NOTIF_TYPES = {
    wordOfDay: "Word of the Day",
    mastery: "Word Mastery Challenges",
  };

  useEffect(() => {
    Notifs.getAllScheduledNotificationsAsync().then(
      (n) => n && setCurrNotifs(n),
    );
  }, [update]);

  const openModal = (notifType) => {
    setNotificationType(notifType);
    setShowModal(notifType);
  };

  const handleClose = async (title, body) => {
    setShowModal(false);

    const hour = get12HourFormat(time.getHours());
    let minute = getMinuteFormat(time.getMinutes());
    const ampm = getAMPM(time.getHours());

    const notificationName = `${notificationType}-${hour}-${minute}-${ampm}`;

    const titleAndURLDictionary = {
      [NOTIF_TYPES.wordOfDay]: {
        title: "Check out the word of the day",
        url: "WordOfDay",
      },
      [NOTIF_TYPES.mastery]: {
        title: "Let's master some more words",
        url: "VocabMastery",
      },
    };

    const url = titleAndURLDictionary[notificationType].url;

    minute = time.getMinutes();

    await schedulePushNotification(
      title,
      body,
      time.getHours(),
      minute,
      notificationName,
      url,
    );
    setUpdate(!update);
  };

  const handleCancelAll = async () => {
    await Notifs.cancelAllScheduledNotificationsAsync();
    setUpdate(!update);
  };

  const handleRemoveNotifs = async (notif) => {
    const scheduledNotifs = await Notifs.getAllScheduledNotificationsAsync();
    const cancelledNotifIdentifier = scheduledNotifs.find(
      (el) =>
        el.content.data.notificationName ===
        notif.content.data.notificationName,
    ).identifier;
    await Notifs.cancelScheduledNotificationAsync(cancelledNotifIdentifier);
    setUpdate(!update);
  };

  const renderNotifs = (type) => {
    if (!currNotifs) {
      return null;
    }
    const selectedType = currNotifs.filter(
      (el) => el.content.data.notificationName.split("-")[0] === type,
    );

    const sortedNotifs = selectedType.sort((a, b) => {
      // eslint-disable-next-line no-unused-vars
      const [_, aHour, aMinute, __] = a.content.data.notificationName
        .split("-")
        .map((el) => parseInt(el));
      // eslint-disable-next-line no-unused-vars
      const [___, bHour, bMinute, ____] = b.content.data.notificationName
        .split("-")
        .map((el) => parseInt(el));
      if (aHour !== bHour) {
        return aHour - bHour;
      }
      return aMinute - bMinute;
    });
    return (
      <View>
        {sortedNotifs.map((el, i) => {
          // eslint-disable-next-line no-unused-vars
          const [_, hour, minute, ampm] =
            el.content.data.notificationName.split("-");
          return (
            <View key={i} style={style.timeContainer}>
              <Text style={style.timeText}>
                Notification at: {hour}:{minute} {ampm}
              </Text>
              <IconButton name="trash" onPress={() => handleRemoveNotifs(el)} />
            </View>
          );
        })}
      </View>
    );
  };
  let options = null;
  if (showModal === NOTIF_TYPES.wordOfDay) {
    options = wordOfTheDay;
  } else if (showModal === NOTIF_TYPES.mastery) {
    options = vocabMasteryArry;
  }

  return (
    <LinearGradient
      colors={["#335C81", "#6699FF"]}
      start={{ x: 0.5, y: 0.25 }}
      end={{ x: 0.5, y: 0.25 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView>
        <ScrollView alwaysBounceHorizontal={true}>
          {!showModal ? (
            <View style={mainStyles.centerChildren}>
              <View style={mainStyles.screen}>
                <Text style={mainStyles.header}>Challenges</Text>
                <Text style={mainStyles.subText}>
                  Challenge yourself. Set notifications to play
                  games and quizes, or receive the word of the day.
                </Text>
              </View>

              <Text style={mainStyles.subheader}>Click to Schedule</Text>
              <View style={style.buttons}>
                <AppButton
                  title="Word of the Day"
                  onPress={() => openModal(NOTIF_TYPES.wordOfDay)}
                  icon="sign-in"
                />
                {renderNotifs(NOTIF_TYPES.wordOfDay)}
                <AppButton
                  title="Games and Quizzes"
                  onPress={() => openModal(NOTIF_TYPES.mastery)}
                  icon="sign-in"
                />
                {renderNotifs(NOTIF_TYPES.mastery)}
                <View style={style.bottomButtons}>
                  <AppButton
                    icon="trash"
                    title="Clear Notifications"
                    onPress={() => handleCancelAll()}
                  />
                </View>
              </View>
            </View>
          ) : (
            <View style={mainStyles.centerChildren}>
              <NotificationModal
                notificationType={notificationType}
                time={time}
                setTime={setTime}
                handleClose={handleClose}
                options={options}
              />
            </View>
          )}

          <View style={style}>
            <HomeButton navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomButtons: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    paddingTop: 20,
  },

  timeText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
    color: "#f0f8ff",
    fontWeight: "700",
    margin: "auto",
  },

  timeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 5,
  },
});
