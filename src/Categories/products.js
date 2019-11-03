import React, { useState } from 'react';
import { Image,View,Text,TouchableOpacity,FlatList } from 'react-native';
import styles from './style';
import Card from '../card'

const Product = props =>{
    imgUrl = 'http://10.0.2.2:3000/api/1/items/img/' + props.id

    const [amount,setAmount] = useState(0)
    const [isOrder,setIsOrder] = useState(false)
    const [isOrderText,setIsOrderText] = useState('Order')

    const Order = () =>{
        if(!isOrder){
            if(amount <= 0)
                return;
            setIsOrder(true)
            setIsOrderText('Cancel')
        }
        else{
            setIsOrder(false)
            setIsOrderText('Order')
        }
    }


    const amountMinus = () =>{
        if(amount <= 1){
            if(isOrder){
                setIsOrder(false)
                setIsOrderText('Order')
            }
            setAmount(0)
        }
        else
            setAmount(amount - 1)
    }
    const amountPlus = () =>{
        if(amount >= 10)
            setAmount(10)
        else
            setAmount(amount + 1)
    }
    return(
        <Card>
            <View style={styles.view1}>
                <Image source={{ uri: imgUrl }} style={styles.img} />
                <Text style={styles.priceText}>{props.price + "$"}</Text>
            </View>

            <View style={styles.view2}>
                <Text style={styles.nameText}>{props.name}</Text>
            </View>

            <View style={styles.view3}>
                <View style={styles.amount}>
                    <TouchableOpacity style={styles.minus} onPress={()=>amountMinus()} activeOpacity={0.8}>    
                        <View>
                            <View style={styles.crossFlat} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.amountNumber}><Text style={styles.amoundText}>{amount.toString()}</Text></View>
                    <TouchableOpacity style={styles.plus} onPress={()=>amountPlus()} activeOpacity={0.8}>    
                        <View>
                            <View style={styles.crossUp} />
                            <View style={styles.crossFlat} />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.orderButton} onPress={()=>Order()} activeOpacity={0.8}>    
                    <Text style={styles.orderText}>{isOrderText}</Text>
                </TouchableOpacity>
            </View>

            {isOrder ?
            <View style={styles.circleCheck}>
                <View style={styles.leftStick}/>
                <View style={styles.rightStick}/>
            </View>
            :
            null}


        </Card>
    )

}

const ProductsList = props => {

    return(
        <FlatList
        data={props.productsList}
        renderItem={({ item }) => 
        <Product id={item._id} name={item.name} price={item.price} 
                img = {item.img}/>}
        keyExtractor={item => item._id.toString()}
    />
    )
}

export default ProductsList