import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import NavButton from '../components/NavButton';

export default function MutlipleChoice({ navigation }) {

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
          <Text style={style.header}>Multiple Choice</Text>
          {/* // Words from MyList popular 10 question multiple choice quizes
          Grade provided/Token for every 100% */}
      </View>

      <View>
        <NavButton navigation={navigation} title="Select Words" destination="MyList"/>
        <NavButton navigation={navigation} title="Take A Quiz" destination="Quiz"/>
        <NavButton navigation={navigation} title="Schedule Quizzes" destination="ScheduleQuizzes"/>
        <NavButton navigation={navigation} title="Challenge A Friend" destination="ChallengeFriend"/>
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

