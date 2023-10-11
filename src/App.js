import './App.css';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';


function App() {
   const [mode, setMode] = useState('light');  //is dark mode enabled or not
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
   }

   const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor= '#042743';
        showAlert("Dark mode has been enabled", "success");
        document.title = "DayOne - Dark Mode";
      } else{
        setMode('light');
        document.body.style.backgroundColor= 'white';
        showAlert("Light mode has been enebled", "success")
        document.title = "DayOne - Light Mode";
      }
   }
  return (
    <>
 {/* <BrowserRouter> */}
      <Navbar title="DayOne" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>
      </div>
      
        {/* <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} />
          <Route  exact path="/about" element={<About />} />
        </Routes> */}
        
      {/* </BrowserRouter> */}
    
    {/* commenting out the reactDom part because it doesn't work well with
    github page but it will work fine with the server. deleting this Just
    deploy on github pages. */}

    </>
  );
}

export default App;
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<App />);


