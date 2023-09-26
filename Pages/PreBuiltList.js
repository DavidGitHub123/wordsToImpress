import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PreBuiltList() {
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
    <View style={style.body}>

        <View>
            <Text style={style.header}>Pre-Built List of 50</Text>
            <Text>Add these words to create a quick starter list</Text>
        </View>

        <View>
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Abstemious /> : null }
                <AppButton icon="sign-in" title="Abstemious" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Acrid /> : null }
                <AppButton icon="sign-in" title="Acrid" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Acrimonious /> : null }
                <AppButton icon="sign-in" title="Acrimonious" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Adamant /> : null }
                <AppButton icon="sign-in" title="Adamant" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Agnosticism /> : null }
                <AppButton icon="sign-in" title="Agnosticism" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Animosity /> : null }
                <AppButton icon="sign-in" title="Animosity" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Anomaly /> : null }
                <AppButton icon="sign-in" title="Anomaly" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Ardent /> : null }
                <AppButton icon="sign-in" title="Ardent" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Ascetic /> : null }
                <AppButton icon="sign-in" title="Ascetic" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Avarice /> : null }
                <AppButton icon="sign-in" title="Avarice" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Biogenesis /> : null }
                <AppButton icon="sign-in" title="Biogenesis" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Bovine /> : null }
                <AppButton icon="sign-in" title="Bovine" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Cohort /> : null }
                <AppButton icon="sign-in" title="Cohort" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Deplorable /> : null }
                <AppButton icon="sign-in" title="Deplorable" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Dexterous /> : null }
                <AppButton icon="sign-in" title="Dexterous" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Discomfit /> : null }
                <AppButton icon="sign-in" title="Discomfit" />
            </Pressable>
                    
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Disparate /> : null }
                <AppButton icon="sign-in" title="Disparate" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Emphatic /> : null }
                <AppButton icon="sign-in" title="Emphatic" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Emulate /> : null }
                <AppButton icon="sign-in" title="Emulate" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Enigmatic /> : null }
                <AppButton icon="sign-in" title="Enigmatic" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Erratic /> : null }
                <AppButton icon="sign-in" title="Erratic" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Eurdite /> : null }
                <AppButton icon="sign-in" title="Eurdite" />
            </Pressable> 

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Espouse /> : null }
                <AppButton icon="sign-in" title="Espouse" />
            </Pressable>    
     
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Febrile /> : null }
                <AppButton icon="sign-in" title="Febrile" />
            </Pressable> 
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Foray /> : null }
                <AppButton icon="sign-in" title="Foray" />
            </Pressable> 
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Grimace /> : null }
                <AppButton icon="sign-in" title="Grimace" />
            </Pressable> 

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Hubris /> : null }
                <AppButton icon="sign-in" title="Hubris" />
            </Pressable> 

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Impugn /> : null }
                <AppButton icon="sign-in" title="Impugn" />
            </Pressable> 

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Inane /> : null }
                <AppButton icon="sign-in" title="Inane" />
            </Pressable>     

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Indelible /> : null }
                <AppButton icon="sign-in" title="Indelible" />
            </Pressable> 

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Intercession /> : null }
                <AppButton icon="sign-in" title="Intercession" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Jurisprudence /> : null }
                <AppButton icon="sign-in" title="Jurisprudence" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Livid /> : null }
                <AppButton icon="sign-in" title="Livid" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Mundane /> : null }
                <AppButton icon="sign-in" title="Mundane" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Myriad /> : null }
                <AppButton icon="sign-in" title="Myriad" />
            </Pressable>     

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Ostracized /> : null }
                <AppButton icon="sign-in" title="Ostracized" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Pander /> : null }
                <AppButton icon="sign-in" title="Pander" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Paradox /> : null }
                <AppButton icon="sign-in" title="Paradox" />
            </Pressable>

            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Perjure /> : null }
                <AppButton icon="sign-in" title="Perjure" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Pinnacle /> : null }
                <AppButton icon="sign-in" title="Pinnacle" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Placate /> : null }
                <AppButton icon="sign-in" title="Placate" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Protégé /> : null }
                <AppButton icon="sign-in" title="Protégé" />
            </Pressable>
               
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Provocative /> : null }
                <AppButton icon="sign-in" title="Provocative" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Renege /> : null }
                <AppButton icon="sign-in" title="Renege" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Reprobate /> : null }
                <AppButton icon="sign-in" title="Reprobate" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Rhetoric /> : null }
                <AppButton icon="sign-in" title="Rhetoric" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Stalemate /> : null }
                <AppButton icon="sign-in" title="Stalemate" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Vanguard /> : null }
                <AppButton icon="sign-in" title="Vanguard" />
            </Pressable>
                
            <Pressable onPress={onPress=()=>setShow(!show)}>
                { show == true ? <Vehement /> : null }
                <AppButton icon="sign-in" title="Vehement" />
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


const Abstemious = () => {
    return(
    <View>
        <Text>Pron. ab-STEE-me-us</Text>               
        <Text>Def: Consuming food and rink in moderation.</Text>
        <Text>Despite the hardships of his </Text><Text style={StyleSheet=bold}>abstemious</Text><Text> way of life, the monk radiated confidence knowing he had chosen the correct path.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Acrid  = () => {
    return(
    <View>
        <Text>Pron. AK-rid  </Text>
        <Text>Def: Biting or harsh in odor or taste.</Text>
        <Text>Florence's </Text><Text style={StyleSheet=bold}>acrid</Text> <Text>remarks did not sit well with the Board of Directors.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Acrimonious =  () => {
    return(
    <View>
        <Text>Pron. ak-ri-MO-nee-us</Text>
        <Text>Def: Mean-spirited, bitter or ill-natured.</Text> 
        <Text>Divorce is, we must remember, an expensive, emotionally devastating and </Text><Text style={StyleSheet=bold}>acrimonious </Text><Text>affair.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Adamant = () => {
    return(
    <View>
        <Text>Pron. AD-uh-munt</Text>
        <Text>Def: Unwilling to submit; stubborn and unyielding.</Text>
        <Text>Despite the objections, Robin and Tim were </Text><Text style={StyleSheet=bold}>adamant </Text><Text>about moving away from the town in which they had been raised.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const  Agnosticism = () => {
    return(
    <View>
        <Text>Pron. ag-NOS-ti-sihz-um</Text>
        <Text>Def: Belief that it is impossible to know whether or not God exists.</Text>
        <Text>Frank, who had been raised in a religious home, knew that it would hurt his parents to speak of his </Text><Text style={StyleSheet=bold}>agnosticism.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const  Animosity = () => {
    return(
    <View>
         <Text>Pron. an-ih-MOSS-it-tee</Text>
        <Text>Def: Intense hostility toward a person or thing.</Text>
        <Text>Clyde's first months on the job were fine, but after transferred he came to harbor real </Text><Text style={StyleSheet=bold}>animosity</Text><Text> toward his supervisor.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Anomaly = () => {
    return(
    <View>
        <Text>Pron. uh-NOM-a-lee</Text>
        <Text>Def: A deviation from established form.</Text>
        <Text>Bill, who was raised in a family of avid golfers, is something of an </Text><Text style={StyleSheet=bold}>anomaly</Text><Text>: he thinks the sport is boring.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Ardent = () => {
    return(
    <View>
        <Text>Pron. AR-dent</Text>
        <Text>Def: Intense, passionate, devote; characterized by high emotion.</Text>
        <Text>Barbara, an </Text><Text style={StyleSheet=bold}>ardent</Text><Text> stamp collector, has the most impressive collection of French stamps in the school.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const  Ascetic = () => {
    return(
    <View>
        <Text>Pron. uh-SET-ik</Text>
        <Text>Def: A person who chooses a life of constant and strict self-denial.</Text>   
        <Text>Based on your beer gut alone, I would never call you </Text><Text style={StyleSheet=bold}>ascetic.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Avarice = () => {
    return(
    <View>
        <Text>Pron. AV-er-iss</Text>
        <Text>Def: Great desire for riches.</Text>  
        <Text>Although Matthew was an extremely successful businessman, </Text><Text style={StyleSheet=bold}> avarice</Text><Text>  was certainly not in his nature.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Biogenesis = () => {
    return(
    <View>
        <Text>Pron. bye-oh-JEN-ih-siss</Text>
        <Text>Def: The process of life arising from other living things.</Text> 
        <Text style={StyleSheet=bold}>Biogenesis</Text><Text> involves an unending regenerative cycle of life and death.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Bovine = () => {
    return(
    <View>
        <Text>Pron. BO-vine</Text>
        <Text>Def: Dull, unresponsive or slow.</Text>
        <Text>Are we to expect breakthroughs from such a </Text><Text style={StyleSheet=bold}>bovine</Text><Text> group of scientific followers?</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Cohort = () => {
    return(
    <View>
        <Text>Pron. KO-hort</Text>
        <Text>Def: A companion with whom one is united through common experience.</Text>    
        <Text>Because Mark and his </Text><Text style={StyleSheet=bold}> cohorts</Text><Text> had grown up together in the town, leaving for different colleges was quite difficult.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Deplorable = () => {
    return(
    <View>
        <Text>Pron. de-PLOR-uh-bull</Text>
        <Text>Def: Extremely reproachful; worthy of censure.</Text>
        <Text>Bill's spelling was </Text><Text style={StyleSheet=bold}>deplorable</Text><Text>; all his friends told him it was hopeless to pursue a career as a proofreader.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Dexterous = () => {
    return(
    <View>
        <Text>Pron. DEK-ster-uss</Text>
        <Text>Def: Skillful.</Text> 
        <Text>Byron proceeded a </Text><Text style={StyleSheet=bold}>dexterous</Text><Text> carpenter, making few errors even in his earliest days as an apprentice.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Discomfit = () => {
    return(
    <View>
        <Text>Pron. diss-KUMM-fit</Text>
        <Text>Def: To cause to come into disorder.</Text>   
        <Text>Fern's household was </Text><Text style={StyleSheet=bold}>discomfited </Text><Text> by the sudden, unannounced arrival of her relatives.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Disparate = () => {
    return(
    <View>
        <Text>Pron. DISS-puh-rut</Text> 
        <Text>Def: Utterly dissimilar.</Text>
        <Text>After inviting his mother to live with him, Clark wondered how they would reconcile their </Text><Text style={StyleSheet=bold}>disparate</Text><Text> lifestyles.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Emphatic = () => {
    return(
    <View>
        <Text>Pron. em-FA-tik</Text>
        <Text>Def: Highlighted; extremely expressive.</Text>    
        <Text>Beth was </Text><Text style={StyleSheet=bold}>emphatic</Text><Text> about collecting the overdue invoice.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Emulate = () => {
    return(
    <View>
        <Text>Pron. EM-yoo-late</Text>
        <Text>Def: To strive to match or better by means of imitation.</Text>
        <Text>David always felt that the key to his success was his decision to </Text><Text style={StyleSheet=bold}>emulate</Text><Text> in his professional and home life.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Enigmatic = () => {
    return(
    <View>
        <Text>Pron. en-ig-MA-tick</Text>
        <Text>Def: Reminiscent of an enigma; puzzling or perplexing.</Text> 
        <Text>An </Text><Text style={StyleSheet=bold}>enigmatic</Text><Text> scrawl across the title sheet was the only clue to the works's authorship.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const  Erratic = () => {
    return(
    <View>
        <Text>Pron. ih-RAT-ik</Text>
        <Text>Def: Inconsistent; lacking a set course.</Text>   
        <Text>Elaine's </Text><Text style={StyleSheet=bold}>erratic</Text><Text>  writing style irritated her superiors, who had no time to puzzle over an indecipherable and meandering memo.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Eurdite = () => {
    return(
    <View>
        <Text>Pron. AIR-yoo-dite</Text>
        <Text>Def: Possessing extensive knowledge on a given subject.</Text>    
        <Text>Borges is nothing if not </Text><Text style={StyleSheet=bold}>erudite</Text><Text>; it is clear from his short stories that he is a man on immense learning.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Espouse = () => {
    return(
    <View>
        <Text>Pron. ih-SPOWZ</Text>
        <Text>Def: To advocate as though one's own.</Text>  
        <Text>Do you have any idea how complicated it would be to implement the plans you are </Text><Text style={StyleSheet=bold}>espousing?</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Febrile = () => {
    return(
    <View>
        <Text>Pron. FEE-brul</Text>
        <Text>Def: Feverish.</Text>
        <Text>Due to Mother's current </Text><Text style={StyleSheet=bold}>febrile</Text><Text> condition, we are uneasy about her accompanying us on the trip.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Foray = () => {
    return(
    <View>
        <Text>Pron. FORE-ay</Text>
        <Text>Def: An initial try.</Text>
        <Text>Elizabeth's </Text><Text style={StyleSheet=bold}>foray</Text><Text> into the world of publishing was not without disheartening moments.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const  Grimace = () => {
    return(
    <View>
        <Text>Pron. GRIM-ace</Text>
        <Text>Def: A facial expression showing disgust or discomfort.</Text>    
        <Text>Billy </Text><Text style={StyleSheet=bold}>grimaced</Text><Text> at the thought of eating his vegetables.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Hubris = () => {
    return(
    <View>
        <Text>Pron. HYOO-briss</Text>
        <Text>Def: Excessive pride.</Text>
        <Text>Colin may have begun as a pleasant clerk, but by the time he took over the company he showed signs of </Text><Text style={StyleSheet=bold}>hubris</Text><Text> that would accompany his downfall.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Impugn = () => {
    return(
    <View>
        <Text>Pron. im-PYOON</Text>
        <Text>Def: To brand as false in argument or discourse.</Text>
        <Text>Are you attempting to </Text><Text style={StyleSheet=bold}>impugn</Text><Text> my husband's version of the attack?</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Inane = () => {
    return(
    <View>
        <Text>Pron. in-ANE</Text>
        <Text>Def: Pointless or lacking in substance.</Text>
        <Text>Among other </Text><Text style={StyleSheet=bold}>inane</Text><Text> suggestions, Jeff proposed painting the lunchroom in a polka-dot pattern.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Indelible = () => {
    return(
    <View>
        <Text>Pron. in-DELL-ih-bul</Text>
        <Text>Def: Unremovable.</Text>  
        <Text>Carl leaves an </Text><Text style={StyleSheet=bold}>indelible</Text><Text> and lasting impression on those he meets.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Intercession = () => {
    return(
    <View>
        <Text>Pron. in-ter-SESH-un</Text>
        <Text>Def: An instance of pleading in favor of another person or party.</Text>  
        <Text>France's </Text><Text style={StyleSheet=bold}>intercession</Text><Text> is credited by many with bringing the crisis to a peaceful conclusion.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Jurisprudence = () => {
    return(
    <View>
        <Text>Pron. joor-iss-PROO-dnce</Text>
        <Text>Def: The science of law.</Text>
        <Text>Casey's study of </Text><Text style={StyleSheet=bold}>jurisprudence</Text><Text> lasted for three long years.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Livid = () => {
    return(
    <View>
        <Text>Pron. LIH-vid</Text>  
        <Text>Def: Extremely angry; infuriated.</Text>
        <Text>Caroline was </Text><Text style={StyleSheet=bold}>livid</Text><Text> after she realized she had been swindled.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Mundane = () => {
    return(
    <View>
        <Text>Pron. mun-DANE</Text>
        <Text>Def: Ordinary or everyday.</Text> 
        <Text>Everett's concerns were </Text><Text style={StyleSheet=bold}>mundane</Text><Text> enough: keep a roof over his head, track down the occasional meal.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Myriad = () => {
    return(
    <View>
        <Text>Pron. MEER-ee-ud</Text>
        <Text>Def: Innumerable, many of something.</Text>
        <Text>Edward's responsibilities were </Text><Text style={StyleSheet=bold}>myriad</Text><Text>, but his authority was almost nonexistent.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Ostracized = () => {
    return(
    <View>
        <Text>Pron. OSS-truh-sized</Text>   
        <Text>Def: To exclude or banish.</Text> 
        <Text>Desmond was </Text><Text style={StyleSheet=bold}>ostracized</Text><Text> from the group after the negative publicity his mother received.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Pander = () => {
    return(
    <View>
        <Text>Pron. PAN-der</Text>  
        <Text>Def: To appeal to the worst in someone.</Text>    
        <Text>Despite accusations of </Text><Text style={StyleSheet=bold}>pandering</Text><Text> to the voters, the candidate insisted on repeatedly reusing the issue of his opponent's extramarital affair.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Paradox = () => {
    return(
    <View>
        <Text>Pron. PAIR-uh-doks</Text>
        <Text>Def: A seemingly self-contradictory statement that expresses a valid idea.</Text> 
        <Text>Before announcing the grades, Mrs. Miller reminded her students of the </Text><Text style={StyleSheet=bold}>paradox</Text><Text> that a teacher often must be cruel in order to be kind.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Perjure = () => {
    return(
    <View>
        <Text>Pron. PURR-jer</Text>
        <Text>Def: To lie or give false and misleading testimony.</Text>
        <Text>Although Mr. Fritter was not convicted, he may serve time in prison for having </Text><Text style={StyleSheet=bold}>perjured</Text><Text> himself during the trial.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Pinnacle = () => {
    return(
    <View>
        <Text>Pron. PIN-uh-kul</Text>
        <Text>Def: The topmost point.</Text>
        <Text>Fred reached the </Text><Text style={StyleSheet=bold}>pinnacle</Text><Text> of his profession when he was named chairman of the history department.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Placate = () => {
    return(
    <View>
         <Text>Pron. PLAY-kate</Text>
        <Text>Def: To appease.</Text>   
        <Text>Although the company did not raise wages, it did make an effort to </Text><Text style={StyleSheet=bold}>placate</Text><Text> the union by extending afternoon coffee break.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Protégé = () => {
    return(
    <View>
        <Text>Pron. PRO-tuh-zhay</Text>
        <Text>Def: Someone aided by another influential person.</Text>
        <Text>Everyone expected Dean to name Bill (his </Text><Text style={StyleSheet=bold}>protégé</Text><Text>) to the new post.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Provocative = () => {
    return(
    <View>
        <Text>Pron. pruh-VOK-uh-tive</Text> 
        <Text>Def: Stimulating or combative.</Text>
        <Text>Despite Ed's </Text><Text style={StyleSheet=bold}>provocative</Text><Text> attitude, or perhaps because of it, he won the respect of his supervisor on the creative team.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Rectify = () => {
    return(
    <View>
        <Text>Pron. REK-tih-fie</Text>  
        <Text>Def: To put right.</Text> 
        <Text>Ellen </Text><Text style={StyleSheet=bold}>rectified</Text><Text> her previous mistakes and filed the report.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Renege = () => {
    return(
    <View>
        <Text>Pron. ri-NEG</Text>
        <Text>Def: To go back on one's word.</Text> 
        <Text>Dalton was supposed to have been named vice president, but Peterson </Text><Text style={StyleSheet=bold}>reneged</Text><Text> on the deal after assuming control.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Reprobate = () => {
    return(
    <View>
        <Text>Pron. REP-ruh-bate</Text>
        <Text>Def: An unprincipled person.</Text>
        <Text>From that day on Johnson was considered a </Text><Text style={StyleSheet=bold}>reprobate</Text><Text>, and was shunned in the town.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Rhetoric = () => {
    return(
    <View>
        <Text>Pron. RET-ur-ik</Text>
        <Text>Def: The art of the effective use of language.</Text>
        <Text>Are we ever going to move from empty </Text><Text style={StyleSheet=bold}>rhetoric</Text><Text> to a sound plan of action on this issue.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Stalemate = () => {
    return(
    <View>
        <Text>Pron. STALE-mate</Text>
        <Text>Def: In chess in which there is no winner; neither side can make a legal move.</Text> 
        <Text>Although the war had been waged for over three years, all the generals had to show for it was a bloody </Text><Text style={StyleSheet=bold}>stalemate.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}
const Vanguard = () => {
    return(
    <View>
        <Text>Pron. VAN-gard</Text>
        <Text>Def: The most advanced groups (of a military force of social movement).</Text>
        <Text>Dali was the first to admit that he took financial advantages of his position at the </Text><Text style={StyleSheet=bold}>vanguard</Text><Text> of the Surrealist movement.</Text>
        <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Add to My List}"/>
        </Pressable>
    </View>
        )
}

const Vehement = () => {
    return(
    <View>
        <Text>Pron. VEE-uh-ment</Text>
        <Text>Def: Strongly felt or marked by high emotion.</Text>
        <Text>Congress overrode the President's veto after members  openly expressed their </Text><Text style={StyleSheet=bold}>vehement</Text><Text> dissatisfaction with Administration policy.</Text>
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
