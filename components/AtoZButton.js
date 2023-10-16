import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AtoZButton({ navigation }){

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
      
    return(        
    <Pressable style={style.appButton} >
        <AppButton icon="sign-in" title="{Word to go to}"
        onPress={() => }
        />
    </Pressable>);
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
  
