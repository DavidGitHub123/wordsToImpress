import { View, Image, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function NavButton({ navigation, title, destination, icon="sign-in" }){

    const AppButton = ({ onPress, icon, title, backgroundColor }) => (
        <View style={navStyle.appButtonContainer}>
          <Icon.Button
            name={icon}
            backgroundColor='#FF8C00'
            borderRadius={40}
            borderWidth={5}
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
        />
      </Pressable> )
}


const navStyle = StyleSheet.create({
  
    appButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    appButtonText: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
    },
  
    appButtonContainer: {
      width: 250,
      paddingVertical: 3,
    },
  
  })

  export {NavButton, navStyle}