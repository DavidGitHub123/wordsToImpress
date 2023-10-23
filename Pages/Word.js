import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import data from '../data.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import { useRoute } from '@react-navigation/native';
import { navStyle } from '../components/NavButton.js';
// import Sound from 'react-native-sound';

export default function Word({ navigation }) {
  const route = useRoute();
  const { selectedWord } = route.params;

  const AppButton = ({ onPress, icon, title, backgroundColor }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

    function populate(selectedWord){
      const wordData = data.find(el => el.Word === selectedWord)
      
      if (!wordData) {
        throw new Error(`Error: Could not find ${selectedWord} in data file.`)
      }

      return(<View style={style.page}>
          <Text style={style.header}>{wordData.Word}</Text>
          <Text style={style.text}>Pron.{wordData.Pronunciation}</Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={style.text}>{wordData.Shortdef}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Sentence: </Text>
            <Text style={style.text}>{wordData.Longdef}</Text>
          </Text>
          <Pressable style={navStyle.appButton}><AppButton title="Add to My List"></AppButton></Pressable>
          <Pressable style={navStyle.appButton}><AppButton title="Listen"></AppButton></Pressable>
          
      </View>)
  
    }

    // onPress = {() => playSound(`audio/${wordData.Word}.mp3}`)}


    // const sound = new Sound('sounds/soundfile.mp3', Sound.MAIN_BUNDLE, (error) => {
    //   if (error) {
    //   console.log('Error loading sound:', error);
    //   } else {
    //   console.log('Sound loaded successfully.');
    //   }
    //   });
   


    return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <LinearGradient
          colors={["#4682B4", "#6699CC"]}
          start={[0.25, 0.25]}
          opacity={.95}
      >
        <View>
          {populate(selectedWord)}
          <Pressable style={navStyle.appButton}><AppButton title="Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
          <HomeButton navigation={ navigation } />
        </View>

    </LinearGradient>
    </ScrollView>
    </SafeAreaView>
    );
}


const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },

  header: {
    fontSize: 50,
    color: '#FF8C00',
    fontWeight: '800',
    paddingBottom: 20,
  },

  space: {
    paddingBottom: 20,
  },

  subHead: {
    fontSize: 30,
    color: '#FF8C00',
    fontWeight: '600',
  },

  text: {
    fontSize: 28,
    color: '#f0f8ff',
    paddingBottom: 20,
  },


  appButton: {
    paddingHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff'
  },

  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },

})

