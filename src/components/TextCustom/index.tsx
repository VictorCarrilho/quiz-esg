import { Text } from "react-native";

import { styles } from './style';

type Props = {
    children: any;
}

export function TextCustom({ children }: Props){
    return(
        <Text style={styles.title}>
            {children}
        </Text>
    )
}