import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './card.css'

function Login(props) {

  const [login, setLogin] = useState({ email: "", password: "" })

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ email: login.email, password: login.password })
    })
    const json = await response.json()
    if (json.success) {
      localStorage.setItem('token', json.jwtToken)
      navigate('/');
      props.showAlert("Welcome, You are Logined",'success')
    }
    else {
      props.showAlert('Enter a valid username or password','danger')
    }
  }

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }



  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <div className="row my-3">
        <div className="col-md-5 my-3">


          <img src="/image/1.gif" className='img-fluid' alt="" />

        </div>
        <div className={`col-md-7 rounded-4  bg-opacity-25 my-3 p-3 bg-${props.mode === 'light' ? 'success' : 'dark'}`} id='card-shadow'>

          <form onSubmit={handleSubmit} >
            <div className="mb-3" >
              <label htmlFor="email" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Email address</label>
              <input type="email" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} placeholder='Enter your E-mail' name="email" id="email" aria-describedby="emailHelp" value={login.email} onChange={onChange} />
              <div id="emailHelp" className={`form-text text-${props.mode === 'light' ? 'dark' : 'light'}`}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Password</label>
              <div className="input-group has-validation">
                <input type={passwordShown ? "text" : "password"} className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} id="password" name='password' onChange={onChange} />
                <span className={`input-group-text bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}><i className={`bi ${passwordShown === false ? 'bi-eye' : 'bi-eye-slash'} `} placeholder='Enter your Password' onChange={onChange} value={login.password} onClick={togglePassword}></i></span>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-success my-2">Login</button>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Don't have an account? <Link className='fw-bold fs-5 text-success' to="/signup">Signup</Link> </p>
          </form>
        </div>
      </div>


    </>
  )
}

export default Login
