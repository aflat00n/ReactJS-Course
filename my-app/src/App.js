// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      <div className="pagecontainer">
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Navbar/> */}
        <div className="container my-3">
        <TextForm heading='Enter text to analyze' mode={mode}/>
        </div>
        {/* <div className="container text-center">
        <About mode={mode}/>
        </div> */}
      </div>
    </>
  );
}

export default App;
