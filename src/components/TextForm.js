import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState('');

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText ='';
    setText(newText);
  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary:</h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length} </b>characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes to Read</p>
         <h2>Preview</h2>
         <p>{text}</p>
    </div>
    </>
  )
}
