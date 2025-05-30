import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import { mainStyles } from "../components/mainStyles";

const BUTTONS = [
  { title: "Boss", icon: "user-tie", screen: "WS_Boss" },
  { title: "Business", icon: "briefcase", screen: "WS_Business" },
  { title: "Dinner Party", icon: "utensils", screen: "WS_DinnerParty" },
  { title: "Getting Raise", icon: "arrow-up", screen: "WS_GettingRaise" },
  { title: "In Court", icon: "gavel", screen: "WS_InCourt" },
  {
    title: "Job Interview",
    icon: "chalkboard-teacher",
    screen: "WS_JobInterview",
  },
  {
    title: "Meeting Inlaws",
    icon: "people-arrows",
    screen: "WS_MeetingInLaws",
  },
  { title: "Negotiations", icon: "handshake", screen: "WS_Negotiations" },
  { title: "Politics", icon: "city", screen: "WS_Politics" },
  { title: "Speeding Ticket", icon: "car", screen: "WS_SpeedingTicket" },
];

export default function WordSituations({ navigation }) {
  const renderButton = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.cardWrapper}
      onPress={() => navigation.navigate(item.screen)}
    >
      <LinearGradient
        colors={["#E89020", "#E89020"]}
        style={styles.cardButton}
      >
        <Icon
          name={item.icon}
          size={22}
          color="#fff"
          style={{ marginBottom: 6 }}
        />
        <Text style={styles.cardText}>{item.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
      <View style={mainStyles.screen}>
        <View style={styles.header}>
          <Text style={[styles.title, styles.neonGlow]}>Word Situations</Text>
          <Text style={[styles.subText, styles.neonGlow]}>
            In a situation and looking for the right word to impress. Click a situation and get the precise word.
          </Text>
        </View>
        </View>
        <FlatList
          data={BUTTONS}
          renderItem={renderButton}
          keyExtractor={(item) => item.title}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.grid}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const CARD_WIDTH = (Dimensions.get("window").width - 48) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "white",
    letterSpacing: 1,
  },
  subText: {
    fontSize: 20,
    color: "#aaa",
    marginTop: 10,
    textAlign: "left",
    paddingHorizontal: 10,
  },
  neonGlow: {
    textShadowColor: "#FFAF40",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    color: "#fff",
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 18,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 6,
  },
  cardButton: {
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff",
    backdropFilter: "blur(10px)",
    marginBottom: 3,
    transform: [{ scale: 1 }],
    transition: "transform 0.3s ease",
  },
  cardText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
