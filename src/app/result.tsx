import { Image, Text, View } from 'react-native';
import { useAppProvider } from '../config/provider';
import { Header } from '../components/Header';

import congratulations from '../assets/congratulations.png';
import { LinearGradient } from 'expo-linear-gradient';

export default function Result(){
    const { score } = useAppProvider();
    

    return(
        <LinearGradient colors={[ 'rgb(105, 132, 251)', 'rgb(164, 153, 219)']} style={{ flex:1}}>
        <Header />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={congratulations} style={{ maxWidth: 200, maxHeight: 200 }} resizeMode='stretch' />
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Text style={{ color: 'white', fontWeight: '800', fontSize: 22 }}> PARABENS!!!! </Text>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}>VOCE ACERTOU 
                    <Text style={{ fontSize: 22 }}> {score > 1 ? score : 0} </Text>
                    PERGUNTAS</Text>
                
            </View>
        </View>
        </LinearGradient>
    )
}