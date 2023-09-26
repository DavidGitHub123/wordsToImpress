import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_InCourt() {
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
              { show == true ? <Adjudicate /> : null }
              <AppButton icon="sign-in" title="Adjudicate" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Barrage /> : null }
              <AppButton icon="sign-in" title="Barrage" />
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Catch22 /> : null }
              <AppButton icon="sign-in" title="Catch-22" />
          </Pressable>
        </View>   

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Defamation /> : null }
              <AppButton icon="sign-in" title="Defamation" />
          </Pressable>
        </View> 

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Elucidate /> : null }
              <AppButton icon="sign-in" title="Elucidate" />
          </Pressable>
        </View> 

        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Fabulist /> : null }
              <AppButton icon="sign-in" title="Fabulist" />
          </Pressable>
        </View> 
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Grandiloquence /> : null }
              <AppButton icon="sign-in" title="Grandiloquence" />
          </Pressable>
        </View>
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Heinous /> : null }
              <AppButton icon="sign-in" title="Heinous" />
          </Pressable>
        </View>
           
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Ignominious /> : null }
              <AppButton icon="sign-in" title="Ignominious" />
          </Pressable>
        </View>
            
        <View>
          <Pressable onPress={onPress=()=>setShow(!show)}>
              { show == true ? <Judicature /> : null }
              <AppButton icon="sign-in" title="Judicature" />
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


const Adjudicate= () => {
  return(
  <View>
      <Text>Pron. ad-JOO-di-cate</Text>
      <Text>Def: Judicial procedure to settle a case.</Text>
      <Text>Gentlemen, if this case is hard to argue, rest assured it is equally difficult for me to </Text><Text style={StyleSheet=bold}>adjudicate</Text>.
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Barrage = () => {
  return(
  <View>
      <Text>Pron. buh-ROZH</Text>
      <Text>Def: Concentrated outpouring or volley.</Text>
      <Text>The defense attorney subjected the witness to a </Text><Text style={StyleSheet=bold}>barrage</Text><Text> of questions about the events of that night.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Catch22 = () => {
  return(
  <View>
      <Text> Pron. KATCH-twen-tee-too</Text>
      <Text>Def: Impossible situation with contradictory options.</Text>
      <Text>Judge Brown's memo issued a playful </Text><Text style={StyleSheet=bold}>catch-22</Text><Text>: he was only to be scheduled during those days he planned to 'be out of town.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Defamation = () => {
  return(
  <View>
      <Text>Pron. def-uh-MAY-shun</Text>
      <Text>Def: False, baseless attacks on person's reputation.</Text>
      <Text>After the Journal's article on her your honor, Ms. Smith decided she had enough </Text><Text style={StyleSheet=bold}>defamation</Text><Text> of her character.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Elucidate = () => {
  return(
  <View>
      <Text>Pron. ee-LOO-si-date</Text>
      <Text>Def: To make clear; to explain.</Text>
      <Text>Your honor, what is behind my client's bizarre work habits is something only he can </Text><Text style={StyleSheet=bold}>elucidate</Text>.
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Fabulist = () => {
  return(
  <View>
      <Text>Pron. FAB-yuh-list</Text>
      <Text>Def: Liar; someone who tells outrageously untrue stories.</Text>
      <Text>Your honor, the defendant is a notorious </Text><Text style={StyleSheet=bold}>fabulist</Text><Text> and should not be believed.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Grandiloquence = () => {
  return(
  <View>
      <Text>Pron. gran-DIL-uh-kwence</Text>
      <Text>Def: Pompous speech or expression.</Text>
      <Text>Your honor, I don't have the </Text><Text style={StyleSheet=bold}>grandiloquence</Text><Text> the prosecutor does with her smooth words, but I have a commonsense solution.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Heinous = () => {
  return(
  <View>
      <Text>Pron. HAY-nuss</Text>
      <Text>Def: Evil; reprehensible.</Text>
      <Text>Because of the </Text><Text style={StyleSheet=bold}>heinous</Text><Text> nature of this crime, I am forced to pass a stern sentence of life in prison.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Ignominious = () => {
  return(
  <View>
      <Text>Pron. ig-no-MIN-ee-uss</Text>
      <Text>Def: Shameful or disgraceful.</Text>
      <Text>Tyrone's </Text><Text style={StyleSheet=bold}>ignominious</Text><Text> defeat in court persuaded him to settle his other lawsuits against the company.</Text>
      <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Add to My List}"/>
      </Pressable>
  </View>
      )
}

const Judicature = () => {
  return(
  <View>
      <Text>Pron. JOO-di-kuh-choor</Text>
      <Text>Def: Authority of a court of law.</Text>
      <Text>This case is within my </Text><Text style={StyleSheet=bold}>judicature</Text><Text>, despite counsel's arguments to the contrary.</Text>
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
