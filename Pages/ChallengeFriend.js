import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../components/HomeButton';
import { NavButton } from '../components/NavButton';
import { navStyle } from '../components/NavButton.js';
import challengeafriend from '../assets/challengeafriend.jpg'

export default function ChallengeFriend({ navigation }) {

  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor='#FF8C00'
        borderRadius={40}
        borderWidth={3}
        borderColor='#BBC2CC'
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  // const image = source = require('../assets/Backgrounds/challengeafriend.jpg')

  return (
    <SafeAreaView style={style.container} >
    <ScrollView alwaysBounceHorizontal={true}>
    <ImageBackground source={challengeafriend} imageStyle={style.image} resizeMode="cover" style={style.page}>

      <View>
         <Text style={style.header}>Challenge A Friend</Text>
         <Text style={style.text}>Do a friend of a favor and help them build an impressive vocabulary. 
         Select 10 words from your list of 50 and send them a challenge.</Text>

      </View>

      {/* Challenge Friend by sending 10 word multiple choice quiz via text/Same quiz user is working on */}
      {/* Words come from user's My List/generated randomly */} 
      {/* Give user ability to create a 10 word quiz from their My List */}
      {/* Form to collect name and phone number */}
      {/* Click button that generates random quiz for the user to see */}
      {/* Click button that sends the quiz */}
      {/* Friend completes the quiz and sees their score */}
      {/* Friend given option to retry quiz. */}
      {/* User is sent their score */}

      <View>
          <NavButton navigation={navigation} title="Select Words" destination="MyList"/>
          <Pressable style={style.appButton} onPress={() => navigation.navigate('')}>
            <AppButton icon="sign-in" title="Send Challenge"/>
          </Pressable>
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
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 330,
    backgroundColor: '#000'
  },

  image: {
    opacity: .5,
  },

  header: {
    fontSize: 35,
    textShadowColor: '#000',
    textShadowRadius: 5,
    color: '#f0f8ff',
    fontWeight: '800',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 18,
    textShadowColor: '#000',
    textShadowRadius: 5,
    color: '#f0f8ff',
    paddingBottom: 30,
    paddingHorizontal: 20,
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
    width: 300,
  },

})

