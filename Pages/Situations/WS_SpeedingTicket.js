import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, AppButton, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

export default function WS_SpeedingTicket({ navigation }) {

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
                    { show == true ? <Adroit /> : null }
                    <AppButton icon="sign-in" title="Adroit" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>

            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Befuddle /> : null }
                    <AppButton icon="sign-in" title="Befuddle" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Canard /> : null }
                    <AppButton icon="sign-in" title="Canard" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Disconcerting /> : null }
                    <AppButton icon="sign-in" title="Disconcerting" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>  
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Embodiment /> : null }
                    <AppButton icon="sign-in" title="Embodiment" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View> 
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Fulminate /> : null }
                    <AppButton icon="sign-in" title="Fulminate" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>    
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Imperative /> : null }
                    <AppButton icon="sign-in" title="Imperative" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>  
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Lucid /> : null }
                    <AppButton icon="sign-in" title="Lucid" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>    
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Misconstrue /> : null }
                    <AppButton icon="sign-in" title="Misconstrue" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>  
            
            <View>
                <Pressable style={style.appButton} >
                    { show == true ? <Upbraid /> : null }
                    <AppButton icon="sign-in" title="Upbraid" 
                    onPress={()=>setShow(!show)} 
                    />
                </Pressable>
            </View>  
            
            <View>
                <Pressable style={style.appButton} onPress={() => navigation.navigate('Home')}>
                    <AppButton icon="sign-in" title="Home"/>
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

const Adroit = () => {
    return(
    <View>
        <Text style={style.text}>Pron. uh-DROIT</Text>
        <Text style={style.text}>Def: Skillful use of one's hands or body.</Text>
        <Text>
          <Text style={style.text}>Officer, your </Text>
          <Text style={style.bold}>adroit</Text>
          <Text style={style.text}> driving skills, helped me to pull my car over safely.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Befuddle = () => {
    return(
    <View>
        <Text style={style.text}>Pron. bee-FUD-il</Text>
        <Text style={style.text}>Def: To confuse or perplex.</Text>
        <Text>
          <Text style={style.text}>I'm sorry officer that I appear </Text>
          <Text style={style.bold}>befuddled</Text>
          <Text style={style.text}>, you won't believe what happened."</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Canard = () => {
    return(
    <View>
        <Text style={style.text}>Pron. kuh-NARD</Text>
        <Text style={style.text}>Def: A fabrication or unfounded story.</Text>
        <Text>
          <Text style={style.text}>Officer, I cannot tell a </Text>
          <Text style={style.bold}>canard</Text>
          <Text style={style.text}>; I was speeding but let me tell you why.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Disconcerting= () => {
    return(
    <View>
        <Text style={style.text}>Pronunciation: diss-kun-SERT-ing</Text>
        <Text style={style.text}>Shortdef: Shortdef: Ruffled; upset.</Text>
        <Text>
          <Text style={style.text}>Officer, I too find it </Text>
          <Text style={style.bold}>disconcerting</Text>
          <Text style={style.text}> I was driving 20 miles over the speed limit.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Embodiment = () => {
    return(
    <View>
        <Text style={style.text}>Pron. em-BOD-ee-ment</Text>
        <Text style={style.text}>Def: To possess a given thing or idea.</Text>
        <Text>
          <Text style={style.text}>Officer, you are the </Text>
          <Text style={style.bold}>embodiment</Text>
          <Text style={style.text}> of a brave man of his duty.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Fulminate = () => {
    return(
    <View>
        <Text style={style.text}>Pron. FUL-mih-nate</Text>
        <Text style={style.text}>Def: To explode. Launch verbal attack.</Text>
        <Text>
          <Text style={style.text}>Officer, last time you pulled me over I spoke loudly, even </Text>
          <Text style={style.bold}>fulminating</Text>
          <Text style={style.text}> in anger. I'm sorry.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Imperative = () => {
    return(
    <View>
        <Text style={style.text}>Pron. im-PAIR-uh-tive</Text>
        <Text style={style.text}>Def: Essential, obligatory, or mandatory.</Text>
        <Text>
          <Text style={style.text}>Officer, it's </Text>
          <Text style={style.bold}>imperative</Text>
          <Text style={style.text}> that I get to my meeting on time."</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Lucid = () => {
    return(
    <View>
        <Text style={style.text}>Pron. LOO-sid</Text>
        <Text style={style.text}>Def: Intelligible; clear mental state.</Text>
        <Text>
          <Text style={style.text}>Officer, I was daydreaming and not in a </Text>
          <Text style={style.bold}>lucid</Text>
          <Text style={style.text}> state when I passed that speed limit sign.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Misconstrue = () => {
    return(
    <View>
        <Text style={style.text}>Pron. miss-kun-STROO</Text>
        <Text style={style.text}>Def: To misinterpret; make an error in analyzing.</Text>
        <Text>
          <Text style={style.text}>Officer, I do not mean to </Text>
          <Text style={style.bold}>misconstrue</Text>
          <Text style={style.text}> the situation; I'll defer to your judgment.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Upbraid = () => {
    return(
    <View>
        <Text style={style.text}>Pron. up-BRAID</Text>
        <Text style={style.text}>Def: To criticize a person.</Text>
        <Text>
          <Text style={style.text}>Officer, please don't </Text>
          <Text style={style.bold}>upbraid</Text>
          <Text style={style.text}> me; I am a good driver.</Text>
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
  
  
  