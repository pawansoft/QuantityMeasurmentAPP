import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    button_container: {
        marginTop: '7%'
    },
    button_Style: {
        backgroundColor: 'white',
        color: '#b4bfba',
        flex: 1,
        alignItems: 'center',
        height: 110,
        borderRadius: 10,
        margin: 10,
        paddingTop: 15,
    },
    image_Style: {
        height: '60%',
        marginBottom: '5%'
    },
    normal_Style: {
        flex: 1,
        alignItems: 'center',
        height: 110,
        borderRadius: 10,
        margin: 10,
        paddingTop: 15,
    },
    length_Style: {
        backgroundColor: '#c4f2dd',
        borderColor: '#0EC098',
        borderWidth: 2,
    },
    temperature_Style: {
        backgroundColor: '#f5d7da',
        borderColor: '#FD5160',
        borderWidth: 2,
    },
    volume_Style: {
        backgroundColor: '#c9b9ed',
        borderColor: '#571be3',
        borderWidth: 2,
    },
    Length_Text_Style: {
        color: '#0EC098',
        fontWeight: 'bold',
        fontSize: 18
    },
    Temperature_Text_Style: {
        color: '#FD5160',
        fontWeight: 'bold',
        fontSize: 16
    },
    Volume_Text_Style: {
        color: '#571be3',
        fontWeight: 'bold',
        fontSize: 16
    },
    choose_Type: {
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 3,
        marginTop: '10%',
        color: '#323436',
    }
})
export default ButtonStyles;