import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    heading: {
        backgroundColor: 'rgba(0.9, 52, 90, 0.8)',
        height: '15%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: '#e8ddff',
    },
    headBar: {
        fontWeight: 'bold',
        marginTop: '4%',
        marginBottom: '10%',
        width: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    footer :{
       backgroundColor: 'rgba(0.9, 52, 90, 0.8)'
    },
    footer_text :{
        fontWeight: 'bold',
        width: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 16
    },
    scroll_view :{
        marginBottom: 70
    }
})

export default Styles;