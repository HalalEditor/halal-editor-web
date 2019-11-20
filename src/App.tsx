import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import app from "firebase/app";

import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { FIREBASE_CONFIG } from "./.config";
import ReduxContextProvider, { ReduxContext } from "./contexts/redux-context";

const App: React.FC = () => {
  useEffect(() => {
    console.log("[app.tsx]: useEffect");
    app.initializeApp(FIREBASE_CONFIG);
  }, []);

  const isAuth = false;
  let pages = null;

  if (isAuth) {
    pages = (
      <div className="page-container">
        <Route path="/" exact component={HomePage} />
      </div>
    );
  } else {
    pages = (
      <div className="page-container">
        <LoginPage />
      </div>
    );
  }

  return (
    <ReduxContextProvider>
      <Router>{pages}</Router>
    </ReduxContextProvider>
  );
};

export default App;
