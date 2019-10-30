import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors'
import MainText from '../constants/TextFont/mainText'

const Header = props => {
    return(
        <View style = {style.header}>
            <MainText style = {style.headerText}>{props.title}</MainText>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width :'100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent:'center'
    },
    headerText:{
        color:'black',
        fontSize: 18,
    }
})
export default Header;