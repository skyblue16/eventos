import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDeWficuESKzSdRp0oqrSoxh4GUTjq1PpI",
  authDomain: "eventos-hackaton.firebaseapp.com",
  databaseURL: "https://eventos-hackaton.firebaseio.com/",
  projectId: "eventos-hackaton",
  storageBucket: "eventos-hackaton.appspot.com",
  messagingSenderId: "117594444141"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;