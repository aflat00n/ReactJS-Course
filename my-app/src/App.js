// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  // BrowserRouter as Router,
  HashRouter as Router, // gh-pages
  Routes,
  Route,
  // Link
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert('\tDark Mode Enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('\tDark Mode Disabled','success')
    }
  }
  return (
    <>
    <Router>
      <div className="pagecontainer">
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={<TextForm className="container my-3" heading='Enter text to analyze' mode={mode}/>}/>
        {/* <div className="container my-3"> */}
        {/* element={<TextForm className="container my-3" heading='Enter text to analyze' mode={mode}/>} */}
        {/* </div> */}
      {/* </Route> */}
      <Route exact path="/about" element={<About className="container text-center" mode={mode}/>}/>
        {/* <div className="container text-center"> */}
        {/* <About className="container text-center" mode={mode}/> */}
      {/* </div> */}
      {/* </Route> */}
        {/* <Navbar/> */}
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
