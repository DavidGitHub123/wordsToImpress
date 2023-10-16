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

export default function WS_GettingRaise({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

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
        </View>

      {selectedWord ? 
          selectedWord : 
          (<View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Aggrandize" 
              onPress={()=>setSelectedWord(<Aggrandize />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Benevolent" 
              onPress={()=>setSelectedWord(<Benevolent />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Celerity" 
              onPress={()=>setSelectedWord(<Celerity />)} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Debilitate" 
              onPress={()=>setSelectedWord(<Debilitate />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Effete" 
              onPress={()=>setSelectedWord(<Effete />)} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Facetious" 
              onPress={()=>setSelectedWord(<Facetious />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Garrulity" 
              onPress={()=>setSelectedWord(<Garrulity />)} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Halcyon" 
              onPress={()=>setSelectedWord(<Halcyon /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Iconoclastic" 
              onPress={()=>setSelectedWord(<Iconoclastic /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ne Plus Ultra" 
              onPress={()=>setSelectedWord(<Neplusultra /> )} 
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


const Aggrandize = () => {
    return(
    <View>
        <Text style={style.subHead}>Aggrandize</Text>
        <Text style={style.text}>Pron. uh-GRAND-ize</Text>
        <Text style={style.text}>Def: Make to appear great.</Text>
        <Text>
          <Text style={style.text}>I don't want to appear to </Text>
          <Text style={style.bold}>aggrandize</Text> 
          <Text style={style.text}>myself, but I did lead my sales team to triple sales."</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Benevolent = () => {
    return(
    <View>
        <Text style={style.subHead}>Benevolent</Text>
        <Text style={style.text}>Pron. be-NEV-i-lent'</Text>
        <Text style={style.text}>Def: Tendency to do well toward others.</Text>
        <Text>
          <Text style={style.text}>You are a </Text>
          <Text style={style.bold}>benevolent</Text> 
          <Text>and generous person to have given me so many opportunities."</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Celerity = () => {
    return(
    <View>
        <Text style={style.subHead}>Celerity</Text>
        <Text style={style.text}>Pron. suh-LAIR-ih-tee</Text>
        <Text style={style.text}>Def: Speed; swiftness of action or motion.</Text>
        <Text>
          <Text style={style.text}>Right away! I will carry out your orders with </Text>
          <Text style={style.bold}>celerity</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Debilitate = () => {
    return(
    <View>
        <Text style={style.subHead}>Debilitate</Text>
        <Text style={style.text}>Pron. dih-BILL-ih-tate</Text>
        <Text style={style.text}>Def: To enfeeble or weaken.</Text>
        <Text>
          <Text style={style.text}>The team has a </Text>
          <Text style={style.bold}>debilitating</Text> 
          <Text style={style.text}>impact on our productivity, and sales are down.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Effete = () => {
    return(
    <View>
        <Text style={style.subHead}>Effete</Text>
        <Text style={style.text}>Pron. uh-FEET</Text>
        <Text style={style.text}>Def: Lacking vitality; without force.</Text>
        <Text>
          <Text style={style.text}>The new department is lacking force with no results; they are </Text>
          <Text style={style.bold}>effete</Text>.
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Facetious = () => {
    return(
    <View>
        <Text style={style.subHead}>Facetious</Text>
        <Text style={style.text}>Pron. fuh-SEE-shuss</Text>
        <Text style={style.text}>Def: Playful talk; communicated in jest.</Text>
        <Text>
          <Text style={style.text}>Serious, I was just being </Text>
          <Text style={style.bold}>facetious</Text>
          <Text style={style.text}> about your wife's dress.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Garrulity = () => {
    return(
    <View>
        <Text style={style.subHead}>Garrulity </Text>
        <Text style={style.text}> Pron. guh-ROO-lih-tee</Text>
        <Text style={style.text}>Def: Talkativeness.</Text>
        <Text>
          <Text style={style.text}>Michael's </Text>
          <Text style={style.bold}>garrulity</Text>
          <Text> of non-stop talking gave him the reputation of a motor-mouth.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Halcyon = () => {
    return(
    <View>
        <Text style={style.subHead}>Halcyon</Text>
        <Text style={style.text}>Pron. HAL-see-on</Text>
        <Text style={style.text}>Def: Tranquil, peaceful.</Text>
        <Text>
          <Text style={style.text}>The company's </Text>
          <Text style={style.bold}>halcyon</Text>
          <Text style={style.text}> years as the leader were over; new competitors had moved into their markets.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Iconoclastic = () => {
    return(
    <View>
        <Text style={style.subHead}>Iconoclastic</Text>
        <Text style={style.text}>Pron. eye-kon-uh-KLASS-tik</Text>
        <Text style={style.text}>Def: Attacking cherished institutions or beliefs.</Text>
        <Text>
          <Text style={style.text}>Boss, your </Text>
          <Text style={style.bold}>iconoclastic</Text>
          <Text style={style.text}> approach has reignited success in this company, although the older executives resent you.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Neplusultra= () => {
    return(
    <View>
        <Text style={style.subHead}>Ne Plus Ultra</Text>
        <Text style={style.text}>Pron. nay plooce OOL-truh</Text>
        <Text style={style.text}>Def: The highest possible embodiment of something.</Text>
        <Text>
          <Text style={style.text}>Boss, you are the </Text>
          <Text style={style.bold}>ne plus ultra</Text>
          <Text> of bosses; I can't imagine working for someone more capable.</Text>
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


