import React from 'react'
import { Link } from 'react-router-dom';

function Signup(props) {
  return (
    <>
      <div class="row my-3">
        <div class="col-md-5 my-3">


              <img src="/image/2.gif" className='img-fluid' alt="" />

        </div>
        <div class="col-md-7 my-3">
            
            <form>
              <div className="mb-3">
              <label htmlFor="name" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Name</label>
                <input type="text" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} name="name" id="name" aria-describedby="emailHelp" placeholder='Enter your name'/>
                <label htmlFor="email" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Email address</label>
                <input type="email" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} name="email" id="email" aria-describedby="emailHelp" placeholder='Enter your E-mail'/>
                <div id="emailHelp" className={`form-text text-${props.mode === 'light'?'dark':'light'}`}>We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Password</label>
                <input type="password" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} name="password" id="password" placeholder='Enter your Password' />
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Confirm Password</label>
                <input type="password" className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} name="cpassword" id="cpassword" placeholder='Confirm your Password' />
              </div>
              <button type="submit" className="btn btn-outline-primary my-2">Sign Up</button>
            </form>
            </div>
          </div>


    </>
  )
}

export default Signup
