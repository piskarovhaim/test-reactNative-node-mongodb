import React from 'react';
import {Text,StyleSheet} from 'react-native'

const SecondaryText = props =>{
    return <Text {...props} style={{...style.text,...props.style}}>{props.children}</Text>
}

const style = StyleSheet.create({
    text:{
        //fontFamily:'open-sans',
        fontSize: 20,
        color:'white',
    }
})

export default SecondaryText;