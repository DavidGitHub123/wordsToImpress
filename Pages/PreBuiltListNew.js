import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import { NavButtonWord } from '../components/NavButtonWord';


  export default function PreBuiltListNew({ navigation }) {

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
            colors={["#4682B4", "#6699CC"]}
            start={[0.25, 0.25]}
            opacity={.95}
          >
  
        <View style={style.page}>
  
        <View>
            <Text style={style.header}>Pre-Built List</Text>
            <Text style={style.header}>Of 50 Words</Text>
            <Text style={style.text}>Add these words to create a quick starter list and begin learning today!</Text>
        </View>
  
        <View>
          <NavButtonWord navigation={navigation} title="Abstemious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Acrid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Acrimonious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Adamant" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Agnosticism" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Animosity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Anomaly" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ardent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ascetic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Avarice" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Biogenesis" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bovine" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Cohort " destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deplorable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dexterous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Discomfit" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disparate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Emphatic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Emulate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Enigmatic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Erratic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Espouse" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Eurdite" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Febrile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Foray" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grimace" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Hubris" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Impugn" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Inane" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Indelible" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Intercession" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Jurisprudence" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Livid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Mundane" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Myriad" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ostracized" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pander" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paradox" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perjure" destination=""/>
          <NavButtonWord navigation={navigation} title="Pinnacle" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Placate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Protégé" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Provocative" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Rectify" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Renege" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Reprobate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Rhetoric" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Stalemate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vanguard" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vehement" destination="Word"/>
      </View>

        <View>
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
      margin: 30,
    },

    header: {
        fontSize: 50,
        color: '#FF8C00',
        fontWeight: '800',
    },

    subHead: {
      fontSize: 30,
      color: '#FF8C00',
      fontWeight: 'bold',
    },

    text: {
        fontSize: 25,
        color: '#f0f8ff',
        paddingBottom: 20,
    },

    bold: {
        fontSize: 30,
        color:  '#FF8C00',
        // fontWeight: 800,
      },
  
    appButton: {
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    appButtonText: {
      fontSize: 20,
      color: '#fff'
    },
  
    appButtonContainer: {
      paddingVertical: 10,
      width: 250
    },
  
  })
  
