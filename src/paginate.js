import React, { Component } from 'react';
import { TextInput,StyleSheet,View,Button,Text } from 'react-native';
import styles from './Items/style';




export default function Paginate (props) {

    pagesArr = []
    let mod = 1;
    if(props.itemsPerPage % props.totalPages == 0)
        mod = 0;
    for(let i = 1 ; i <= Number(props.totalPages)+mod ; i ++){
        pagesArr.push(<Text key={i} style={styles.itemText} onPress={()=>props.func(i)}> {i } </Text>)
    }
    return(
        <View style={styles.Paginate}>
           {pagesArr}
        </View>
    )
}