import { Pressable, ScrollView, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { Link, router } from "expo-router";

import { useAppProvider } from "../config/provider";
import { styles } from '../assets/styles/answer';
import { useEffect, useState } from "react";
import { Header } from "../components/Header";

let valueOptionSelected: String = "";
let scoreCurrent = 0;

export default function answer(){
    const { stateCurrent, getNextAnswer, setScore } = useAppProvider();
    const [ optionSelected, setOptionSelected ] = useState(null);
    const [ optionCorrect, setOptionCorrent ] = useState(null);
    const [ pressed, setPressed ] = useState(false);

    useEffect(() => {
        getNextAnswer();
    }, []);


    function pressNextAnswer(){
        if(optionSelected != null){
            setPressed(true);


            setTimeout(() => {
                setOptionCorrent(stateCurrent.questions[stateCurrent.questionCurrent].answer);
            }, 2000);

            
            if(stateCurrent.questions[stateCurrent.questionCurrent].answer == valueOptionSelected){
                scoreCurrent++;
            }

            setTimeout(() => {
                setScore(scoreCurrent);
                setOptionSelected(null);
                setOptionCorrent(null);
                setPressed(false);
                getNextAnswer();               
                

                if(stateCurrent.answered >= 5){
                    scoreCurrent = 0;
                    router.push("/result")
                }

                
            }, 3000);

        }        
    }

    function pressButton(key: any){
        key == optionSelected ? setOptionSelected(null) : setOptionSelected(key);
        valueOptionSelected = key;
    }

    
    return (
        <View style={styles.container}>
            <LinearGradient colors={['green', 'black']} style={styles.question}>
                <Text style={styles.title}>Pergunta {stateCurrent.answered} de 5</Text>
                <Text style={styles.description}>
                    { stateCurrent.questions[stateCurrent.questionCurrent].question }
                </Text>
            </LinearGradient>
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
            {
                stateCurrent.questions[stateCurrent.questionCurrent].options.map((value: any, key: any) => (
                    <Pressable onPress={() => pressButton(key)} id={Number(key).toFixed()} nativeID={Number(key).toFixed()} style={[styles.option, optionSelected == key ? { backgroundColor: 'orange' } : null, optionCorrect == key ? { backgroundColor: 'green' } : null ]} >
                        <Text 
                            key={Number(key).toFixed()} 
                            nativeID={Number(key).toFixed()} 
                            style={[styles.textOption, optionCorrect == key ? { color: 'white' } : null]}>
                            {value}
                        </Text>
                    </Pressable>
                ))
            }
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', width: '100%', marginTop: 10 }}>
            {
                stateCurrent.answered <= 4 ?
                <LinearGradient colors={['orange', 'black']} style={{ width: '90%', borderRadius: 10, marginBottom: 20 }}>
                    <Pressable onPress={pressNextAnswer} style={[styles.button, pressed ? {backgroundColor: '#CCC'} : null ]} disabled={pressed}>
                        <Text style={{ color: 'white', fontSize: 20 }}>PROXIMA PERGUNTA</Text>
                    </Pressable>
                </LinearGradient>
                :
                <LinearGradient colors={['blue', 'black']} style={{ width: '90%', borderRadius: 10, marginBottom: 20 }}>
                    <Pressable style={[styles.button, pressed ? {backgroundColor: '#CCC'} : null ]} onPress={pressNextAnswer}>
                        <Text style={{ color: 'white', fontSize: 20 }}>VISUALIZAR RESULTADO</Text>
                    </Pressable>                    
                </LinearGradient>
            }
            </View>            
        </View>
    )
}