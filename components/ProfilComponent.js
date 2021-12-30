import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc, initializeFirestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

import { useCameraPermissions, useMediaLibraryPermissions } from 'expo-image-picker';

import app from '../firebase';
import {
  pickImage,
  takePicture,
  askCameraPermission,
  askLibraryPermission,
  uploadImage,
} from '../utils/ImagePicker';
import { logout } from '../redux/actions/auth';

const ProfilComponent = () => {
  const navigation = useNavigation();
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const [profilPicture, setProfilPicture] = useState(auth?.currentUser?.photoURL || null);
  const [galleryPermission, setGalleryPermission] = useMediaLibraryPermissions();
  const [cameraPermission, setCameraPermission] = useCameraPermissions();

  const handleSignOut = () => {
    dispatch(logout(auth));
    navigation.navigate('Login');
  };

  const handlePickImage = async () => {
    let result = { cancelled: false };

    if (!galleryPermission) {
      const newStatus = await askLibraryPermission();

      setGalleryPermission(newStatus);

      if (!newStatus) return;
    }
    result = await pickImage();
    if (!result.cancelled) {
      setProfilPicture(result.uri);
      const user = auth.currentUser;
      const { url } = await uploadImage(result.uri, `images/${user.uid}`, 'profilPicture');

      const userData = {
        email: user.email,
      };

      if (url) {
        userData.photoURL = url;
      }

      await Promise.all([
        updateProfile(user, userData),
        setDoc(doc(initializeFirestore(app, {
          experimentalForceLongPolling: true,
        }), 'users', user.uid), { ...userData, uid: user.uid }),
      ]);
    }
  };

  const handleTakePicture = async () => {
    let result = { cancelled: false };

    if (cameraPermission.canAskAgain && !cameraPermission.granted) {
      const newStatus = await askCameraPermission();

      setCameraPermission(newStatus);

      if (!newStatus) return;
    }
    result = await takePicture();
    if (!result.cancelled) {
      setProfilPicture(result.uri);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          marginBottom: 30,
          borderRadius: 120,
          width: 120,
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        {!profilPicture
          ? <MaterialCommunityIcons name="camera-plus" size={45} />
          : <Image source={{ uri: profilPicture }} style={{ width: '100%', height: '100%', borderRadius: 120 }} />}
      </TouchableOpacity>
      <Button onPress={handlePickImage} title="Pick an Image" />
      <Button onPress={handleTakePicture} title="Take a picture" />
      <Text>
        Email:
        {' '}
        {auth.currentUser?.email}
      </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilComponent;
