import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import data from './data.js';



export default function Word() {
  const navigate = useNavigate()
  return (
    <SafeAreaView style={style.body}>
    <ScrollView alwaysBounceHorizontal={true}>
    <View style={style.body}>

      <View>
        <Text>{props.word}</Text>
        <Text>{props.Pronunciation}</Text>
        <Text>Definition</Text>
        <Text>{props.Shortdef}</Text>
        <Text>Sentence</Text>
        <Text>{props.Longdef}</Text>
      </View>

        <View>
          <Pressable onPress={onPress=()=> {}}>
              <AppButton icon="sign-in" title="{Add to My List}"/>
          </Pressable>
        </View>

        <View>
          <Pressable onPress={onPress=()=> {}}>
              <AppButton icon="sign-in" title="{Schedule Quizzes}"/>
          </Pressable>
          <Pressable onPress={onPress=()=> {}}>
              <AppButton icon="sign-in" title="{ChallengeFriend}"/>
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