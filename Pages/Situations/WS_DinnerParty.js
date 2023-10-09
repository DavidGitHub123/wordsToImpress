import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

export default function WS_DinnerParty({ navigation }) {

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
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Clamorous /> : null }
            <AppButton icon="sign-in" title="Clamorous" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>
          
      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Diffident /> : null }
            <AppButton icon="sign-in" title="Diffident" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Educe /> : null }
            <AppButton icon="sign-in" title="Educe" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Fatuous /> : null }
            <AppButton icon="sign-in" title="Fatuous" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>
           
      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Gauche /> : null }
            <AppButton icon="sign-in" title="Gauche" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Harangue /> : null }
            <AppButton icon="sign-in" title="Harangue" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Imbibe /> : null }
            <AppButton icon="sign-in" title="Imbibe" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Juxtapose /> : null }
            <AppButton icon="sign-in" title="Juxtapose" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Largess /> : null }
            <AppButton icon="sign-in" title="Largess" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>

      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Melodious /> : null }
            <AppButton icon="sign-in" title="Melodious" 
            onPress={()=>setShow(!show)} 
            />
        </Pressable>
      </View>
        
      <View>
        <Pressable style={style.appButton} >
            { show == true ? <Nabob /> : null }
            <AppButton icon="sign-in" title="Nabob" 
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
      </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}

// Add function add to my list
const Clamorous = () => {
    return(
    <View>
        <Text style={style.text}>Pron. KLAM-uhr-uss</ Text >
        <Text style={style.text}>Def: Loud; expressively vehement.</Text >
        <Text>
          <Text style={style.text}>Throngs in the street roared with </Text>
          <Text style={style.bold}>clamorous</Text> 
          <Text style={style.text}>applause.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Diffident = () => {
    return(
    <View>
        <Text style={style.text}>Pron. DEFF-ih-dent</Text>
        <Text style={style.text}>Def: Unassertive; lacking in self-worth.</Text>
        <Text>
          <Text style={style.text}>She was perhaps too </Text>
          <Text style={style.bold}>diffident</Text>
          <Text style={style.text}> to work comfortably in an outgoing office environment.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Educe = () => {
    return(
    <View>
        <Text style={style.text}>Pron. ee-DYOOCE</Text>
        <Text style={style.text}>Def: To bring out the potential of something.</Text>
        <Text>
          <Text style={style.text}>Myron's attempt to </Text>
          <Text style={style.bold}>educe</Text>
          <Text style={style.text}> his sister's talents as a painter were futile.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Fatuous = () => {
    return(
    <View>
        <Text style={style.text}>Pron. FAR-yoo-uss</Text>
        <Text style={style.text}>Def: Stupid or foolish.</Text>
        <Text>
          <Text style={style.text}>She made so many </Text>
          <Text style={style.bold}>fatuous</Text>
          <Text style={style.text}> remarks at the party that I stopped apologizing for her.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Gauche = () => {
    return(
    <View>
      <Text style={style.text}>Pron. gohsh</Text>
      <Text style={style.text}>Def: Tactless; lacking in social refinement.</Text>
      <Text>
        <Text style={style.text}>David's constant praise of his first wife was considered </Text>
        <Text style={style.bold}>gauche</Text>
        <Text style={style.text}> by his new mother-in-law.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
    </View>
        )
}

const Harangue = () => {
    return(
    <View>
        <Text style={style.text}>Pron. huh-RANG</Text>
        <Text style={style.text}>Def: A scolding delivered in public.</Text>
        <Text>
          <Text style={style.text}>Mike's </Text>
          <Text style={style.bold}>harangue</Text>
          <Text style={style.text}> of his team left everyone feeling uncomfortable.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Imbibe = () => {
    return(
    <View>
        <Text style={style.text}>Pron. im-BIBE</Text>
        <Text style={style.text}>Def: To drink alcoholic beverages.</Text>
        <Text>
          <Text style={style.text}>Donald once had a drinking problem, but he no longer </Text>
          <Text style={style.bold}>imbibes</Text>.
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Juxtapose = () => {
    return(
    <View>
        <Text style={style.text}>Pron. JUK-stuh-pose</Text>
        <Text style={style.text}>Def: To place side by side for comparison.</Text>
        <Text>
          <Text style={style.text}>He </Text>
          <Text style={style.bold}>juxtaposed</Text> 
          <Text>the two paragraphs in the essay and found evidence of plagiarism.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Largess = () => {
    return(
    <View>
        <Text style={style.text}>Pron. lar-ZHESS</Text> 
        <Text style={style.text}>Def: Generously bestowed gifts.</Text>
        <Text>
          <Text style={style.text}>Her father's </Text>
          <Text style={style.bold}>largess</Text>
          <Text style={style.text}> was the only thing standing between Barbara and bankruptcy.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Melodious = () => {
    return(
    <View>
        <Text style={style.text}>Pron. muh-LOW-dee-us</Text>
        <Text style={style.text}>Def: Pleasant or agreeable to the ear.</Text>
        <Text>
          <Text style={style.text}>The </Text>
          <Text style={style.bold}>melodious</Text> 
          <Text style={style.text}>tones of his mother's voice reminded Wayne of his childhood.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Nabob = () => {
    return(
    <View>
        <Text style={style.text}>Pron. NAY-bob</Text>
        <Text style={style.text}>Def: A wealthy person accustomed to luxury.</Text>
        <Text>
          <Text style={style.text}>All the city's </Text>
          <Text style={style.bold}>nabobs</Text> 
          <Text style={style.text}>, potentates, and intellectual stars showed up for Iris' party.</Text>
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


