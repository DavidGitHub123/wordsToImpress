import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import NavButton from '../components/NavButton';

export default function ChallengeFriend({ navigation }) {

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
  
  return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <LinearGradient
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
      >

      <View style={style.page}>

      <View>
         <Text style={style.header}>Challenge Friend</Text>
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
      
      <View>
        <HomeButton navigation={ navigation } />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },

  header: {
    fontSize: 30,
    color: '#f0f8ff',
    fontWeight: '800',
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
    width: 300
  },

})

