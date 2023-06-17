import React from "react";
import "./App.css";
import ThemeProvider from "./ch2/ThemeProvider";
import MyShop from "./ch4/MyShop";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <MyShop />
      </ThemeProvider>
    </div>
  );
}

export default App;
