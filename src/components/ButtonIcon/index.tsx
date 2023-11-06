import { Image, TouchableOpacity } from "react-native";

import { styles } from './style';
import button from '../../assets/button.png';
import { Link } from "expo-router";
import { useAppProvider } from "../../config/provider";


export function ButtonIcon(){
    const { newGame } = useAppProvider();   

    return(
        <Link href="/answer" asChild>
            <TouchableOpacity style={styles.container} onPress={newGame}>
                <Image source={button} style={{ maxHeight: '100%', maxWidth: '100%' }} resizeMode='stretch' />
            </TouchableOpacity>
        </Link>
    )
}