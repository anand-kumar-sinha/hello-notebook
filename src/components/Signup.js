import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Signup(props) {

  const [signup, setSignup] = useState({ name: "", email: "", password: "", cpassword: "" })

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password } = signup
    const response = await fetch(`http://localhost:5000/api/auth/signup`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json()
    if (json.success) {
      localStorage.setItem('token', json.jwtToken)
      navigate('/');
      props.showAlert("Successfully Signup, Thanks for joining us", 'success')
    }
    else {
      props.showAlert('Enter carefully','danger')
    }
  }

  const onChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }



  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  }

  return (
    <>
      <div className="row my-3">
        <div className="col-md-5 my-3">


          <img src="/image/2.gif" className='img-fluid' alt="" />

        </div>
        <div className={`col-md-7 rounded-4  shadow-lg  bg-opacity-25 my-3 p-3 bg-${props.mode === 'light' ? 'success' : 'dark'}`}>
          <form onSubmit={handleSubmit} className={`needs-validation text-${props.mode === 'dark' ? 'light' : 'dark'}`}>

            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="name" className="form-label">First Name</label>
                <input type="text" className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'}  text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="name" name='name' placeholder='Enter your First name' onChange={onChange} aria-describedby="emailHelp" minLength={3} maxLength={15} required />
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'}  text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="lastname" name='lastname' placeholder='Enter your Last name' onChange={onChange} aria-describedby="emailHelp" minLength={3} maxLength={15} required />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email address</label>
                <div className="input-group has-validation">
                  <span className={`input-group-text bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>@</span>
                  <input type="email" className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter your E-mail" minLength={8} maxLength={35} required />
                </div>
                <div id="emailHelp"  className={`form-text text-${props.mode === 'dark' ? 'light' : 'dark'}`}>We'll never share your email with anyone else.</div>
              </div>

              <div className="col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type={passwordShown ? "text" : "password"} className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="password" name='password' onChange={onChange} />
                  <span className={`input-group-text bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}><i className={`bi ${passwordShown === false ? 'bi-eye' : 'bi-eye-slash'} `} onChange={onChange} onClick={togglePassword}></i></span>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <div className="input-group has-validation">
                  <input type={passwordShown2 ? "text" : "password"}  className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="cpassword" name='cpassword' onChange={onChange} />
                  <span className={`input-group-text bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}><i className={`bi ${passwordShown2 === false ? 'bi-eye' : 'bi-eye-slash'} `} onChange={onChange} onClick={togglePassword2}></i></span>
                </div>
              </div>
            </div>
            <label htmlFor="gender" className='my-2'>Gender :</label>
                <div>
                  <div className="form-check">
                    <input id="credit" name="gender" type="radio" className={`form-check-input bg-${props.mode === 'dark' ? 'dark' : ''}`} required="required" />
                    <label className="form-check-label" htmlFor="credit">Female</label>
                  </div>
                  <div className="form-check">
                    <input id="debit" name="gender" type="radio" className={`form-check-input bg-${props.mode === 'dark' ? 'dark' : ''}`} required="required" />
                    <label className="form-check-label" htmlFor="debit">Male</label>
                  </div>
                  <div className="form-check">
                    <input id="paypal" name="gender" type="radio" className={`form-check-input bg-${props.mode === 'dark' ? 'dark' : ''}`} required="required" />
                    <label className="form-check-label" htmlFor="paypal">Custom</label>
                  </div>
                </div>
                <button className="w-100 btn btn-outline-success btn-lg my-3" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
