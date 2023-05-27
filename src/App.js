import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Webfoot from "./components/Webfoot";
import Login from "./components/Login";
import NoteState from "./context/notes/NotesState";
import Alert from "./components/Alert";
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

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar btnsc={btnsc} mode={mode} showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home mode={mode} showAlert={showAlert}/>} />
              <Route path="/about" element={<About mode = {mode} />} />
              <Route path="/login" element={<Login  mode = {mode} showAlert={showAlert}/>} />
              <Route path="/signup" element={<Signup  mode = {mode} showAlert={showAlert}/>} />
            </Routes>
          </div>
          <Webfoot mode={mode}/>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
