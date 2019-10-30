import React, { Component } from 'react';
import { Button,View } from 'react-native';
import styles from './style';

const DeleteItem  =  (props) => {

    return (
    <View>
        <Button style={styles.saveButton} title="delete" onPress={()=>props.delFunc(props.id)}/>
    </View>)
}

export default DeleteItem