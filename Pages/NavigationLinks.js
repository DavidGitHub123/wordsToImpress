import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Pages/HomeScreen';
import MyList from '../Pages/MyList';
import VocabMastery from '../Pages/VocabMastery';
import WordOfDay from '../Pages/WordOfDay';
import WordSituations from '../Pages/WordSituations';
import BuildMyList from '../Pages/BuildMyList';
import System from '../Pages/System';
import Word from '../Pages/Word';
import PreBuiltList from '../Pages/PreBuiltList';
import AtoZButtons from '../Pages/AtoZButtons';
import ChallengeFriend from '../Pages/ChallengeFriend';
import ConversationSearch from '../Pages/ConversationSearch';
import FlashCards from '../Pages/FlashCards';
import MultipleChoice from '../Pages/MultipleChoice';
import ScheduleQuizzes from '../Pages/ScheduleQuizzes';
import Quiz from '../Pages/Quiz';
import TextSearch from '../Pages/TextSearch';
import WS_Boss from '../Pages/Situations/WS_Boss';
import WS_Business from '../Pages/Situations/WS_Business';
import WS_DinnerParty from '../Pages/Situations/WS_DinnerParty';
import WS_GettingRaise from '../Pages/Situations/WS_GettingRaise';
import WS_InCourt from '../Pages/Situations/WS_InCourt';
import WS_JobInterview from '../Pages/Situations/WS_JobInterview';
import WS_MeetingInLaws from '../Pages/Situations/WS_MeetingInLaws';
import WS_Negotiations from '../Pages/Situations/WS_Negotiations';
import WS_Politics from '../Pages/Situations/WS_Politics';
import WS_SpeedingTicket from '../Pages/Situations/WS_SpeedingTicket';
import A  from '../Pages/AtoZcontent/A';
import B  from '../Pages/AtoZcontent/B';
import C  from '../Pages/AtoZcontent/C';
import D  from '../Pages/AtoZcontent/D';
import E  from '../Pages/AtoZcontent/E';
import F  from '../Pages/AtoZcontent/F';
import G  from '../Pages/AtoZcontent/G';
import H  from '../Pages/AtoZcontent/H';
import I  from '../Pages/AtoZcontent/I';
import J  from '../Pages/AtoZcontent/J';
import K  from '../Pages/AtoZcontent/K';
import L  from '../Pages/AtoZcontent/L';
import M  from '../Pages/AtoZcontent/M';
import N  from '../Pages/AtoZcontent/N';
import O  from '../Pages/AtoZcontent/O';
import P  from '../Pages/AtoZcontent/P';
import Q  from '../Pages/AtoZcontent/Q';
import R  from '../Pages/AtoZcontent/R';
import S  from '../Pages/AtoZcontent/S';
import T  from '../Pages/AtoZcontent/T';
import U  from '../Pages/AtoZcontent/U';
import V  from '../Pages/AtoZcontent/V';
import W  from '../Pages/AtoZcontent/W';
import Z  from '../Pages/AtoZcontent/Z';

const Stack = createNativeStackNavigator();

export default function NavigationLinks() {
  return(
      <Stack.Navigator 
        initialRouteName='HomeScreen'
        // screenOptions={{ headerShown: false}}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home'}}/>
            <Stack.Screen name="MyList" component={MyList} options={{ title: 'My Vocab List'}}/>
            <Stack.Screen name="PreBuiltList" component={PreBuiltList} options={{ title: 'Pre-Built List'}}/>
            <Stack.Screen name="VocabMastery" component={VocabMastery} options={{ title: 'Vocab Mastery'}}/>
            <Stack.Screen name="WordOfDay" component={WordOfDay} options={{ title: 'Word of Day'}}/>
            <Stack.Screen name="WordSituations" component={WordSituations} options={{ title: 'Word Situations'}}/>
            <Stack.Screen name="BuildMyList" component={BuildMyList} options={{ title: 'Build My List'}}/>
            <Stack.Screen name="System" component={System} options={{ title: 'Learning System'}}/>
            <Stack.Screen name="Word" component={Word} options={{ title: 'Word'}}/>
            <Stack.Screen name="AtoZButtons" component={AtoZButtons} options={{ title: 'Words A-Z'}}/>
            <Stack.Screen name="ChallengeFriend" component={ChallengeFriend} options={{ title: 'Challenge A Friend'}}/>
            <Stack.Screen name="ConversationSearch" component={ConversationSearch} options={{ title: 'Conversation Search'}}/>
            <Stack.Screen name="FlashCards" component={FlashCards} options={{ title: 'Flash Cards'}}/>
            <Stack.Screen name="MultipleChoice" component={MultipleChoice} options={{ title: 'Multiple Choice Quizes'}}/>
            <Stack.Screen name="ScheduleQuizzes" component={ScheduleQuizzes} options={{ title: 'Schedule Quizzes'}}/>
            <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quizzes'}}/>
            <Stack.Screen name="TextSearch" component={TextSearch} options={{ title: 'Text Search'}}/>
            <Stack.Screen name="WS_Boss" component={WS_Boss} options={{ title: 'WS: Boss'}}/>
            <Stack.Screen name="WS_Business" component={WS_Business} options={{ title: 'WS: Business'}}/>
            <Stack.Screen name="WS_DinnerParty" component={WS_DinnerParty} options={{ title: 'WS: DinnerParty'}}/>
            <Stack.Screen name="WS_GettingRaise" component={WS_GettingRaise} options={{ title: 'WS: GettingRaise'}}/>         
            <Stack.Screen name="WS_InCourt" component={WS_InCourt} options={{ title: 'WS: InCourt'}}/>
            <Stack.Screen name="WS_JobInterview" component={WS_JobInterview} options={{ title: 'WS: JobInterview'}}/>
            <Stack.Screen name="WS_MeetingInLaws" component={WS_MeetingInLaws} options={{ title: 'WS:Meeting-In-Laws'}}/>
            <Stack.Screen name="WS_Negotiations" component={WS_Negotiations} options={{ title: 'WS: Negotiations'}}/>
            <Stack.Screen name="WS_Politics" component={WS_Politics} options={{ title: 'WS: Politics'}}/>
            <Stack.Screen name="WS_SpeedingTicket" component={WS_SpeedingTicket} options={{ title: 'WS: SpeedingTicket'}}/>
            <Stack.Screen name="A" component={A} options={{ title: 'A Words'}}/>
            <Stack.Screen name="B" component={B} options={{ title: 'B Words'}}/>
            <Stack.Screen name="C" component={C} options={{ title: 'C Words'}}/>
            <Stack.Screen name="D" component={D} options={{ title: 'D Words'}}/>
            <Stack.Screen name="E" component={E} options={{ title: 'E Words'}}/>
            <Stack.Screen name="F" component={F} options={{ title: 'F Words'}}/>
            <Stack.Screen name="G" component={G} options={{ title: 'G Words'}}/>
            <Stack.Screen name="H" component={H} options={{ title: 'H Words'}}/>
            <Stack.Screen name="I" component={I} options={{ title: 'I Words'}}/>
            <Stack.Screen name="J" component={J} options={{ title: 'J Words'}}/>
            <Stack.Screen name="K" component={K} options={{ title: 'K Words'}}/>
            <Stack.Screen name="L" component={L} options={{ title: 'L Words'}}/>
            <Stack.Screen name="M" component={M} options={{ title: 'M Words'}}/>
            <Stack.Screen name="N" component={N} options={{ title: 'N Words'}}/>
            <Stack.Screen name="O" component={O} options={{ title: 'O Words'}}/>
            <Stack.Screen name="P" component={P} options={{ title: 'P Words'}}/>
            <Stack.Screen name="Q" component={Q} options={{ title: 'Q Words'}}/>
            <Stack.Screen name="R" component={R} options={{ title: 'R Words'}}/>
            <Stack.Screen name="S" component={S} options={{ title: 'S Words'}}/>
            <Stack.Screen name="T" component={T} options={{ title: 'T Words'}}/>
            <Stack.Screen name="U" component={U} options={{ title: 'U Words'}}/>
            <Stack.Screen name="V" component={V} options={{ title: 'V Words'}}/>
            <Stack.Screen name="W" component={W} options={{ title: 'W Words'}}/>
            <Stack.Screen name="Z" component={Z} options={{ title: 'Z Words'}}/>
          </Stack.Navigator>  
    );
  }