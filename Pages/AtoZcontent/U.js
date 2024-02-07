import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';
import { navStyle } from '../../components/NavButton.js';

export default function UWords({ navigation }) {

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
          <Text style={style.header}>U Words</Text>
        </View>

        <View>
          <NavButtonWord navigation={navigation} title="Ubiquitous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ulterior" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ultimatum" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Umbrage" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Undulate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Unilateral" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Upbraid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ursine" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Usurp" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Utilitarian" destination="Word"/>
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


