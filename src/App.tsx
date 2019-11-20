import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
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

  return <Router>{pages}</Router>;
};

export default App;
