import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_MeetingInLaws() {
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
              { show == true ? <Acquiescence /> : null }
              <AppButton icon="sign-in" title="Acquiescence" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Belated /> : null }
              <AppButton icon="sign-in" title="Belated" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Dilapidated /> : null }
              <AppButton icon="sign-in" title="Dilapidated" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Eccentric /> : null }
              <AppButton icon="sign-in" title="Eccentric" />
          </Pressable>
        </View>
        
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Fallacious /> : null }
              <AppButton icon="sign-in" title="Fallacious" />
          </Pressable>
        </View>
           
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Heretic /> : null }
              <AppButton icon="sign-in" title="Heretic" />
          </Pressable>
        </View>
           
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Impeccable /> : null }
              <AppButton icon="sign-in" title="Impeccable" />
          </Pressable>
        </View>
           
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Malady /> : null }
              <AppButton icon="sign-in" title="Malady" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Ursine /> : null }
              <AppButton icon="sign-in" title="Ursine" />
          </Pressable>
        </View>
          
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Wayfaring /> : null }
              <AppButton icon="sign-in" title="Wayfaring" />
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

const Acquiescence = () => {
    return(
    <View>
        <Text>Pron. ak-wee-ESS-unce</Text>
        <Text>Def: Act of passive agreement.</Text>
        <Text>Hank, enchanted by grand-fatherhood, gave over to complete </Text><Text style={StyleSheet=bold}>acquiescence</Text><Text> on his first day with little Laura.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Belated = () => {
    return(
    <View>
        <Text>Pron. bee-LAY-ted</Text>
        <Text>Def: Late or tardy; delayed.</Text>
        <Text>Jane sent a </Text><Text style={StyleSheet=bold}>belated</Text><Text> birthday card but still felt guilty.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Dilapidated = () => {
    return(
    <View>
        <Text>Pron. di-LAP-ih-dated</Text>
        <Text>Def: To fall into disrepair.</Text>
        <Text>The </Text><Text style={StyleSheet=bold}>dilapidated</Text><Text> barn swayed, heaved, and finally collapsed.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Eccentric = () => {
    return(
    <View>
        <Text>Pron. ek-SEN-trik</Text>
        <Text>Def: Marked by unconventional behavior.</Text>
        <Text>Lionel's </Text><Text style={StyleSheet=bold}>eccentric</Text><Text> behavior led people avoiding him entirely for fear of their reputations.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Fallacious = () => {
    return(
    <View>
        <Text>Pron. fuh-LAY-shuss</Text>
        <Text>Def: False; containing logical errors.</Text>
        <Text>As it turned out, McCarthy's accusations against the Army were totally </Text><Text style={StyleSheet=bold}>fallacious</Text>.
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Heretic = () => {
    return(
    <View>
        <Text>Pron. HARE-uh-tic</Text>
        <Text>Def: Professing belief, but differing with parts of the belief system.</Text>
        <Text>His stand against the church's political stances led some to brand Clint as a </Text><Text style={StyleSheet=bold}>heretic</Text>.
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Impeccable = () => {
    return(
    <View>
        <Text>Pron. im-PECK-uh-bull</Text>
        <Text>Def: Flawless; virtually perfect.</Text>
        <Text>Roger, a man of </Text><Text style={StyleSheet=bold}>impeccable</Text><Text> taste in clothes, was wearing a particularly striking suit.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Malady = () => {
    return(
    <View>
        <Text>Pron. MAL-uh-dee</Text>
        <Text>Def: An illness or unwholesome condition.</Text>
        <Text>Jason's </Text><Text style={StyleSheet=bold}>malady</Text><Text>, if it had gone undiagnosed, could have taken his life.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Ursine = () => {
    return(
    <View>
        <Text>Pron. UR-sin</Text>
        <Text>Def: Bearlike; Latin word for bear.</Text>
        <Text>Harold was glad to see your daughter and gave her a fierce (might I say </Text><Text style={StyleSheet=bold}>ursine</Text><Text>!) embrace.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Wayfaring = () => {
    return(
    <View>
        <Text>Pron. WAY-fare-ing</Text>
        <Text>Def: Tending to travel by foot.</Text>
        <Text>My grandfather, like many men of his generation, spent some time as a </Text><Text style={StyleSheet=bold}>wayfaring</Text><Text> laborer.</Text>
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



