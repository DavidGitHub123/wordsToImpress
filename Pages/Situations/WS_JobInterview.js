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

export default function WS_JobInterview({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton} >
      <AppButton icon="sign-in" title="Hide" 
      onPress={()=>setSelectedWord(null)} 
      />
    </Pressable>)


const Baccalaureate = () => {
  return(
  <View>
      <Text style={style.subHead}>Baccalaureate</Text>
      <Text style={style.text}>Pron. bak-uh-LOR-ee-it</Text>
      <Text style={style.text}>Def: Degree awarded upon completion of an undergraduate program.</Text>
      <Text>
        <Text style={style.text}>I received my </Text>
        <Text style={style.bold}>baccalaureate</Text>
        <Text style={style.text}> in 2020 from Brandeis University.</Text>
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

const Cavalier = () => {
  return(
  <View>
      <Text style={style.subHead}>Cavalier</Text>
      <Text style={style.text}>Pron. 'KAV-uh-leer</Text>
      <Text style={style.text}>Def: "Unconcerned with what is considered important.</Text>
      <Text>
        <Text style={style.text}>I warned the CEO about his </Text>
        <Text style={style.bold}>cavalier</Text>
        <Text style={style.text}> attitude towards financial management and company suffered.</Text>
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

const Deprecate = () => {
  return(
  <View>
      <Text style={style.subHead}>Deprecate</Text>
      <Text style={style.text}>Pron. DEP-ri-cate</Text>
      <Text style={style.text}>Def: To belittle; disapproval of something.</Text>
      <Text>
        <Text style={style.text}>Jean insisted her report contained not a single </Text>
        <Text style={style.bold}>deprecating</Text>
        <Text  style={style.text}> word, but I could read between the lines.</Text>
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

const Ebullience = () => {
  return(
  <View>
      <Text style={style.subHead}>Ebullience</Text>
      <Text style={style.text}>Pron. ih-BOLL-yunce</Text>
      <Text style={style.text}>Def: The quality of being optimistic in speech or writing.</Text>
      <Text>
        <Text style={style.text}>Sharon's</Text>
        <Text style={style.bold}>ebullience</Text>
        <Text style={style.text}> as she delivered the presentation set her apart.</Text>
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

const FaitAccompli = () => {
  return(
  <View>
      <Text style={style.subHead}>Fait Accompli</Text>
      <Text style={style.text}>Pron. FATE uh-com-PLEE</Text>
      <Text style={style.text}>Def: 'Something undertaken and already concluded.</Text>
      <Text>
        <Text style={style.text}>I did sign the contract without the CEO's consent as it was a </Text>
        <Text style={style.bold}>fait accompli</Text>
        <Text style={style.text}>, and he promoted me to vice president.</Text>
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

const Galvanize = () => {
  return(
  <View>
      <Text style={style.subHead}>Galvanize</Text>
      <Text style={style.text}>Pron. GAL-vuh-nize</Text>
      <Text style={style.text}>Def: 'To arouse or summon to action.</Text>
      <Text>
        <Text style={style.text}>The letter had a </Text>
        <Text style={style.bold}>galvanizing</Text>
        <Text style={style.text}> effect on Madge, and she started working harder.</Text>
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

const Imbue = () => {
  return(
  <View>
      <Text style={style.subHead}>Imbue</Text>
      <Text style={style.text}>Pron. im-BYOO</Text>
      <Text style={style.text}>Def: To saturate or flow throughout by absorption.</Text>
      <Text>
        <Text style={style.text}>My philosophy on management is </Text>
        <Text style={style.bold}>imbued</Text>
        <Text style={style.text}> with ideas from Wharton Business School.</Text>
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

const Jejune = () => {
  return(
  <View>
      <Text style={style.subHead}>Jejune</Text>
      <Text style={style.text}>Pron. ji-JUNE</Text>
      <Text style={style.text}>Def: Dull or lackluster.</Text>
      <Text>
        <Text style={style.text}>I find your advertising campaign </Text>
        <Text style={style.bold}>jejune</Text>
        <Text style={style.text}>, slow, and off message.</Text>
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

const Kudos = () => {
  return(
  <View>
      <Text style={style.subHead}>Kudos</Text>
      <Text style={style.text}>Pron. KOO_dos</Text>
      <Text style={style.text}>Def: Honor or accolades.</Text>
      <Text>
        <Text style={style.text}>Big</Text>
        <Text style={style.bold}>Kudos</Text>
        <Text style={style.text}> to you for such a profitable fourth quarter.</Text>
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

const Utilitarian = () => {
  return(
  <View>
      <Text style={style.subHead}>Utilitarian</Text>
      <Text style={style.text}>Pron. yoo-til-ih-TARE-ee-un</Text>
      <Text style={style.text}>Def: Concern for the practical or useful.</Text>
      <Text>
        <Text style={style.text}>Take the </Text>
        <Text style={style.bold}>utilitarian</Text>
        <Text style={style.text}> approach and scrap the old focus on efficiencies.</Text>
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
              <AppButton icon="sign-in" title="Baccalaureate" 
              onPress={()=>setSelectedWord(<Baccalaureate />)} 
              />
            </Pressable>
          </View>  

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Cavalier" 
              onPress={()=>setSelectedWord(<Cavalier />)} 
              />
            </Pressable>
          </View>  

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Deprecate" 
              onPress={()=>setSelectedWord(<Deprecate />)} 
              />
            </Pressable>
          </View> 
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ebullience" 
              onPress={()=>setSelectedWord(<Ebullience /> )} 
              />
            </Pressable>
          </View> 

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Fait Accompli" 
              onPress={()=>setSelectedWord(<FaitAccompli /> )} 
              />
            </Pressable>
          </View> 

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Galvanize" 
              onPress={()=>setSelectedWord(<Galvanize /> )} 
              />
            </Pressable>
          </View> 

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Imbue" 
              onPress={()=>setSelectedWord(<Imbue /> )} 
              />
            </Pressable>
          </View> 

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Jejune" 
              onPress={()=>setSelectedWord(<Jejune /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Kudos" 
              onPress={()=>setSelectedWord(<Kudos /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Utilitarian" 
              onPress={()=>setSelectedWord(<Utilitarian /> )} 
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


