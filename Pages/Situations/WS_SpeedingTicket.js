import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';


export default function WS_SpeedingTicket() {
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
                    { show == true ? <Adroit /> : null }
                    <AppButton icon="sign-in" title="Adroit" />
                </Pressable>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Befuddle /> : null }
                    <AppButton icon="sign-in" title="Befuddle" />
                </Pressable>
            </View>
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Canard /> : null }
                    <AppButton icon="sign-in" title="Canard" />
                </Pressable>
            </View>
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Disconcerting /> : null }
                    <AppButton icon="sign-in" title="Disconcerting" />
                </Pressable>
            </View>  
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Embodiment /> : null }
                    <AppButton icon="sign-in" title="Embodiment" />
                </Pressable>
            </View> 
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Fulminate /> : null }
                    <AppButton icon="sign-in" title="Fulminate" />
                </Pressable>
            </View>    
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Imperative /> : null }
                    <AppButton icon="sign-in" title="Imperative" />
                </Pressable>
            </View>  
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Lucid /> : null }
                    <AppButton icon="sign-in" title="Lucid" />
                </Pressable>
            </View>    
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Misconstrue /> : null }
                    <AppButton icon="sign-in" title="Misconstrue" />
                </Pressable>
            </View>  
            
            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Upbraid /> : null }
                    <AppButton icon="sign-in" title="Upbraid" />
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


const Adroit = () => {
    return(
    <View>
        <Text>Pron. uh-DROIT</Text>
        <Text>Def: Skillful use of one's hands or body.</Text>
        <Text>Officer, your </Text><Text style={StyleSheet=bold}>adroit</Text><Text> driving skills, helped me to pull my car over safely. Thank you!"</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Befuddle = () => {
    return(
    <View>
        <Text>Pron. bee-FUD-il</Text>
        <Text>Def: To confuse or perplex.</Text>
        <Text>I'm sorry officer that I appear </Text><Text style={StyleSheet=bold}>befuddled</Text><Text>, but you would not believe what happened to me."</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Canard = () => {
    return(
    <View>
        <Text>Pron. kuh-NARD</Text>
        <Text>Def: A fabrication or unfounded story.</Text>
        <Text>Officer, I cannot tell a </Text><Text style={StyleSheet=bold}>canard</Text><Text>; I was speeding but let me tell you why.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Disconcerting= () => {
    return(
    <View>
        <Text>Pronunciation: diss-kun-SERT-ing</Text>
        <Text>Shortdef: Shortdef: Ruffled; upset.</Text>
        <Text>Officer, I too find it </Text><Text style={StyleSheet=bold}>disconcerting</Text><Text> that I was driving 20 miles over the speed limit, but I have a good reason.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Embodiment = () => {
    return(
    <View>
        <Text>Pron. em-BOD-ee-ment</Text>
        <Text>Def: To possess a given thing or idea.</Text>
        <Text>Officer, you are the </Text><Text style={StyleSheet=bold}>embodiment</Text><Text> of a brave man of his duty. Thank you for protecting our community.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Fulminate = () => {
    return(
    <View>
        <Text>Pron. FUL-mih-nate</Text>
        <Text>Def: To explode. Launch verbal attack.</Text>
        <Text>Officer, last time I was pulled over I spoke loudly to the officer, </Text><Text style={StyleSheet=bold}>fulminating</Text><Text> in anger. But you are so much nicer.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Imperative = () => {
    return(
    <View>
        <Text>Pron. im-PAIR-uh-tive</Text>
        <Text>Def: Essential, obligatory, or mandatory.</Text>
        <Text>Officer, it's </Text><Text style={StyleSheet=bold}>imperative</Text><Text> that I get to my meeting on time; I'm sorry."</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Lucid = () => {
    return(
    <View>
        <Text>Pron. LOO-sid</Text>
        <Text>Def: Intelligible; clear mental state.</Text>
        <Text>Officer, I was daydreaming and not in a </Text><Text style={StyleSheet=bold}>lucid</Text><Text> state when I passed that speed limit sign.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Misconstrue = () => {
    return(
    <View>
        <Text>Pron. miss-kun-STROO</Text>
        <Text>Def: To misinterpret; make an error in analyzing.</Text>
        <Text>Officer, I do not mean to </Text><Text style={StyleSheet=bold}>misconstrue</Text><Text> the situation; now that you know the facts I'll defer to your judgment.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Upbraid = () => {
    return(
    <View>
        <Text>Pron. up-BRAID</Text>
        <Text>Def: To criticize a person.</Text>
        <Text>Officer, please don't </Text><Text style={StyleSheet=bold}>upbraid</Text><Text> me; I am a good driver and not aware of the speed limit.</Text>
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



