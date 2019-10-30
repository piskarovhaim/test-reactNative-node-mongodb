import React,{useState} from 'react';
import {View, StyleSheet,TouchableWithoutFeedback,Keyboard} from 'react-native'
import ItemsList from './src/Items/itemsList'
import Header from './src/header'
import * as Font from 'expo-font'
import {AppLoading} from 'expo';

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}



export default function App () {

  const [dataLoading, setDataLoading] = useState(false);
  
  if(!dataLoading){
    return(
      <AppLoading 
      startAsync={fetchFonts} 
      onFinish={()=>setDataLoading(true)} 
      onError={(err)=>console.log(err)}/>

    )
  }

  return(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={style.screen}>
          <Header title="flight app"/>
          <ItemsList />
      </View>
    </TouchableWithoutFeedback>
  )
}

const style = StyleSheet.create({
  screen:{
    flex:1
  }
})
