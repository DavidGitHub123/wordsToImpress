import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../../components/HomeButton';
import AddButton from '../../components/AddButton';
import ListenButton from '../../components/ListenButton';
import { navStyle } from '../../components/NavButton.js';
import business from '../../assets/Backgrounds/business.jpg'

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

export default function WS_Business({ navigation }) {
const [selectedWord, setSelectedWord] = useState(null);

const hideButton = (
  <Pressable style={style.appButton} >
    <AppButton icon="sign-in" title="Hide" 
    onPress={()=>setSelectedWord(null)} 
    />
  </Pressable>)

const Accolade = () => {
  return(
    <View style={style.component}>
      <View style={style.screen}>
        <Text style={style.subHead}>Accolade</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>AK-uh-lade</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Acknowledgement or expression of praise.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The president hung on his office wall many plaques, citations, and </Text>
            <Text style={style.bold}>accolades.</Text>
          </Text>
      </View>
        <ListenButton />
        <AddButton />
        {hideButton}
    </View>         
    ) 
  }

  const Bluster = () => {
    return(
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Bluster</Text>
            <Text style={style.space}>
              <Text style={style.title}>Pron: </Text>
              <Text style={style.text}>BLUS-ter</Text>
            </Text>
            <Text style={style.space}>
              <Text style={style.title}>Def: </Text>
              <Text style={style.text}>To threaten or issue extravagant threat.</Text>
            </Text>
            <Text style={style.space}>
              <Text style={style.title}>Sentence: </Text>
              <Text style={style.text}>The CEO seems fierce at first because he </Text>
              <Text style={style.bold}>blusters </Text>
              <Text style={style.text}>to get his way.</Text>
            </Text>
        </View>
          <ListenButton />
        <AddButton />
          {hideButton}
      </View>         
      ) 
    }

    const Cartel = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Cartel</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>kar-TELL</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Group that establishes mutual control of prices and production.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>The oil  </Text>
                <Text style={style.bold}>cartel </Text>
                <Text style={style.text}>succeeded in driving world energy prices up significantly.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

      const Diminution = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Diminution</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>dim-ih-NOO-shen</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>Reduction due to outside influences.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>The stock fell by 75%; not sure we can recover from such a </Text>
                  <Text style={style.bold}>diminution.</Text>
                </Text>
            </View>
              <ListenButton />
        <AddButton />
              {hideButton}
          </View>         
          ) 
        }

    const Effrontery = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Effrontery</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>ih-FRON-ter-ee</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Impudent boldness.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>She had the </Text>
                <Text style={style.bold}>effrontery</Text>
                <Text style={style.text}>to ask for a raise after a dreadful performance.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

    const Feckless = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Feckless</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>FEK-liss</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Ineffective or feeble.</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>We had hoped for a well-trained consulting firm; we got a pack of </Text>
                <Text style={style.bold}>feckless</Text>
                <Text style={style.text}>hangers-on.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

    const Gargantuan = () => {
      return(
        <View style={style.component}>
          <View style={style.screen}>
            <Text style={style.subHead}>Gargantuan</Text>
              <Text style={style.space}>
                <Text style={style.title}>Pron: </Text>
                <Text style={style.text}>gar-GAN-choo-un</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Def: </Text>
                <Text style={style.text}>Enormous. From fictional king (Gargantua).</Text>
              </Text>
              <Text style={style.space}>
                <Text style={style.title}>Sentence: </Text>
                <Text style={style.text}>The </Text>
                <Text style={style.bold}>gargantuan </Text>
                <Text style={style.text}>scale of the budget deficit caught us by surprisehangers-on.</Text>
              </Text>
          </View>
            <ListenButton />
        <AddButton />
            {hideButton}
        </View>         
        ) 
      }

      const Harbinger = () => {
        return(
          <View style={style.component}>
            <View style={style.screen}>
              <Text style={style.subHead}>Harbinger</Text>
                <Text style={style.space}>
                  <Text style={style.title}>Pron: </Text>
                  <Text style={style.text}>HAR-bin-jur</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Def: </Text>
                  <Text style={style.text}>Forerunner. Something that comes before.</Text>
                </Text>
                <Text style={style.space}>
                  <Text style={style.title}>Sentence: </Text>
                  <Text style={style.text}>These sales figures are a </Text>
                  <Text style={style.bold}>harbinger </Text>
                  <Text style={style.text}>of hard times ahead.</Text>
                </Text>
            </View>
              <ListenButton />
        <AddButton />
              {hideButton}
          </View>         
          ) 
        }

        const Impetuous = () => {
          return(
            <View style={style.component}>
              <View style={style.screen}>
                <Text style={style.subHead}>Impetuous</Text>
                  <Text style={style.space}>
                    <Text style={style.title}>Pron: </Text>
                    <Text style={style.text}>im-PET-you-us</Text>
                  </Text>
                  <Text style={style.space}>
                    <Text style={style.title}>Def: </Text>
                    <Text style={style.text}>Impulsive; driven by emotion.</Text>
                  </Text>
                  <Text style={style.space}>
                    <Text style={style.title}>Sentence: </Text>
                    <Text style={style.text}>Dirk's heated and </Text>
                    <Text style={style.bold}>impetuous </Text>
                    <Text style={style.text}>remark may well cost him his job.</Text>
                  </Text>
              </View>
                <ListenButton />
        <AddButton />
                {hideButton}
            </View>         
            ) 
          }

          const Logistics = () => {
            return(
              <View style={style.component}>
                <View style={style.screen}>
                  <Text style={style.subHead}>Logistics</Text>
                    <Text style={style.space}>
                      <Text style={style.title}>Pron: </Text>
                      <Text style={style.text}>loe-JIS-tiks</Text>
                    </Text>
                    <Text style={style.space}>
                      <Text style={style.title}>Def: </Text>
                      <Text style={style.text}>Essential details of how something is to be accomplished.</Text>
                    </Text>
                    <Text style={style.space}>
                      <Text style={style.title}>Sentence: </Text>
                      <Text style={style.text}>Jane knew the trip could not begin until the </Text>
                      <Text style={style.bold}>logistics </Text>
                      <Text style={style.text}>were worked out.</Text>
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
    <ImageBackground source={business} imageStyle={style.image} resizeMode="cover" style={style.page}>

        <View>
          <Text style={style.header}>Business</Text>
        </View>

          {selectedWord ? 
            selectedWord : 
            (<View>
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Accolade" 
              onPress={()=>setSelectedWord(<Accolade/>)} 
              />
            </Pressable>
          </View>
  
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Bluster" 
              onPress={()=>setSelectedWord(<Bluster/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Cartel" 
              onPress={()=>setSelectedWord(<Cartel/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Diminution" 
              onPress={()=>setSelectedWord(<Diminution/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Effrontery" 
              onPress={()=>setSelectedWord(<Effrontery/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Feckless" 
              onPress={()=>setSelectedWord(<Feckless/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Gargantuan" 
              onPress={()=>setSelectedWord(<Gargantuan/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Harbinger" 
              onPress={()=>setSelectedWord(<Harbinger/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Impetuous" 
              onPress={()=>setSelectedWord(<Impetuous/>)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Logistics" 
              onPress={()=>setSelectedWord(<Logistics/>)} 
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