import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "util";

export default function Notifications({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [notificationType, setNotificationType] = useState(null);

  const openModal = (notifType) => {
    setNotificationType(notifType);
    setShowModal(true);
  };

  return (
    <SafeAreaView style={style.container}>
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
                onPress={() => openModal("Word of the Day")}
                icon="sign-in"
              />
              <AppButton
                title="Schedule Word Reminders"
                onPress={() => openModal("Word Reminders")}
                icon="sign-in"
              />
              <AppButton
                title="Schedule Word Mastery Challenge"
                onPress={() => openModal("Word Mastery Challenge")}
                icon="sign-in"
              />
            </View>
          ) : (
            <ScheduleModal notificationType={notificationType} />
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
  const [time, setTime] = useState(new Date(Date.now()));
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { notificationType } = Props;

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleDateChange = (_, time) => {
    setShowTimePicker(false);
    setTime(time);
    setIsSubmitted(true);
  };

  console.log(style.text);
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
      <AppButton icon="sign-out-alt" title="Remind me" onPress={handleSubmit} />
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
    alignContent: "center",
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
