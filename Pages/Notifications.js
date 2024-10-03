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
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifs from "expo-notifications";
import * as Device from "expo-device";
import IconButton from "../components/IconButton";
import Constants from "expo-constants";
import {
  getNotifs,
  doesNotifExist,
  addNotif,
  removeNotif,
  cancelAllNotifs,
} from "../components/notificationHelpers";
import { mainStyles } from "../components/mainStyles";

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
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
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

const get12HourFormat = (hour) => (hour > 12 ? hour - 12 : hour);

const getMinuteFormat = (minute) => {
  const minutesArray = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
  ];

  return minute.toString().length === 1 ? minutesArray[minute] : minute;
};

const getAMPM = (hour) => (hour >= 12 ? "PM" : "AM");

export default function Notifications({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [time, setTime] = useState(new Date(Date.now()));
  const [userNotifs, setUserNotifs] = useState(null);
  const [update, setUpdate] = useState(false);

  const [expoPushToken, setExpoPushToken] = useState("");
  const [channels, setChannels] = useState([]);
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token),
    );

    if (Platform.OS === "android") {
      Notifs.getNotificationChannelsAsync().then((value) =>
        setChannels(value ?? []),
      );
    }
    notificationListener.current = Notifs.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      },
    );

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
    wordReminder: "Individual Word Mastery",
    mastery: "Word Mastery Challenges",
  };

  useEffect(() => {
    async function fetchNotifs() {
      setUserNotifs(await getNotifs());
    }

    fetchNotifs();
  }, [update]);

  const openModal = (notifType) => {
    setNotificationType(notifType);
    setShowModal(true);
  };

  const handleClose = async () => {
    setShowModal(false);

    const hour = get12HourFormat(time.getHours());
    let minute = getMinuteFormat(time.getMinutes());
    const ampm = getAMPM(time.getHours());

    const notificationName = `${notificationType}-${hour}-${minute}-${ampm}`;

    if (await doesNotifExist(notificationName)) {
      return;
    }

    await addNotif(notificationName);

    const titleAndURLDictionary = {
      [NOTIF_TYPES.wordOfDay]: {
        title: "Check out the word of the day",
        url: "WordOfDay",
      },
      [NOTIF_TYPES.wordReminder]: {
        title: "Lets build your vocab with new words",
        url: "MyList",
      },
      [NOTIF_TYPES.mastery]: {
        title: "Let's master some more words",
        url: "VocabMastery",
      },
    };

    const title = titleAndURLDictionary[notificationType].title;
    const url = titleAndURLDictionary[notificationType].url;
    const body = "Come master some more words.";

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
    cancelAllNotifs();
    setUpdate(!update);
  };

  const handleRemoveNotifs = async (notif) => {
    await removeNotif(notif);
    setUpdate(!update);

    const scheduledNotifs = await Notifs.getAllScheduledNotificationsAsync();
    const cancelledNotifIdentifier = scheduledNotifs.find(
      (el) => el.content.data.notificationName === notif,
    ).identifier;
    await Notifs.cancelScheduledNotificationAsync(cancelledNotifIdentifier);
  };

  const renderNotifs = (type) => {
    if (!userNotifs) {
      return null;
    }
    const selectedType = userNotifs.filter((el) => el.includes(type));
    const sortedNotifs = selectedType.sort((a, b) => {
      // eslint-disable-next-line no-unused-vars
      const [_, aHour, aMinute, __] = a.split("-").map((el) => parseInt(el));
      // eslint-disable-next-line no-unused-vars
      const [___, bHour, bMinute, ____] = b
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
          const [_, hour, minute, ampm] = el.split("-");
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

  return (
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
          style={mainStyles.page}
        >
          {!showModal ? (
            <View style={mainStyles.centerChildren}>
              <View style={style.screen}>
                <Text style={mainStyles.header}>Notifications</Text>
                <Text style={mainStyles.subHead2}>
                  Repetition is the key to learning. Receive phone notifications
                  of the Word of the Day. Or schedule notifications every hour
                  or few hours of the words in your Word Mastery List. Or
                  schedule to take Word Mastery Challenges at convenient times.
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
                  title="Individual Word Mastery"
                  onPress={() => openModal(NOTIF_TYPES.wordReminder)}
                  icon="sign-in"
                />
                {renderNotifs(NOTIF_TYPES.wordReminder)}
                <AppButton
                  title="Word Mastery Challenges"
                  onPress={() => openModal(NOTIF_TYPES.mastery)}
                  icon="sign-in"
                />
                {renderNotifs(NOTIF_TYPES.mastery)}
                <AppButton
                  icon="trash"
                  title="Clear all notifications"
                  onPress={() => handleCancelAll()}
                />
                <AppButton
                  title="Back"
                  onPress={() => navigation.goBack()}
                ></AppButton>
              </View>
            </View>
          ) : (
            <View style={mainStyles.centerChildren}>
              <ScheduleModal
                notificationType={notificationType}
                time={time}
                setTime={setTime}
                handleClose={handleClose}
              />
              <AppButton
                viewStyle={{ margin: "auto" }}
                title="Back"
                onPress={() => setShowModal(false)}
              ></AppButton>
            </View>
          )}

          <View style={style.bottomButtons}>
            <View style={style.homeButton}>
              <HomeButton navigation={navigation} />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

function ScheduleModal(Props) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { notificationType, time, setTime, handleClose } = Props;

  const handleDateChange = (_, time) => {
    setShowTimePicker(false);
    setTime(time);
    setIsSubmitted(true);
  };

  const RenderTime = () => {
    const formattedHours = get12HourFormat(time.getHours());
    const formattedMinutes = getMinuteFormat(time.getMinutes());
    const ampm = getAMPM(time.getHours());

    return (
      <Text style={style.timeText}>
        We will remind you at {formattedHours}:{formattedMinutes} {ampm}
      </Text>
    );
  };

  return (
    <View style={mainStyles.centerChildren}>
      <Text style={mainStyles.header2}>{notificationType} reminder</Text>
      <View style={style.marginAuto}>
        <AppButton
          icon="user-clock"
          title="Set time"
          onPress={() => setShowTimePicker(true)}
        />
      </View>
      {showTimePicker && (
        <View style={mainStyles.centerChildren}>
          <Text style={mainStyles.text}>Click me</Text>
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={false}
            onChange={handleDateChange}
            style={style.marginAuto}
          />
        </View>
      )}
      {isSubmitted && (
        <View style={mainStyles.centerChildren}>
          {RenderTime()}
          <AppButton
            icon="sign-out-alt"
            title="Remind me"
            onPress={handleClose}
          />
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    paddingBottom: 20,
    marginBottom: 30,
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 270,
    opacity: 0.75,
    marginVertical: 2,
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

  marginAuto: { margin: "auto" },

  timeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 5,
  },
});
