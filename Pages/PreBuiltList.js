import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../components/HomeButton';
import NavButton from '../components/NavButton';


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

export default function PreBuiltList({ navigation }) {
    const [selectedWord, setSelectedWord] = useState(null);

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
            <Text style={style.header}>Pre-Built List of 50</Text>
            <Text style={style.text}>Add these words to create a quick starter list</Text>
        </View>

        {selectedWord ? 
            selectedWord : 
            (<View>

{/* Add ShowComponentButton */}

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Abstemious" 
              onPress={()=>setSelectedWord(<Abstemious />)} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Acrid" 
              onPress={()=>setSelectedWord(<Acrid /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Acrimonious" 
              onPress={()=>setSelectedWord(<Acrimonious /> )} 
              />
            </Pressable>
          </View>
      
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Adamant" 
              onPress={()=>setSelectedWord(<Adamant /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Agnosticism" 
              onPress={()=>setSelectedWord(<Agnosticism /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Animosity" 
              onPress={()=>setSelectedWord(<Animosity /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Anomaly" 
              onPress={()=>setSelectedWord(<Anomaly /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ardent" 
              onPress={()=>setSelectedWord(<Ardent /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ascetic" 
              onPress={()=>setSelectedWord(<Ascetic /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Avarice" 
              onPress={()=>setSelectedWord(<Avarice /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Biogenesis" 
              onPress={()=>setSelectedWord(<Biogenesis /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Bovine" 
              onPress={()=>setSelectedWord(<Bovine />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Cohort" 
              onPress={()=>setSelectedWord(<Cohort />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Deplorable" 
              onPress={()=>setSelectedWord(<Deplorable />  )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Dexterous" 
              onPress={()=>setSelectedWord(<Dexterous />  )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Discomfit" 
              onPress={()=>setSelectedWord(<Discomfit />  )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Disparate" 
              onPress={()=>setSelectedWord(<Disparate />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Emphatic" 
              onPress={()=>setSelectedWord(<Emphatic />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Emulate" 
              onPress={()=>setSelectedWord(<Emulate /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Enigmatic" 
              onPress={()=>setSelectedWord(<Enigmatic />  )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Erratic" 
              onPress={()=>setSelectedWord(<Erratic />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Eurdite" 
              onPress={()=>setSelectedWord(<Eurdite />   )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Espouse" 
              onPress={()=>setSelectedWord(<Espouse />    )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Febrile" 
              onPress={()=>setSelectedWord(<Febrile />   )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Febrile" 
              onPress={()=>setSelectedWord(<Foray /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Grimace" 
              onPress={()=>setSelectedWord(<Grimace /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Hubris" 
              onPress={()=>setSelectedWord(<Hubris /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Impugn" 
              onPress={()=>setSelectedWord(<Impugn /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Inane" 
              onPress={()=>setSelectedWord(<Inane />)} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Indelible" 
              onPress={()=>setSelectedWord(<Indelible /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Intercession" 
              onPress={()=>setSelectedWord(<Intercession /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Jurisprudence" 
              onPress={()=>setSelectedWord(<Jurisprudence />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Livid" 
              onPress={()=>setSelectedWord(<Livid />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Mundane" 
              onPress={()=>setSelectedWord(<Mundane /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Myriad" 
              onPress={()=>setSelectedWord(<Myriad />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Ostracized" 
              onPress={()=>setSelectedWord(<Ostracized />  )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Pander" 
              onPress={()=>setSelectedWord(<Pander />   )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Paradox" 
              onPress={()=>setSelectedWord(<Paradox />   )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Perjure" 
              onPress={()=>setSelectedWord(<Perjure /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Pinnacle"
              onPress={()=>setSelectedWord(<Pinnacle /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Placate"
              onPress={()=>setSelectedWord(<Placate /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Protégé"
              onPress={()=>setSelectedWord(<Protégé /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Provocative"
              onPress={()=>setSelectedWord(<Provocative /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Rectify"
              onPress={()=>setSelectedWord(<Rectify /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Renege"
              onPress={()=>setSelectedWord(<Renege /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Reprobate"
              onPress={()=>setSelectedWord(<Reprobate /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Rhetoric"
              onPress={()=>setSelectedWord(<Rhetoric /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Stalemate"
              onPress={()=>setSelectedWord(<Stalemate /> )} 
              />
            </Pressable>
          </View>
 
          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Vanguard"
              onPress={()=>setSelectedWord(<Vanguard /> )} 
              />
            </Pressable>
          </View>

          <View>
            <Pressable style={style.appButton} >
              <AppButton icon="sign-in" title="Vehement"
              onPress={()=>setSelectedWord(<Vehement /> )} 
              />
            </Pressable>
          </View>
 

    
        <View>
            <HomeButton navigation={ navigation } />
        </View>
        </View>)}

        </View>
        </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}

// Add AddButton

const Abstemious = () => {
    return(
    <View>
        <Text style={style.subHead}>Abstemious</Text>
        <Text style={style.text}>Pron. ab-STEE-me-us</Text>               
        <Text style={style.text}>Def: Consuming food and rink in moderation.</Text>
        <Text>
            <Text style={style.text}>Despite the hardships of his </Text>
            <Text style={style.bold}>abstemious</Text>
            <Text style={style.text}> way of life, the monk radiated confidence knowing he had chosen the correct path.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Acrid  = () => {
    return(
    <View>
        <Text style={style.subHead}>Acrid</Text>
        <Text style={style.text}>Pron. AK-rid  </Text>
        <Text style={style.text}>Def: Biting or harsh in odor or taste.</Text>
        <Text>
            <Text style={style.text}>Florence's </Text>
            <Text style={style.bold}>acrid</Text> 
            <Text style={style.text}>remarks did not sit well with the Board of Directors.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Acrimonious =  () => {
    return(
    <View>
        <Text style={style.subHead}>Acrimonious</Text>
        <Text style={style.text}>Pron. ak-ri-MO-nee-us</Text>
        <Text style={style.text}>Def: Mean-spirited, bitter or ill-natured.</Text> 
        <Text>
            <Text style={style.text}>Divorce is, we must remember, an expensive, emotionally devastating and </Text>
            <Text style={style.bold}>acrimonious </Text>
            <Text style={style.text}>affair.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Adamant = () => {
    return(
    <View>
        <Text style={style.subHead}>Adamant</Text>
        <Text style={style.text}>Pron. AD-uh-munt</Text>
        <Text style={style.text}>Def: Unwilling to submit; stubborn and unyielding.</Text>
        <Text>
            <Text style={style.text}>Despite the objections, Robin and Tim were </Text>
            <Text style={style.bold}>adamant </Text>
            <Text style={style.text}>about moving away from the town in which they had been raised.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Agnosticism = () => {
    return(
    <View>
        <Text style={style.subHead}>Agnosticism</Text>
        <Text style={style.text}>Pron. ag-NOS-ti-sihz-um</Text>
        <Text style={style.text}>Def: Belief that it is impossible to know whether or not God exists.</Text>
        <Text>
            <Text style={style.text}>Frank, who had been raised in a religious home, knew that it would hurt his parents to speak of his </Text>
            <Text style={style.bold}>agnosticism.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Animosity = () => {
    return(
    <View>
        <Text style={style.subHead}>Animosity</Text>
        <Text style={style.subHead}>Animosity</Text>
        <Text style={style.text}>Pron. an-ih-MOSS-it-tee</Text>
        <Text style={style.text}>Def: Intense hostility toward a person or thing.</Text>
        <Text>
            <Text style={style.text}>Clyde's first months on the job were fine, but after transferred he came to harbor real </Text>
            <Text style={style.bold}>animosity</Text>
            <Text style={style.text}> toward his supervisor.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Anomaly = () => {
    return(
    <View>
        <Text style={style.subHead}>Anomaly</Text>
        <Text style={style.text}>Pron. uh-NOM-a-lee</Text>
        <Text style={style.text}>Def: A deviation from established form.</Text>
        <Text>
            <Text style={style.text}>Bill, who was raised in a family of avid golfers, is something of an </Text>
            <Text style={style.bold}>anomaly</Text>
            <Text style={style.text}>: he thinks the sport is boring.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Ardent = () => {
    return(
    <View>
        <Text style={style.subHead}>Ardent</Text>
        <Text style={style.text}>Pron. AR-dent</Text>
        <Text style={style.text}>Def: Intense, passionate, devote; characterized by high emotion.</Text>
        <Text>
            <Text style={style.text}>Barbara, an </Text>
            <Text style={style.bold}>ardent</Text>
            <Text style={style.text}> stamp collector, has the most impressive collection of French stamps in the school.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Ascetic = () => {
    return(
    <View>
        <Text style={style.subHead}>Ascetic</Text>
        <Text style={style.text}>Pron. uh-SET-ik</Text>
        <Text style={style.text}>Def: A person who chooses a life of constant and strict self-denial.</Text> 
        <Text>  
            <Text style={style.text}>Based on your beer gut alone, I would never call you </Text>
            <Text style={style.bold}>ascetic.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Avarice = () => {
    return(
    <View>
        <Text style={style.subHead}>Avarice</Text>
        <Text style={style.text}>Pron. AV-er-iss</Text>
        <Text style={style.text}>Def: Great desire for riches.</Text> 
        <Text>
            <Text style={style.text}>Although Matthew was an extremely successful businessman, </Text>
            <Text style={style.bold}> avarice</Text>
            <Text style={style.text}>  was certainly not in his nature.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Biogenesis = () => {
    return(
    <View>
        <Text style={style.subHead}>Biogenesis</Text>
        <Text style={style.text}>Pron. bye-oh-JEN-ih-siss</Text>
        <Text style={style.text}>Def: The process of life arising from other living things.</Text>
        <Text>
            <Text style={style.text}> New advances in</Text>
            <Text style={style.bold}>Biogenesis</Text>
            <Text style={style.text}> involves an unending regenerative cycle of life and death.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Bovine = () => {
    return(
    <View>
        <Text style={style.subHead}>Bovine</Text>
        <Text style={style.text}>Pron. BO-vine</Text>
        <Text style={style.text}>Def: Dull, unresponsive or slow.</Text>
        <Text>
            <Text style={style.text}>Are we to expect breakthroughs from such a </Text>
            <Text style={style.bold}>bovine</Text>
            <Text style={style.text}> group of scientific followers?</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Cohort = () => {
    return(
    <View>
        <Text style={style.subHead}>Cohort</Text>
        <Text style={style.text}>Pron. KO-hort</Text>
        <Text style={style.text}>Def: A companion with whom one is united through common experience.</Text>
        <Text> 
            <Text style={style.text}>Because Mark and his </Text>
            <Text style={style.bold}> cohorts</Text>
            <Text style={style.text}> had grown up together in the town, leaving for different colleges was quite difficult.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Deplorable = () => {
    return(
    <View>
        <Text style={style.subHead}>Deplorable</Text>
        <Text style={style.text}>Pron. de-PLOR-uh-bull</Text>
        <Text style={style.text}>Def: Extremely reproachful; worthy of censure.</Text>
        <Text>
            <Text style={style.text}>Bill's spelling was </Text>
            <Text style={style.bold}>deplorable</Text>
            <Text style={style.text}>; all his friends told him it was hopeless to pursue a career as a proofreader.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Dexterous = () => {
    return(
    <View>
        <Text style={style.subHead}>Dexterous</Text>
        <Text style={style.text}>Pron. DEK-ster-uss</Text>
        <Text style={style.text}>Def: Skillful.</Text> 
        <Text>
            <Text style={style.text}>Byron proceeded a </Text>
            <Text style={style.bold}>dexterous</Text>
            <Text style={style.text}> carpenter, making few errors even in his earliest days as an apprentice.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Discomfit = () => {
    return(
    <View>
        <Text style={style.subHead}>Discomfit</Text>
        <Text style={style.text}>Pron. diss-KUMM-fit</Text>
        <Text style={style.text}>Def: To cause to come into disorder.</Text>
        <Text> 
            <Text style={style.text}>Fern's household was </Text>
            <Text style={style.bold}>discomfited </Text>
            <Text style={style.text}> by the sudden, unannounced arrival of her relatives.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Disparate = () => {
    return(
    <View>
        <Text style={style.subHead}>Disparate</Text>
        <Text style={style.text}>Pron. DISS-puh-rut</Text> 
        <Text style={style.text}>Def: Utterly dissimilar.</Text>
        <Text>
            <Text style={style.text}>After inviting his mother to live with him, Clark wondered how they would reconcile their </Text>
            <Text style={style.bold}>disparate</Text>
            <Text style={style.text}> lifestyles.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Emphatic = () => {
    return(
    <View>
        <Text style={style.subHead}>Emphatic</Text>
        <Text style={style.text}>Pron. em-FA-tik</Text>
        <Text style={style.text}>Def: Highlighted; extremely expressive.</Text> 
        <Text>  
            <Text style={style.text}>Beth was </Text>
            <Text style={style.bold}>emphatic</Text>
            <Text style={style.text}> about collecting the overdue invoice.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Emulate = () => {
    return(
    <View>
        <Text style={style.subHead}>Emulate</Text>
        <Text style={style.text}>Pron. EM-yoo-late</Text>
        <Text style={style.text}>Def: To strive to match or better by means of imitation.</Text>
        <Text>
            <Text style={style.text}>David always felt that the key to his success was his decision to </Text>
            <Text style={style.bold}>emulate</Text>
            <Text style={style.text}> in his professional and home life.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Enigmatic = () => {
    return(
    <View>
        <Text style={style.subHead}>Enigmatic</Text>
        <Text style={style.text}>Pron. en-ig-MA-tick</Text>
        <Text style={style.text}>Def: Reminiscent of an enigmling or perplexing.</Text>
        <Text>
            <Text style={style.text}>An </Text>
            <Text style={style.bold}>enigmatic</Text>
            <Text style={style.text}> scrawl across the title sheet was the only clue to the works's authorship.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Erratic = () => {
    return(
    <View>
        <Text style={style.subHead}>Erratic</Text>
        <Text style={style.text}>Pron. ih-RAT-ik</Text>
        <Text style={style.text}>Def: Inconsistent; lacking a set course.</Text>
        <Text>
            <Text style={style.text}>Elaine's </Text>
            <Text style={style.bold}>erratic</Text>
            <Text style={style.text}>  writing style irritated her superiors, who had no time le over an indecipherable and meandering memo.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Eurdite = () => {
    return(
    <View>
        <Text style={style.subHead}>Eurdite</Text>
        <Text style={style.text}>Pron. AIR-yoo-dite</Text>
        <Text style={style.text}>Def: Possessing extensive knowledge on a given subject.</Text>
        <Text> 
            <Text style={style.text}>Borges is nothing if not </Text>
            <Text style={style.bold}>erudite</Text>
            <Text style={style.text}>; it is clear from his short stories that he is a man on immense learning.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Espouse = () => {
    return(
    <View>
        <Text style={style.subHead}>Espouse</Text>
        <Text style={style.text}>Pron. ih-SPOWZ</Text>
        <Text style={style.text}>Def: To advocate as though one's own.</Text>
        <Text>
            <Text style={style.text}>Do you have any idea how complicated it would be to implement the plans you are </Text>
            <Text style={style.bold}>espousing?</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Febrile = () => {
    return(
    <View>
        <Text style={style.subHead}>Febrile</Text>
        <Text style={style.text}>Pron. FEE-brul</Text>
        <Text style={style.text}>Def: Feverish.</Text>
        <Text>
            <Text style={style.text}>Due to Mother's current </Text>
            <Text style={style.bold}>febrile</Text>
            <Text style={style.text}> condition, we are uneasy about her accompanying us on the trip.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Foray = () => {
    return(
    <View>
        <Text style={style.subHead}>Foray</Text>
        <Text style={style.text}>Pron. FORE-ay</Text>
        <Text style={style.text}>Def: An initial try.</Text>
        <Text>
            <Text style={style.text}>Elizabeth's </Text>
            <Text style={style.bold}>foray</Text>
            <Text style={style.text}> into the world of publishing was not without disheartening moments.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Grimace = () => {
    return(
    <View>
        <Text style={style.subHead}>Grimace</Text>
        <Text style={style.text}>Pron. GRIM-ace</Text>
        <Text style={style.text}>Def: A facial expression showing disgust or discomfort.</Text>
        <Text>   
            <Text style={style.text}>Billy </Text>
            <Text style={style.bold}>grimaced</Text>
            <Text> at the thought of eating his vegetables.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Hubris = () => {
    return(
    <View>
        <Text style={style.subHead}>Hubris</Text>
        <Text style={style.text}>Pron. HYOO-briss</Text>
        <Text style={style.text}>Def: Excessive pride.</Text>
        <Text>
            <Text style={style.text}>Colin may have begun as a pleasant clerk, but later he showed signs of </Text>
            <Text style={style.bold}>hubris</Text>
            <Text style={style.text}> that would accompany his downfall.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Impugn = () => {
    return(
    <View>
        <Text style={style.subHead}>Impugn</Text>
        <Text style={style.text}>Pron. im-PYOON</Text>
        <Text style={style.text}>Def: To brand as false in argument or discourse.</Text>
        <Text>
            <Text style={style.text}>Are you attempting to </Text>
            <Text style={style.bold}>impugn</Text>
            <Text style={style.text}> my husband's version of the attack?</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Inane = () => {
    return(
    <View>
        <Text style={style.subHead}>Inane</Text>
        <Text style={style.text}>Pron. in-ANE</Text>
        <Text style={style.text}>Def: Pointless or lacking in substance.</Text>
        <Text>
            <Text style={style.text}>Among other </Text>
            <Text style={style.bold}>inane</Text>
            <Text> suggestions, Jeff proposed painting the lunchroom in a polka-dot pattern.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Indelible = () => {
    return(
    <View>
        <Text style={style.subHead}>Indelible</Text>
        <Text style={style.text}>Pron. in-DELL-ih-bul</Text>
        <Text style={style.text}>Def: Unremovable.</Text>
        <Text> 
            <Text style={style.text}>Carl leaves an </Text>
            <Text style={style.bold}>indelible</Text>
            <Text style={style.text}> and lasting impression on those he meets.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Intercession = () => {
    return(
    <View>
        <Text style={style.subHead}>Intercession</Text>
        <Text style={style.text}>Pron. in-ter-SESH-un</Text>
        <Text style={style.text}>Def: An instance of pleading in favor of another person or party.</Text>
        <Text>  
            <Text style={style.text}>France's </Text>
            <Text style={style.bold}>intercession</Text>
            <Text style={style.text}> is credited by many with bringing the crisis to a peaceful conclusion.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Jurisprudence = () => {
    return(
    <View>
        <Text style={style.subHead}>Jurisprudence</Text>
        <Text style={style.text}>Pron. joor-iss-PROO-dnce</Text>
        <Text style={style.text}>Def: The science of law.</Text>
        <Text>
            <Text style={style.text}>Casey's study of </Text>
            <Text style={style.bold}>jurisprudence</Text>
            <Text style={style.text}> lasted for three long years.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Livid = () => {
    return(
    <View>
        <Text style={style.subHead}>Livid</Text>
        <Text style={style.text}>Pron. LIH-vid</Text>  
        <Text style={style.text}>Def: Extremely angry; infuriated.</Text>
        <Text>
            <Text style={style.text}>Caroline was </Text>
            <Text style={style.bold}>livid</Text>
            <Text style={style.text}> after she realized she had been swindled.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Mundane = () => {
    return(
    <View>
        <Text style={style.subHead}>Mundane</Text>
        <Text style={style.text}>Pron. mun-DANE</Text>
        <Text style={style.text}>Def: Ordinary or everyday.</Text>
        <Text>
            <Text style={style.text}>Everett's concerns were </Text>
            <Text style={style.bold}>mundane</Text>
            <Text style={style.text}> enough: keep a roof over his head, track down the occasional meal.</Text>
        </Text> 
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Myriad = () => {
    return(
    <View>
        <Text style={style.subHead}>Myriad</Text>
        <Text style={style.text}>Pron. MEER-ee-ud</Text>
        <Text style={style.text}>Def: Innumerable, many of something.</Text>
        <Text>
            <Text style={style.text}>Edward's responsibilities were </Text>
            <Text style={style.bold}>myriad</Text>
            <Text style={style.text}>, but his authority was almost nonexistent.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Ostracized = () => {
    return(
    <View>
        <Text style={style.subHead}>Ostracized</Text>
        <Text style={style.text}>Pron. OSS-truh-sized</Text>   
        <Text style={style.text}>Def: To exclude or banish.</Text>
        <Text>
            <Text style={style.text}>Desmond was </Text>
            <Text style={style.bold}>ostracized</Text>
            <Text style={style.text}> from the group after the negative publicity his mother received.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Pander = () => {
    return(
    <View>
        <Text style={style.subHead}>Pander</Text>
        <Text style={style.text}>Pron. PAN-der</Text>  
        <Text style={style.text}>Def: To appeal to the worst in someone.</Text>
        <Text>  
            <Text style={style.text}>Despite accusations of </Text>
            <Text style={style.bold}>pandering</Text>
            <Text style={style.text}> , the candidate repeatedly discussed his opponent's extramarital affair.</Text>
        </Text>  
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Paradox = () => {
    return(
    <View>
        <Text style={style.subHead}>Paradox</Text>
        <Text style={style.text}>Pron. PAIR-uh-doks</Text>
        <Text style={style.text}>Def: A seemingly self-contradictory statement that expresses a valid idea.</Text> 
        <Text>
            <Text style={style.text}>Before announcing grades, Mrs. Miller reminded her students of the </Text>
            <Text style={style.bold}>paradox</Text>
            <Text style={style.text}> that a teacher must be cruel to be kind.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Perjure = () => {
    return(
    <View>
      <Text style={style.subHead}>Perjure</Text>
        <Text style={style.text}>Pron. PURR-jer</Text>
        <Text style={style.text}>Def: To lie or give false and misleading testimony.</Text>
        <Text>
            <Text style={style.text}>Although not convicted, Bill may serve time in prison for having </Text>
            <Text style={style.bold}>perjured</Text>
            <Text style={style.text}> himself during the trial.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Pinnacle = () => {
    return(
    <View>
        <Text style={style.subHead}>Pinnacle</Text>
        <Text style={style.text}>Pron. PIN-uh-kul</Text>
        <Text style={style.text}>Def: The topmost point.</Text>
        <Text>
            <Text style={style.text}>Fred reached the </Text>
            <Text style={style.bold}>pinnacle</Text>
            <Text style={style.text}> of his profession when he was named chairman of the department.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Placate = () => {
    return(
    <View>
        <Text style={style.subHead}>Placate</Text>
        <Text style={style.text}>Pron. PLAY-kate</Text>
        <Text style={style.text}>Def: To appease.</Text>
        <Text>
            <Text style={style.text}>Although the company did not raise wages, it </Text>
            <Text style={style.bold}>placated</Text>
            <Text style={style.text}> the union by extending afternoon coffee break.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Protégé = () => {
    return(
    <View>
      <Text style={style.subHead}>Protégé</Text>
        <Text style={style.text}>Pron. PRO-tuh-zhay</Text>
        <Text style={style.text}>Def: Someone aided by another influential person.</Text>
        <Text>
            <Text style={style.text}>Everyone expected Dean to name Bill (his </Text>
            <Text style={style.bold}>protégé</Text>
            <Text style={style.text}>) to the new post.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Provocative = () => {
    return(
    <View>
        <Text style={style.subHead}>Provocative</Text>
        <Text style={style.text}>Pron. pruh-VOK-uh-tive</Text> 
        <Text style={style.text}>Def: Stimulating or combative.</Text>
        <Text>
            <Text style={style.text}>Despite Ed's </Text>
            <Text style={style.bold}>provocative</Text>
            <Text> attitude, he won the respect of the creative team.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Rectify = () => {
    return(
    <View>
        <Text style={style.subHead}>Rectify</Text>
        <Text style={style.text}>Pron. REK-tih-fie</Text>  
        <Text style={style.text}>Def: To put right.</Text>
        <Text>
            <Text style={style.text}>Ellen </Text>
            <Text style={style.bold}>rectified</Text>
            <Text style={style.text}> her previous mistakes and filed the report.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Renege = () => {
    return(
    <View>
      <Text style={style.subHead}>Renege</Text>
        <Text style={style.text}>Pron. ri-NEG</Text>
        <Text style={style.text}>Def: To go back on one's word.</Text>
        <Text>
            <Text style={style.text}>Dalton was to be named vice president, but Peterson </Text>
            <Text style={style.bold}>reneged</Text>
            <Text style={style.text}> on the deal after assuming control.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Reprobate = () => {
    return(
    <View>
        <Text style={style.subHead}>Reprobate</Text>
        <Text style={style.text}>Pron. REP-ruh-bate</Text>
        <Text style={style.text}>Def: An unprincipled person.</Text>
        <Text>
            <Text style={style.text}>From that day Johnson was considered a </Text>
            <Text style={style.bold}>reprobate</Text>
            <Text style={style.text}>, and shunned in the town.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Rhetoric = () => {
    return(
    <View>
        <Text style={style.subHead}>Rhetoric</Text>
        <Text style={style.text}>Pron. RET-ur-ik</Text>
        <Text style={style.text}>Def: The art of the effective use of language.</Text>
        <Text>
            <Text style={style.text}>Are we ever going to move from empty </Text>
            <Text style={style.bold}>rhetoric</Text>
            <Text style={style.text}> to a sound plan of action on this issue.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Stalemate = () => {
    return(
    <View>
        <Text style={style.subHead}>Stalemate</Text>
        <Text style={style.text}>Pron. STALE-mate</Text>
        <Text style={style.text}>Def: In chess, in which there is no winner.</Text>
        <Text> 
            <Text style={style.text}>The war was long, all the generals had to show for it was a bloody </Text>
            <Text style={style.bold}>stalemate.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}
const Vanguard = () => {
    return(
    <View>
        <Text style={style.subHead}>Vanguard</Text>
        <Text style={style.text}>Pron. VAN-gard</Text>
        <Text style={style.text}>Def: The most advanced groups (of a military force of social movement).</Text>
        <Text>
            <Text style={style.text}>Dali admitted he took financial advantage of his position at the </Text>
            <Text style={style.bold}>vanguard</Text>
            <Text style={style.text}> of the Surrealist movement.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
}

const Vehement = () => {
    return(
    <View>
        <Text style={style.subHead}>Vehement</Text>
        <Text style={style.text}>Pron. VEE-uh-ment</Text>
        <Text style={style.text}>Def: Strongly felt or marked by high emotion.</Text>
        <Text>
            <Text style={style.text}>Congress expressed their </Text>
            <Text style={style.bold}>vehement</Text>
            <Text style={style.text}> dissatisfaction with Administration policy.</Text>
        </Text>
        <Pressable style={style.appButton} >
          <AppButton icon="sign-in" title="Add to My List"
          onPress={() => navigation.navigate('')}
          />
        </Pressable>
    </View>
        )
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

    subHead: {
      fontSize: 25,
      color: '#f0f8ff',
      fontWeight: '600',
      paddingVertical: 15,
      paddingHorizontal: 15,
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
      paddingVertical: 10,
      paddingHorizontal: 0,
      width: 300
    },
  
  })
  
