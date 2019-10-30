import React, { useState } from 'react';
import { TextInput,StyleSheet,View,Button,Modal } from 'react-native';
import styles from './style';
import Input from '../input';
import ImgUpload from './imgUpload'

const AddItem = props => {

    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [img,setImg] = useState("")


        return (
            <Modal visible={props.visible} animationType="slide">
                <View style={styles.inputContainer}>
                    <View>
                    <Input
                    placeholder="Item name"
                    style={styles.textInput}
                    onChangeText={value => setName(value)}
                    value={name}
                    />
                    <Input
                    placeholder="Price"
                    style={styles.textInput}
                    onChangeText={value => setPrice(value)}
                    value={price}
                    />
                    </View>
                    <ImgUpload setImg={setImg}/>
                </View>
                <View>
                    <Button
                    style = {styles.saveButton}
                    title="Add item"
                    onPress={()=>props.addFunc(name,price,img)}
                    />
                </View>
            </Modal>
        );
}

export default AddItem;
