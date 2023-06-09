import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    // const newColor = ()=>{
    //     let newColor = 'dark'
    //     setColor(newColor)
    // }
    // const [color, setColor] = useState('light')
    const [defaultClicked, setDefaultClicked] = useState('-')
    const [primaryClicked, setPrimaryClicked] = useState('-outline-')
    const [dangerClicked, setDangerClicked] = useState('-outline-')
    const [successClicked, setSuccessClicked] = useState('-outline-')
    const defaultClick = (event)=>{
        setDefaultClicked('-')
        setPrimaryClicked('-outline-')
        setDangerClicked('-outline-')
        setSuccessClicked('-outline-')
    }
    const primaryClick = (event)=>{
        setDefaultClicked('-outline-')
        setPrimaryClicked('-')
        setDangerClicked('-outline-')
        setSuccessClicked('-outline-')
    }
    const dangerClick = (event)=>{
        setDefaultClicked('-outline-')
        setPrimaryClicked('-outline-')
        setDangerClicked('-')
        setSuccessClicked('-outline-')
    }
    const successClick = (event)=>{
        setDefaultClicked('-outline-')
        setPrimaryClicked('-outline-')
        setDangerClicked('-outline-')
        setSuccessClicked('-')
    }
    // if (props.mode === 'light' && defaultClicked === '-' ) {
        
    // }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-gradient`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
            </ul>
            <button type="button" onClick={defaultClick} className={`btn btn${defaultClicked}dark btn-sm me-2`}></button>
            <button type="button" onClick={primaryClick} className={`btn btn${primaryClicked}primary btn-sm me-2`}></button>
            <button type="button" onClick={dangerClick} className={`btn btn${dangerClicked}danger btn-sm me-2`}></button>
            <button type="button" onClick={successClick} className={`btn btn${successClicked}success btn-sm me-2`}></button>
            <div className={`form-check form-switch me-2 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Text Utility",
    home: "Home",
    about: "About"
}