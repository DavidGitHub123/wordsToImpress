import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import NavButton from '../components/NavButton';

export default function AtoZButtons({ navigation }) {

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

  return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <LinearGradient
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
      >

      <View style={style.page}>

      <View>
        <Text style={style.header}>Words AtoZ</Text>
      </View>

      <View style={style.section}>
        <NavButton navigation={navigation} title="A" destination="A"/>
        <NavButton navigation={navigation} title="B" destination="B"/>
        <NavButton navigation={navigation} title="C" destination="C"/>
        <NavButton navigation={navigation} title="D" destination="D"/>
        <NavButton navigation={navigation} title="E" destination="E"/>
        <NavButton navigation={navigation} title="F" destination="F"/>
        <NavButton navigation={navigation} title="G" destination="G"/>
        <NavButton navigation={navigation} title="H" destination="H"/>
        <NavButton navigation={navigation} title="I" destination="I"/>
        <NavButton navigation={navigation} title="J" destination="J"/>
        <NavButton navigation={navigation} title="K" destination="K"/>
        <NavButton navigation={navigation} title="L" destination="L"/>
        <NavButton navigation={navigation} title="M" destination="M"/>
        <NavButton navigation={navigation} title="N" destination="N"/>
        <NavButton navigation={navigation} title="O" destination="O"/>
        <NavButton navigation={navigation} title="P" destination="P"/>
        <NavButton navigation={navigation} title="Q" destination="Q"/>
        <NavButton navigation={navigation} title="R" destination="R"/>
        <NavButton navigation={navigation} title="S" destination="S"/>
        <NavButton navigation={navigation} title="T" destination="T"/>
        <NavButton navigation={navigation} title="U" destination="U"/>
        <NavButton navigation={navigation} title="V" destination="V"/>
        <NavButton navigation={navigation} title="W" destination="W"/>
        <NavButton navigation={navigation} title="Z" destination="Z"/>
      </View>
        
      <View>
        <HomeButton navigation={ navigation } />
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
    paddingVertical: 50,

  },

  header: {
    fontSize: 30,
    color: '#f0f8ff',
    fontWeight: '800',
  },

  section: {
    paddingVertical: 30,
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
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },

})

