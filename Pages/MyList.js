import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';

// import { onSnapshot } from "firebase/firestore" -- firebase database


export default function MyList({ navigation }) {

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
        <Text style={style.header}>My List</Text>
      </View>

      {/* Each word in this list is Button to word screen */}
      <View style={style.section}>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Abate"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Abdicate"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Aberration"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
      </View>

      <View>
      <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="A-Z Words"
          onPress={() => navigation.navigate('AtoZButtons')}
          />
        </Pressable>

        {/* <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Home"
          onPress={() => navigation.navigate('Home')}
          />
        </Pressable> */}
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
  
