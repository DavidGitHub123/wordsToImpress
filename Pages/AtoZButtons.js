import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

export default function AtoZButtons({ navigation }) {

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
        <Text style={style.header}>Words AtoZ</Text>
      </View>

      <View style={style.section}>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="A"
          onPress={() => navigation.navigate('A')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="B"
          onPress={() => navigation.navigate('B')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="C"
          onPress={() => navigation.navigate('C')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="D"
          onPress={() => navigation.navigate('D')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="E"
          onPress={() => navigation.navigate('E')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="F"
          onPress={() => navigation.navigate('F')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="G"
          onPress={() => navigation.navigate('G')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="H"
          onPress={() => navigation.navigate('H')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="I"
          onPress={() => navigation.navigate('I')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="J"
          onPress={() => navigation.navigate('J')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="K"
          onPress={() => navigation.navigate('K')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="K"
          onPress={() => navigation.navigate('K')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="L"
          onPress={() => navigation.navigate('L')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="M"
          onPress={() => navigation.navigate('M')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="N"
          onPress={() => navigation.navigate('N')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="O"
          onPress={() => navigation.navigate('O')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="P"
          onPress={() => navigation.navigate('P')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Q"
          onPress={() => navigation.navigate('Q')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="R"
          onPress={() => navigation.navigate('R')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="S"
          onPress={() => navigation.navigate('S')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="T"
          onPress={() => navigation.navigate('T')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="U"
          onPress={() => navigation.navigate('U')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="V"
          onPress={() => navigation.navigate('V')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="W"
          onPress={() => navigation.navigate('W')}
          />
        </Pressable> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Z"
          onPress={() => navigation.navigate('Z')}
          />
        </Pressable> 
      </View>
        
      <View>
        <Pressable style={style.appButton} onPress={() => navigation.navigate('Home')}>
          <AppButton icon="sign-in" title="Home"/>
        </Pressable>
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

