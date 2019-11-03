import React, { useState,useEffect } from 'react';
import { Image,TextInput,StyleSheet,View,Button,Modal,Alert,Text,TouchableOpacity,FlatList } from 'react-native';
import styles from './style';
import SecondaryText from '../../constants/TextFont/secondaryText'
import ProductsList from './products'

const Food = props => {

    const [productsList,updateProductsList] = useState({})
    
    useEffect( () => {
        fetch('http://10.0.2.2:3000/api/1/items?page=1')
        .then(res => res.json())
        .then(productsList => {
            updateProductsList(productsList)
        })
    }, []);

    return(
        
        <Modal visible={props.visible}>
            <View style={styles.topContainer}>
            <SecondaryText style={{...styles.topText,...{paddingBottom:30}}}>Select Products</SecondaryText>
            </View>
            <View style={styles.topCircle}>
                <Image source={require('../../assets/img/food.jpg')} style={styles.foodImg} />
            </View>
            <View style={styles.bottomFoodContainer}>
                <ProductsList productsList={productsList.items}/>
            </View>
        </Modal>
        
    )
}

export default Food