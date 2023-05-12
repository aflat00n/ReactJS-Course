import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    // const formClick = ()=>{
    //     setText('')
    // }
    const [text, setText] = useState('');
  return (
    <>
        <h1 className='text-center'>{props.heading}</h1>
        <div className="mb-3 text-center">
            <textarea className="form-control" value={text} placeholder='Enter Text Here' onChange={handleOnChange} id="box" rows="8"></textarea>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleUpClick}>Upper Case</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleLowClick}>Lower Case</button>
        </div>
        <div className="container my-3 text-center">
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words | {text.length} characters</p>
            <p>Approx. Reading Time: {Math.round(text.split(' ').length * 0.008)} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
