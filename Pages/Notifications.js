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
import { mainStyles } from "../components/mainStyles";
import { getList, defaultList } from "../components/listHelpers";
import data from "../data";
import WordOfDay, { GetWordOfTheDay } from "./WordOfDay";

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

const get12HourFormat = (hour) => {
  if (hour === 0 || hour === 12) {
    return 12;
  } else if (hour > 12) {
    return hour - 12;
  }
  return hour;
};

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
  const [update, setUpdate] = useState(false);
  const [currNotifs, setCurrNotifs] = useState(null);

  const [expoPushToken, setExpoPushToken] = useState("");
  const [channels, setChannels] = useState([]);
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token),
    );

    Notifs.getAllScheduledNotificationsAsync().then(
      (n) => n && setCurrNotifs(),
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
      [NOTIF_TYPES.wordReminder]: {
        title: "Lets build your vocab with new words",
        url: "MyList",
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
    console.log("currNotifs:");
    console.log(currNotifs);
    if (!currNotifs) {
      return null;
    }
    const selectedType = currNotifs.filter(
      (el) => el.content.data.notificationName.split("-")[0] === type,
    );
    console.log("selectedType:");
    console.log(selectedType);

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
    console.log("sortedNotifs:");
    console.log(sortedNotifs);
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

  let modal = null;
  if (showModal === NOTIF_TYPES.wordOfDay) {
    modal = (
      <WordOfTheDayModal
        notificationType={notificationType}
        time={time}
        setTime={setTime}
        handleClose={handleClose}
      />
    );
  } else if (showModal === NOTIF_TYPES.wordReminder) {
    modal = (
      <IndividualWordModal
        notificationType={notificationType}
        time={time}
        setTime={setTime}
        handleClose={handleClose}
      />
    );
  } else if (showModal === NOTIF_TYPES.mastery) {
    modal = (
      <WordMasteryModal
        notificationType={notificationType}
        time={time}
        setTime={setTime}
        handleClose={handleClose}
      />
    );
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
          {!modal ? (
            <View style={mainStyles.centerChildren}>
              <View>
                <Text style={mainStyles.header}>Notifications</Text>
                {/* <Text style={mainStyles.subHead2}>
                  Repetition is the key to learning. Receive phone notifications
                  of the Word of the Day. Or schedule notifications every hour
                  or few hours of the words in your Word Mastery List. Or
                  schedule to take Word Mastery Challenges at convenient times.
                </Text> */}
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
              {modal}
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
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
const RenderTime = (time) => {
  const formattedHours = get12HourFormat(time.getHours());
  const formattedMinutes = getMinuteFormat(time.getMinutes());
  const ampm = getAMPM(time.getHours());

  return (
    <Text style={style.timeText}>
      We will remind you at {formattedHours}:{formattedMinutes} {ampm}
    </Text>
  );
};

function WordOfTheDayModal(Props) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { notificationType, time, setTime, handleClose } = Props;

  const handleDateChange = (_, time) => {
    setShowTimePicker(false);
    setTime(time);
    setIsSubmitted(true);
  };

  const handleSubmit = () => {
    const wordOfTheDay = GetWordOfTheDay();
    handleClose(
      wordOfTheDay.Word,
      `${wordOfTheDay.Shortdef}\nLearn more words with Words to Impress.`,
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
          {Platform.OS === "ios" && (
            <Text style={{ ...mainStyles.text, ...style.marginAuto }}>
              Click me
            </Text>
          )}
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
          {RenderTime(time)}
          <AppButton
            viewStyle={style.marginAuto}
            icon="sign-out-alt"
            title="Remind me"
            onPress={handleSubmit}
          />
        </View>
      )}
    </View>
  );
}
function IndividualWordModal(Props) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [list, setList] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { notificationType, time, setTime, handleClose } = Props;

  useEffect(() => {
    const asyncWrapper = async () => {
      const wordList = await getList(defaultList);
      setList(wordList.map((el) => el.word));
    };
    asyncWrapper();
  }, []);

  const handleDateChange = (_, time) => {
    setShowTimePicker(false);
    setTime(time);
    setIsSubmitted(true);
  };

  const handleSubmit = () => {
    const title = selectedWord;
    const wordIndex = data.findIndex((el) => el.Word === title);
    const shortDef = data[wordIndex].Shortdef;
    const body = `${shortDef}\nLearn more words with Words to Impress.`;
    handleClose(title, body);
  };

  const renderList = () => {
    if (!list) {
      return <Text style={mainStyles.text}>Loading...</Text>;
    }
    return list
      .sort((a, b) => (a === selectedWord ? -1 : b === selectedWord ? 1 : 0))
      .map((el, i) => (
        <AppButton
          title={el}
          key={i}
          onPress={() => setSelectedWord(el)}
          style={i === 0 && selectedWord ? { backgroundColor: "blue" } : {}}
        />
      ));
  };

  const renderWordOrList = () => {
    const formattedList = renderList();
    if (selectedWord) {
      return (
        <View>
          {formattedList[0]}
          <AppButton title="Show list" onPress={() => setSelectedWord(null)} />
        </View>
      );
    }
    return formattedList;
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
          {Platform.OS === "ios" && (
            <Text style={{ ...mainStyles.text, ...style.marginAuto }}>
              Click me
            </Text>
          )}
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
          {RenderTime(time)}
          {selectedWord && (
            <AppButton
              viewStyle={style.marginAuto}
              icon="sign-out-alt"
              title="Remind me"
              onPress={handleSubmit}
            />
          )}
        </View>
      )}
      <View style={{ ...mainStyles.centerChildren, ...style.marginAuto }}>
        {renderWordOrList()}
      </View>
    </View>
  );
}
function WordMasteryModal(Props) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [option, setOption] = useState(null);

  const { notificationType, time, setTime, handleClose } = Props;

  const handleDateChange = (_, time) => {
    setShowTimePicker(false);
    setTime(time);
    setIsSubmitted(true);
  };

  const handleSubmit = () => {
    const title = `Come test your skills in ${option}`;
    const body = "Learn more words with Words to Impress.";
    handleClose(title, body);
  };

  const renderOptions = () =>
    ["Sentence ID", "Quick Quiz", "Rapid Fire"].map((el, i) => (
      <AppButton
        style={option === el ? { backgroundColor: "blue" } : {}}
        title={el}
        key={i}
        onPress={() => setOption(el)}
      />
    ));

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
          {Platform.OS === "ios" && (
            <Text style={{ ...mainStyles.text, ...style.marginAuto }}>
              Click me
            </Text>
          )}
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={false}
            onChange={handleDateChange}
            style={style.marginAuto}
          />
        </View>
      )}
      <View style={{ ...mainStyles.centerChildren, ...style.marginAuto }}>
        {renderOptions()}
      </View>
      {isSubmitted && (
        <View style={mainStyles.centerChildren}>
          {RenderTime(time)}
          {option && (
            <AppButton
              viewStyle={style.marginAuto}
              icon="sign-out-alt"
              title="Remind me"
              onPress={handleSubmit}
            />
          )}
        </View>
      )}
    </View>
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

  marginAuto: { margin: "auto" },

  timeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 5,
  },
});
