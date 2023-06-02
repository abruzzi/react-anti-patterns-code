import React from "react";
import "./App.css";
import ThemeProvider from "./ch2/ThemeProvider";
import Article from "./ch2/Article";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Article
          heading="Think in components"
          summary="It's important to change your mindset when coding with React."
        />

        <Article
          heading="Define custom hooks"
          summary="Hooks are a great way to share state logic."
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
