import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Pages/HomeScreen';
import MyList from '../Pages/MyList';
import VocabMastery from '../Pages/VocabMastery';
import WordofDay from '../Pages/WordOfDay';
import WordSituations from '../Pages/WordSituations';
import BuildMyList from '../Pages/BuildMyList';
import System from '../Pages/System';

const Stack = createNativeStackNavigator();

 function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
          <Stack.Screen name="MyVocabList" component={MyList} options={{ title: 'MyVocabList'}}/>
          <Stack.Screen name="VocabMastery" component={VocabMastery} options={{ title: 'VocabMastery'}}/>
          <Stack.Screen name="WordofDay" component={WordofDay} options={{ title: 'WordofDay'}}/>
          <Stack.Screen name="WordSituations" component={WordSituations} options={{ title: 'WordSituations'}}/>
          <Stack.Screen name="BuildMyList" component={BuildMyList} options={{ title: 'BuildMyList'}}/>
          <Stack.Screen name="LearningSystem" component={System} options={{ title: 'LearningSystem'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;