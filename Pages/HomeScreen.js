import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons"; // Changed this line
import logo from "../assets/logoborderradius.jpg";
import { MASTERED_WORD_LIST } from "./ManageLists";
import {
  defaultList,
  getDefaultList,
  isFirstTime,
} from "../components/listHelpers";
import IconButton from "../components/IconButton";
import { mainStyles } from "../components/mainStyles";
import AppButton from "../components/AppButton";

const BUTTONS = [
  { title: "My Lists", icon: "list", screen: "ManageLists" },
  {
    title: "My Mastery",
    icon: "chart-line",
    screen: "MyList",
    params: { listParam: MASTERED_WORD_LIST },
  },
  { title: "Build My List", icon: "hammer", screen: "TextSearch" },
  {
    title: "Pre-Built List",
    icon: "clipboard-list",
    screen: "PreBuiltListNew",
  },
  { title: "Word Situations", icon: "book-reader", screen: "WordSituations" },
  { title: "Word Mastery", icon: "trophy", screen: "VocabMastery" },
  { title: "Word of Day", icon: "calendar-day", screen: "WordOfDay" },
  { title: "A-Z Words", icon: "sort-alpha-down", screen: "AtoZButtons" },
  { title: "Schedule", icon: "bell", screen: "Notifications" },
  { title: "About", icon: "table", screen: "System" },
];

export default function HomeScreen({ navigation }) {
  const listNameRef = useRef(defaultList);

  const handleCloseModal = () => setShowModal(false);

  const handleNavToVocabTest = () => {
    setShowModal(false);
    navigation.navigate("VocabTest");
  };

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    (async () => {
      listNameRef.current = await getDefaultList();

      if (await isFirstTime()) {
        setShowModal(true);
      }
    })();
  }, []);

  const renderButton = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.cardWrapper}
      onPress={() =>
        item.params
          ? navigation.navigate(item.screen, item.params)
          : navigation.navigate(item.screen)
      }
    >
      <LinearGradient colors={["#E89020", "#E89020"]} style={styles.cardButton}>
        <FontAwesome5
          name={item.icon}
          size={22}
          color="#fff"
          style={{ marginBottom: 3 }}
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
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <Text style={[styles.title, styles.neonGlow]}>Build Your</Text>
          <Text style={[styles.title, styles.neonGlow]}>
            Vocabulary Prowess
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 6 }}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.cardWrapper, styles.firstCard]}
            onPress={() => handleNavToVocabTest()}
          >
            <LinearGradient
              colors={["#E89020", "#E89020"]}
              style={styles.cardButton}
            >
              <FontAwesome5
                name="trophy"
                size={22}
                color="#fff"
                style={{ marginBottom: 3 }}
              />
              <Text style={styles.cardText}>Test Your Word Prowess</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <FlatList
          data={BUTTONS}
          renderItem={renderButton}
          keyExtractor={(item) => item.title}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.grid}
        />

        <Modal visible={showModal} transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.xButton}>
                <IconButton name="times" onPress={() => handleCloseModal()} />
              </View>
              <Text style={mainStyles.text}>Test your Vocabulary Prowess</Text>
              <Text style={mainStyles.text}>Take our placement quiz</Text>
              <AppButton
                size="large"
                icon="list"
                title="Vocab Test"
                onPress={() => handleNavToVocabTest()}
              />
            </View>
          </View>
        </Modal>
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
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    borderRadius: 16,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    color: "white",
    letterSpacing: 1,
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
    marginBottom: 6,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    borderRadius: 18,
    overflow: "hidden",
  },
  cardButton: {
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 3,
    transition: "transform 0.3s ease",
  },
  cardText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  xButton: {
    alignSelf: "flex-end",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#282a36",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  firstCard: {
    width: "92%",
    margin: "auto",
  },
});
