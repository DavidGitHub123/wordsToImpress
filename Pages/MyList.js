import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import NavButton from '../components/NavButton';

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

{/* When AddButton is clicked, word shows up in a list here */}
      {/* Each word in this list is Button to word screen */}
      {/* Add ShowComponentButton. Click on word and word info shows up*/}
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
        <NavButton navigation={navigation} title="A-Z Words" destination="AtoZButtons"/>
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
  
