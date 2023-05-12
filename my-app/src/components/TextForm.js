import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const formClick = ()=>{
        setText('')
    }
    const [text, setText] = useState('Enter Text Here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onClick={formClick} onChange={handleOnChange} id="box" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    </div>
  )
}
