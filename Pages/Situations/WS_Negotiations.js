import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_Negotiations() {
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
              { show == true ? <Accord /> : null }
              <AppButton icon="sign-in" title="Accord" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Cessation /> : null }
              <AppButton icon="sign-in" title="Cessation" />
          </Pressable>
        </View>
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Dialectic /> : null }
              <AppButton icon="sign-in" title="Dialectic" />
          </Pressable>
        </View>
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Elusive /> : null }
              <AppButton icon="sign-in" title="Elusive" />
          </Pressable>
        </View>          
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Flux /> : null }
              <AppButton icon="sign-in" title="Flux" />
          </Pressable>
        </View>     
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Gauntlet /> : null }
              <AppButton icon="sign-in" title="Gauntlet" />
          </Pressable>
        </View>          
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Holistic /> : null }
              <AppButton icon="sign-in" title="Holistic" />
          </Pressable>
        </View>  
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Impasse /> : null }
              <AppButton icon="sign-in" title="Impasse" />
          </Pressable>
        </View>   
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Mitigate /> : null }
              <AppButton icon="sign-in" title="Mitigate" />
          </Pressable>
        </View>   
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Ultimatum /> : null }
              <AppButton icon="sign-in" title="Ultimatum" />
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


const Accord = () => {
    return(
    <View>
        <Text>Pron. uh-CORD</Text>
        <Text>Def: Formal reaching of agreement.</Text>
        <Text>As the strike over healthcare was resolved, the representatives reached an </Text><Text style={StyleSheet=bold}>accord</Text><Text> acceptable to both sides.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Cessation = () => {
    return(
    <View>
        <Text>Pron. sess-SAY-shun</Text>
        <Text>Def: Act of drawing to a close.</Text>
        <Text>Continued negotiations may bring about a </Text><Text style={StyleSheet=bold}>cessation</Text><Text> of the contracts and both parties will be happy.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Dialectic = () => {
    return(
    <View>
        <Text>Pron. die-uh-LEK-tic</Text>
        <Text>Def: Pertaining to logical arguments.</Text>
        <Text>The </Text><Text style={StyleSheet=bold}>dialectic</Text><Text> thoroughness with which he could destroy an opponent's argument was legendary.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Elusive = () => {
    return(
    <View>
        <Text>Pron. ee-LOO-siv</Text>
        <Text>Def: Difficult to perceive or describe.</Text>
        <Text>Our goals are easily understood; the nature of the obstacles we face is somewhat more </Text><Text style={StyleSheet=bold}>elusive</Text>.
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Flux = () => {
    return(
    <View>
        <Text>Pron. fluks</Text>
        <Text>Def: Ongoing flow or unceasing change.</Text>
        <Text>Negotiations were difficult because the organization's plans were in a state of continual </Text><Text style={StyleSheet=bold}>flux</Text>.
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Gauntlet = () => {
    return(
    <View>
        <Text>Pron. GONT-let</Text>
        <Text>Def: 'A challenge; in medieval times a duel.</Text>
        <Text>The negotiation deadline is not simply a goal; it is a </Text><Text style={StyleSheet=bold}>gauntlet</Text><Text> that has been thrown down before us.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Holistic = () => {
    return(
    <View>
        <Text>Pron. ho-LISS-tik</Text>
        <Text>Def: Emphasizing cooperation of the parts.</Text>
        <Text>We need to take a </Text><Text style={StyleSheet=bold}>holistic</Text><Text> approach to closing this deal to ensure all parties are satisfied.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Impasse = () => {
    return(
    <View>
        <Text>Pron. IM-pass</Text>
        <Text>Def: A situation that seems to offer no solution.</Text>
        <Text>Mark realized that the negotiations had reached an </Text><Text style={StyleSheet=bold}>impasse</Text><Text>, both side needed to make more compromises.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Mitigate = () => {
    return(
    <View>
        <Text>Pron. MIH-tih-gate</Text>
        <Text>Def: o moderate or lessen the impact.</Text>
        <Text>The situation had seemed tense until a number of </Text><Text style={StyleSheet=bold}>mitigating</Text><Text> factors came into play."</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Ultimatum = () => {
    return(
    <View>
        <Text>Pron. ul-tih-MAY-tum</Text>
        <Text>Def: One's last set of demands.</Text>
        <Text>Either you agree to the 30% increase or we end the negotiations; that is the </Text><Text style={StyleSheet=bold}>ultimatum</Text><Text> from my client.</Text>
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
  
  
  
  