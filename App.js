import React,{useState} from 'react';
import {View, StyleSheet,TouchableWithoutFeedback,Keyboard} from 'react-native'
import ItemsList from './src/Items/itemsList'
import Header from './src/header'
import Login from './src/Login/login'
import * as Font from 'expo-font'
import {AppLoading} from 'expo';
import Categories from './src/Categories/categories'

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'CaviarDreams' : require('./assets/fonts/CaviarDreams.ttf'),
  })
}



export default function App () {
  
    const [user,setUser] = useState({})
    const [dataLoading,setDataLoading] = useState(false)
    const [loginMode,setLoginMode] = useState(true)
    const [categoriesMode,setCategoriesMode] = useState(false)

    let isAttendant = false;

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
        
            {isAttendant ?
              <ItemsList />
            :
            <View>
              <Login setUser={setUser} visible={loginMode} setLoginMode={setLoginMode} setCategoriesMode={setCategoriesMode}/>
              <Categories visible={categoriesMode}/>
            </View>
            }

        </View>
      </TouchableWithoutFeedback>
    )
  }

const style = StyleSheet.create({
  screen:{
    flex:1
  }
})
