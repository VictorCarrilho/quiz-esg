import { Text } from "react-native";

import { styles } from './style';

type Props = {
    children: any;
}

export function Title({ children }: Props){
    return(
        <Text style={styles.title}>
            {children}
        </Text>
    )
}