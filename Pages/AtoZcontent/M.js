import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';
import { navStyle } from '../../components/NavButton.js';

export default function MWords({ navigation }) {

  const AppButton = ({ onPress, icon, title }) => (
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
          <Text style={style.header}>M Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Macabre" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Machination" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Macrocosm" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Magnate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Malady" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Maleficence" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Malevolent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Malice" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Malignant" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Malinger" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Malleable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mandate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Maniacal" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Maraud" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Maverick" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mawkish" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Meander" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Megalomania" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Melancholy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mellifluous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Melodious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mendacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mesmerize" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Metamorphosis" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Microcosm" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Misconstrue" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Misogyny" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mitigate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mollify" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Monolithic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Moribund" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Morose" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mortify" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Motley" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Multifaceted" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Multifarious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mundane" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Munificent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Muse" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Myopia" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Myriad" destination="Word"/>
        </View>

        <View style={style.bottomButtons}>
          <Pressable style={navStyle.appButton}><AppButton title="Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
          <HomeButton navigation={navigation}/>
        </View>

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
    paddingTop: 50,
    paddingBottom: 100
  },

  header: {
    fontSize: 30,
    color: '#f0f8ff',
    fontWeight: '800',
    paddingBottom: 20,
  },

  bottomButtons: {
    paddingTop: 50,
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


