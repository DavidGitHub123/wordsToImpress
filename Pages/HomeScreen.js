import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Modal,
} from "react-native";
import logo from "../assets/logoborderradius.jpg";
import phone from "../assets/phone.jpg";
import AppButton from "../components/AppButton";
import { mainStyles } from "../components/mainStyles";
import {
  defaultList,
  getDefaultList,
  isFirstTime,
} from "../components/listHelpers";
import OutlinedText from "@kdn0325/react-native-outlined-text";
import IconButton from "../components/IconButton";

<OutlinedText
  text="Outlined Text"
  fontColor="white"
  fontSize={40}
  outlineColor="black"
  outlineWidth={2}
/>;

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
  return (
    <ImageBackground
      style={mainStyles.backgroundImage}
      resizeMode="cover"
      source={phone}
    >
      <View style={style.unsafeBanner} />
      <SafeAreaView>
        <View style={mainStyles.topHeader}>
          <AppButton
            viewStyle={{ width: 100 }}
            borderColor="transparent"
            icon="bell"
            title="Schedule"
            onPress={() => navigation.navigate("Notifications")}
            fontWeight="700"
          />
          <AppButton
            viewStyle={{ width: 100 }}
            borderColor="transparent"
            icon="table"
            title="About"
            fontWeight="700"
            onPress={() => navigation.navigate("System")}
          />
        </View>

        <View style={style.seperator} />

        <View style={style.heroHeader}>
          <Image style={style.imageHeader} source={logo} />
        </View>

        <View style={style.test}>
          <Text
            style={{
              fontSize: 40,
              letterSpacing: 4,
              fontWeight: 900,
              color: "#fff",
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 1,
              textShadowColor: "black",
              marginTop: -40,
            }}
          >
            Build Your
          </Text>
          <Text
            style={{
              fontSize: 0,
              color: "white",
            }}
          ></Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 900,
              color: "#fff",
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 1,
              textShadowColor: "black",
              marginTop: -20,
            }}
          >
            Vocabulary
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: "white",
            }}
          ></Text>
          <Text
            style={{
              fontSize: 40,
              color: "#fff",
              letterSpacing: 4,
              fontWeight: 900,
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 1,
              textShadowColor: "black",
              marginTop: -50,
            }}
          >
            PROWESS
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: "white",
            }}
          ></Text>
        </View>

        <View>
          <View style={style.buttons}>
            <AppButton
              size="large"
              icon="list"
              title="My Lists"
              onPress={() => navigation.navigate("ManageLists")}
            />
            <AppButton
              size="large"
              icon="signal"
              title="My Mastery"
              onPress={() =>
                navigation.navigate("MyList", {
                  listParam: listNameRef.current,
                })
              }
            />
          </View>

          <View style={style.buttons}>
            <AppButton
              size="large"
              icon="wrench"
              title="Build My List"
              onPress={() => navigation.navigate("TextSearch")}
            />
            <AppButton
              size="large"
              icon="clipboard"
              title="Pre-Built List"
              onPress={() => navigation.navigate("PreBuiltListNew")}
            />
          </View>

          <View style={style.buttons}>
            <AppButton
              size="large"
              icon="address-book"
              title="Word Situations"
              onPress={() => navigation.navigate("WordSituations")}
            />
            <AppButton
              size="large"
              icon="trophy"
              title="Word Mastery"
              onPress={() => navigation.navigate("VocabMastery")}
            />
          </View>

          <View style={style.buttons}>
            <AppButton
              size="large"
              icon="calendar"
              title="Word of Day"
              onPress={() => navigation.navigate("WordOfDay")}
            />
            <AppButton
              size="large"
              icon="book"
              title="A-Z Words"
              onPress={() => navigation.navigate("AtoZButtons")}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  heroHeader: {
    alignItems: "center",
  },

  test: {
    alignItems: "center",
  },

  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  imageHeader: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  // buildyour: {
  //   letterSpacing: 3,
  //   fontSize: 50,
  //   font: 'algerian',
  //   color: "#f0f8ff",
  //   fontWeight: "900",
  //   textAlign: "center",
  //   marginTop: -40,
  // },

  // vocabulary: {
  //   letterSpacing: 4,
  //   fontSize: 54,
  //   color: "#f0f8ff",
  //   fontWeight: "900",
  //   marginTop: -5,
  //   textAlign: "center",
  // },

  // prowess: {
  //   fontSize: 50,
  //   color: "#f0f8ff",
  //   fontWeight: "900",
  //   textAlign: "center",
  // },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  },
  unsafeBanner: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "10%",
    width: "100%",
    backgroundColor: "#FF8C00",
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
});
