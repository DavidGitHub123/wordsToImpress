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

export default function WS_InCourt({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton} >
      <AppButton icon="sign-in" title="Hide" 
      onPress={()=>setSelectedWord(null)} 
      />
    </Pressable>)

const Adjudicate= () => {
  return(
  <View>
      <Text style={style.subHead}>Adjudicate</Text>
      <Text style={style.text}>Pron. ad-JOO-di-cate</Text>
      <Text style={style.text}>Def: Judicial procedure to settle a case.</Text>
      <Text>
        <Text style={style.text}>If this case is hard to argue, it is equally difficult for me to </Text>
        <Text style={style.bold}>adjudicate</Text>.
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Barrage = () => {
  return(
  <View>
      <Text style={style.subHead}>Barrage</Text>
      <Text style={style.text}>Pron. buh-ROZH</Text>
      <Text style={style.text}>Def: Concentrated outpouring or volley.</Text>
      <Text>
        <Text style={style.text}>The defense attorney subjected the witness to a </Text>
        <Text style={style.bold}>barrage</Text>
        <Text style={style.text}> of questions about the events of that night.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Catch22 = () => {
  return(
  <View>
      <Text style={style.subHead}>Catch-22</Text>
      <Text style={style.text}> Pron. KATCH-twen-tee-too</Text>
      <Text style={style.text}>Def: Impossible situation with contradictory options.</Text>
      <Text>
        <Text style={style.text}>Judge Brown's memo issued a playful </Text>
        <Text style={style.bold}>catch-22</Text>
        <Text style={style.text}>: he was only to be scheduled during the days he'd be out of town.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Defamation = () => {
  return(
  <View>
      <Text style={style.subHead}>Defamation</Text>
      <Text style={style.text}>Pron. def-uh-MAY-shun</Text>
      <Text style={style.text}>Def: False, baseless attacks on person's reputation.</Text>
      <Text>
        <Text style={style.text}>After the article your honor, Ms. Smith decided she had enough </Text>
        <Text style={style.bold}>defamation</Text>
        <Text style={style.text}> of her character.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Elucidate = () => {
  return(
  <View>
      <Text style={style.subHead}>Elucidate</Text>
      <Text style={style.text}>Pron. ee-LOO-si-date</Text>
      <Text style={style.text}>Def: To make clear; to explain.</Text>
      <Text>
        <Text style={style.text}>Your honor, what is behind my client's bizarre work habits is something only he can </Text>
        <Text style={style.bold}>elucidate</Text>.
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Fabulist = () => {
  return(
  <View>
      <Text style={style.subHead}>Fabulist</Text>
      <Text style={style.text}>Pron. FAB-yuh-list</Text>
      <Text style={style.text}>Def: Liar; someone who tells outrageously untrue stories.</Text>
      <Text>
        <Text style={style.text}>Your honor, the defendant is a notorious </Text>
        <Text style={style.bold}>fabulist</Text>
        <Text style={style.text}> and should not be believed.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Grandiloquence = () => {
  return(
  <View>
      <Text style={style.subHead}>Grandiloquence</Text>
      <Text style={style.text}>Pron. gran-DIL-uh-kwence</Text>
      <Text style={style.text}>Def: Pompous speech or expression.</Text>
      <Text>
        <Text style={style.text}>I don't have the </Text>
        <Text style={style.bold}>grandiloquence</Text>
        <Text style={style.text}> the prosecutor does with her smooth words.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Heinous = () => {
  return(
  <View>
      <Text style={style.subHead}>Heinous</Text>
      <Text style={style.text}>Pron. HAY-nuss</Text>
      <Text style={style.text}>Def: Evil; reprehensible.</Text>
      <Text>
        <Text style={style.text}>Because of the </Text>
        <Text style={style.bold}>heinous</Text>
        <Text style={style.text}> nature of this crime, I sentence to life in prison.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Ignominious = () => {
  return(
  <View>
      <Text style={style.subHead}>Ignominious</Text>
      <Text style={style.text}>Pron. ig-no-MIN-ee-uss</Text>
      <Text style={style.text}>Def: Shameful or disgraceful.</Text>
      <Text>
        <Text style={style.text}>Tyrone's </Text>
        <Text style={style.bold}>ignominious</Text>
        <Text style={style.text}> defeat in court persuaded him to settle his other lawsuits.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}

const Judicature = () => {
  return(
  <View>
      <Text style={style.subHead}>Judicature</Text>
      <Text style={style.text}>Pron. JOO-di-kuh-choor</Text>
      <Text style={style.text}>Def: Authority of a court of law.</Text>
      <Text>
        <Text style={style.text}>This case is within my </Text>
        <Text style={style.bold}>judicature</Text>
        <Text style={style.text}>, despite counsel's arguments to the contrary.</Text>
      </Text>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
      </Pressable>
      {hideButton}
  </View>
      )
}


  return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <LinearGradient
          colors={["#4682B4", "#6699CC"]}
          start={[0.25, 0.25]}
          opacity={.95}
        >

      <View style={style.page}>
    
        <View>
          <Text style={style.header}>Word Situations: In Court</Text>
        </View>

        {selectedWord ? 
            selectedWord : 
            (<View>
              
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Adjudicate" 
              onPress={()=>setSelectedWord(<Adjudicate />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Barrage" 
              onPress={()=>setSelectedWord(<Barrage />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Catch-22" 
              onPress={()=>setSelectedWord(<Catch22 />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Defamation" 
              onPress={()=>setSelectedWord(<Defamation />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Elucidate" 
              onPress={()=>setSelectedWord(<Elucidate />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Fabulist" 
              onPress={()=>setSelectedWord(<Fabulist />)} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Grandiloquence" 
              onPress={()=>setSelectedWord(<Grandiloquence /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Heinous" 
              onPress={()=>setSelectedWord(<Heinous /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ignominious" 
              onPress={()=>setSelectedWord(<Ignominious /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Judicature" 
              onPress={()=>setSelectedWord(<Judicature />  )} 
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


