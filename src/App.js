import React from "react";
import firebase from "firebase";
import { Provider as ListProvider } from "./context/listContext";
import Main from "./components/Main";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyAaAkZQDea0oSI4c06KDkQHa_CZLlyCAgo",
  authDomain: "app-teste-a18f5.firebaseapp.com",
  databaseURL: "https://app-teste-a18f5.firebaseio.com",
  projectId: "app-teste-a18f5",
  storageBucket: "app-teste-a18f5.appspot.com",
  messagingSenderId: "176361028061",
  appId: "1:176361028061:web:1a0c341f51212573171e34",
  measurementId: "G-S9QT34CE3L"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

function App() {
  return (
    <ListProvider>
      <Main />
    </ListProvider>
  );
}

export default App;
