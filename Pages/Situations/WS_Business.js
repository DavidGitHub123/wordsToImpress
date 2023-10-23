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

export default function WS_Business({ navigation }) {
const [selectedWord, setSelectedWord] = useState(null);

const hideButton = (
  <Pressable style={style.appButton} >
    <AppButton icon="sign-in" title="Hide" 
    onPress={()=>setSelectedWord(null)} 
    />
  </Pressable>)

const Accolade = () => {
  return(
  <View>
      <Text style={style.subHead}>Accolade</Text>
      <Text style={style.text}>Pron. AK-uh-lade</Text>
      <Text style={style.text}>Def: Acknowledgement or expression of praise.</Text>
      <Text>
        <Text style={style.text}>The president hung on his office wall many plaques, citations, and</Text> 
        <Text style={style.bold}>accolades."</Text>
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

const Bluster = () => {
  return(
  <View>
      <Text style={style.subHead}>Bluster</Text>
      <Text style={style.text}>Pron. BLUS-ter</Text>
      <Text style={style.text}>Def: To threaten or issue extravagant threat.</Text>
      <Text>
        <Text style={style.text}>The CEO seems fierce at first because he </Text>
        <Text style={style.bold}>blusters</Text>
        <Text style={style.text}> to get his way.</Text>
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

const Cartel = () => {
  return(
  <View>
      <Text style={style.subHead}>Cartel</Text>
      <Text style={style.text}>Pron. kar-TELL</Text>
      <Text style={style.text}>Def: Group that establishes mutual control of prices and production.</Text>
      <Text>
        <Text style={style.text}>The oil </Text>
        <Text style={style.bold}>cartel</Text> 
        <Text style={style.text}>succeeded in driving world energy prices up significantly.</Text>
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

const Diminution = () => {
  return(
  <View>
      <Text style={style.subHead}>Diminution</Text>
      <Text style={style.text}>Pron. dim-ih-NOO-shen</Text>
      <Text style={style.text}>Def: Reduction due to outside influences.</Text>
      <Text>
        <Text style={style.text}>The stock fell by 75%; not sure we can recover from such a</Text> 
        <Text style={style.bold}>diminution</Text>.
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

const Effrontery = () => {
  return(
  <View>
      <Text style={style.subHead}>Effrontery</Text>
      <Text style={style.text}>Pron. ih-FRON-ter-ee</Text>
      <Text style={style.text}>Def: Impudent boldness.</Text>
      <Text>
        <Text style={style.text}>She had the </Text>
        <Text style={style.bold}>effrontery</Text>
        <Text style={style.text}> to ask for a raise after a dreadful performance.</Text>
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

const Feckless = () => {
  return(
  <View>
      <Text style={style.subHead}>Feckless</Text>
      <Text style={style.text}>Pron. FEK-liss</Text>
      <Text style={style.text}>Def: Ineffective or feeble.</Text>
      <Text>
        <Text style={style.text}>We had hoped for a well-trained consulting firm; we got a pack of </Text>
        <Text style={style.bold}>feckless</Text> 
        <Text style={style.text}>hangers-on.</Text>
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

const Gargantuan = () => {
  return(
  <View>
      <Text style={style.subHead}>Gargantuan</Text>
      <Text style={style.text}>Pron. gar-GAN-choo-un</Text>
      <Text style={style.text}>Def: Enormous. From fictional king (Gargantua).</Text>
      <Text>
        <Text style={style.text}>The </Text>
        <Text style={style.bold}>gargantuan</Text> 
        <Text style={style.text}>scale of the budget deficit caught us by surprise.</Text>
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

const Harbinger = () => {
  return(
  <View>
      <Text style={style.subHead}>Harbinger</Text>
      <Text style={style.text}>Pron. HAR-bin-jur</Text>
      <Text style={style.text}>Def: A forerunner. Something that comes before.</Text>
      <Text>
        <Text style={style.text}>These sales figures are a </Text>
        <Text style={style.bold}>harbinger</Text>
        <Text style={style.text}> of hard times ahead.</Text>
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

const Impetuous = () => {
  return(
  <View>
      <Text style={style.subHead}>Impetuous</Text>
      <Text style={style.text}>Pron. im-PET-you-us</Text>
      <Text style={style.text}>Def: Impulsive; driven by emotion.</Text>
      <Text>
        <Text style={style.text}>Dirk's heated and </Text>
        <Text style={style.bold}>impetuous</Text> 
        <Text style={style.text}>remark may well cost him his job.</Text>
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

const Logistics = () => {
  return(
  <View>
      <Text style={style.subHead}>Logistics</Text>
      <Text style={style.text}>Pron. loe-JIS-tiks</Text>
      <Text style={style.text}>Def: Essential details of how something is to be accomplished.</Text>
      <Text>
        <Text style={style.text}>Jane knew the trip could not begin until the </Text>
        <Text style={style.bold}>logistics</Text> 
        <Text style={style.text}>were worked out.</Text>
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
          <Text style={style.header}>Word Situations: Business</Text>
        </View>

          {selectedWord ? 
            selectedWord : 
            (<View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Accolade" 
              onPress={()=>setSelectedWord(<Accolade/>)} 
              />
            </Pressable>
          </View>
  
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Bluster" 
              onPress={()=>setSelectedWord(<Bluster/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Cartel" 
              onPress={()=>setSelectedWord(<Cartel/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Diminution" 
              onPress={()=>setSelectedWord(<Diminution/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Effrontery" 
              onPress={()=>setSelectedWord(<Effrontery/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Feckless" 
              onPress={()=>setSelectedWord(<Feckless/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Gargantuan" 
              onPress={()=>setSelectedWord(<Gargantuan/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Harbinger" 
              onPress={()=>setSelectedWord(<Harbinger/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Impetuous" 
              onPress={()=>setSelectedWord(<Impetuous/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Logistics" 
              onPress={()=>setSelectedWord(<Logistics/>)} 
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

const Accolade = () => {
  return(
  <View>
      <Text style={style.subHead}>Accolade</Text>
      <Text style={style.text}>Pron. AK-uh-lade</Text>
      <Text style={style.text}>Def: Acknowledgement or expression of praise.</Text>
      <Text>
        <Text style={style.text}>The president hung on his office wall many plaques, citations, and</Text> 
        <Text style={style.bold}>accolades."</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}   

const Bluster = () => {
  return(
  <View>
      <Text style={style.subHead}>Bluster</Text>
      <Text style={style.text}>Pron. BLUS-ter</Text>
      <Text style={style.text}>Def: To threaten or issue extravagant threat.</Text>
      <Text>
        <Text style={style.text}>The CEO seems fierce at first because he </Text>
        <Text style={style.bold}>blusters</Text>
        <Text style={style.text}> to get his way.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Cartel = () => {
  return(
  <View>
      <Text style={style.subHead}>Cartel</Text>
      <Text style={style.text}>Pron. kar-TELL</Text>
      <Text style={style.text}>Def: Group that establishes mutual control of prices and production.</Text>
      <Text>
        <Text style={style.text}>The oil </Text>
        <Text style={style.bold}>cartel</Text> 
        <Text style={style.text}>succeeded in driving world energy prices up significantly.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Diminution = () => {
  return(
  <View>
      <Text style={style.subHead}>Diminution</Text>
      <Text style={style.text}>Pron. dim-ih-NOO-shen</Text>
      <Text style={style.text}>Def: Reduction due to outside influences.</Text>
      <Text>
        <Text style={style.text}>The stock fell by 75%; not sure we can recover from such a</Text> 
        <Text style={style.bold}>diminution</Text>.
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Effrontery = () => {
  return(
  <View>
      <Text style={style.subHead}>Effrontery</Text>
      <Text style={style.text}>Pron. ih-FRON-ter-ee</Text>
      <Text style={style.text}>Def: Impudent boldness.</Text>
      <Text>
        <Text style={style.text}>She had the </Text>
        <Text style={style.bold}>effrontery</Text>
        <Text style={style.text}> to ask for a raise after a dreadful performance.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Feckless = () => {
  return(
  <View>
      <Text style={style.subHead}>Feckless</Text>
      <Text style={style.text}>Pron. FEK-liss</Text>
      <Text style={style.text}>Def: Ineffective or feeble.</Text>
      <Text>
        <Text style={style.text}>We had hoped for a well-trained consulting firm; we got a pack of </Text>
        <Text style={style.bold}>feckless</Text> 
        <Text style={style.text}>hangers-on.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Gargantuan = () => {
  return(
  <View>
      <Text style={style.subHead}>Gargantuan</Text>
      <Text style={style.text}>Pron. gar-GAN-choo-un</Text>
      <Text style={style.text}>Def: Enormous. From fictional king (Gargantua).</Text>
      <Text>
        <Text style={style.text}>The </Text>
        <Text style={style.bold}>gargantuan</Text> 
        <Text style={style.text}>scale of the budget deficit caught us by surprise.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Harbinger = () => {
  return(
  <View>
      <Text style={style.subHead}>Harbinger</Text>
      <Text style={style.text}>Pron. HAR-bin-jur</Text>
      <Text style={style.text}>Def: A forerunner. Something that comes before.</Text>
      <Text>
        <Text style={style.text}>These sales figures are a </Text>
        <Text style={style.bold}>harbinger</Text>
        <Text style={style.text}> of hard times ahead.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Impetuous = () => {
  return(
  <View>
      <Text style={style.subHead}>Impetuous</Text>
      <Text style={style.text}>Pron. im-PET-you-us</Text>
      <Text style={style.text}>Def: Impulsive; driven by emotion.</Text>
      <Text>
        <Text style={style.text}>Dirk's heated and </Text>
        <Text style={style.bold}>impetuous</Text> 
        <Text style={style.text}>remark may well cost him his job.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Logistics = () => {
  return(
  <View>
      <Text style={style.subHead}>Logistics</Text>
      <Text style={style.text}>Pron. loe-JIS-tiks</Text>
      <Text style={style.text}>Def: Essential details of how something is to be accomplished.</Text>
      <Text>
        <Text style={style.text}>Jane knew the trip could not begin until the </Text>
        <Text style={style.bold}>logistics</Text> 
        <Text style={style.text}>were worked out.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
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


