import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';
import { navStyle } from '../../components/NavButton.js';

export default function HWords({ navigation }) {

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
          <Text style={style.header}>H Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Hackneyed" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Halcyon" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hallow" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Haphazard" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hapless" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Harangue" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Haute Couture" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Haute Cuisine" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hegemony" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Heinous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Herculean" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Heretic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Heterogeneous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hiatus" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hierarchy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Holistic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Homage" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hubris" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hyperbole " destination="Word"/>
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


