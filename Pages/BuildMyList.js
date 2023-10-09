import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
// Paywall

export default function BuildMyList( { navigation } ) {

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
          <Text style={style.header}>Build My List</Text>
        </View>
        
          <View style={style.section}>
              <Text style={style.subHead}>Search your Writing</Text>
              <Text style={style.text}>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf</Text>
              <View style={style.buttonSpace}>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Text Search"
                  onPress={() => navigation.navigate('TextSearch')}
                  />
                </Pressable> 
              </View>
          </View>

          <View style={style.section}>
            <Text style={style.subHead}>Search your Speech</Text>
            <Text style={style.text}>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf</Text>
            <View style={style.buttonSpace}></View>
              <Pressable style={style.appButton} >
                <AppButton icon="sign-in" title="Conversation Search"
                onPress={() => navigation.navigate('ConversationSearch')}
                />
              </Pressable> 
            </View>
          </View>


        <View>
          <Pressable style={style.appButton} onPress={() => navigation.navigate('Home')}>
            <AppButton icon="sign-in" title="Home"/>
          </Pressable>
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

  subHead: {
    fontSize: 20,
    color: '#f0f8ff',
    fontWeight: '600',
    paddingVertical: 15,
  },

  section: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    color: '#f0f8ff',
    paddingHorizontal: 30,
  },

  buttonSpace: {
    paddingVertical: 10,
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
    paddingHorizontal: 0,
    width: 350
  },

})

