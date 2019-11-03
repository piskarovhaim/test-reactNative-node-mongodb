import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import SecondaryText from '../constants/TextFont/secondaryText'

const Card = props =>{
    return(
        <View style={{...style.card,...props.style}}>
            {props.children}
        </View>
    );
}

const screenWidth = Math.round(Dimensions.get('window').width);  

const style = StyleSheet.create({
    card:{
        flexDirection:'row',
        width: (screenWidth*0.9),
        shadowColor: 'black',
        shadowOffset : {width : 0 , height : 1},
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 2,
        backgroundColor:'white',
        padding:18,
        paddingBottom: 7,
        borderRadius:10,
        borderWidth:1,
        borderColor:'rgb(209,209,209)',
        margin:10
    }
})

export default Card;