import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Button, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';

export default function WS_Boss({ navigation }) {

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

      const [elementVisible, setElementVisible] = useState(null);

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
            <Text style={style.header}>Word Situations: Boss</Text>
        </View> 

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Abberation' : 'Abberation'}
                    onPress={() => setElementVisible((<View
                        style={style.textTopMargin}
                        title={''}
                        onPress={() => setElementVisible(null)}
                        >
                            <View style={style.textBottomMargin}>
                                <Text style={style.text}>Pron. ab-uh-RAY-shun</Text>
                                <Text style={style.text}>Def: Diverging from an expected course.</Text>
                            </View>  
                            <Text>
                                <Text style={style.text}>Sally's poor work was hardly grounds for dismissal; it was an </Text>
                                <Text style={style.bold}>aberration </Text>
                                <Text style={style.text}>caused by problems at home.</Text>
                            </Text>
                            <Pressable style={style.appButton} >
                            <AppButton  icon="sign-in" title="Add to My List"
                            onPress={() => navigation.navigate('')}
                            />
                            </Pressable>
                        </View>  ))}
                />
            </View>
            <View>
                {elementVisible}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Beleaguered' : 'Beleaguered'}
                    onPress={() => setElementVisible((
                        <View
                        style={style.textTopMargin}
                        title={elementVisible ? '' : ''}
                        onPress={() => setElementVisible(null)}
                        >
                        <View style={style.textBottomMargin}>
                            <Text style={style.text}>Pron. 'bee-LEEG-erd'</Text>
                            <Text style={style.text}>Def. Embattled; constantly confronted with obstacles.</Text>
                        </View>
                            <Text>
                                <Text style={style.text}>The</Text>
                                <Text style={style.bold}> beleaguered</Text>
                                <Text style={style.text}> marketing team even considered direct mail, but vowed to fight on. </Text>
                            </Text>
                            <Pressable style={style.appButton} >
                            <AppButton icon="sign-in" title="Add to My List"
                            onPress={() => navigation.navigate('')}
                            />
                            </Pressable>
                        </View>         
                    ))}
                />
            </View>
            <View>
                
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Debacle' : 'Debacle'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. dih-BA-kull</Text>
                        <Text style={style.text}>Def: Utter collapse or rout.</Text>
                    </View>     
                    <Text>
                        <Text style={style.text}>The initiative seemed promising, but turned out to be George's </Text>
                        <Text style={style.bold}>debacle.</Text>
                    </Text>
                    <Pressable style={style.appButton} >
                    <AppButton icon="sign-in" title="Add to My List"
                    onPress={() => navigation.navigate('')}
                    />
                    </Pressable>
                    </View>         
                ) : null}
            </View>
            </View>
            
        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Echelon' : 'Echelon'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. ESH-uh-lom</Text>
                        <Text style={style.text}>Def: A level of command.</Text>
                    </View>
                    <Text>
                        <Text style={style.text}>Tom's proposal eventually won the approval of the company's upper </Text> 
                        <Text style={style.bold}>echelon</Text>
                        <Text style={style.text}> of leaders.</Text>
                    </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                    </View>   
                ) : null}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Garner' : 'Garner'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. GAR-ner</Text>
                        <Text style={style.text}>Def: To gather or accumulate.</Text>
                    </View>
                        <Text>
                            <Text style={style.text}>William </Text>
                            <Text style={style.bold}>garnered</Text>
                            <Text style={style.text}> much praise for his management skills.</Text>
                        </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                    </View>         
                ) : null}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Ignoble' : 'Ignoble'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. ig-NO-bull</Text>
                        <Text style={style.text}>Def: Dishonorable in nature.</Text>
                    </View> 
                        <Text>
                            <Text style={style.text}>Peter's </Text>
                            <Text style={style.bold}>ignoble </Text>
                            <Text style={style.text}>aims were well known to the human resources department, which led to his firing.</Text>
                        </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                    </View>         
                ) : null}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Jettison' : 'Jettison'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. JET-ih-son</Text>
                        <Text style={style.text}>Def: To cast off or overboard.</Text>
                    </View> 
                        <Text>
                            <Text style={style.text}>The project seemed promising, but after research we </Text> 
                            <Text style={style.bold}>jettisoned</Text> 
                            <Text style={style.text}>the project.</Text>
                        </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                        </View>
                ) : null}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Keynote' : 'Keynote'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. KEE-note</Text>
                        <Text style={style.text}>Shortdef: "A prime theme; underlying element.</Text>
                    </View>
                        <Text>
                            <Text style={style.text}>The </Text>
                            <Text style={style.bold}>keynote </Text>
                            <Text style={style.text}>speaker addressed many problems related to productivity that faces our organization.</Text>
                        </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                    </View>         
                ) : null}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Laggard' : 'Laggard'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pron. LAG-urd</Text>
                        <Text style={style.text}>Def: One who lags behind or loiters.</Text>
                    </View> 
                        <Text>
                            <Text style={style.text}>We completed the project; it is the </Text>
                            <Text style={style.bold}>laggards </Text>
                            <Text style={style.text}>in accounting you should take to task.</Text>
                        </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                        </View> 
                ) : null}
            </View>
        </View>

        <View style={style.container}>
            <View>
                <Button 
                    style={style.word}
                    title={elementVisible ? 'Narcissistic' : 'Narcissistic'}
                    onPress={() => setElementVisible(!elementVisible)}
                />
            </View>
            <View>
                {elementVisible ? (
                    <View
                    style={style.textTopMargin}
                    title={elementVisible ? '' : ''}
                    onPress={() => setElementVisible(!elementVisible)}
                    >
                    <View style={style.textBottomMargin}>
                        <Text style={style.text}>Pronunciation: nar-sis-SIS-tik</Text>
                        <Text style={style.text}>Def: Possessed by self-love.</Text>
                    </View> 
                        <Text>
                            <Text style={style.text}>Self-promotion is one thing; the </Text>
                            <Text style={style.bold}>narcissistic </Text>
                            <Text style={style.text}>zeal with which Gerald asserts himself is another.</Text>
                        </Text>
                        <Pressable style={style.appButton} >
                        <AppButton icon="sign-in" title="Add to My List"
                        onPress={() => navigation.navigate('')}
                        />
                        </Pressable>
                    </View>         
                ) : null}
            </View>
        </View>


        <View>
            <HomeButton navigation={navigation}/>
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
      paddingVertical: 0,
      paddingHorizontal: 30,
    },

    header: {
      fontSize: 30,
      color: '#f0f8ff',
      fontWeight: '700',
      marginBottom: 20,
    },

    container: {
      marginBottom: 20,
    },

    textTopMargin: {
        marginTop: 10,
    },

    textBottomMargin: {
        marginBottom: 10,
    },

    // no effect on button android
    word: {
        marginTop: 0,
    },

    text: {
      fontSize: 15,
      color: '#f0f8ff',
      paddingHorizontal: 20,
    },

    bold: {
        fontSize: 17,
        color:  '#800080',
        // fontWeight: 800,
      },

    marginButton: {
        paddingHorizontal: 20,
        paddingBottom: 30,
      },
  
    appButton: {
      paddingHorizontal: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    appButtonText: {
      fontSize: 12,
      color: '#fff'
    },
  
    appButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 0,
      width: 150
    },
  
  })
  

  