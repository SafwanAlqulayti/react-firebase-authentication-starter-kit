import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyCuU1Shdxe3xKQOeUvuuSW9A-XtN-xyHPM",
  authDomain: "wedding-28879.firebaseapp.com",
  databaseURL: "https://wedding-28879.firebaseio.com",
  projectId: "wedding-28879",
  storageBucket: 'wedding-28879.appspot.com',
  messagingSenderId: "1038462976807",
};

class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  export default Firebase;