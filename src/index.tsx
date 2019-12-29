import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import * as firebase from "firebase/app";
import { FIREBASE_CONFIG } from "./.config";

import * as serviceWorker from "./serviceWorker";
console.log("firebase.initializeApp...");
firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
