import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


// Paywall

export default function BuildMyList() {
  const navigate = useNavigate()
  
  return (
    <SafeAreaView style={style.body}>
    <ScrollView alwaysBounceHorizontal={true}>
      <View style={style.body}>

        <View>
          <Text style={style.header}>Build My List</Text>
        </View>
        
        <View>
            <View style={style.flex}>
              <Text>Search Your Writing</Text>
              <p>asdf asdf asdf asdf asdf asdf asdf asdf asdf</p>
            </View>
            <View style={style.flex}>
              <Text>Search your Speech</Text>
              <Text>asdf asdf asdf asdf asdf asdf asdf asdf asdf</Text>
            </View>
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
