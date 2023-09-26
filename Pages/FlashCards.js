import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function FlashCards() {
  const navigate = useNavigate()
  return (
    <SafeAreaView style={style.body}>
    <ScrollView alwaysBounceHorizontal={true}>
    <View style={style.body}>

      <View>
          <Text style={style.header}>Flash Cards</Text>
          // Flash Cards/Show Word/Click Button to Reveal answer
          // Words at random from MyList
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