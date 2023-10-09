import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
// import data from './data.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";


export default function Word({ navigation }) {

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

      <View>
        <Text>{props.word}</Text>
        <Text>{props.Pronunciation}</Text>
        <Text>Definition</Text>
        <Text>{props.Shortdef}</Text>
        <Text>Sentence</Text>
        <Text>{props.Longdef}</Text>
      </View>

        <View>
          <Pressable style={style.appButton} >
            <AppButton icon="sign-in" title="Add to My List"
              onPress={() => navigation.navigate('BuildMyList')}
              />
          </Pressable> 
        </View>
        
        <View>
          <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Schedule Quizzes"
            onPress={() => navigation.navigate('ScheduleQuizzes')}
            />
          </Pressable> 

          <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="{Challenge Friend}"
            onPress={() => navigation.navigate('ChallengeFriend')}
            />
          </Pressable> 
        </View>

        <View>
          <Pressable style={style.appButton} >
            <AppButton icon="sign-in" title="Home"
            onPress={() => navigation.navigate('Home')}
            />
          </Pressable> 
        </View>


        </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  page: {
    paddingVertical: 100,
    paddingHorizontal: 0,
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

