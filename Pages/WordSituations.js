import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import { NavButton } from '../components/NavButton';

export default function WordSituations({ navigation }) {

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
          colors={["#4682B4", "#6699CC"]}
          start={[0.25, 0.25]}
          opacity={.95}
        >

      <View style={style.page}>

      <View>
        <Text style={style.header}>Word Situations</Text>
      </View>
      
        <View style={style.section}>
          <NavButton navigation={navigation} title="Boss" destination="WS_Boss"/>
          <NavButton navigation={navigation} title="Business" destination="WS_Business"/>
          <NavButton navigation={navigation} title="Dinner Party" destination="WS_DinnerParty"/>
          <NavButton navigation={navigation} title="GettingRaise" destination="GettingRaise"/>
          <NavButton navigation={navigation} title="In Court" destination="WS_InCourt"/>
          <NavButton navigation={navigation} title="Job Interview" destination="WS_JobInterview"/>
          <NavButton navigation={navigation} title="Meeting Inlaws" destination="WS_MeetingInLaws"/>
          <NavButton navigation={navigation} title="Negotiations" destination="WS_Negotiations"/>
          <NavButton navigation={navigation} title="Politics" destination="WS_Politics"/>
          <NavButton navigation={navigation} title="Speeding Ticket" destination="WS_SpeedingTicket"/>
        </View>

        <View>
          <HomeButton navigation={navigation}/>
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

  section: {
    paddingVertical: 30,
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

