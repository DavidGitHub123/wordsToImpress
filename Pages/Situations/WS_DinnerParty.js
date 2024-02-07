import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../../components/HomeButton';
import AddButton from '../../components/AddButton';
import ListenButton from '../../components/ListenButton';
import { navStyle } from '../../components/NavButton.js';
import dinnerparty from '../../assets/Backgrounds/dinnerparty.jpg'

const AppButton = ({ onPress, icon, title, backgroundColor }) => (
  <View style={style.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor='#FF8C00'
      borderRadius={40}
      borderWidth={3}
      borderColor='#BBC2CC'
      onPress={onPress}
      style={style.appButton}
    >
      <Text style={style.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);

export default function WS_DinnerParty({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton} >
      <AppButton icon="sign-in" title="Hide" 
      onPress={()=>setSelectedWord(null)} 
      />
    </Pressable>)

    const Clamorous = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Clamorous</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>KLAM-uhr-uss</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Loud; expressively vehement.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>Throngs in the street roared with </Text>
                <Text style={style.bold}>clamorous </Text>
                <Text style={style.text}>applause.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

      const Diffident = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Diffident</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>DEFF-ih-dent</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>Unassertive; lacking in self-worth.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>She was perhaps too </Text>
                  <Text style={style.bold}>diffident </Text>
                  <Text style={style.text}>to work comfortably in an outgoing office environment.</Text>
                </Text>
            </View>
              <ListenButton />
        <AddButton />
              {hideButton}
          </View>         
          ) 
        }

        const Educe = () => {
          return(
            <View style={style.component}>
              <View style={style.screen}>
                <Text style={style.subHead}>Educe</Text>
                  <Text style={style.space}>
                    <Text style={style.title}>Pron: </Text>
                    <Text style={style.text}>ee-DYOOCE</Text>
                  </Text>
                  <Text style={style.space}>
                    <Text style={style.title}>Def: </Text>
                    <Text style={style.text}>To bring out the potential of something.</Text>
                  </Text>
                  <Text style={style.space}>
                    <Text style={style.title}>Sentence: </Text>
                    <Text style={style.text}>Myron's attempt to </Text>
                    <Text style={style.bold}>educe </Text>
                    <Text style={style.text}>his sister's talents as a painter were futile.</Text>
                  </Text>
              </View>
                <ListenButton />
        <AddButton />
                {hideButton}
            </View>         
            ) 
          }

    const Fatuous = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Fatuous</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>FAR-yoo-uss</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Stupid or foolish.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>She made so many </Text>
                <Text style={style.bold}>fatuous </Text>
                <Text style={style.text}>remarks at the party that I stopped apologizing for her.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

    const Gauche = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Gauche</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>gosh</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Tactless; lacking in social refinement.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>David's constant praise of his first wife was considered </Text>
                <Text style={style.bold}>gauche </Text>
                <Text style={style.text}>by his new mother-in-law.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

    const Harangue = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Harangue</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>huh-RANG</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>A scolding delivered in public.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>Mike's </Text>
                <Text style={style.bold}>harangue </Text>
                <Text style={style.text}>of his team left everyone feeling uncomfortable.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

      const Imbibe = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Imbibe</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>im-BIBE</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>To drink alcoholic beverages.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>Donald once had a drinking problem, but he no longer </Text>
                  <Text style={style.bold}>imbibes.</Text>
                </Text>
            </View>
              <ListenButton />
        <AddButton />
              {hideButton}
          </View>         
          ) 
        }

      const Juxtapose = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Juxtapose</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>JUK-stuh-pose</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>To place side by side for comparison.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>He </Text>
                  <Text style={style.bold}>juxtaposed </Text>
                  <Text style={style.text}>the two paragraphs in the essay and found evidence of plagiarism.</Text>
                </Text>
            </View>
              <ListenButton />
        <AddButton />
              {hideButton}
          </View>         
          ) 
        }
        
      const Largess = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Largess</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>lar-ZHESS</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>Generously bestowed gifts.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>Her father's </Text>
                  <Text style={style.bold}>largess </Text>
                  <Text style={style.text}>was the only thing standing between Barbara and bankruptcy.</Text>
                </Text>
            </View>
              <ListenButton />
        <AddButton />
              {hideButton}
          </View>         
          ) 
        }

      const Melodious = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Melodious</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>muh-LOW-dee-us</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>Pleasant or agreeable to the ear.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>The </Text>
                  <Text style={style.bold}>melodious </Text>
                  <Text style={style.text}>tones of his mother's voice reminded Wayne of his childhood.</Text>
                </Text>
            </View>
              <ListenButton />
              <AddButton />
              {hideButton}
          </View>         
          ) 
        }


  return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <ImageBackground source={dinnerparty} imageStyle={style.image} resizeMode="cover" style={style.page}>

      <View>
        <Text style={style.header}>Dinner Party</Text>
      </View>

      {selectedWord ? 
            selectedWord : 
            (<View>
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Clamorous" 
              onPress={()=>setSelectedWord(<Clamorous />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Diffident" 
              onPress={()=>setSelectedWord(<Diffident />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Educe" 
              onPress={()=>setSelectedWord(<Educe />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Fatuous" 
              onPress={()=>setSelectedWord(<Fatuous />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Gauche" 
              onPress={()=>setSelectedWord(<Gauche />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Harangue" 
              onPress={()=>setSelectedWord(<Harangue />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Imbibe" 
              onPress={()=>setSelectedWord(<Imbibe />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Juxtapose" 
              onPress={()=>setSelectedWord(<Juxtapose />)} 
              />
            </Pressable>
          </View>
          
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Largess" 
              onPress={()=>setSelectedWord(<Largess />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Melodious" 
              onPress={()=>setSelectedWord(<Melodious />)} 
              />
            </Pressable>
          </View>
          
      <View style={style.bottomButtons}>
        <Pressable style={navStyle.appButton}><AppButton title="Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
        <HomeButton navigation={navigation}/>
      </View>
      </View>)}

      </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingVertical: 30,
  },

  image: {
    opacity: .5,
  },

  header: {
    fontSize: 40,
    textShadowColor: '#000',
    textShadowRadius: 5,
    color: '#f0f8ff',
    fontWeight: '800',
    paddingVertical: 10,
    textAlign: 'center',
  },

  appButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  component: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 200
  },

  screen: {
    opacity: .7,
    backgroundColor: 'black',
    marginBottom: 40,
    padding: 20
  },

  subHead: {
    fontSize: 40,
    color: '#FF8C00'
  },

  text: {
    fontSize: 25,
    color: '#fff'
  },

  title: {
    fontSize: 25,
    color: '#FF8C00'
  },

  bold: {
    fontSize: 25,
    fontWeight: 600,
    color: '#FF8C00'
  },

  space: {
    paddingTop: 10,
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff'
  },

  appButtonContainer: {
    width: 200,
    marginVertical: 2
    },

  bottomButtons: {
    paddingTop: 20
  }

})