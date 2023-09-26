import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_Business() {
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
    <View style={style.body}>

        <View>
          <Text style={style.header}>Word Situations: Boss</Text>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Accolade /> : null }
              <AppButton icon="sign-in" title="Accolade" />
            </Pressable>
          </View>
  
          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Bluster /> : null }
              <AppButton icon="sign-in" title="Bluster" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Cartel /> : null }
              <AppButton icon="sign-in" title="Cartel" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Diminution /> : null }
              <AppButton icon="sign-in" title="Diminution" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Effrontery /> : null }
              <AppButton icon="sign-in" title="Effrontery" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Feckless /> : null }
              <AppButton icon="sign-in" title="Feckless" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Gargantuan /> : null }
              <AppButton icon="sign-in" title="Gargantuan" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Harbinger /> : null }
              <AppButton icon="sign-in" title="Harbinger" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Impetuous /> : null }
              <AppButton icon="sign-in" title="Impetuous" />
            </Pressable>
          </View>

          <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Logistics /> : null }
              <AppButton icon="sign-in" title="Logistics" />
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

const Accolade = () => {
  return(
  <View>
      <Text>Pron. AK-uh-lade</Text>
      <Text>Def: Acknowledgement or expression of praise.</Text>
      <Text>The president hung on his office wall many plaques, citations, and</Text> <Text style={StyleSheet=bold}>accolades."</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}   

const Bluster = () => {
  return(
  <View>
      <Text>Pron. BLUS-ter</Text>
      <Text>Def: To threaten or issue extravagant threat.</Text>
      <Text>The CEO seems fierce at first because he </Text><Text style={StyleSheet=bold}>blusters</Text><Text> to get his way.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Cartel = () => {
  return(
  <View>
      <Text>Pron. kar-TELL</Text>
      <Text>Def: Group that establishes mutual control of prices and production.</Text>
      <Text>The oil </Text><Text style={StyleSheet=bold}>cartel</Text> <Text>succeeded in driving world energy prices up significantly.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Diminution = () => {
  return(
  <View>
      <Text>Pron. dim-ih-NOO-shen</Text>
      <Text>Def: Reduction due to outside influences.</Text>
      <Text>The stock fell by 75%; few issues can fully recover from such a</Text> <Text style={StyleSheet=bold}>diminution</Text>.
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Effrontery = () => {
  return(
  <View>
      <Text>Pron. ih-FRON-ter-ee</Text>
      <Text>Def: Impudent boldness.</Text>
      <Text>She had the </Text><Text style={StyleSheet=bold}>effrontery</Text><Text> to ask for a raise after a dreadful performance.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Feckless = () => {
  return(
  <View>
      <Text>Pron. FEK-liss</Text>
      <Text>Def: Ineffective or feeble.</Text>
      <Text>We had hoped for a well-trained consulting firm; what showed up was a pack of </Text><Text style={StyleSheet=bold}>feckless</Text> <Text>hangers-on.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Gargantuan = () => {
  return(
  <View>
      <Text>Pron. gar-GAN-choo-un</Text>
      <Text>Def: Enormous. From fictional king (Gargantua).</Text>
      <Text>The </Text><Text style={StyleSheet=bold}>gargantuan</Text> <Text>scale of the budget deficit caught the board of directors by surprise.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Harbinger = () => {
  return(
  <View>
      <Text>Pron. HAR-bin-jur</Text>
      <Text>Def: A forerunner. Something that comes before.</Text>
      <Text>These sales figures are a </Text><Text style={StyleSheet=bold}>harbinger</Text><Text> of hard times to come.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Impetuous = () => {
  return(
  <View>
      <Text>Pron. im-PET-you-us</Text>
      <Text>Def: Impulsive; driven by emotion.</Text>
      <Text>Dirk's heated and </Text><Text style={StyleSheet=bold}>impetuous</Text> <Text>remark may well cost him his job.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Logistics = () => {
  return(
  <View>
      <Text>Pron. loe-JIS-tiks</Text>
      <Text>Def: Essential details of how something is to be accomplished.</Text>
      <Text>Jane knew the trip with the CEO could not begin until the </Text><Text style={StyleSheet=bold}>logistics</Text> <Text>were worked out.</Text>
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

  bold: {
    fontWeight: 'bold',
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
