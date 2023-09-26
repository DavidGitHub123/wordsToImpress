import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AtoZButtons() {
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
    <View style={style.body}>

      <View>
        <Text style={style.header}>Words AtoZ</Text>
      </View>

      <View>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{A}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{B}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{C}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{D}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{E}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{F}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{G}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{H}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{I}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{J}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{K}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{L}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{M}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{N}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{O}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{P}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Q}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{R}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{S}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{T}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{U}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{V}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{W}"/>
        </Pressable>
        <Pressable onPress={onPress=()=> {}}>
          <AppButton icon="sign-in" title="{Z}"/>
        </Pressable>
      </View>
        
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