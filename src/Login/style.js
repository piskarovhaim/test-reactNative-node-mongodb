import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../../constants/colors'

const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);

const height = screenHeight/2;
const circleRadius = screenWidth/2.5;
const circleHeight = height - circleRadius/2

const styles = StyleSheet.create({

    loginContainer:{
        width: '100%',
        height : height,
        backgroundColor:Colors.welcomeBackground,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    buttonContainer:{
        width: '50%',
        height : '10%',
        backgroundColor:Colors.welcomebuttonBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    
    welcomeContainer:{
        width: '100%',
        height : height,
        backgroundColor:Colors.welcomeBackground,
        alignItems: 'center',
        justifyContent: 'center',
        top:height
    },
    welcomeText:{
        marginBottom:10
    },
    textButton:{
        fontSize: 15,
        color:'white'
    },
    textInput: {
        width: '50%',
        fontSize: 15,
        borderColor:'white',
        borderBottomWidth:1,
        textAlign:'center',
        marginBottom: 10,
        color:'white'
        
      },

      circle: {
        flex:1,
        width: circleRadius,
        height: circleRadius,
        borderRadius: circleRadius/2,
        transform: [
            {scaleX: 2}
          ],
        backgroundColor: Colors.accentBackground,
        position:'absolute',
        alignSelf: 'center',
        top:circleHeight

    }

})

  export default styles;