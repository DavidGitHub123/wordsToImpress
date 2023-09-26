import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WS_Boss() {
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

    const [show, setShow] = useState(true);

  return (
    <SafeAreaView style={style.body}>
      <ScrollView alwaysBounceHorizontal={true}>

        <View>
            <Text style={style.header}>Word Situations: Boss</Text>
        </View>  

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_1_Abberation /> : null }
                    <AppButton icon="sign-in" title="Aberration" />
                </Pressable>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_2_Beleaguered /> : null }
                    <AppButton icon="sign-in" title="Beleaguered"/>
                </Pressable>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_3_Debacle /> : null }
                    <AppButton icon="sign-in" title="Debacle"/>
                </Pressable>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_4_Echelon /> : null }
                    <AppButton icon="sign-in" title="Echelon"/>
                </Pressable>
            </View>

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_5_Garner /> : null }
                    <AppButton icon="sign-in" title="Garner"/>
                </Pressable>
            </View> 

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_6_Ignoble /> : null }
                    <AppButton icon="sign-in" title="Ignoble"/>
                </Pressable>
            </View> 

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_7_Jettison /> : null }
                    <AppButton icon="sign-in" title="Jettison"/>
                </Pressable>
            </View> 

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_8_Keynote /> : null }
                    <AppButton icon="sign-in" title="Keynote"/>
                </Pressable>
            </View> 

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_9_Laggard /> : null }
                    <AppButton icon="sign-in" title="Laggard"/>
                </Pressable>
            </View> 

            <View>
                <Pressable onPress={onPress=()=>setShow(!show)}>
                    { show == true ? <Component_10_Narcissistic /> : null }
                    <AppButton icon="sign-in" title="Narcissistic"/>
                </Pressable>
            </View>     

        <View>
          <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Home}"/>
          </Pressable>
        </View>

    </ScrollView>
    </SafeAreaView>
  );
}

const Component_1_Abberation = () => {
    return(
    <View>
        <Text>Pron. ab-uh-RAY-shun</Text>
        <Text>Def. Viewerging from expected course.</Text>
        <Text>E.g. Sally's poor work was hardly grounds for dismissal; it was an <span>aberration</span> caused by problems at home.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_2_Beleaguered = () => {
    return(
    <View>
        <Text>Pron. ab-uh-RAY-shun</Text>
        <Text>Def. Viewerging from expected course.</Text>
        <Text>E.g. Sally's poor work was hardly grounds for dismissal; it was an <span>aberration</span> caused by problems at home.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_3_Debacle = () => {
    return(
    <View>
        <Text>Pron. dih-BA-kull</Text>
        <Text>Def: Utter collapse or rout.</Text>
        <Text>The initiative seemed promising, but turned out to be George's <span>debacle</span>.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_4_Echelon = () => {
    return(
    <View>
        <Text>Pron. ESH-uh-lom</Text>
        <Text>Def: A level of command.</Text>
        <Text>Tom's proposal eventually won the approval of the company's upper <span>echelon</span> of leaders.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_5_Garner = () => {
    return(
    <View>
        <Text>Pron. GAR-ner</Text>
        <Text>Def: To gather or accumulate.</Text>
        <Text>William <span>garnered</span> much praise for his management skills.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_6_Ignoble = () => {
    return(
    <View>
        <Text>Pron. ig-NO-bull</Text>
        <Text>Def: Dishonorable in nature.</Text>
        <Text>Peter's <span>ignoble</span> aims were well known to the human resources department, which led to his firing.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_7_Jettison = () => {
    return(
    <View>
        <Text>Pron. JET-ih-son</Text>
        <Text>Def: To cast off or overboard.</Text>
        <Text>The project seemed promising, but after research we <span>jettisoned</span> the project.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_8_Keynote = () => {
    return(
    <View>
        <Text>Pron. KEE-note</Text>
        <Text>Shortdef: "A prime theme; underlying element.</Text>
        <Text>The <span>keynote</span> speaker addressed many problems related to productivity that faces our organization.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_9_Laggard = () => {
    return(
    <View>
        <Text>Pron. LAG-urd</Text>
        <Text>Def: One who lags behind or loiters.</Text>
        <Text>We completed the project; it is the <span>laggards</span> in accounting you should take to task.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Component_10_Narcissistic = () => {
    return(
    <View>
        <Text>Pronunciation: nar-sis-SIS-tik</Text>
        <Text>Def: Possessed by self-love.</Text>
        <Text>Self-promotion is one thing; the <span>narcissistic</span> zeal with which Gerald asserts himself is another.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
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
