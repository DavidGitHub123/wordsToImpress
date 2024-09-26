import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifs from "expo-notifications";
import {
  getNotifs,
  doesNotifExist,
  addNotif,
  removeNotif,
} from "../components/notificationHelpers";

Notifs.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification(title, body, trigger) {
  await Notifs.scheduleNotificationAsync({
    content: {
      title,
      body,
      data: { data: "goes here", test: { test1: "more data" } },
    },
    trigger,
  });
}

export default function Notifications({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [time, setTime] = useState(new Date(Date.now()));
  const [userNotifs, setUserNotifs] = useState(null);

  const NOTIF_TYPES = {
    wordOfDay: "Word of the Day",
    wordReminder: "Word Reminders",
    mastery: "Word Mastery Challenge",
  };

  useEffect(() => {
    async function fetchNotifs() {
      setUserNotifs(await getNotifs());
    }

    fetchNotifs();
  }, []);

  const openModal = (notifType) => {
    setNotificationType(notifType);
    setShowModal(true);
  };

  const handleClose = async () => {
    setShowModal(false);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    const notificationName = `${notificationType}-${hour}-${minute}-${ampm}`;

    if (await doesNotifExist(notificationName)) {
      return;
    }

    await addNotif(notificationName);

    const titleAndURLDictionary = {
      [NOTIF_TYPES.wordOfDay]: "Check out the word of the day",
      [NOTIF_TYPES.wordReminder]: "Lets build your vocab with new words",
      [NOTIF_TYPES.mastery]: "Let's master some more words",
    };

    const title = titleAndURLDictionary[notificationType];

    const body = "Come master some more words.";

    const trigger = { hour, minute, repeats: true };

    await schedulePushNotification(title, body, trigger);
  };

  const renderNotifs = (type) => {
    if (!userNotifs) {
      return null;
    }
    console.log(userNotifs);
    const selectedType = userNotifs.filter((el) => el.includes(type));
    return (
      <View>
        {selectedType.map((el, i) => {
          const [_, hour, minute, ampm] = el.split("-");
          return (
            <Text key={i} style={style.text}>
              Notification scheduled at: {hour}:{minute} {ampm}
            </Text>
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
          style={style.page}
        >
          {!showModal ? (
            <View style={style.centerChildren}>
              <Text style={style.header}>Notifications</Text>
              <AppButton
                title="Schedule Word of the Day"
                onPress={() => openModal(NOTIF_TYPES.wordOfDay)}
                icon="sign-in"
              />
              {renderNotifs(NOTIF_TYPES.wordOfDay)}
              <AppButton
                title="Schedule Word Reminders"
                onPress={() => openModal(NOTIF_TYPES.wordReminder)}
                icon="sign-in"
              />
              {renderNotifs(NOTIF_TYPES.wordReminder)}
              <AppButton
                title="Schedule Word Mastery Challenge"
                onPress={() => openModal(NOTIF_TYPES.mastery)}
                icon="sign-in"
              />
              {renderNotifs(NOTIF_TYPES.mastery)}
            </View>
          ) : (
            <ScheduleModal
              notificationType={notificationType}
              time={time}
              setTime={setTime}
              handleClose={handleClose}
            />
          )}
          <View>
            <HomeButton navigation={navigation} />
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
    const unformattedHours = time.getHours();
    const unformattedMinutes = time.getMinutes();

    let formattedHours;
    if (unformattedHours === 0) {
      formattedHours = 12;
    } else if (unformattedHours > 12) {
      formattedHours = unformattedHours - 12;
    } else {
      formattedHours = unformattedHours;
    }

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

    const formattedMinutes =
      unformattedMinutes.toString().length === 1
        ? minutesArray[unformattedMinutes]
        : unformattedMinutes;

    const ampm = unformattedHours >= 12 ? " PM" : " AM";

    return (
      <Text style={style.text}>
        {formattedHours}:{formattedMinutes}
        {ampm}
      </Text>
    );
  };

  return (
    <View style={style.centerChildren}>
      <Text style={style.header}>
        Schedule your {notificationType} reminder
      </Text>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={false}
          onChange={handleDateChange}
        />
      )}
      <AppButton
        icon="user-clock"
        title="Set time"
        onPress={() => setShowTimePicker(true)}
      />
      {isSubmitted && RenderTime()}
      <AppButton icon="sign-out-alt" title="Remind me" onPress={handleClose} />
    </View>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
    paddingBottom: 100,
  },

  text: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "700",
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
    textAlign: "center",
  },

  section: {
    paddingVertical: 30,
  },

  centerChildren: {
    margin: "auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
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
    paddingTop: 20,
  },
});
