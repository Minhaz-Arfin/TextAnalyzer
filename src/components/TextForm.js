import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');
  //setText("new Text");
  const handleUpClick = () =>{
    //console.log("Upper case was clicked " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  }
  const handleLoClick = () =>{
    //console.log("Upper case was clicked " +  text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text","success")
  }
  const handleAltClick = () =>{
    let chars = text.toLowerCase().split("");
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    let newText =  chars.join("");
    setText(newText);
    props.showAlert("Converted to Alter Case!","success")
  }


  const handleOnChange = (event) =>{
    //console.log("On change was clicked");
    setText(event.target.value)
  }
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743': 'white', color: props.mode === 'dark' ? 'white': '#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleAltClick}>Convert To ALT Case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="conatiner " style={{backgroundColor: props.mode === 'dark' ? '#042743': 'white', color: props.mode === 'dark' ? 'white': '#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} characters</p>
      <p>{text.split(".").length} Sentence Count</p>
      <p>{0.008 * text.split(" ").length} Minuites time needed to read these words</p>
      
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something In the text box to preview "}</p>
    </div>
    </>
    
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired, };
TextForm.defaultProps = {
    heading: "Input Your Text",
    
};
