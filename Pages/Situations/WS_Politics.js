import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

export default function WS_Politics({ navigation }) {

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
            <Text style={style.header}>Word Situations: Boss</Text>
        <View> 

        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Capitulate /> : null }
              <AppButton icon="sign-in" title="Capitulate" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Decorum /> : null }
              <AppButton icon="sign-in" title="Decorum" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Gainsay /> : null }
              <AppButton icon="sign-in" title="Gainsay" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Hegemony /> : null }
              <AppButton icon="sign-in" title="Hegemony" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Imbroglio /> : null }
              <AppButton icon="sign-in" title="Imbroglio" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>

        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Jingoistic /> : null }
              <AppButton icon="sign-in" title="Jingoistic" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Liaison /> : null }
              <AppButton icon="sign-in" title="Liaison" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>    
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Maleficence /> : null }
              <AppButton icon="sign-in" title="Maleficence" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>     
          
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Quagmire /> : null }
              <AppButton icon="sign-in" title="Quagmire" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>      
          
        <View>
          <Pressable style={style.appButton}>
              { show == true ? <Unilateral /> : null }
              <AppButton icon="sign-in" title="Unilateral" 
               onPress={()=>setShow(!show)} 
               />
          </Pressable>
        </View> 
          
        <View>
          <Pressable style={style.appButton} onPress={() => navigation.navigate('Home')}>
            <AppButton icon="sign-in" title="Home"/>
          </Pressable>
          <Pressable style={style.appButton} onPress={() => navigation.goBack()}>
            <AppButton icon="sign-in" title="Previous"/>
          </Pressable>
        </View>

        </View>
        </View>
        </View>
        </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}

// Add function add to my list

const Capitulate = () => {
  return(
  <View>
      <Text style={style.text}>Pron. kuh-PIT-yoo-late</Text>
      <Text style={style.text}>Def: 'Give up, surrender.</Text>
      <Text>
        <Text style={style.text}>The ambassador had been instructed to show flexibility, but not to </Text>
        <Text style={style.bold}>capitulate</Text>
        <Text style={style.text}>on trade issues.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Decorum = () => {
  return(
  <View>
      <Text style={style.text}>Pron. di-COR-um</Text>
      <Text style={style.text}>Def: Social propriety; dignified conduct.</Text>
      <Text>
        <Text style={style.text}>Though the delegates were frustrated at the chairman, strict </Text>
        <Text style={style.bold}>decorum</Text>
        <Text style={style.bold}> was observed in the meeting.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Gainsay = () => {
  return(
  <View>
      <Text style={style.text}>Pron. GANE-say</Text>
      <Text style={style.text}>Def: To declare false.</Text>
      <Text>
      <Text style={style.text}>The principles of the Bill of Rights admit no </Text>
      <Text style={style.bold}>gainsaying</Text>
      <Text style={style.text}>; they have proven to have created a superior form of government.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Hegemony = () => {
  return(
  <View>
      <Text style={style.text}>Pron. he-JEM-uh-nee</Text>
      <Text style={style.text}>Def: Predominant influence, especially in affairs of nations.</Text>
      <Text>
        <Text style={style.text}>Our foe's </Text>
        <Text style={style.bold}>hegemony</Text>
        <Text style={style.text}> will not stop with his control of smaller nations.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Imbroglio = () => {
  return(
  <View>
      <Text style={style.text}>Pron. im-BROA-lee-o</Text>
      <Text style={style.text}>Def: An entanglement or complicated misunderstanding.</Text>
      <Text>
        <Text style={style.text}>The recent </Text>
        <Text style={style.bold}>imbroglio</Text>
        <Text style={style.text}> over the conflict-of-interest violations has not improved the Mayor's standing.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Jingoistic = () => {
  return(
  <View>
      <Text style={style.text}>Pron. jin-go-ISS-tik</Text>
      <Text style={style.text}>Def: Aggressively and overbearingly patriotic.</Text>
      <Text>
        <Text style={style.text}>Such </Text>
        <Text style={style.bold}>jingoistic</Text>
        <Text style={style.text}> babble can hardly be said to pass for descent advice to a head of state.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Liaison = () => {
  return(
  <View>
      <Text>Pron. lee-ay-ZON</Text>
      <Text>Def: A communications channel or go-between.</Text>
      <Text>
        <Text style={style.text}>Captain Morse was met by an Air Force </Text>
        <Text style={style.bold}>liaison</Text>
        <Text style={style.text}> within minutes of his arrival.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Maleficence = () => {
  return(
  <View>
      <Text>Pron. muh-LEF-ih-sence</Text>
      <Text>Def: The undertaking of evil or harmful acts.</Text>
      <Text>
        <Text style={style.text}>The long-ignored </Text>
        <Text style={style.bold}>maleficence</Text>
        <Text style={style.text}> of the corrupt prison system was finally exposed.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Quagmire = () => {
  return(
  <View>
      <Text style={style.text}>Pron. KWAG-mire</Text>
      <Text style={style.text}>Def: 'An entanglement that offers no means of escape.</Text>
      <Text>
        <Text style={style.text}>The hostage situation threatens to be the worst </Text>
        <Text style={style.bold}>quagmire</Text>
        <Text style={style.text}> of this administration.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
  </View>
      )
}

const Unilateral = () => {
  return(
  <View>
      <Text style={style.text}>Pron. yoo-ni-Lat-ur-el</Text>
      <Text style={style.text}>Def: Undertaken independently.</Text>
      <Text>
        <Text style={style.text}>The allies resolved that no member country would take any </Text>
        <Text style={style.bold}>unilateral</Text>
        <Text style={style.text}> action to threaten mutual security.</Text>
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


