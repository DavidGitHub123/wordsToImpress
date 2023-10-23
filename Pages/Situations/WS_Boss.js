import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Button, FlatList } from 'react-native';
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

export default function WS_Boss({ navigation }) {
const [selectedWord, setSelectedWord] = useState(null);

const hideButton = (
  <Pressable style={style.appButton} >
    <AppButton icon="sign-in" title="Hide" 
    onPress={()=>setSelectedWord(null)} 
    />
  </Pressable>)

const Aberration = () => {
  return(
      <View>
          <Text style={style.subHead}>Aberration</Text>
          <Text style={style.text}>Pron. ab-uh-RAY-shun</Text>
          <Text style={style.text}>Def: Diverging from an expected course.</Text>
      <Text>
          <Text style={style.text}>Sally's poor work was hardly grounds for dismissal; it was an </Text>
          <Text style={style.bold}>aberration </Text>
          <Text style={style.text}>caused by problems at home.</Text>
      </Text>
      <Pressable style={style.appButton} >
      <AppButton  icon="sign-in" title="Add to My List"
      onPress={() => navigation.navigate('')}
      />
      </Pressable>
      {hideButton}
  </View>  
  )
  }

const Beleaguered = () => {
  return(
  <View> 
      <Text style={style.subHead}>Beleaguered</Text>
      <Text style={style.text}>Pron. 'bee-LEEG-erd'</Text>
      <Text style={style.text}>Def. Embattled; constantly confronted with obstacles.</Text>
      <Text>
          <Text style={style.text}>The</Text>
          <Text style={style.bold}> beleaguered</Text>
          <Text style={style.text}> marketing team even considered direct mail, but vowed to fight on. </Text>
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

    const Debacle = () => {
    return(
      <View>
          <Text style={style.subHead}>Debacle</Text>               
          <Text style={style.text}>Pron. dih-BA-kull</Text>
          <Text style={style.text}>Def: Utter collapse or rout.</Text>    
      <Text>
          <Text style={style.text}>The initiative seemed promising, but turned out to be George's </Text>
          <Text style={style.bold}>debacle.</Text>
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

    const Echelon = () => {
    return(
      <View>
          <Text style={style.subHead}>Echelon</Text>
          <Text style={style.text}>Pron. ESH-uh-lom</Text>
          <Text style={style.text}>Def: A level of command.</Text>
      <Text>
          <Text style={style.text}>Tom's proposal eventually won the approval of the company's upper </Text> 
          <Text style={style.bold}>echelon</Text>
          <Text style={style.text}> of leaders.</Text>
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

    const Garner = () => {
    return(
      <View> 
          <Text style={style.subHead}>Garner</Text>
          <Text style={style.text}>Pron. GAR-ner</Text>
          <Text style={style.text}>Def: To gather or accumulate.</Text>
          <Text>
              <Text style={style.text}>William </Text>
              <Text style={style.bold}>garnered</Text>
              <Text style={style.text}> much praise for his management skills.</Text>
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

const Ignoble = () => {
return(
  <View> 
      <Text style={style.subHead}>Ignoble</Text>
      <Text style={style.text}>Pron. ig-NO-bull</Text>
      <Text style={style.text}>Def: Dishonorable in nature.</Text>
      <Text>
          <Text style={style.text}>Peter's </Text>
          <Text style={style.bold}>ignoble </Text>
          <Text style={style.text}>aims were well known to the human resources department, which led to his firing.</Text>
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

    const Jettison = () => {
    return(
      <View> 
      <Text style={style.subHead}>Jettison</Text>
      <Text style={style.text}>Pron. JET-ih-son</Text>
      <Text style={style.text}>Def: To cast off or overboard.</Text> 
      <Text>
          <Text style={style.text}>The project seemed promising, but after research we </Text> 
          <Text style={style.bold}>jettisoned</Text> 
          <Text style={style.text}>the project.</Text>
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

    const Keynote = () => {
    return(
      <View> 
          <Text style={style.subHead}>Keynote</Text>
          <Text style={style.text}>Pron. KEE-note</Text>
          <Text style={style.text}>Shortdef: "A prime theme; underlying element.</Text>
          <Text>
              <Text style={style.text}>The </Text>
              <Text style={style.bold}>keynote </Text>
              <Text style={style.text}>speaker addressed many problems related to productivity that faces our organization.</Text>
          </Text>
          <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
          </Pressable>
          {hideButton}
      </View>         
    ) }

    const Laggard = () => {
    return(
      <View> 
          <Text style={style.subHead}>Laggard</Text>
          <Text style={style.text}>Pron. LAG-urd</Text>
          <Text style={style.text}>Def: One who lags behind or loiters.</Text>
          <Text>
              <Text style={style.text}>We completed the project; it is the </Text>
              <Text style={style.bold}>laggards </Text>
              <Text style={style.text}>in accounting you should take to task.</Text>
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

    const Narcissistic = () => {
    return(
      <View> 
          <Text style={style.subHead}>Narcissistic</Text>
          <Text style={style.text}>Pronunciation: nar-sis-SIS-tik</Text>
          <Text style={style.text}>Def: Possessed by self-love.</Text>
          <Text>
              <Text style={style.text}>Self-promotion is one thing; the </Text>
              <Text style={style.bold}>narcissistic </Text>
              <Text style={style.text}>zeal with which Gerald asserts himself is another.</Text>
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
            <Text style={style.header}>Word Situations: Boss</Text>
        </View> 

        {selectedWord ? 
            selectedWord : 
            (<View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Aberration" 
              onPress={()=>setSelectedWord(<Aberration />)} 
              />
              {/* <AppButton icon="sign-in" title="Hide" 
              onPress={()=>setHideWord(!hideWord)} 
              /> */}
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Beleaguered" 
              onPress={()=>setSelectedWord(<Beleaguered />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Debacle" 
              onPress={()=>setSelectedWord(<Debacle />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Echelon" 
              onPress={()=>setSelectedWord(<Echelon />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Garner" 
              onPress={()=>setSelectedWord(<Garner />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ignoble" 
              onPress={()=>setSelectedWord(<Ignoble />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Jettison" 
              onPress={()=>setSelectedWord(<Jettison />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Keynote" 
              onPress={()=>setSelectedWord(<Keynote />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Laggard" 
              onPress={()=>setSelectedWord(<Laggard />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Narcissistic" 
              onPress={()=>setSelectedWord(<Narcissistic />)} 
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
      paddingVertical: 0,
      paddingHorizontal: 30,
    },

    header: {
      fontSize: 30,
      color: '#f0f8ff',
      fontWeight: '700',
      marginBottom: 20,
    },

    subHead: {
      fontSize: 25,
      color: '#f0f8ff',
      fontWeight: '600',
      paddingVertical: 15,
      paddingHorizontal: 15,
    },

    container: {
      marginBottom: 20,
    },

    textTopMargin: {
        marginTop: 10,
    },

    textBottomMargin: {
        marginBottom: 10,
    },

    word: {
        marginTop: 0,
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

    marginButton: {
        paddingHorizontal: 20,
        paddingBottom: 30,
      },
  
    appButton: {
      paddingHorizontal: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    appButtonText: {
      fontSize: 12,
      color: '#fff'
    },
  
    appButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 0,
      width: 150
    },
  
  })
  

  