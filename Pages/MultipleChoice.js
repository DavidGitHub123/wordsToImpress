import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";


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
          {/* // Words from MyList popular 10 question multiple choice quizes/Grade provided/Token for every 100% */}
      </View>

      <View>
          <Pressable style={style.appButton} onPress={() => navigation.navigate('')}>
            <AppButton icon="sign-in" title="Select Words"/>
          </Pressable>
          <Pressable style={style.appButton} onPress={() => navigation.navigate('')}>
            <AppButton icon="sign-in" title="Take A Quiz"/>
          </Pressable>
          <View>
          <Pressable style={style.appButton}>
              <AppButton icon="sign-in" title="Schedule Quizes"
                onPress={() => navigation.navigate('ScheduleQuizzes')} 
              />
          </Pressable>
          <Pressable style={style.appButton}>
          <AppButton icon="sign-in" title="Challenge Friend"
            onPress={() => navigation.navigate('ChallengeFriend')}
            />
          </Pressable> 
      </View>
      </View>

      <View>
          <Pressable style={style.appButton} onPress={() => navigation.navigate('Home')}>
            <AppButton icon="sign-in" title="Home"/>
          </Pressable>
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

