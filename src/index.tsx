import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import * as firebase from "firebase/app";
import { FIREBASE_CONFIG } from "./.config";

import * as serviceWorker from "./serviceWorker";
console.log("firebase.initializeApp...");
firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
