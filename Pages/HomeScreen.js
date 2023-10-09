import { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import NavButton from '../components/NavButton';

export default function HomeScreen({ navigation }) {

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
      <SafeAreaView >
      <ScrollView alwaysBounceHorizontal={true}>
      <LinearGradient
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
      >

      <View style={style.page}>

        <Image source={require('../assets/logo_sm.png')}
        style={style.image}/>

      <View style={style.section}>
        <NavButton navigation={navigation} title="My Vocab List" destination="MyList"/>
        
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="A-Z Words"
          onPress={() => navigation.navigate('AtoZButtons')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Vocab Mastery"
          onPress={() => navigation.navigate('VocabMastery')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Word of Day"
          onPress={() => navigation.navigate('WordOfDay')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Word Situations"
          onPress={() => navigation.navigate('WordSituations')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Pre-Built List"
          onPress={() => navigation.navigate('PreBuiltList')}
          />
        </Pressable>

        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Build My List"
          onPress={() => navigation.navigate('BuildMyList')}
          />
        </Pressable>
       
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Learning System"
          onPress={() => navigation.navigate('System')}
          />
        </Pressable>
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
      justifyContent: 'center'
    },

  image: {
    width: 0,
    height: 0,
    paddingVertical: 100,
    paddingHorizontal: 200,
  },

  section: {
    paddingVertical: 30,
  },

  appButton: {
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
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

