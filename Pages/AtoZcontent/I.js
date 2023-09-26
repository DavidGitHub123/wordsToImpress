import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function IWords() {
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
          <Text style={style.header}>I Words</Text>
        </View>

        <View onPress={toWordScreen}>
        {/* onPress takes you to the corresponding word screen */}
        
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Iconoclastic"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Ignoble"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Ignominious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Illicit"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imbibe"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imbroglio"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imbue"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Immaculate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Immolate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impalpable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imparity"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impasse"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imperative"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imperceptible"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Imperious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impertinent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impetuous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Implicit"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Implore"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Importunate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impregnable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impropriety"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Impugn"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inadvertent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inane"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incarnate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inception"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incessant"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inchoate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incipient"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incisive"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inclement"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incognito"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incorporeal"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Incorrigible"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inculcate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inculpate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Indefatigable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Indelible"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Indemnify"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Indolent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inebriated"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Ineffable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Ineluctable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inertia"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inexorable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inexpliable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Infallible"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Infernal"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Ingrate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inherent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inimical"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Innate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Innocuous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Innoculate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inroad"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inscrutable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Insidious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Insipid"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Insolent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Insubordinate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Insurgence"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Intercession"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Interim"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Intermittent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Intransigent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Intrepid"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Intrinsic"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Introspection"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inundate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Invective"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inveigh"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Inveterate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Irascible"/>
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





        