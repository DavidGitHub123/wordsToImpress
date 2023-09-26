import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function BWords() {
  const navigate = useNavigate()

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
    <SafeAreaView style={style.body}>
    <ScrollView alwaysBounceHorizontal={true}>

        <View>
          <Text style={style.header}>B Words</Text>
        </View>

        <View onPress={toWordScreen}>
        {/* onPress takes you to the corresponding word screen */}
        
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Babbitt"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Baccalaureate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Balderdash"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bandy"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Baneful"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Barbarous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Barrage"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bedraggled"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Befuddle"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Belated"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Beleaguered"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Belie"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Belligerent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bemused"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Benevolent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Benighted"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bequeath"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bereaved"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Beseech"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bestial"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bestow"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bête noire"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bilateral"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bilk"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Binary"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Biogenesis"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bipolar"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Blasé"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Blather"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Blithe"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bludgeon"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bluster"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bohemian"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bombast"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bona Fide"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Boorish"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bovine"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Braggadocio"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Brandish"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Brash"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bravado"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Brevity"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Brunt"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Brusk"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bugaboo"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bumptious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Bygone"/>
        </Pressable>

        <View>
          <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Home}"/>
          </Pressable>
        </View>


        </View>
    </ScrollView>
    </SafeAreaView>
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




           