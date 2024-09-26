import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import AppButton from "../../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../../components/HomeButton";
import { NavButtonWord } from "../../components/NavButtonWord";
import { navStyle } from "../../components/NavButton.js";

export default function CWords({ navigation }) {
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
              <Text style={style.header}>C Words</Text>
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
            </View>

            <View>
              <NavButtonWord
                navigation={navigation}
                title="Canard"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Candor"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Capacious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Captious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cardinal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Caricature"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Carpe Diem"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Carte Blanche"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cartel"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Caste"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Catalyst"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Catch-22"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Catharsis"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Caustic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cavalcade"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cavalier"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Caveat Emptor"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cavil"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Celerity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Celibacy"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Censure"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cessation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Charismatic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Charlatan"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Chimerical"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Chivalrous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Circumvent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Citadel"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Clairvoyance"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Clamorous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Clandestine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Clemency"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Coalesce"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Codify"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cogent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cogitate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cognition"
                destination="Word"
              />
              {/* <NavButtonWord navigation={navigation} title="Cohort" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Colloquial" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Collusion" destination="Word"/> */}
              <NavButtonWord
                navigation={navigation}
                title="Comely"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Commensurate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Commiserate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Compendious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Complaisant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Comport"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Compunction"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Concerted"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Concourse"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Concurrence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Confabulate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Confluence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Congenial"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Congenital"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Conjecture"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Conjure"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Connotation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Consanguineous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Consecrate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Consternation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Construe"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Consummate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Contemptuous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Contravene"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Contrition"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Contrivance"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Contumely"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Convalescence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Convivial"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Convoluted"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Copious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Coquettish"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Corroborate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Covenant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Covert"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Credence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Credulous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Culinary"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Culminate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Culpable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cumbersome"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Cupidity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Curative"
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
