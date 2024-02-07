import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../components/HomeButton';
import { navStyle } from '../components/NavButton.js';
import blue7 from '../assets/blue7.jpg'

export default function TextSearch({ navigation }) {

  const AppButton = ({ onPress, icon, title, backgroundColor }) => (
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
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <ImageBackground source={blue7} imageStyle={style.image} resizeMode="cover" style={style.page}>


      <View>
        <Text style={style.header}>Text Search</Text>
        <Text style={style.text}>Copy text from your emails, communications, proposals, etc. into this box and let 
        our AI tools analyze your communication patterns to suggest new vocabulary words that 
        correspond to your speaking style and context. Then add these words to My Vocab List.</Text>
      </View>

      {/* Drop text inside box/Look for syn */}
      
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
    paddingTop: 40,
    paddingBottom: 450,
    // backgroundColor: '#000',
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

  text: {
    fontSize: 18,
    color: '#f0f8ff',
    paddingHorizontal: 50
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

