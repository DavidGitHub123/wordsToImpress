import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import HomeButton from "../../components/HomeButton";
import { NavButtonWord } from "../../components/NavButtonWord";
import { navStyle } from "../../components/NavButton.js";

export default function HWords({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
        >
          <View style={style.page}>
            <View>
              <Text style={style.header}>H Words</Text>
            </View>

            <View style={style.bottomButtons}>
              <Pressable style={navStyle.appButton}>
                <AppButton
                  title="Back"
                  onPress={() => navigation.goBack()}
                ></AppButton>
              </Pressable>
              <View>
                <HomeButton navigation={navigation} />
              </View>
            </View>>

            <View>
              <NavButtonWord
                navigation={navigation}
                title="Hackneyed"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Halcyon"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hallow"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Haphazard"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hapless"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Harangue"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Haute Couture"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Haute Cuisine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hegemony"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Heinous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Herculean"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Heretic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Heterogeneous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hiatus"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hierarchy"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Holistic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Homage"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hubris"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Hyperbole "
                destination="Word"
              />
            </View>

          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 100,
  },

  header: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 20,
  },

  bottomButtons: {
    paddingTop: 40,
    paddingBottom: 40,
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
  },

  appButtonContainer: {
    width: 120,
    paddingTop: 10,
    paddingBottom: 40,
  },
});
