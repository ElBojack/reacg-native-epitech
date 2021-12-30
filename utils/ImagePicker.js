import * as ImagePicker from 'expo-image-picker';
import {
  ref, uploadBytes, getDownloadURL, getStorage,
} from 'firebase/storage';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import app from '../firebase';

export async function pickImage() {
  const result = ImagePicker.launchImageLibraryAsync(
    {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    },
  );

  return result;
}

export async function takePicture() {
  const result = ImagePicker.launchCameraAsync();

  return result;
}

export async function askLibraryPermission() {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  return status;
}

export async function askCameraPermission() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();

  return status;
}

export async function uploadImage(uri, path, fName) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(new TypeError('Network request failed'));
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const fileName = fName || nanoid();

  const storage = getStorage(app);

  const imageRef = ref(storage, `${path}/${fileName}.jpeg`);

  const snapshot = await uploadBytes(imageRef, blob, {
    contentType: 'image/jpeg',
  });

  blob.close();

  const url = await getDownloadURL(snapshot.ref);

  return { url, fileName };
}
