import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";


export default function System({ navigation }) {

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

    const [show, setShow] = useState(true);


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
          <Text style={style.header}>Easy Learning System</Text>
        </View>

            <View style={style.section}>
              <Text style={style.subHead}>Master these words proven to increase powers of persuasion and comprehension.</Text>
              <Text style={style.text}>The Words to Impress app includes the most impressive words in the English language 
                  as identified by David Olsen, author of the best-selling The Words You Should Know and 
                  founder of Market Builders, a marketing company who has provided 
                  communication services to Fortune 500 companies, consultancies, and law firms.</Text>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <About /> : null }
                    <AppButton icon="sign-in" title="About" style={style.buttons}/>
                </Pressable>

                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Rule /> : null }
                    <AppButton icon="sign-in" title="Rule of 50"/>
                </Pressable>

                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Help /> : null }
                    <AppButton icon="sign-in" title="Building Your List"/>
                </Pressable>

                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Situations /> : null }
                    <AppButton icon="sign-in" title="Social Situations"/>
                </Pressable>

                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Reinforcement /> : null }
                    <AppButton icon="sign-in" title="Reinforcement"/>
                </Pressable>
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

const About = () => {
    return(
    <View style={style.buttonSpace}>
        <Text style={style.text}>To many people, the language you use defines you as a person. Whether you are a 
        young professional, student studying for the SATs, seasoned business profession, 
        or learning English as a second language, The Words to Impress will help you 
        quickly and efficiently develop an impressive vocabulary.</Text>
    </View>
        )
}

const Rule = () => {
    return(
    <View style={style.buttonSpace}>
        <Text style={style.text}>We each have a vocabulary unique to us. Most successful people have mastered 
        50 to 100 “big” vocabulary words that they consistently integrate in their 
        speech and writing. The Words to Impress app helps you build a list unique to you. 
        Once your list is complete, study those words – making them your own.</Text>
    </View>
        )
}

const Help = () => {
    return(
    <View style={style.buttonSpace}>
        <Text style={style.text}>Unlike other vocabulary-building systems that present you with hundreds of 
        words to learn, this app helps you build the right list for you – and master these words quickly. 
        This AI tool anlyzes your writing and speech for common words unique to you. Then provides you 
        with a list of upgraded words based on concepts and ideas familiar to you.</Text>
    </View>
        )
}

const Situations = () => {
    return(
    <View style={style.buttonSpace}>
        <Text style={style.text}>This feature identifies words unique to politics, business, job interviews, etc. 
        When in a particular social situation, look up that situation and be ready with words to impress.</Text>
    </View>
        )
}

const Reinforcement = () => {
    return(
    <View style={style.buttonSpace}>
        <Text style={style.text}>The Vocabulary Mastery section provides games and tests to help you learn your list of words 
        and reinforce them to make them part of your everyday speech and writing. The app features 
        word of the day pop-ups to discover new words. Or schedule daily quizzes and connect to 
        friends to test each other.</Text>
    </View>
        )
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

  subHead: {
    fontSize: 20,
    color: '#f0f8ff',
    fontWeight: '600',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  section: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    paddingVertical: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    color: '#f0f8ff',
    paddingHorizontal: 30,
  },

  buttonSpace: {
    paddingVertical: 10,
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
    width: 300,
  },

})

