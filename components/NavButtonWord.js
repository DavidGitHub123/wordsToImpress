import { View, Image, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function NavButtonWord({ navigation, title, destination, icon="sign-in" }){

    const AppButton = ({ onPress, icon, title, backgroundColor }) => (
        <View style={navStyle.appButtonContainer}>
          <Icon.Button
            name={icon}
            backgroundColor='#FF8C00'
            borderRadius={40}
            borderWidth={3}
            borderColor='#BBC2CC'
            onPress={onPress}
            style={navStyle.appButton}
          >
            <Text style={navStyle.appButtonText}>{title}</Text>
          </Icon.Button>
        </View>
      );
      
    return (<Pressable style={navStyle.appButton} >
        <AppButton icon={icon} title={title}
        onPress={() => navigation.navigate(destination, {selectedWord: title})}
        // Once at Word Screen, populate fields
        />
      </Pressable> )
}


const navStyle = StyleSheet.create({
  
  appButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff'
  },

  appButtonContainer: {
    width: 270,
    marginVertical: 2
    },

  bottomButtons: {
    paddingTop: 20
  }
  
  })

  export {NavButtonWord, navStyle}