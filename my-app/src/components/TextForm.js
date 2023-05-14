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
    const handleCapitalizeClick = ()=>{
        // let arr = text.split(/(?:\.\s)|(?:,\s)/)
        let arr = text.split(/(?:\.\s+)/)
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(". ")

        arr = newText.split(/(?::\s+)/)
        for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        newText = arr.join(": ")

        arr = newText.split(/(?:\?\s+)/)
        for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        newText = arr.join("? ")

        arr = newText.split(/(?:!\s+)/)
        for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        newText = arr.join("! ")
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
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} placeholder='Enter Text Here' onChange={handleOnChange} id="box" rows="8"></textarea>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleUpClick}>Upper Case</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleLowClick}>Lower Case</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleCapitalizeClick}>Capitalize</button>
        </div>
        <div className="container my-3 text-center" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words | {text.length} characters</p>
            <p>Approx. Reading Time: {Math.round(text.split(' ').length * 0.008)} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
