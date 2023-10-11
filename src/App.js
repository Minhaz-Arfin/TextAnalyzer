import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


export default function App() {
   const [mode, setMode] = useState('light');  //is dark mode enabled or not
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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
    {/* <Router>
    <Navbar title = "DayOne1" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/'>
          <TextForm  showAlert={showAlert} heading ="Enter Your Text to Analyze"  mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router> */}

 

 <BrowserRouter>
      <Navbar title="DayOne" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} />
          <Route  exact path="about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>
    

    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


