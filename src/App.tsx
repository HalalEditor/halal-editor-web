import React, { useEffect } from "react";
import app from "firebase/app";

import "./App.css";
import { FIREBASE_CONFIG } from "./.config";
import ReduxContextProvider from "./contexts/redux-context";
import Router from "./Router";

const App: React.FC = () => {
  useEffect(() => {
    console.log("[app.tsx]: useEffect");
    app.initializeApp(FIREBASE_CONFIG);
  }, []);

  return (
    <ReduxContextProvider>
      <Router></Router>
    </ReduxContextProvider>
  );
};

export default App;
