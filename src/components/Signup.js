import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Signup.css'


function Signup(props) {

  const [signup, setSignup] = useState({name:"", email: "", password: "", cpassword: "" })

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {name, email, password} = signup
    const response = await fetch(`http://localhost:5000/api/auth/signup`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json()
    if (json.success) {
      alert("Successfully Signup, Thanks for joining us")
      localStorage.setItem('token', json.jwtToken)
      navigate('/');
    }
    else {
      alert("Enter a valid username or password")
    }
  }

  const onChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div>
        <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
          </div> 
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div> 
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Signup
