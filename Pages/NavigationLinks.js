import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Pages/HomeScreen";
import MyList from "../Pages/MyList";
import VocabMastery from "../Pages/VocabMastery";
import WordOfDay from "../Pages/WordOfDay";
import WordSituations from "../Pages/WordSituations";
import System from "../Pages/System";
import Word from "../Pages/Word";
import PreBuiltListNew from "../Pages/PreBuiltListNew";
import AtoZButtons from "../Pages/AtoZButtons";
import RapidFire from "../Pages/RapidFire";
import TextSearch from "../Pages/TextSearch";
import WS_Boss from "../Pages/Situations/WS_Boss";
import WS_Business from "../Pages/Situations/WS_Business";
import WS_DinnerParty from "../Pages/Situations/WS_DinnerParty";
import WS_GettingRaise from "../Pages/Situations/WS_GettingRaise";
import WS_InCourt from "../Pages/Situations/WS_InCourt";
import WS_JobInterview from "../Pages/Situations/WS_JobInterview";
import WS_MeetingInLaws from "../Pages/Situations/WS_MeetingInLaws";
import WS_Negotiations from "../Pages/Situations/WS_Negotiations";
import WS_Politics from "../Pages/Situations/WS_Politics";
import WS_SpeedingTicket from "../Pages/Situations/WS_SpeedingTicket";
import Notifications from "../Pages/Notifications";
import AtoZWords from "./AtoZWords";
import ManageLists from "./ManageLists";
import WordMatch from "./WordMatch";
import QuickQuiz from "./QuickQuiz";
import BlankGame from "./BlankGame";
import SwipeIt from "./SwipeIt";

const Stack = createNativeStackNavigator();

export default function NavigationLinks() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyList" component={MyList} />
      <Stack.Screen name="PreBuiltListNew" component={PreBuiltListNew} />
      <Stack.Screen name="VocabMastery" component={VocabMastery} />
      <Stack.Screen name="WordOfDay" component={WordOfDay} />
      <Stack.Screen name="QuickQuiz" component={QuickQuiz} />
      <Stack.Screen name="WordSituations" component={WordSituations} />
      <Stack.Screen name="System" component={System} />
      <Stack.Screen name="Word" component={Word} options={{ title: "Word" }} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="AtoZButtons" component={AtoZButtons} />
      <Stack.Screen name="AtoZWords" component={AtoZWords} />
      <Stack.Screen name="RapidFire" component={RapidFire} />
      <Stack.Screen name="WordMatch" component={WordMatch} />
      <Stack.Screen name="TextSearch" component={TextSearch} />
      <Stack.Screen name="WS_Boss" component={WS_Boss} />
      <Stack.Screen name="WS_Business" component={WS_Business} />
      <Stack.Screen name="WS_DinnerParty" component={WS_DinnerParty} />
      <Stack.Screen name="WS_GettingRaise" component={WS_GettingRaise} />
      <Stack.Screen name="WS_InCourt" component={WS_InCourt} />
      <Stack.Screen name="WS_JobInterview" component={WS_JobInterview} />
      <Stack.Screen name="WS_MeetingInLaws" component={WS_MeetingInLaws} />
      <Stack.Screen name="WS_Negotiations" component={WS_Negotiations} />
      <Stack.Screen name="WS_Politics" component={WS_Politics} />
      <Stack.Screen name="WS_SpeedingTicket" component={WS_SpeedingTicket} />
      <Stack.Screen name="ManageLists" component={ManageLists} />
      <Stack.Screen name="BlankGame" component={BlankGame} />
      <Stack.Screen name="SwipeIt" component={SwipeIt} />
    </Stack.Navigator>
  );
}
