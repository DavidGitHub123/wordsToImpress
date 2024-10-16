import React, { useState, useRef } from "react";
import data from "../data";
import { mainStyles } from "./mainStyles";
import AppButton from "./AppButton";
import { Text, View, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
export const RenderTime = (time) => {
  const formattedHours = get12HourFormat(time.getHours());
  const formattedMinutes = getMinuteFormat(time.getMinutes());
  const ampm = getAMPM(time.getHours());

  return (
    <Text style={style.timeText}>
      We will remind you at {formattedHours}:{formattedMinutes} {ampm}
    </Text>
  );
};
export const get12HourFormat = (hour) => {
  if (hour === 0 || hour === 12) {
    return 12;
  } else if (hour > 12) {
    return hour - 12;
  }
  return hour;
};

export const getMinuteFormat = (minute) => {
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

export const getAMPM = (hour) => (hour >= 12 ? "PM" : "AM");

export default function NotificationModal(Props) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const notifTextRef = useRef(null);

  const bodyEnd = "\nLearn more words with Words to Impress.";

  const { notificationType, time, setTime, handleClose, options } = Props;

  const handleDateChange = (_, time) => {
    setShowTimePicker(false);
    setTime(time);
    setIsSubmitted(true);
  };

  const handleSubmit = () => {
    if (notifTextRef.current !== null) {
      handleClose(notifTextRef.current.title, notifTextRef.current.body);
      return;
    }
    const title = selectedWord;
    const wordIndex = data.findIndex((el) => el.Word === title);
    if (wordIndex === -1) {
      handleClose(
        `Come test your skills in\n${selectedWord}`,
        bodyEnd.substring(1),
      );
      return;
    }
    const shortDef = data[wordIndex].Shortdef;
    const body = `${shortDef}`;
    handleClose(title, body);
  };

  const renderList = () => {
    // Checks if a Word object was passed down and render no options
    // for word of the day.
    if (options.Word) {
      notifTextRef.current = {
        title: options.Word,
        body: options.Shortdef + bodyEnd,
      };
      return;
    }
    if (!options) {
      return <Text style={mainStyles.text}>Loading...</Text>;
    }
    return options
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
    if (selectedWord && Array.isArray(options) && options.length > 10) {
      return (
        <View>
          {formattedList[0]}
          <AppButton title="Show list" onPress={() => setSelectedWord(null)} />
        </View>
      );
    }
    return formattedList;
  };

  const displayRemindMeButton = selectedWord || notifTextRef.current !== null;

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
          {displayRemindMeButton && (
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
const style = StyleSheet.create({
  timeText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
    color: "#f0f8ff",
    fontWeight: "700",
    margin: "auto",
  },

  marginAuto: { margin: "auto" },
});
