import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';
import { navStyle } from '../../components/NavButton.js';

export default function VWords({ navigation }) {

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
          <Text style={style.header}>V Words</Text>
        </View>

        <View>
          <NavButtonWord navigation={navigation} title="Vacillate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vacuous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vagary" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vanguard" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vehement" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Venerable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Verbose" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Veritable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vestige" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vicarious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vindictive" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Virile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Visceral" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vivacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vociferous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Volatile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Voracious" destination="Word"/>
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


