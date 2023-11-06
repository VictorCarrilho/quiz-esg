import { Image, Text, View } from 'react-native';
import { styles } from '../assets/styles/home';

import image from '../assets/fundo.jpg';
import { Title } from '../components/Title';
import { TextCustom } from '../components/TextCustom';
import { ButtonIcon } from '../components/ButtonIcon';

export default function index(){
    return(
        <View style={styles.container}>
        
            <View style={styles.header}>
                <Title>Quiz sobre ESG</Title>
                <TextCustom>Seja bem-vindo</TextCustom>
                <Text style={{ padding: 10, fontSize: 15, fontWeight: '600' }}>Clique no botão abaixo para iniciar</Text>
            </View>

            <View style={styles.body}>
                <ButtonIcon />
            </View>

            <View style={styles.rodape}>
                <Image source={image} style={{ maxWidth: '100%', height: '100%' }} resizeMode='stretch' />
            </View>
            
        </View>
    )
}