import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddButton({ navigation }){

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
      
    return(        
    <Pressable style={style.appButton} >
        <AppButton icon="plus" title="Add to My List"
        onPress={() => navigation.navigate('HomeScreen')}
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
      width: 300,
      paddingVertical: 10,
      paddingHorizontal: 0,
    },
  
  })
  
