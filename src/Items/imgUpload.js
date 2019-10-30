import React,{useState,useEffect} from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const ImageUpload = props =>{

    const [img,setImg] = useState(null)

  useEffect(() => {
    getPermissionAsync();
  });

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImg(result.uri);
      props.setImg(result)
    }
}

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          {img ?
            <Image source={{ uri: img }} style={{ width: 200, height: 200 }}/>
          :
            <Button title="Add image" onPress={_pickImage}/>
          }
        </View>
      )
}

export default ImageUpload;