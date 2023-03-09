import logo from "./logo.svg";
import "./App.css";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { AddBookModal } from "./components/AddBookModal";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
