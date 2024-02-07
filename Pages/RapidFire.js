import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../components/HomeButton';
import { NavButton, navStyle } from '../components/NavButton';
import blue8 from '../assets/blue8.jpg'


export default function RapidFire({ navigation }) {

  const AppButton = ({ onPress, icon, title }) => (
    <SafeAreaView style={style.appButtonContainer}>
      <ScrollView>
      <Icon.Button
        name={icon}
        backgroundColor='#FF8C00'
        borderRadius={40}
        borderWidth={3}
        borderColor='#BBC2CC'
        onPress={onPress}></Icon.Button>
        <ImageBackground source={blue8} imageStyle={style.image} resizeMode="cover" style={style.page}>

      <View>
          <Text style={style.header}>
            RapidFire
          </Text>
          <Text style={style.text}>
            Test your vocab speed and recall. Select 10 words from your Vocab List and play the game.
          </Text>
          <NavButton navigation={navigation} title="Play Game" destination="RapidFireCards"/>
          {/* Button takes you to RapidFire_MyList with checkbox in front of word. 
              User selects 10 words from their MyList. 
              Then button at top of page takes them to RapidFireCards where they play the game. */}
      </View>

      <View style={style.buttons}>
        <Pressable style={navStyle.appButton}><AppButton title="Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
        <HomeButton navigation={ navigation } />
      </View>

      </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  page: {
    paddingBottom: 350,
    // backgroundColor: '#000',
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: '#f0f8ff',
    fontWeight: '800',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 20
    },

    text: {
      fontSize: 18,
      color: '#f0f8ff',
      paddingBottom: 30,
      paddingHorizontal: 30
    },

    wordList: {
      fontSize: 18,
      color: '#f0f8ff',
      textAlign: 'center',
      paddingTop: 20
    },

  buttons: {
    paddingTop: 20,
  },

  appButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButtonText: {
    fontSize: 18,
    color: '#fff'
  },

  appButtonContainer: {
    paddingVertical: 5,
    width: 250,
  },

})

