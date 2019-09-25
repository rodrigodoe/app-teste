import React from "react";
import firebase from "firebase";
import { Provider as ListProvider } from "./context/listContext";
import Main from "./components/Main";
import "./App.css";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
