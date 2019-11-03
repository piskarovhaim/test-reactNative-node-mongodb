import React, { useState } from 'react';
import { TextInput,StyleSheet,View,Button,Modal,Alert,Text,TouchableOpacity } from 'react-native';
import styles from './style';
import SecondaryText from '../../constants/TextFont/secondaryText'
import Food from './food';



const Circle = props =>{

    return(
        <TouchableOpacity style={styles.circle} onPress={()=>props.onPress(true)} activeOpacity={0.8}>    
            <SecondaryText>{props.text}</SecondaryText>
        </TouchableOpacity>

    )
}

const Categories = props =>{

    const [foodMode,setFoodMode] = useState(false)

    return(
        <Modal visible={props.visible}>
            <View style={styles.topContainer}>
                <SecondaryText style={styles.topText}>what can we do for you?</SecondaryText>
            </View>

            <View style={styles.bottomContainer}>
                <Circle text={"Food &\nDrinks"} onPress={setFoodMode} />
                <Circle text="Duty Free" />
                <Circle text="Fun" />
                <Circle text="Sleeping" />
            </View>

            <Food visible={foodMode}/>
        </Modal>
    )
}

export default Categories