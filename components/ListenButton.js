import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';
import data from '../data.js';

export default function ListenButton({audio}){

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

  // const { audio } = Props;
  // console.log(audio) 

  const [sound, setSound] = useState([]);

  async function playSound() {
    console.log('Loading Sound');
    console.log("audio:", audio)
    console.log(typeof audio)
    // const { sound } = await Audio.Sound.createAsync( {audio} )
    // const { sound } = await Audio.Sound.createAsync(require(audio))
    // const { sound } = await Audio.Sound.createAsync(require( {Audio} ))
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          // sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
      
    return(            
    <Pressable style={style.appButton} >
        <AppButton icon="volume-off" title="Listen"
        onPress={playSound}
        />
    </Pressable>
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
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    appButtonText: {
      fontSize: 20,
      color: '#fff'
    },
  
    appButtonContainer: {
      width: 300,
    },
  
  })
  
