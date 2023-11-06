import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },


    header: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10
    },

    

    question: {
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#8435de',
        marginBottom: 25,
        marginTop: 20
    },

    title: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 20,
    },

    description: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 24
    },






    option: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        minHeight: 100,
        width: '90%',
        padding: 10,
        marginTop: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textOption: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    }
})