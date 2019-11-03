import React, { useState } from 'react';
import { TextInput,StyleSheet,View,Button } from 'react-native';
import styles from './style';

const EditItem = props =>{

    const [onEdit , setOnEdit] = useState(false);
    const [name,setName] = useState(props.name);
    const [price, setPrice] = useState(props.price.toString());

    const handleSave = () => {
        setOnEdit(false);
        props.editFunc(props.id,name,price)
    }

        return (
            <View>
            {onEdit ? 
            <View style={styles.inputContainer}>
                <View>
                <TextInput
                style={styles.textInput}
                onChangeText={value => setName(value)}
                value={name}
                />
                <TextInput
                type
                style={styles.textInput}
                onChangeText={value => setPrice(value)}
                value={price}
                />
                </View>
                <Button
                style = { styles.saveButton}
                title="Save"
                onPress={handleSave}
                />
            </View>
            :
            <View>
                <Button title="Edit" onPress={()=>setOnEdit(true)}/>
            </View>
            }
            </View>
        );
}

export default EditItem;

