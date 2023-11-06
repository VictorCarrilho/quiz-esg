import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(243, 242, 247) '
    },
    header:{
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        width: '100%', 
        padding: 20  
    },
    body: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rodape: {
        width: '100%',
        height: '30%',
        marginTop: 20,
        justifyContent: 'center'
    }
})