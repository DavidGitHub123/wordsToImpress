import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import data from '../data.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import { useRoute } from '@react-navigation/native';

export default function Word({ navigation }) {
  const route = useRoute();
  const { selectedWord } = route.params;

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




    function populate(selectedWord){
      const wordData = data.find(el => el.Word === selectedWord)
      return(<View>
          <Text>{wordData.Word}</Text>
          <Text>{wordData.Pronunciation}</Text>
          <Text>Definition</Text>
          <Text>{wordData.Shortdef}</Text>
          <Text>Sentence</Text>
          <Text>{wordData.Longdef}</Text>
          <Pressable><AppButton title="Audio"></AppButton></Pressable>
      </View>)
    }



  
   


    return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <LinearGradient
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
      >
        <View>
          {populate(selectedWord)}
          <Pressable><AppButton title="Go Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
          <HomeButton navigation={ navigation } />
        </View>
        </LinearGradient>
    </ScrollView>
    </SafeAreaView>
    )

  
  // return (
  //   // <SafeAreaView style={style.container}>
  //   // <ScrollView alwaysBounceHorizontal={true}>
  //   // <LinearGradient
  //   //     colors={["#0047ab", "#4169e1"]}
  //   //     start={[0.1, 1]}
  //   //     opacity={.95}
  //   //   >

  //   //   <Word />

  //   //   {/* <View>
  //   //     <Text>{props.word}</Text>
  //   //     <Text>{props.Pronunciation}</Text>
  //   //     <Text>Definition</Text>
  //   //     <Text>{props.Shortdef}</Text>
  //   //     <Text>Sentence</Text>
  //   //     <Text>{props.Longdef}</Text>
  //   //   </View> */}

  //   //     <View>
  //   //       <Pressable style={style.appButton} >
  //   //         <AppButton icon="sign-in" title="Add to My List"
  //   //           onPress={() => navigation.navigate('MyList')}
  //   //           />
  //   //       </Pressable> 
  //   //     </View>

  //   //     <View>
  //   //       <HomeButton navigation={ navigation } />
  //   //     </View>


  //   //     </LinearGradient>
  //   // </ScrollView>
  //   // </SafeAreaView>
  // );
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

