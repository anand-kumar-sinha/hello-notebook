import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
      alert("sucess")
      localStorage.setItem('token', json.jwtToken)
      navigate('/');
    }
    else {
      alert("Enter a valid username or password")
    }
  }

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div class="row my-3">
        <div class="col-md-5 my-3">


              <img src="/image/1.gif" className='img-fluid' alt="" />

        </div>
        <div class="col-md-7 my-3">
            
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="email" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Email address</label>
                <input type="email" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} placeholder='Enter your E-mail' name="email" id="email" aria-describedby="emailHelp" value={login.email} onChange={onChange} />
                <div id="emailHelp"  className={`form-text text-${props.mode === 'light'?'dark':'light'}`}>We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Password</label>
                <input type="password" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} name="password" id="password" placeholder='Enter your Password' value={login.password} onChange={onChange} />
              </div>
              <button type="submit" className="btn btn-outline-primary my-2">Login</button>
              <p className={`text-${props.mode === 'light'?'dark':'light'}`}>Don't have an account? <Link className='fw-bold fs-5' to="/signup">Signup</Link> </p>
            </form>
            </div>
          </div>


    </>
  )
}

export default Login
