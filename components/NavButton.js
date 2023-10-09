import { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

export default function NavButton({ navigation, title, destination, icon="sign-in" }){

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
      
    return (<Pressable style={style.appButton} >
        <AppButton icon={icon} title={title}
        onPress={() => navigation.navigate(destination)}
        />
      </Pressable>)
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