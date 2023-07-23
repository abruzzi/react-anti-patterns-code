import React from "react";
import "./App.css";
import ThemeProvider from "./ch2/ThemeProvider";
import MyShop from "./ch4/MyShop";
import {TermsAndConditions} from "./ch5/TermsAndConditions";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <MyShop />
        <TermsAndConditions />
      </ThemeProvider>
    </div>
  );
}

export default App;
