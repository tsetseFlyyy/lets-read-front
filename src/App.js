import logo from "./logo.svg";
import "./App.css";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { AddBookModal } from "./components/AddBookModal";
import { useState } from "react";

function App() {
//  const [AddBookModalActive, setAddBookModalActive] = useState(true);
  return (
    <div className="App">
      <Header />
      {/*<button onClick={() => setAddBookModalActive(true)}>Button</button>*/}
      <Main />
      {/*<AddBookModal
        active={AddBookModalActive}
        setActive={setAddBookModalActive}
      />*/}
    </div>
  );
}

export default App;
