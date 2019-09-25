import React from "react";
import firebase from "firebase";
import { Provider as ListProvider } from "./context/listContext";

import Container from "./components/Container";
import "./App.css";

const firebaseConfig = {};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

function App() {
  return (
    <ListProvider>
      <Container />
    </ListProvider>
  );
}

export default App;
