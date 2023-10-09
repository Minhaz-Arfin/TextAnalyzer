import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
   const [mode, setMode] = useState('light');  //is dark mode enabled or not
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
   }

   const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor= '#042743';
        showAlert("Dark mode has been enabled", "success");
      } else{
        setMode('light');
        document.body.style.backgroundColor= 'white';
        showAlert("Light mode has been enebled", "success")
      }
   }
  return (
    <>
      <Navbar title = "DayOne1" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {<TextForm heading ="Enter Your Text to Analyze"  mode={mode}/> }
      {/* <About /> */}
      </div>
      
      
    </>
  );
}

export default App;
