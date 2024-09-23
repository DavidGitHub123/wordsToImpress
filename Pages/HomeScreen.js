import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from "react-native";
// import { NavButtonHome } from "../components/NavButtonHome";
import { NotificationButton } from "../components/NotificationButton";
import { AboutButton } from "../components/AboutButton";
import { HomeMyListButton } from "../components/HomeMyListButton";
import { HomeMyProgressButton } from "../components/HomeMyProgressButton";
import { HomeBuildMyListButton } from "../components/HomeBuildMyListButton";
import { HomePreBuiltListButton } from "../components/HomePreBuiltListButton";
import { HomeWordSituationButton } from "../components/HomeWordSituationButton";
import { HomeVocabMasteryButton } from "../components/HomeVocabMasteryButton";
import { HomeWordOfDayButton } from "../components/HomeWordOfDayButton";
import { HomeAZWordsButton } from "../components/HomeAZWordsButton";

import logo from "../assets/logoborderradius.jpg";
// import { LinearGradient } from "expo-linear-gradient";
import phone from "../assets/phone.jpg";


export default function HomeScreen({ navigation }) {
  const seperatorStyles = {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  };

  const Seperator = () => <View style={seperatorStyles} />;

  return (
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={phone}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >

      {/* <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 1 }}
          opacity={1.0}
          style={style.page}
        > */}

        <View style={style.page}>
            
            <View style={style.topHeader}>
              <NotificationButton
                navigation={navigation}
                // title=""
                destination="System"
              />
              <AboutButton
                navigation={navigation}
                title="About"
                destination="System"
              />
            </View>

            <Seperator />

            {/* <View style={style.header}>
              <View style={style.heroHeader}>
                <Text style={style.headLine}>
                  Build Your Vocabulary PROWESS
                </Text>
                <Image style={style.imageHeader} source={logo} />
              </View>
            </View> */}

              <View style={style.heroHeader}>
                <Image style={style.imageHeader} source={logo} />
                {/* <Text style={style.headLine}>
                  Build Your Vocabulary PROWESS
                </Text> */}
              </View>

              <View style={style.screen}>
                <Text style={style.headLine}>
                  Build Your Vocabulary
                </Text>
                <Text style={style.prowess}>
                  PROWESS
                </Text>
              </View>
    
          {/* </LinearGradient> */}


  {/* <View style={style.section}>
          <NavButtonHome
            navigation={navigation}
            title="My List"
            destination="MyList"
          />
          <NavButtonHome
            navigation={navigation}
            title="Build My List"
            destination="BuildMyList"
          />
          <NavButtonHome
            navigation={navigation}
            title="Pre-Built List"
            destination="PreBuiltListNew"
          />
        <NavButtonHome
          navigation={navigation}
          title="Word Situations"
          destination="WordSituations"
        />
          <NavButtonHome
            navigation={navigation}
            title="Vocab Mastery"
            destination="VocabMastery"
          />
        <NavButtonHome
          navigation={navigation}
          title="Word of Day"
          destination="WordOfDay"
        />
        <NavButtonHome
          navigation={navigation}
          title="A-Z Words"
          destination="AtoZButtons"
        />
</View> */}



<View>

        <View style={style.buttons}>
          <HomeMyListButton
            navigation={navigation}
            title="My List"
            destination="MyList"
          />
          <HomeMyProgressButton
          navigation={navigation}
          title="MyProgress"
          destination="MyList"
          />
        </View>
              
        <View style={style.buttons}>
          <HomeBuildMyListButton
            navigation={navigation}
            title="Build My List"
            destination="BuildMyList"
          />
          <HomePreBuiltListButton
            navigation={navigation}
            title="Pre-Built List"
            destination="PreBuiltListNew"
          />
        </View>

        <View style={style.buttons}>
        <HomeWordSituationButton
          navigation={navigation}
          title="Word Situations"
          destination="WordSituations"
        />
          <HomeVocabMasteryButton
            navigation={navigation}
            title="Vocab Mastery"
            destination="VocabMastery"
          />
        </View>

        <View style={style.buttons}>
        <HomeWordOfDayButton
          navigation={navigation}
          title="Word of Day"
          destination="WordOfDay"
        />
        <HomeAZWordsButton
          navigation={navigation}
          title="A-Z Words"
          destination="AtoZButtons"
        />
        </View>
</View>



        </View>
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    paddingBottom: 100,
  },

  topHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
    margin: 3,
  },

  heroHeader: {
    alignItems: "center",
  },

  // heroHeader: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   flexDirection: "row",
  //   marginRight: 25,
  //   textShadowColor: "#000",
  //   textShadowRadius: 5,
  //   marginBottom: 20,
  // },

  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 3,
    margin: 3,
  },

  imageHeader: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  screen: {
    opacity: 7,
    backgroundColor: '000',
  },

  headLine: {
    fontSize: 34,
    color: "#f0f8ff",
    fontWeight: "700",
    textShadowColor: "gray",
    textShadowRadius: 5,
    marginTop: -36,
    textAlign: 'center',
  },

  prowess: {
    fontSize: 60,
    color: "#f0f8ff",
    fontWeight: "700",
    textShadowColor: "gray",
    textShadowRadius: 5,
    paddingBottom: 30,
    textAlign: 'center',
  },

  // section: {
  //   paddingTop: 20,
  // },
});
