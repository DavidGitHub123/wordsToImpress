import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_Politics() {
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
              { show == true ? <Capitulate /> : null }
              <AppButton icon="sign-in" title="Capitulate" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Decorum /> : null }
              <AppButton icon="sign-in" title="Decorum" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Gainsay /> : null }
              <AppButton icon="sign-in" title="Gainsay" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Hegemony /> : null }
              <AppButton icon="sign-in" title="Hegemony" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Imbroglio /> : null }
              <AppButton icon="sign-in" title="Imbroglio" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Jingoistic /> : null }
              <AppButton icon="sign-in" title="Jingoistic" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Liaison /> : null }
              <AppButton icon="sign-in" title="Liaison" />
          </Pressable>
        </View>    
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Maleficence /> : null }
              <AppButton icon="sign-in" title="Maleficence" />
          </Pressable>
        </View>     
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Quagmire /> : null }
              <AppButton icon="sign-in" title="Quagmire" />
          </Pressable>
        </View>      
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Unilateral /> : null }
              <AppButton icon="sign-in" title="Unilateral" />
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


const Capitulate = () => {
  return(
  <View>
      <Text>Pron. kuh-PIT-yoo-late</Text>
      <Text>Def: 'Give up, surrender.</Text>
      <Text>The ambassador had been instructed to show flexibility on cultural exchanges, but not to </Text><Text style={StyleSheet=bold}>capitulate</Text><Text> when it came to trade issues.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Decorum = () => {
  return(
  <View>
      <Text>Pron. di-COR-um</Text>
      <Text>Def: Social propriety; dignified conduct.</Text>
      <Text>Though the delegates were frustrated at the chairman, strict </Text><Text style={StyleSheet=bold}>decorum</Text><Text> was observed in the meeting.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Gainsay = () => {
  return(
  <View>
      <Text>Pron. GANE-say</Text>
      <Text>Def: To declare false.</Text>
      <Text>The principles of the Bill of Rights, Mr. Secretary, will admit no </Text><Text style={StyleSheet=bold}>gainsaying</Text><Text>; they have proven to have created a superior form of government.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Hegemony = () => {
  return(
  <View>
      <Text>Pron. he-JEM-uh-nee</Text>
      <Text>Def: Predominant influence, especially in affairs of nations.</Text>
      <Text>Our foe's </Text><Text style={StyleSheet=bold}>hegemony</Text><Text> will not stop with his control of smaller nations; his aim is world domination.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Imbroglio = () => {
  return(
  <View>
      <Text>Pron. im-BROA-lee-o</Text>
      <Text>Def: An entanglement or complicated misunderstanding.</Text>
      <Text>The recent </Text><Text style={StyleSheet=bold}>imbroglio</Text><Text> over the conflict-of-interest violations has not improved the Mayor's standing with voters.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Jingoistic = () => {
  return(
  <View>
      <Text>Pron. jin-go-ISS-tik</Text>
      <Text>Def: Aggressively and overbearingly patriotic.</Text>
      <Text>Such </Text><Text style={StyleSheet=bold}>jingoistic</Text><Text> babble can hardly be said to pass for descent advice to a head of state.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Liaison = () => {
  return(
  <View>
      <Text>Pron. lee-ay-ZON</Text>
      <Text>Def: A communications channel or go-between.</Text>
      <Text>Captain Morse was met by an Air Force </Text><Text style={StyleSheet=bold}>liaison</Text><Text> within minutes of his arrival.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Maleficence = () => {
  return(
  <View>
      <Text>Pron. muh-LEF-ih-sence</Text>
      <Text>Def: The undertaking of evil or harmful acts.</Text>
      <Text>The long-ignored </Text><Text style={StyleSheet=bold}>maleficence</Text><Text> of the corrupt prison system was finally exposed by a rookie reporter.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Quagmire = () => {
  return(
  <View>
      <Text>Pron. KWAG-mire</Text>
      <Text>Def: 'An entanglement that offers no means of escape.</Text>
      <Text>The hostage situation, which worked in the President's favor, now threatens to be the worst </Text><Text style={StyleSheet=bold}>quagmire</Text><Text> of his administration.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Unilateral = () => {
  return(
  <View>
      <Text>Pron. yoo-ni-Lat-ur-el</Text>
      <Text>Def: Undertaken independently.</Text>
      <Text>The allies resolved that no member country would take any </Text><Text style={StyleSheet=bold}>unilateral</Text><Text> act that might threaten mutual security.</Text>
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



