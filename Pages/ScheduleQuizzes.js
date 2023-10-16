import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import NavButton from '../components/NavButton';


export default function ScheduleQuizzes({ navigation }) {

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
         <Text style={style.header}>Schedule Quizes</Text>
         <Text style={style.text}>Repetition is the key to learning</Text>
      </View>

      <View>
        <Pressable style={style.appButton} onPress={() => navigation.navigate('')}>
            <AppButton icon="sign-in" title="Schedule Multiple Choice Quizes"/>
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} onPress={() => navigation.navigate('')}>
            <AppButton icon="sign-in" title="Schedule Flashcards Quizes"/>
        </Pressable>

      </View>

      <View>
        <HomeButton navigation={ navigation } />
        {/* <Pressable style={style.appButton} onPress={() => navigation.navigate('Home')}>
          <AppButton icon="sign-in" title="Home"/>
        </Pressable> */}
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

  text: {
    fontSize: 18,
    color: '#f0f8ff',
    paddingHorizontal: 30,
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

