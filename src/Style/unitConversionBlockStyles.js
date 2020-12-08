import { StyleSheet } from 'react-native';

const unitConversionBlockStyles = StyleSheet.create({
    container: {
        marginTop: '2%',
        marginLeft: 15,
    },
    from_To: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    value_Box: {
        flex: 1,
    },
    output_box: {
        borderWidth: 1,
        marginTop: 10,
        marginRight: 10,
        marginBottom: '10%'
    },
    picker_Style: {
        flex: 0.5,
        borderWidth: 1.5,
        marginRight: 10,
        height: 45,
        width: '95%',
        borderWidth: 2,

    },
    text_input: {
        fontSize: 20,
        borderWidth: 2,
        width: '95%',
        color: 'black',
        height: 45

    }
})

export default unitConversionBlockStyles;