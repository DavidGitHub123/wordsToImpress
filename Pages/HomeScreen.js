import { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import { NavButton}  from '../components/NavButton';
import { LearnButton }  from '../components/LearnButton';
import { MyProgressButton }  from '../components/MyProgressButton';

export default function HomeScreen({ navigation }) {

  // const AppButton = ({ onPress, icon, title, backgroundColor }) => (
  //   <View style={style.appButtonContainer}>
  //     <Icon.Button
  //       name={icon}
  //       backgroundColor={backgroundColor}
  //       onPress={onPress}
  //       style={style.appButton}
  //     >
  //       <Text style={style.appButtonText}>{title}</Text>
  //     </Icon.Button>
  //     </View>
  // );

  const seperatorStyles = {
    height: 1, 
    width: '100%',
    backgroundColor: '#ddd',
  };

  const Seperator = () => <View style={seperatorStyles} />;

  
  return (
      <SafeAreaView >
      <ScrollView alwaysBounceHorizontal={true}>
      <LinearGradient
          colors={["#4682B4", "#6699CC"]}
          start={[0.25, 0.25]}
          opacity={.95}
              // colors={["#4169e1", "#6699CC"]}
        // colors={['#6699CC', '#89CFF0']}
        // start={{ x: .25, y: .15 }}
        // end={{ x: .25, y: .75 }}
      >

      <View style={style.page}>

      <View style={style.flexboxHeader}>
        {/* <Button icon={
          <Icon
            name="chart-line"
            size={15}
            color="white"
          /> }
            title="MyProgress" color="#f0f8ff"
        /> */}
        <MyProgressButton navigation={navigation} title="MyProgress" destination="System"/> 
        <LearnButton navigation={navigation} title="Learn" destination="System"/> 
      </View>

      <Seperator />

      <View style={style.flexbox}>
        <View style={style.container}>
          <Text style={style.header}>Build Your Vocabulary PROWESS</Text>
          <Text style={style.subHead}>With an AI solution to build the perfect vocabulary for you!</Text>
          <NavButton navigation={navigation} title="My Vocab List" destination="MyList"/>
        </View>
        <View style={style.imageContainer}>
          <Image style={style.image} source={require('../assets/logo_sm.png')} />
          
        </View>
      </View>

      <Seperator />

      <View>
        <NavButton navigation={navigation} title="Build My List" destination="BuildMyList"/>
        <NavButton navigation={navigation} title="Pre-Built List" destination="PreBuiltListNew"/>    
        <NavButton navigation={navigation} title="Vocab Mastery" destination="VocabMastery"/>
        <NavButton navigation={navigation} title="Word Situations" destination="WordSituations"/> 
        <NavButton navigation={navigation} title="A-Z Words" destination="AtoZButtons"/>
        <NavButton navigation={navigation} title="Word of Day" destination="WordOfDay"/> 
      </View>

      </View>

    </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}

const Square = () => {
  return <View style={style.square} />;
};

StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

const style = StyleSheet.create({

  page: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // flexDirection: 'row',
      padding: 10
    },

  flexboxHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  flexbox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
  },

  container: {
    height: 270,
    width: 220,
    margin: 10,
    padding: 10,
  },

  imageContainer: {
    height: '10vh',
    width: '10vh',

  },

  image: {
    // overflow: 'hidden',
    // height: 200, 
    // width: 200,
    // resizeMode: 'contain',
    // aspectRatio: 1,
    // color: 'black'
      flex: 1,
      width: 50,
      height: 50,
      resizeMode: 'contain'

  },


  header: {
    fontSize: 36,
    color: '#f0f8ff',
    fontWeight: '800',
  },

  subHead: {
    fontSize: 18,
    color: '#f0f8ff',
    fontWeight: '500',
  },


})

