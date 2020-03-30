import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import {Button, Image, StyleSheet, View} from "react-native";
import * as Permissions from 'expo-permissions'
import {Alert} from "react-native-web";


async function askForPermissions() {
    const {status} =
        await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
        Alert.alert('Ошибка', 'Вы не деали права на создание фото')
        return false;
    }
    return true;
}


export const PhotoPicker = ({onPick}) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermission = await askForPermissions();
        if (!hasPermission) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 1,
            allowsEditing: false,
            aspect: [16, 9]
        });
        setImage(img.uri);
        onPick(img.uri)
    };

    return <View style={styles.wrapper}>
        <Button title='Сделать фото' onPress={takePhoto}/>
        {image && <Image style={styles.image} source={{uri: image}}/>}
    </View>;
};


const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
});