import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Webfoot from "./components/Webfoot";
import Login from "./components/Login";
import NoteState from "./context/notes/NotesState";
import { useState } from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Signup from "./components/Signup";

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
              <Route path="/login" element={<Login  mode = {mode} />} />
              <Route path="/signup" element={<Signup  mode = {mode} />} />
            </Routes>
          </div>
          <Webfoot mode={mode}/>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
