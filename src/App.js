import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Webfoot from "./components/Webfoot";
import NoteState from "./context/notes/NotesState";
import { useState } from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")

  const btnsc = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = 'black'
    }
    else {
      setmode('light')
      document.body.style.background = 'white'
    }
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar btnsc={btnsc} mode={mode} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home mode={mode} />} />
              <Route path="/about" element={<About mode = {mode} />} />
            </Routes>
          </div>
          <Webfoot mode={mode}/>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
