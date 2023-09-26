import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function System() {
    const navigate = useNavigate()

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
    <SafeAreaView style={style.body}>
    <ScrollView alwaysBounceHorizontal={true}>
        <View style={style.body}>

            <View style={style.header}>
                <Text>Master these words proven to increase powers of persuasion and comprehension.</Text>
                <Text>The Words to Impress app includes the most impressive words in the English language 
                    as identified by David Olsen, author of the best-selling The Words You Should Know and 
                    founder of Market Builders, a marketing company who has provided 
                    communication services to Fortune 500 companies, consultancies, and law firms.</Text>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <About /> : null }
                    <AppButton icon="sign-in" title="About"/>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Rule /> : null }
                    <AppButton icon="sign-in" title="Rule of 50"/>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Help /> : null }
                    <AppButton icon="sign-in" title="Building Your List"/>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Situations /> : null }
                    <AppButton icon="sign-in" title="Social Situations"/>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Reinforcement /> : null }
                    <AppButton icon="sign-in" title="Reinforcement"/>
                </Pressable>
            </View>

            <View>
            <Pressable onPress={onPress=()=> {}}>
                <AppButton icon="sign-in" title="{Home}"/>
            </Pressable>
            </View>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const About = () => {
    return(
    <View>
        <Text>To many people, the language you use defines you as a person. Whether you are a 
        young professional, student studying for the SATs, seasoned business profession, 
        or learning English as a second language, The Words to Impress will help you 
        quickly and efficiently develop an impressive vocabulary.</Text>
    </View>
        )
}

const Rule = () => {
    return(
    <View>
        <Text>We each have a vocabulary unique to us. Most successful people have mastered 
        50 to 100 “big” vocabulary words that they consistently integrate in their 
        speech and writing. The Words to Impress app helps you build a list unique to you. 
        Once your list is complete, study those words – making them your own.</Text>
    </View>
        )
}

const Help = () => {
    return(
    <View>
        <Text>Unlike other vocabulary-building systems that present you with hundreds of 
        words to learn, this app helps you build the right list for you – and master these words quickly. 
        This AI tool anlyzes your writing and speech for common words unique to you. Then provides you 
        with a list of upgraded words based on concepts and ideas familiar to you.</Text>
    </View>
        )
}

const Situations = () => {
    return(
    <View>
        <Text>This feature identifies words unique to politics, business, job interviews, etc. 
        When in a particular social situation, look up that situation and be ready with words to impress.</Text>
    </View>
        )
}

const Reinforcement = () => {
    return(
    <View>
        <Text>The Vocabulary Mastery section provides games and tests to help you learn your list of words 
        and reinforce them to make them part of your everyday speech and writing. The app features 
        word of the day pop-ups to discover new words. Or schedule daily quizzes and connect to 
        friends to test each other.</Text>
    </View>
        )
}



const style = StyleSheet.create({
    body: {
      backgroundColor: 'cmyk(5, 0, 0, 0)',
      fontFamily: 'Helvetica',
      color: '#000',
      display: 'flex',
    },
  
    flex: {
      display: 'flex',
      fontSize: 10
    },
  
    header: {
      backgroundColor: 'cmyk(92, 46, 0, 0)',
      display: 'flex',
      fontSize: 18,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
  
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 80,
      backgroundColor: "#555",
    },
    appButton: {
      padding: 12,
    },
    appButtonText: {
      fontSize: 17,
    },
    appButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
  })
  