import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_DinnerParty() {
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
    <SafeAreaView>
    <ScrollView alwaysBounceHorizontal={true}>
    <View style={style.body}>

      <View>
        <Text style={style.header}>Word Situations: Boss</Text>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Clamorous /> : null }
            <AppButton icon="sign-in" title="Clamorous" />
        </Pressable>
      </View>
          
      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Diffident /> : null }
            <AppButton icon="sign-in" title="Diffident" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Educe /> : null }
            <AppButton icon="sign-in" title="Educe" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Fatuous /> : null }
            <AppButton icon="sign-in" title="Fatuous" />
        </Pressable>
      </View>
           
      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Gauche /> : null }
            <AppButton icon="sign-in" title="Gauche" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Harangue /> : null }
            <AppButton icon="sign-in" title="Harangue" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Imbibe /> : null }
            <AppButton icon="sign-in" title="Imbibe" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Juxtapose /> : null }
            <AppButton icon="sign-in" title="Juxtapose" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Largess /> : null }
            <AppButton icon="sign-in" title="Largess" />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Melodious /> : null }
            <AppButton icon="sign-in" title="Melodious" />
        </Pressable>
      </View>
        
      <View>
        <Pressable onPress={onPress=()=>setShow(!show)}>
            { show == true ? <Nabob /> : null }
            <AppButton icon="sign-in" title="Nabob" />
        </Pressable>
      </View>

        <View>
          <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Home}"/>
          </Pressable>
        </View>

        </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const Clamorous = () => {
    return(
    <View>
        <Text>Pron. KLAM-uhr-uss</ Text >
        <Text>Def: Loud; expressively vehement.</Text >
        <Text>Throngs in the street roared with </Text><Text style={StyleSheet=bold}>clamorous</Text> <Text>applause.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Diffident = () => {
    return(
    <View>
 <Text>Pron. DEFF-ih-dent</Text>
            <Text>Def: Unassertive; lacking in self-worth.</Text>
            <Text>She was perhaps too </Text><Text style={StyleSheet=bold}>diffident</Text><Text> to work comfortably in an outgoing office environment.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Educe = () => {
    return(
    <View>
          <Text>Pron. ee-DYOOCE</Text>
          <Text>Def: To bring out the potential of something.</Text>
          <Text>Myron's attempt to </Text><Text style={StyleSheet=bold}>educe</Text><Text> his sister's talents as a painter were futile.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Fatuous = () => {
    return(
    <View>
            <Text>Pron. FAR-yoo-uss</Text>
            <Text>Def: Stupid or foolish.</Text>
            <Text>She made so many </Text><Text style={StyleSheet=bold}>fatuous</Text><Text> remarks at the party that I stopped apologizing for her.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Gauche = () => {
    return(
    <View>
          <Text>Pron. gohsh</Text>
          <Text>Def: Tactless; lacking in social refinement.</Text>
          <Text>David's constant praise of his first wife was considered </Text><Text style={StyleSheet=bold}>gauche</Text><Text> by his new mother-in-law.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Harangue = () => {
    return(
    <View>
        <Text>Pron. huh-RANG</Text>
        <Text>Def: A scolding delivered in public.</Text>
        <Text>Mike's </Text><Text style={StyleSheet=bold}>harangue</Text><Text> of his team left everyone feeling uncomfortable.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Imbibe = () => {
    return(
    <View>
        <Text>Pron. im-BIBE</Text>
        <Text>Def: To drink alcoholic beverages.</Text>
        <Text>Donald once had a drinking problem, but now he no longer </Text><Text style={StyleSheet=bold}>imbibes</Text>.
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}


const Juxtapose = () => {
    return(
    <View>
        <Text>Pron. JUK-stuh-pose</Text>
        <Text>Def: To place side by side for comparison.</Text>
        <Text>He </Text><Text style={StyleSheet=bold}>juxtaposed</Text> <Text>the two paragraphs at the end of each essay and found himself looking at the strongest evidence of plagiarism.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Largess = () => {
    return(
    <View>
        <Text>Pron. lar-ZHESS</Text> 
        <Text>Def: Generously bestowed gifts.</Text>
        <Text>Her father's </Text><Text style={StyleSheet=bold}>largess</Text><Text> was the only thing standing between Barbara and bankruptcy.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Melodious = () => {
    return(
    <View>
        <Text>Pron. muh-LOW-dee-us</Text>
        <Text>Def: Pleasant or agreeable to the ear.</Text>
        <Text>The </Text><Text style={StyleSheet=bold}>melodious</Text> <Text>tones of his mother's voice always reminded Wayne of his childhood.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Nabob = () => {
    return(
    <View>
        <Text>.Pron. NAY-bob</Text>
        <Text>Def: A wealthy person accustomed to luxury.</Text>
        <Text>All the city's </Text><Text style={StyleSheet=bold}>nabobs</Text>, <Text>potentates, and intellectual stars showed up for Iris' party.</Text>
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
