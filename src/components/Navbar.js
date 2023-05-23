import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const  Navbar = (props) =>  {

    let location = useLocation();
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid"><img src="logo.webp" alt="Logo" width="30" hight="24" className="d-inline-block align-text-top mx-1 rounded" />
                <Link className="navbar-brand" to="/">Hello-Note Book</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item box">
                            <Link className={`nav-link  ${location.pathname === '/' ? 'active box' : ''}`} to="/" >Home</Link>
                        </li>
                        <li className="nav-item box">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active box' : ''}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="mx-3 my-1">
                    <i className={`bi bi-${props.mode === 'light'?'moon-stars-fill':'brightness-high-fill text-light'} `} onClick={props.btnsc}></i>
                    </div>
                    <div className="">
                    <Link type="button" className="btn btn-outline-primary mx-1 my-1" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
