import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';


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
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
        >

      <View style={style.page}>

      <View>
        <Text style={style.header}>Word Situations</Text>
      </View>
      
        <View style={style.section}>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Boss"
          onPress={() => navigation.navigate('WS_Boss')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Business"
          onPress={() => navigation.navigate('WS_Business')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Dinner Party"
          onPress={() => navigation.navigate('WS_DinnerParty')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Getting A Raise"
          onPress={() => navigation.navigate('WS_GettingRaise')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="In Court"
          onPress={() => navigation.navigate('WS_InCourt')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Job Interview"
          onPress={() => navigation.navigate('WS_JobInterview')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Meeting Inlaws"
          onPress={() => navigation.navigate('WS_MeetingInLaws')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Negotiations"
          onPress={() => navigation.navigate('WS_Negotiations')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Politics"
          onPress={() => navigation.navigate('WS_Politics')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="SpeedingTicket"
          onPress={() => navigation.navigate('WS_SpeedingTicket')}
          />
        </Pressable>
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

