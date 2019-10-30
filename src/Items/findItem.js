import React, { useState } from 'react';
import { TextInput,StyleSheet,View,Button,Modal,Alert } from 'react-native';
import styles from './style';

const FindItem = props => {

    const [name,setName] =  useState('') 

    const handleChange = value =>{
        setName(value.replace(/[^(a-z)]/g,''));
    }

    const reset = () =>{
        setName('');
    }

    const handleFind = () =>{
        console.log(name);
        if(name == ''){
            Alert.alert("input invalid","only letters",
            [{text: 'ok', style:'destructive' , onPress : reset}])
            return;
        }
        props.findFunc(name)
    }

    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="enter item name"
                style={styles.textInput}
                onChangeText={handleChange}
                value={name}
                keyboardType="numeric"
                inlineImageLeft='search_icon'
                />
                <Button
                style = { styles.saveButton}
                title="search"
                onPress={handleFind}
                />
            </View>
        </Modal>
        );
}

export default FindItem;