import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../components/HomeButton';
import { NavButton } from '../components/NavButton';
import blue7 from '../assets/blue7.jpg';

export default function BuildMyList( { navigation } ) {

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

  return (
    <SafeAreaView style={style.page}>
    <ScrollView alwaysBounceHorizontal={true}>
    <ImageBackground source={blue7} imageStyle={style.image} resizeMode="cover" style={style.page}>

        <View>
          <Text style={style.header}>Build My List</Text>
        </View>
        
          <View style={style.section}>
              <Text style={style.subHead}>From Your Writing</Text>
              <Text style={style.text}>Copy text from your emails, proposals, letters, etc. and let our AI tools 
              analyze your communication patterns to suggest new vocabulary words that correspond to 
              your speaking style and context.</Text>
              <View style={style.buttonSpace}>
                <NavButton navigation={navigation} title="Text Search" destination="TextSearch"/>
              </View>
          </View>

          <View style={style.section}>
            <Text style={style.subHead}>From Your Speech</Text>
            <Text style={style.text}>Record your conversations and let our AI tools suggest new vocabulary words that correspond to your speaking style and context.</Text>
            <View style={style.buttonSpace}>
              <NavButton navigation={navigation} title="Conversation Search" destination="ConversationSearch"/>
            </View>
          </View>


        <View>
          <HomeButton navigation={ navigation } />
        </View>

        </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  page: {
    // backgroundColor: '#000',
    paddingTop: 40,
    paddingBottom: 200
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: '#f0f8ff',
    fontWeight: '800',
    paddingBottom: 10,
    textAlign: 'center'
  },

  subHead: {
    fontSize: 30,
    color: '#FF8C00',
    fontWeight: '600',
    paddingVertical: 20
  },

  section: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    color: '#f0f8ff',
    paddingHorizontal: 40
  },

  buttonSpace: {
    paddingVertical: 10,
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

