console.log(process.env);
/* const firebaseConfig = {
    apiKey: "AIzaSyAJQu6P6dwosN69x2OJ-P3MnlroEEnUoQ4",
    authDomain: "ema-jhon-simple-fc50b.firebaseapp.com",
    projectId: "ema-jhon-simple-fc50b",
    storageBucket: "ema-jhon-simple-fc50b.appspot.com",
    messagingSenderId: "943281995287",
    appId: "1:943281995287:web:241d5043c1d9e84dd72652"
  }; */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;