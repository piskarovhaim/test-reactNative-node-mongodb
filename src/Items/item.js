import React from 'react';
import {  Text, TouchableOpacity,View , Image} from 'react-native';
import styles from './style'
import EditItem from './editItem'
import DeleteItem from './deleteItem'
import SecondaryText from '../../constants/TextFont/secondaryText'

import Card from '../card'

const Item = props =>{

    imgUrl = 'http://10.0.2.2:3000/api/1/items/img/' + props.id

    return (
        <Card style={styles.item}>
        <View>
            <SecondaryText style={styles.itemText}>Name: {props.name} Price: {props.price}</SecondaryText>
                <EditItem id={props.id} name={props.name} price={props.price} editFunc={props.editFunc}/>
                <TouchableOpacity onPress={()=>props.delFunc(props.id)} activeOpacity={0.8}>
                <DeleteItem id = {props.id} delFunc={props.delFunc}/>
                </TouchableOpacity>
            </View>
           <Image source={{ uri: imgUrl }} style={{ width: 100, height: 100 }} />

        </Card>
      
    );
}

export default Item;