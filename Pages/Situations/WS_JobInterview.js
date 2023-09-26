import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_JobInterview() {
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

        <View>
          <Text style={style.header}>Word Situations: Boss</Text>
        <View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Baccalaureate /> : null }
              <AppButton icon="sign-in" title="Baccalaureate" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Cavalier /> : null }
              <AppButton icon="sign-in" title="Cavalier" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Deprecate /> : null }
              <AppButton icon="sign-in" title="Deprecate" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Ebullience /> : null }
              <AppButton icon="sign-in" title="Ebullience" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <FaitAccompli /> : null }
              <AppButton icon="sign-in" title="Fait accompli" />
          </Pressable>
        </View> 

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Galvanize /> : null }
              <AppButton icon="sign-in" title="Galvanize" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Imbue /> : null }
              <AppButton icon="sign-in" title="Imbue" />
          </Pressable>
        </View>
         
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Jejune /> : null }
              <AppButton icon="sign-in" title="Jejune" />
          </Pressable>
        </View>
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Kudos /> : null }
              <AppButton icon="sign-in" title="Kudos" />
          </Pressable>
        </View> 
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Utilitarian /> : null }
              <AppButton icon="sign-in" title="Utilitarian" />
          </Pressable>
        </View>
           
        <View>
          <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Home}"/>
          </Pressable>
        </View>

        </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const Baccalaureate = () => {
  return(
  <View>
      <Text>Pron. bak-uh-LOR-ee-it</Text>
      <Text>Def: Degree awarded upon completion of an undergraduate program.</Text>
      <Text>I received my </Text><Text style={StyleSheet=bold}>baccalaureate</Text><Text> in 2020 from Brandeis University.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Cavalier = () => {
  return(
  <View>
      <Text>Pron. 'KAV-uh-leer</Text>
      <Text>Def: "Unconcerned with what is considered important.</Text>
      <Text>I warned the CEO about his </Text><Text style={StyleSheet=bold}>cavalier</Text><Text> attitude towards financial management and it turned out to be the company's undoing.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Deprecate = () => {
  return(
  <View>
      <Text>Pron. DEP-ri-cate</Text>
      <Text>Def: To belittle; disapproval of something.</Text>
      <Text>Jean insisted her report contained not a single </Text><Text style={StyleSheet=bold}>deprecating</Text><Text> word, but it was easy enough to read between the lines.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Ebullience = () => {
  return(
  <View>
      <Text>Pron. ih-BOLL-yunce</Text>
      <Text>Def: The quality of being optimistic in speech or writing.</Text>
      <Text>Sharon's</Text><Text style={StyleSheet=bold}>ebullience</Text><Text> as she delivered the presentation really set her apart from the others.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const FaitAccompli= () => {
  return(
  <View>
      <Text>Pron. FATE uh-com-PLEE</Text>
      <Text>Def: 'Something undertaken and already concluded.</Text>
      <Text>I did sign the contract without the CEO's consent and presented it to him as a </Text><Text style={StyleSheet=bold}>fait accompli</Text><Text>, and he promoted me to vice president.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Galvanize = () => {
  return(
  <View>
      <Text>Pron. GAL-vuh-nize</Text>
      <Text>Def: 'To arouse or summon to action.</Text>
      <Text>The letter had a </Text><Text style={StyleSheet=bold}>galvanizing</Text><Text> effect on Madge, and she started working harder.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Imbue = () => {
  return(
  <View>
      <Text>Pron. im-BYOO</Text>
      <Text>Def: To saturate or flow throughout by absorption.</Text>
      <Text>My philosophy on management is </Text><Text style={StyleSheet=bold}>imbued</Text><Text> with ideas from Wharton Business School.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Jejune = () => {
  return(
  <View>
      <Text>Pron. ji-JUNE</Text>
      <Text>Def: Dull or lackluster.</Text>
      <Text>I find your competition's advertising campaign </Text><Text style={StyleSheet=bold}>jejune</Text><Text>, slow, and off message.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Kudos = () => {
  return(
  <View>
      <Text>Pron. KOO_dos</Text>
      <Text>Def: Honor or accolades.</Text>
      <Text style={StyleSheet=bold}>Kudos</Text><Text> to you and your company for such a profitable fourth quarter.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Utilitarian = () => {
  return(
  <View>
      <Text>Pron. yoo-til-ih-TARE-ee-un</Text>
      <Text>Def: Concern for the practical or useful.</Text>
      <Text>Take the </Text><Text style={StyleSheet=bold}>utilitarian</Text><Text> approach to the problem and scrap the old focus on efficiencies.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
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



