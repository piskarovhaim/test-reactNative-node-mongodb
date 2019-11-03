import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../../constants/colors'

const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);

const height = screenHeight/4;
const circleRadius = screenWidth/3;
const topCircleHeight = height - circleRadius/2;

const circleCheck = screenWidth*0.08;

const styles = StyleSheet.create({

    topContainer:{
        width: '100%',
        height : height,
        backgroundColor:Colors.welcomeBackground,
        alignItems: 'center',
        justifyContent: 'center',
        padding: screenWidth/6
        
    },
    topText:{
        fontSize:30
    },
    bottomContainer:{
        flex:1,
        paddingTop:30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection:'row',
        flexWrap:'wrap',
        
    },
    circle: {
        width: circleRadius,
        height: circleRadius,
        borderRadius: circleRadius/2,
        backgroundColor: Colors.welcomebuttonBackground,
        alignItems: 'center',
        justifyContent: 'center',
        margin:20
    },


    bottomFoodContainer:{
        flex:1,
        marginTop:(circleRadius/2),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    topCircle : {
        width: circleRadius,
        height: circleRadius,
        borderRadius: circleRadius/2,
        backgroundColor: Colors.accentBackground,
        position:'absolute',
        alignSelf: 'center',
        top:topCircleHeight,
        alignItems: 'center',
        justifyContent: 'center',

    },
    foodImg:{
        width: (circleRadius * Math.cos(Math.PI/4)),
        height: (circleRadius* Math.sin(Math.PI/4)),
        
    },


    view1:{
        width: (screenWidth*0.2),
    },
    view2:{
        paddingHorizontal:10,
        flex:1,
        justifyContent: 'flex-start',
    },
    view3:{
        
        justifyContent: 'space-between',
    },

    img:{ 
        width: (screenWidth*0.2), 
        height: (screenWidth*0.2),
        borderWidth:0.5,
        borderColor : 'rgb(209,209,209)'
    },

    priceText:{
        fontSize:20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:5,
        fontFamily:'open-sans-bold',
        color: Colors.priceText
    },
    nameText:{
        fontSize:20,
        fontFamily:'open-sans',
        color:Colors.cardText
    },

    amount:{
        flexDirection:'row',
        justifyContent: 'flex-end',
    },

    amountNumber:{
        padding:10,
        marginHorizontal:5,
        borderWidth:0.5,
        borderColor : 'rgb(209,209,209)',
        borderRadius:5
    },

    amoundText:{
        fontSize:10
    },

    plus:{
        padding: 10,
        justifyContent: 'center',
    },

    minus:{
        padding: 10,
        justifyContent: 'center',
        top: -6.5
    },

    crossUp: {
        backgroundColor: Colors.welcomebuttonBackground,
        height: 10,
        width: 2
      },
      crossFlat: {
        backgroundColor: Colors.welcomebuttonBackground,
        height: 2,
        width: 10,
        position: 'absolute',
        left: -4,
        top: 4
      },

      orderButton:{
        width: circleRadius,
        height : 30,
        borderWidth:0.5,
        borderColor : Colors.welcomebuttonBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom:10,
      },
      orderText:{
          color:Colors.welcomebuttonBackground
      },

      circleCheck:{
        width: circleCheck,
        height: circleCheck,
        borderRadius: circleCheck/2,
        backgroundColor: Colors.welcomebuttonBackground,
        position:'absolute',
        top:-(circleCheck/3),
        left:-(circleCheck/5)
      },


      leftStick: {
        position: 'absolute',
        left: (circleCheck/8),
        top: (circleCheck/2),
        backgroundColor: 'white',
        width: (circleCheck*3/8)*1.4142,
        height: 5,
        transform: [
          {rotate: '45deg'}
        ],
        borderRadius: 15,
    },
    rightStick: {
        position: 'absolute',
        left: (circleCheck/2) - 6,
        bottom: (circleCheck/8) + 10,
        backgroundColor: 'white',
        width: (circleCheck*3/8)*1.4142*1.4,
        height: 5,
        transform: [
          {rotate: '110deg'}
        ],
        borderRadius: 15,
    }

        


})

  export default styles;