import React from 'react';
import {Text,StyleSheet} from 'react-native'

const MainText = props =>{
    return <Text {...props} style={{...style.text,...props.style}}>{props.children}</Text>
}

const style = StyleSheet.create({
    text:{
        fontFamily:'open-sans-bold'
    }
})

export default MainText;