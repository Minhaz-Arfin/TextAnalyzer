import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
let name = "Minhaz";

function App() {
  return (
    <>
      <Navbar title = "DayOne1" />
      <div className="container my-3">
      {<TextForm heading ="Enter Your Text to Analyze" /> }
      {/* <About /> */}
      </div>
      
      
    </>
  );
}

export default App;
