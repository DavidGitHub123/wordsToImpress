import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
// import data from './data.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';

export default function WordOfDay({ navigation }) {

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
          <Text style={style.header}>Word of the Day</Text>
          {/* <Text>{props.word}</Text>
          <Text>{props.Pronunciation}</Text> */}
          <Text style={style.text}>Definition</Text>
          {/* <Text>{props.Shortdef}</Text> */}
          <Text style={style.text}>Sentence</Text>
          {/* <Text>{props.Longdef}</Text> */}
        </View>


          {/* Function to add to My List */}
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Add to My List"
                onPress={() => navigation.navigate('BuildMyList')}
                />
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

  section: {
    paddingVertical: 30,
  },

  text: {
    fontSize: 15,
    color: '#f0f8ff',
    paddingHorizontal: 20,
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

