import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen() {

    return (
      <SafeAreaView style={style.body}>
      <ScrollView alwaysBounceHorizontal={true}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <Button
          title="My Vocab List"
          onPress={() => navigation.navigate('MyList')}
        />

        <Button
          title="Vocab Mastery"
          onPress={() => navigation.navigate('VocabMastery')}
        />

        <Button
          title="Word of Day"
          onPress={() => navigation.navigate('WordofDay')}
        />

        <Button
          title="Word Situations"
          onPress={() => navigation.navigate('WordSituations')}
        />

        <Button
          title="Build My List"
          onPress={() => navigation.navigate('BuildMyList')}
        />

        <Button
          title="Learning System"
          onPress={() => navigation.navigate('System')}
        />

      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }


  // const Stack = createNativeStackNavigator();

 function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
          <Stack.Screen name="My Vocab List" component={MyList} options={{ title: 'MyVocabList'}}/>
          <Stack.Screen name="Vocab Mastery" component={VocabMastery} options={{ title: 'VocabMastery'}}/>
          <Stack.Screen name="Word of Day" component={WordofDay} options={{ title: 'WordofDay'}}/>
          <Stack.Screen name="Word Situations" component={WordSituations} options={{ title: 'WordSituations'}}/>
          <Stack.Screen name="Build My List" component={BuildMyList} options={{ title: 'BuildMyList'}}/>
          <Stack.Screen name="Learning System" component={System} options={{ title: 'LearningSystem'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const style = StyleSheet.create({
    body: {
      backgroundColor: 'cmyk(5, 0, 0, 0)',
      fontFamily: 'Helvetica',
      color: '#000',
      display: 'flex',
    },
  
    flex: {
      display: 'flex',
      fontSize: 10
    },
  
    header: {
      backgroundColor: 'cmyk(92, 46, 0, 0)',
      display: 'flex',
      fontSize: 18,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
  
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 80,
      backgroundColor: "#555",
    },
    appButton: {
      padding: 12,
    },
    appButtonText: {
      fontSize: 17,
    },
    appButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
  })



