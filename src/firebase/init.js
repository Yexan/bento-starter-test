import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyCbZIIbEzY9fmiAcH2maVrjNv34E4ZG_M4',
  authDomain: 'bento-starter-test-bb1bf.firebaseapp.com',
  databaseURL: 'https://bento-starter-test-bb1bf.firebaseio.com',
  projectId: 'bento-starter-test-bb1bf',
  storageBucket: '',
  messagingSenderId: '282944662386',
  appId: '1:282944662386:web:45caf4c65cce4d2b'
}

firebase.initializeApp(config)
