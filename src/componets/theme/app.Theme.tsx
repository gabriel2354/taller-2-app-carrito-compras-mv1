import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../../commons/constansColor";


export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody: {
        fontSize: 16
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
     
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop:12
    },
    textRedirection:{
        marginTop:30,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center',
      
    },
    
        
      
});