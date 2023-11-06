import { Link } from "expo-router";
import { View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { styles } from "./styles";

export function Header(){
    return(
        <View style={styles.header}>
            <Link href="/" asChild>
                <MaterialCommunityIcons name="home" size={80} color="white" />
            </Link>
        </View>
    )
}
