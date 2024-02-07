import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../components/HomeButton';
import blue10 from '../assets/blue10.jpg'


const AppButton = ({ onPress, icon, title }) => (
  <View style={style.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor='#FF8C00'
      borderRadius={40}
      borderWidth={3}
      borderColor='#BBC2CC'
      onPress={onPress}
      style={style.appButton}
    >
      <Text style={style.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);


export default function System({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
  <Pressable style={style.appButton} >
    <AppButton icon="sign-in" title="Hide" 
    onPress={()=>setSelectedWord(null)} 
    />
  </Pressable>)
  
  const About = () => {
    return(
    <View style={style.component}>
        <Text style={style.componentHead}>About</Text>
        <Text style={style.text}>To many people, the language you use defines you as a person. Whether you are a 
        young professional, student studying for the SATs, seasoned business profession, 
        or learning English as a second language, The Words to Impress will help you 
        quickly and efficiently develop an impressive vocabulary.</Text>
        {hideButton}
    </View>
        )
}

const Rule = () => {
  return(
  <View style={style.component}>
      <Text style={style.componentHead}>Rule of 50</Text>
      <Text style={style.text}>We each have a vocabulary unique to us. Most successful people have mastered 
      50 to 100 “big” vocabulary words that they consistently integrate in their 
      speech and writing. The Words to Impress app helps you build a list unique to you. 
      Once your list is complete, study those words – making them your own.</Text>
      {hideButton}
  </View>
      )
}

const Help = () => {
  return(
  <View style={style.component}>
      <Text style={style.componentHead}>AI Help</Text>
      <Text style={style.text}>Unlike other vocabulary-building systems that present you with hundreds of 
      words to learn, this app helps you build the right list for you – and master these words quickly. 
      This AI tool anlyzes your writing and speech for common words unique to you. Then provides you 
      with a list of upgraded words based on concepts and ideas familiar to you.</Text>
      {hideButton}
  </View>
      )
}

const Situations = () => {
  return(
  <View style={style.component}>
      <Text style={style.componentHead}>Word Situations</Text>
      <Text style={style.text}>Imagine yourself in a high-stakes situation and you don't know which word to use.
      This feature identifies words unique to politics, business, job interviews, etc. 
      from 10 different categories. 
      When in a particular situation, look up that situation and be ready with a word to impress.</Text>
      {hideButton}
  </View>
      )
}

const Reinforcement = () => {
  return(
  <View style={style.component}>
      <Text style={style.componentHead}>Learning Reinforcement</Text>
      <Text style={style.text}>The Vocabulary Mastery section provides games and tests to help you learn your list of words 
      and reinforce them to make them part of your everyday speech and writing. The app features 
      word of the day pop-ups to discover new words. Or schedule daily quizzes and connect to 
      friends to test each other.</Text>
      {hideButton}
  </View>
      )
}

  return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <ImageBackground source={blue10} imageStyle={style.image} resizeMode="cover" style={style.page}>

        <View style={style.screen}>
          <Text style={style.subHead}>Master these words to increase your powers of persuasion and comprehension.</Text>
          <Text style={style.text}>The Words to Impress app includes the most impressive words in the English language 
              as identified by the author of the best-selling books in The Words You Should Know series.</Text>
              <Text style={style.text}>Titles include The Words You Should Know, 
              The Words You Should Know to Sound Smart, and more!</Text>
        </View>

        {selectedWord ? 
            selectedWord : 
            (<View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="About" 
              onPress={()=>setSelectedWord(<About/>)} 
              />
            </Pressable>

            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Rule of 50" 
              onPress={()=>setSelectedWord(<Rule />)} 
              />
            </Pressable>

            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="AI Help" 
              onPress={()=>setSelectedWord(<Help />)} 
              />
            </Pressable>

            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Word Situations" 
              onPress={()=>setSelectedWord(<Situations/>)} 
              />
            </Pressable>

            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Learning Reinforcement" 
              onPress={()=>setSelectedWord(<Reinforcement/>)} 
              />
            </Pressable>
          </View>
         
        <View>
          <HomeButton navigation={ navigation } />
        </View>
        
        </View>)}
      </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingBottom: 50,
  },

  image: {
    opacity: .5,
  },

  header: {
    fontSize: 34,
    color: '#FF8C00',
    fontWeight: '800',
    paddingBottom: 10,

  },

  screen: {
    opacity: 0.7,
    backgroundColor: 'black',
    // padding: 20,
    marginBottom: 30,
  },

  subHead: {
    fontSize: 25,
    color: '#f0f8ff',
    fontWeight: '600',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 30
  },

  componentHead: {
    fontSize: 30,
    color: '#f0f8ff',
    fontWeight: '600',
  },

  component: {
    paddingHorizontal: 20
  },

  text: {
    fontSize: 20,
    color: '#f0f8ff',
    paddingBottom: 20,
    paddingHorizontal: 20
  },

  appButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButtonText: {
    fontSize: 18,
    color: '#fff'
  },

  appButtonContainer: {
    paddingVertical: 5,
    width: 300,
  },

})

