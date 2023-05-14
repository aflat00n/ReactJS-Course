// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <div className="pagecontainer">
        <Navbar mode={mode} toggleMode={toggleMode}/>
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
