import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_GettingRaise() {
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
              { show == true ? <Aggrandize /> : null }
              <AppButton icon="sign-in" title="Aggrandize" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Benevolent /> : null }
              <AppButton icon="sign-in" title="Benevolent" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Celerity /> : null }
              <AppButton icon="sign-in" title="Celerity" />
          </Pressable>
        </View>
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Debilitate /> : null }
              <AppButton icon="sign-in" title="Debilitate" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Effete /> : null }
              <AppButton icon="sign-in" title="Effete" />
          </Pressable>
        </View>
        
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Facetious /> : null }
              <AppButton icon="sign-in" title="Facetious" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Garrulity /> : null }
              <AppButton icon="sign-in" title="Garrulity" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Halcyon /> : null }
              <AppButton icon="sign-in" title="Halcyon" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Iconoclastic /> : null }
              <AppButton icon="sign-in" title="Iconoclastic" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Neplusultra /> : null }
              <AppButton icon="sign-in" title="Ne plus ultra" />
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


const Aggrandize = () => {
    return(
    <View>
        <Text>Pron. uh-GRAND-ize</Text>
        <Text>Def: Make to appear great.</Text>
        <Text>I don't want to appear to </Text><Text style={StyleSheet=bold}>aggrandize</Text> <Text>myself, but I did lead my sales team to triple sales."</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Benevolent = () => {
    return(
    <View>
        <Text>Pron. be-NEV-i-lent'</Text>
        <Text>Def: Tendency to do well toward others.</Text>
        <Text>Longdef: "You are a </Text><Text style={StyleSheet=bold}>benevolent</Text> <Text>and generous person to have given me so many opportunities to excel in this company."</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Celerity = () => {
    return(
    <View>
        <Text>Pron. suh-LAIR-ih-tee</Text>
        <Text>Def: Speed; swiftness of action or motion.</Text>
        <Text>Longdef: I will carry out your orders with </Text><Text style={StyleSheet=bold}>celerity</Text><Text>, sir.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Debilitate = () => {
    return(
    <View>
        <Text>Pron. dih-BILL-ih-tate</Text>
        <Text>Def: To enfeeble or weaken.</Text>
        <Text>The team has a </Text><Text style={StyleSheet=bold}>debilitating</Text> <Text>impact on our productivity, and sales are down.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Effete = () => {
    return(
    <View>
        <Text> Pron. uh-FEET</Text>
        <Text>Def: Lacking vitality; without force.</Text>
        <Text>The new department is lacking force, not showing results; they are <Text style={StyleSheet=bold}>effete</Text>.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Facetious = () => {
    return(
    <View>
        <Text>Pron. fuh-SEE-shuss</Text>
        <Text>Def: Playful talk; communicated in jest.</Text>
        <Text>I was just being </Text><Text style={StyleSheet=bold}>facetious</Text><Text> when I said that about your wife's dress.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Garrulity = () => {
    return(
    <View>
        <Text> Pron. guh-ROO-lih-tee</Text>
        <Text>Def: Talkativeness.</Text>
        <Text>Michael's </Text><Text style={StyleSheet=bold}>garrulity</Text><Text> of non-stop talking gave him the reputation of a motor-mouth.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Halcyon = () => {
    return(
    <View>
            <Text>Pron. HAL-see-on</Text>
            <Text>Def: Tranquil, peaceful.</Text>
            <Text>The company's </Text><Text style={StyleSheet=bold}>halcyon</Text><Text> years were behind it; new competitors had moved into their markets.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Iconoclastic = () => {
    return(
    <View>
        <Text>Pron. eye-kon-uh-KLASS-tik</Text>
        <Text>Def: Attacking cherished institutions or beliefs.</Text>
        <Text>Boss, your </Text><Text style={StyleSheet=bold}>iconoclastic</Text><Text> approach has reignited success in this company, although the older executives resent you.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Neplusultra= () => {
    return(
    <View>
            <Text>Pron. nay plooce OOL-truh</Text>
            <Text>Def: The highest possible embodiment of something.</Text>
            <Text>Boss, you are the </Text><Text style={StyleSheet=bold}>ne plus ultra</Text><Text> of bosses; I can't imagine working for someone more capable.</Text>
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
