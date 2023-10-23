import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';

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

export default function WS_DinnerParty({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton} >
      <AppButton icon="sign-in" title="Hide" 
      onPress={()=>setSelectedWord(null)} 
      />
    </Pressable>)

const Clamorous = () => {
  return(
  <View>
      <Text style={style.subHead}>Clamorous</Text>
      <Text style={style.text}>Pron. KLAM-uhr-uss</ Text >
      <Text style={style.text}>Def: Loud; expressively vehement.</Text >
      <Text>
        <Text style={style.text}>Throngs in the street roared with </Text>
        <Text style={style.bold}>clamorous</Text> 
        <Text style={style.text}>applause.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Diffident = () => {
  return(
  <View>
      <Text style={style.subHead}>Diffident</Text>
      <Text style={style.text}>Pron. DEFF-ih-dent</Text>
      <Text style={style.text}>Def: Unassertive; lacking in self-worth.</Text>
      <Text>
        <Text style={style.text}>She was perhaps too </Text>
        <Text style={style.bold}>diffident</Text>
        <Text style={style.text}> to work comfortably in an outgoing office environment.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Educe = () => {
  return(
  <View>
      <Text style={style.subHead}>Educe</Text>
      <Text style={style.text}>Pron. ee-DYOOCE</Text>
      <Text style={style.text}>Def: To bring out the potential of something.</Text>
      <Text>
        <Text style={style.text}>Myron's attempt to </Text>
        <Text style={style.bold}>educe</Text>
        <Text style={style.text}> his sister's talents as a painter were futile.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Fatuous = () => {
  return(
  <View>
      <Text style={style.subHead}>Fatuous</Text>
      <Text style={style.text}>Pron. FAR-yoo-uss</Text>
      <Text style={style.text}>Def: Stupid or foolish.</Text>
      <Text>
        <Text style={style.text}>She made so many </Text>
        <Text style={style.bold}>fatuous</Text>
        <Text style={style.text}> remarks at the party that I stopped apologizing for her.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Gauche = () => {
  return(
  <View>
    <Text style={style.subHead}>Gauche</Text>
    <Text style={style.text}>Pron. gohsh</Text>
    <Text style={style.text}>Def: Tactless; lacking in social refinement.</Text>
    <Text>
      <Text style={style.text}>David's constant praise of his first wife was considered </Text>
      <Text style={style.bold}>gauche</Text>
      <Text style={style.text}> by his new mother-in-law.</Text>
    </Text>
    <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
    </Pressable>
    {hideButton}
  </View>
      )
}

const Harangue = () => {
  return(
  <View>
      <Text style={style.subHead}>Harangue</Text>
      <Text style={style.text}>Pron. huh-RANG</Text>
      <Text style={style.text}>Def: A scolding delivered in public.</Text>
      <Text>
        <Text style={style.text}>Mike's </Text>
        <Text style={style.bold}>harangue</Text>
        <Text style={style.text}> of his team left everyone feeling uncomfortable.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Imbibe = () => {
  return(
  <View>
      <Text style={style.subHead}>Imbibe</Text>
      <Text style={style.text}>Pron. im-BIBE</Text>
      <Text style={style.text}>Def: To drink alcoholic beverages.</Text>
      <Text>
        <Text style={style.text}>Donald once had a drinking problem, but he no longer </Text>
        <Text style={style.bold}>imbibes</Text>.
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Juxtapose = () => {
  return(
  <View>
      <Text style={style.subHead}>Juxtapose</Text>
      <Text style={style.text}>Pron. JUK-stuh-pose</Text>
      <Text style={style.text}>Def: To place side by side for comparison.</Text>
      <Text>
        <Text style={style.text}>He </Text>
        <Text style={style.bold}>juxtaposed</Text> 
        <Text>the two paragraphs in the essay and found evidence of plagiarism.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Largess = () => {
  return(
  <View>
      <Text style={style.subHead}>Largess</Text>
      <Text style={style.text}>Pron. lar-ZHESS</Text> 
      <Text style={style.text}>Def: Generously bestowed gifts.</Text>
      <Text>
        <Text style={style.text}>Her father's </Text>
        <Text style={style.bold}>largess</Text>
        <Text style={style.text}> was the only thing standing between Barbara and bankruptcy.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Melodious = () => {
  return(
  <View>
      <Text style={style.subHead}>Melodious</Text>
      <Text style={style.text}>Pron. muh-LOW-dee-us</Text>
      <Text style={style.text}>Def: Pleasant or agreeable to the ear.</Text>
      <Text>
        <Text style={style.text}>The </Text>
        <Text style={style.bold}>melodious</Text> 
        <Text style={style.text}>tones of his mother's voice reminded Wayne of his childhood.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Nabob = () => {
  return(
  <View>
      <Text style={style.subHead}>Nabob</Text>
      <Text style={style.text}>Pron. NAY-bob</Text>
      <Text style={style.text}>Def: A wealthy person accustomed to luxury.</Text>
      <Text>
        <Text style={style.text}>All the city's </Text>
        <Text style={style.bold}>nabobs</Text> 
        <Text style={style.text}>, potentates, and intellectual stars showed up for Iris' party.</Text>
      </Text>
      <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="Add to My List"
        onPress={() => navigation.navigate('')}
        />
      </Pressable>
      {hideButton}
  </View>
      )
}


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
        <Text style={style.header}>Word Situations: Boss</Text>
      </View>

      {selectedWord ? 
            selectedWord : 
            (<View>
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Clamorous" 
              onPress={()=>setSelectedWord(<Clamorous />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Diffident" 
              onPress={()=>setSelectedWord(<Diffident />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Educe" 
              onPress={()=>setSelectedWord(<Educe />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Fatuous" 
              onPress={()=>setSelectedWord(<Fatuous />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Gauche" 
              onPress={()=>setSelectedWord(<Gauche />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Harangue" 
              onPress={()=>setSelectedWord(<Harangue />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Imbibe" 
              onPress={()=>setSelectedWord(<Imbibe />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Juxtapose" 
              onPress={()=>setSelectedWord(<Juxtapose />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Largess" 
              onPress={()=>setSelectedWord(<Largess />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Melodious" 
              onPress={()=>setSelectedWord(<Melodious />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Nabob" 
              onPress={()=>setSelectedWord(<Nabob />)} 
              />
            </Pressable>
          </View>
          
      <View>
        <HomeButton navigation={navigation}/>
      </View>
      </View>)}

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

  subHead: {
    fontSize: 25,
    color: '#f0f8ff',
    fontWeight: '600',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 15,
    color: '#f0f8ff',
    paddingHorizontal: 20,
  },

  bold: {
    fontSize: 17,
    color:  '#800080',
    // fontWeight: 800,
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


