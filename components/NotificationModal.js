import React, { useState, useRef } from "react";
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
      Click to Set Reminder at {formattedHours}:{formattedMinutes} {ampm}
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

  const { time, setTime, handleClose, options } = Props;

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
    let title = "Word Mastery";
    const body = "You've scheduled a quiz";
    handleClose(title, body);
  };

  const handleSelectedWord = (word) => {
    setSelectedWord(word);
    setShowTimePicker(true);
  };

  const renderList = () => {
    if (options.Word) {
      notifTextRef.current = {
        title: "Word of the Day",
        body: options.Word + "\n" + options.Shortdef,
      };
      return;
    }

    return options.map((el, i) => (
      <AppButton
        title={el}
        key={i}
        onPress={() => handleSelectedWord(el)}
        style={
          selectedWord === el
            ? {
              backgroundColor: "#2350a8",
              borderColor: "#fff",
              borderWidth: 1,
            }
            : { borderColor: "#fff", borderWidth: 1 }
        }
      />
    ));
  };

  const displayRemindMeButton = selectedWord || notifTextRef.current !== null;

  return (
    <View style={[style.mb60, style.mt60]}>
      <View style={[mainStyles.centerChildren, style.marginAuto, style.mb60]}>
        {renderList()}
      </View>
      <Text style={mainStyles.subheader}>Click to Schedule</Text>
      <View style={style.marginAuto}>
        <AppButton
          icon="user-clock"
          title="Select Time"
          onPress={() => setShowTimePicker(true)}
        />
      </View>
      {showTimePicker && (
        <View style={mainStyles.centerChildren}>
          {Platform.OS === "ios" && (
            <Text style={[mainStyles.text, style.marginAuto]}></Text>
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
            <View style={{ margin: "auto" }}>
              <AppButton
                viewStyle={style.marginAuto}
                icon="sign-out-alt"
                title="Set Reminder Time"
                onPress={handleSubmit}
                backgroundColor="#E89020"
                borderColor="#fff"
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  timeText: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 60,
    fontSize: 20,
    color: "#f0f8ff",
    fontWeight: "700",
    margin: "auto",
    textAlign: "center",
  },
  marginAuto: {
    margin: "auto",
  },
  mb60: {
    marginBottom: 60,
  },
  mt60: {
    marginTop: 60,
  },
});
