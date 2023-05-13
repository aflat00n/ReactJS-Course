// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <div className="pagecontainer">
        {/* <Navbar title='Text Utility' home='Home' about='About'/> */}
        <Navbar/>
        <div className="container my-3">
        <TextForm heading='Enter text to analyze'/>
        </div>
        <div className="container text-center">
        <About/>
        </div>
      </div>
    </>
  );
}

export default App;
