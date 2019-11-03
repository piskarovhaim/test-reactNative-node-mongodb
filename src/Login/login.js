import React, { useState } from 'react';
import { TextInput,StyleSheet,View,Button,Modal,Alert,Text,TouchableOpacity } from 'react-native';
import styles from './style';
import SecondaryText from '../../constants/TextFont/secondaryText'

const Login = props => {

    const [passport,setPassport] =  useState('') 
    const [loginMode,setLoginMode ] = useState(true)
    const [user,setUser] = useState({})
    const [isLogin,setIsLogin] = useState(false)
    const [placeholder,setPlaceholder] = useState("Passport Number")
    const [placeholderColor,setPlaceholderColor] = useState('white')

    const handleChange = value =>{
        setPassport(value.replace(/[^(1-9)]/g,''));
    }

    const reset = () =>{
        setPassport('');
    }

    const handleLogin = () =>{
        if(passport == ''){
            setPlaceholderColor('red')
            return;
        }

        fetch('http://10.0.2.2:3000/users/' + passport)
        .then(res => res.json())
        .then(user => {
            if(!user.passport){
                reset()
                setPlaceholder('The Paspport not found')
                setPlaceholderColor('red')
                return;
            }
            console.log(user)
            setUser(user)
            props.setUser(user)
            setIsLogin(true)
        })
        
    }

    const letsStart = () => {
        props.setLoginMode(false)
        props.setCategoriesMode(true)
    }

    return (
        <Modal visible={props.visible}>      
            {isLogin ? 
            <View style={styles.welcomeContainer}>
                <SecondaryText style={styles.welcomeText}>
                    Hi {user.name + '\n'} 
                    Seat {user.seat}
                </SecondaryText>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=> letsStart()} activeOpacity={0.8}>
                    <Text style={styles.textButton}>Lets start</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={styles.loginContainer}>
                <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                style={styles.textInput}
                onChangeText={handleChange}
                value={passport}
                keyboardType="numeric"
                inlineImageLeft='search_icon'
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={()=> handleLogin()} activeOpacity={0.8}>
                    <Text style={styles.textButton}>Enter</Text>
                </TouchableOpacity>
            </View>
            }
            <View style={styles.circle}></View>
        </Modal>
        );
}



export default Login;