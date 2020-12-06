import { StyleSheet } from "react-native"

export default StyleSheet.create({
    main_container :{
        height : '100%',
        width : '100%',
        backgroundColor : '#FFFFFF'
    },
   header_container :{
        height : '10%',
        width : '100%',
        backgroundColor : '#003399',
   },
   header_font : {
    fontSize : 16,
    fontFamily : "Times New Roman",
    textAlign : 'center',
    marginTop : 30,
    fontWeight : 'bold',
    color : 'white'
   },
   unit_option_image : {
        height : 60,
        width : 80,
        alignContent : "center"
   },   
   unit_option_font : {
        alignSelf : "center",
       fontFamily : "Times New Roman",
       fontSize : 16,
   },
   button_container: {
        margin : '5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
  },
  button : {
        borderBottomColor: 'grey',
        borderWidth:1,
        width: '25%',
        height: 90,
        margin : 10,    
    },

    input: {
        marginLeft: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        width: '90%',
        fontSize: 16
    },

    label: {
        marginLeft: 15,
        marginTop: 20,
        fontSize: 16
    },
    inputContainer: {
        marginTop: '20%',
        flex: 1,
        justifyContent: 'space-between'
    },
    dropdown_Style : {
        marginLeft : 15,
        borderColor : 'blue',
        width : '95%'
    },
})