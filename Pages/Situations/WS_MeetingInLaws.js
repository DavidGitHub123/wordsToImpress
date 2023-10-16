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

export default function WS_MeetingInLaws({ navigation }) {
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
              <AppButton icon="sign-in" title="Acquiescence" 
              onPress={()=>setSelectedWord(<Acquiescence />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Belated" 
              onPress={()=>setSelectedWord(<Belated />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Dilapidated" 
              onPress={()=>setSelectedWord(<Dilapidated />)} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Eccentric" 
              onPress={()=>setSelectedWord(<Eccentric />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Fallacious" 
              onPress={()=>setSelectedWord(<Fallacious />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Heretic" 
              onPress={()=>setSelectedWord(<Heretic />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Impeccable" 
              onPress={()=>setSelectedWord(<Impeccable />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Malady" 
              onPress={()=>setSelectedWord(<Malady />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ursine" 
              onPress={()=>setSelectedWord(<Ursine />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Wayfaring" 
              onPress={()=>setSelectedWord(<Wayfaring />)} 
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

// Add function add to my list

const Acquiescence = () => {
    return(
    <View>
        <Text style={style.subHead}>Acquiescence</Text>
        <Text style={style.text}>Pron. ak-wee-ESS-unce</Text>
        <Text style={style.text}>Def: Act of passive agreement.</Text>
        <Text>
          <Text style={style.text}>Hank, enchanted by grand-fatherhood, gave over to complete </Text>
          <Text style={style.bold}>acquiescence</Text>
          <Text style={style.text}> with little Laura.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Belated = () => {
    return(
    <View>
        <Text style={style.subHead}>Belated</Text>
        <Text style={style.text}>Pron. bee-LAY-ted</Text>
        <Text style={style.text}>Def: Late or tardy; delayed.</Text>
        <Text>
          <Text style={style.text}>Jane sent a 
          <Text style={style.bold}> birthday </Text>
          <Text style={style.text}></Text>card but still felt guilty about forgetting your birthday.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Dilapidated = () => {
    return(
    <View>
        <Text style={style.subHead}>Dilapidated</Text>
        <Text style={style.text}>Pron. di-LAP-ih-dated</Text>
        <Text style={style.text}>Def: To fall into disrepair.</Text>
        <Text>
          <Text style={style.text}>The </Text>
          <Text style={style.bold}>dilapidated</Text>
          <Text style={style.text}> barn swayed and finally collapsed.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Eccentric = () => {
    return(
    <View>
        <Text style={style.subHead}>Eccentric</Text>
        <Text style={style.text}>Pron. ek-SEN-trik</Text>
        <Text style={style.text}>Def: Marked by unconventional behavior.</Text>
        <Text>
          <Text style={style.text}>Lionel's </Text>
          <Text style={style.bold}>eccentric</Text>
          <Text style={style.text}> behavior led people avoiding him entirely.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Fallacious = () => {
    return(
    <View>
        <Text style={style.subHead}>Fallacious</Text>
        <Text style={style.text}>Pron. fuh-LAY-shuss</Text>
        <Text style={style.text}>Def: False; containing logical errors.</Text>
        <Text>
          <Text style={style.text}>McCarthy's accusations against the Army were totally </Text>
          <Text style={style.bold}>fallacious</Text>.
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Heretic = () => {
    return(
    <View>
        <Text style={style.subHead}>Heretic</Text>
        <Text style={style.text}>Pron. HARE-uh-tic</Text>
        <Text style={style.text}>Def: Professing belief, but differing with parts of the belief system.</Text>
        <Text>
          <Text style={style.text}>His stand against the church's political stances branded Clint as a </Text>
          <Text style={style.bold}>heretic</Text>.
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Impeccable = () => {
    return(
    <View>
        <Text style={style.subHead}>Impeccable</Text>
        <Text style={style.text}>Pron. im-PECK-uh-bull</Text>
        <Text style={style.text}>Def: Flawless; virtually perfect.</Text>
        <Text>
          <Text style={style.text}>Roger, a man of </Text>
          <Text style={style.bold}>impeccable</Text>
          <Text style={style.text}> taste in clothes, wore a striking suit.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Malady = () => {
    return(
    <View>
        <Text style={style.subHead}>Malady</Text>
        <Text style={style.text}>Pron. MAL-uh-dee</Text>
        <Text style={style.text}>Def: An illness or unwholesome condition.</Text>
        <Text>
          <Text style={style.text}>Jason's </Text>
          <Text style={style.bold}>malady</Text>
          <Text style={style.text}>, if undiagnosed, could have taken his life.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Ursine = () => {
    return(
    <View>
        <Text style={style.subHead}>Ursine</Text>
        <Text style={style.text}>Pron. UR-sin</Text>
        <Text style={style.text}>Def: Bearlike; Latin word for bear.</Text>
        <Text>
          <Text style={style.text}>In his excitement, Harold gave her a fierce (might I say </Text>
          <Text style={style.bold}>ursine</Text>
          <Text style={style.text}>!) embrace.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Wayfaring = () => {
    return(
    <View>
        <Text style={style.subHead}>Wayfaring</Text>
        <Text style={style.text}>Pron. WAY-fare-ing</Text>
        <Text style={style.text}>Def: Tending to travel by foot.</Text>
          <Text style={style.text}>My grandfather, like many men of his generation, spent some time as a </Text>
          <Text style={style.bold}>wayfaring</Text>
          <Text style={style.text}> laborer.</Text>
        <Text></Text>
        
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


