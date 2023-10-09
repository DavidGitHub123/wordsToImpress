import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

export default function WS_Negotiations({ navigation }) {

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
              { show == true ? <Accord /> : null }
              <AppButton icon="sign-in" title="Accord" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>

        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Cessation /> : null }
              <AppButton icon="sign-in" title="Cessation" 
              onPress={()=>setShow(!show)} 
                />
          </Pressable>
        </View>
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Dialectic /> : null }
              <AppButton icon="sign-in" title="Dialectic" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Elusive /> : null }
              <AppButton icon="sign-in" title="Elusive" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>          
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Flux /> : null }
              <AppButton icon="sign-in" title="Flux" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>     
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Gauntlet /> : null }
              <AppButton icon="sign-in" title="Gauntlet" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>          
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Holistic /> : null }
              <AppButton icon="sign-in" title="Holistic" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>  
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Impasse /> : null }
              <AppButton icon="sign-in" title="Impasse" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>   
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Mitigate /> : null }
              <AppButton icon="sign-in" title="Mitigate" 
              onPress={()=>setShow(!show)} 
              />
          </Pressable>
        </View>   
            
        <View>
          <Pressable style={style.appButton} >
              { show == true ? <Ultimatum /> : null }
              <AppButton icon="sign-in" title="Ultimatum" 
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

const Accord = () => {
    return(
    <View>
        <Text style={style.text}>Pron. uh-CORD</Text>
        <Text style={style.text}>Def: Formal reaching of agreement.</Text>
        <Text>
          <Text style={style.text}>As the strike was resolved, the representatives reached an </Text>
          <Text style={style.bold}>accord</Text>
          <Text style={style.text}> acceptable to both sides.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Cessation = () => {
    return(
    <View>
        <Text style={style.text}>Pron. sess-SAY-shun</Text>
        <Text style={style.text}>Def: Act of drawing to a close.</Text>
        <Text>
          <Text style={style.text}>Negotiations may bring about a </Text>
          <Text style={style.bold}>cessation</Text>
          <Text style={style.text}> of the contracts and both parties will be happy.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Dialectic = () => {
    return(
    <View>
        <Text style={style.text}>Pron. die-uh-LEK-tic</Text>
        <Text style={style.text}>Def: Pertaining to logical arguments.</Text>
        <Text>
          <Text style={style.text}>His </Text>
          <Text style={style.bold}>dialectic</Text>
          <Text style={style.text}> thoroughness destroy his opponent's argument.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Elusive = () => {
    return(
    <View>
        <Text style={style.text}>Pron. ee-LOO-siv</Text>
        <Text style={style.text}>Def: Difficult to perceive or describe.</Text>
        <Text>
          <Text style={style.text}>Our goals are easily understood; the nature of the obstacles is somewhat more </Text>
          <Text style={style.bold}>elusive</Text>.
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Flux = () => {
    return(
    <View>
        <Text style={style.text}>Pron. fluks</Text>
        <Text style={style.text}>Def: Ongoing flow or unceasing change.</Text>
        <Text>
          <Text style={style.text}>Negotiations were difficult because the organization's plans were in a state of continual </Text>
          <Text style={style.bold}>flux</Text>.
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Gauntlet = () => {
    return(
    <View>
        <Text style={style.text}>Pron. GONT-let</Text>
        <Text style={style.text}>Def: 'A challenge; in medieval times a duel.</Text>
        <Text>
          <Text style={style.text}>The negotiation deadline is not a goal; it is a </Text>
          <Text style={style.bold}>gauntlet</Text>
          <Text style={style.text}> that has been thrown down before us.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Holistic = () => {
    return(
    <View>
        <Text style={style.text}>Pron. ho-LISS-tik</Text>
        <Text style={style.text}>Def: Emphasizing cooperation of the parts.</Text>
        <Text>
          <Text style={style.text}>We need to take a </Text>
          <Text style={style.bold}>holistic</Text>
          <Text style={style.text}> approach to closing this deal to ensure all parties are satisfied.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Impasse = () => {
    return(
    <View>
        <Text style={style.text}>Pron. IM-pass</Text>
        <Text style={style.text}>Def: A situation that seems to offer no solution.</Text>
        <Text>
          <Text style={style.text}>The negotiations had reached an </Text>
          <Text style={style.bold}>impasse</Text>
          <Text style={style.text}>, both sides needed to make more compromises.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Mitigate = () => {
    return(
    <View>
        <Text style={style.text}>Pron. MIH-tih-gate</Text>
        <Text style={style.text}>Def: o moderate or lessen the impact.</Text>
        <Text>
          <Text style={style.text}>The situation had seemed tense until a number of </Text>
          <Text style={style.bold}>mitigating</Text>
          <Text style={style.text}> factors came into play."</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Ultimatum = () => {
    return(
    <View>
        <Text style={style.text}>Pron. ul-tih-MAY-tum</Text>
        <Text style={style.text}>Def: One's last set of demands.</Text>
        <Text>
          <Text style={style.text}>We agree to the 30% increase or we end the negotiations; that is the </Text>
          <Text style={style.bold}>ultimatum</Text>
          <Text style={style.text}> from my client.</Text>
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


