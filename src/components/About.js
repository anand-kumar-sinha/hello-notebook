// import React, { useEffect } from 'react'
// import { useContext } from 'react'
// import noteContext from '../context/notes/noteContext'

function About(props) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-4 mx-3 my-3">
          <img src="/image/anand.jpg" alt="" width="140" height="140" className="img-fluid img-thumbnail bd-placeholder-img rounded-circle" />
          <h2 className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Anand Kumar Patel</h2>
          <h4 className={`opacity-75 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Senior Developer</h4>

          <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            Student of GOVT. Polytechnic, GAYA
            <br />
            Creator of <strong className="text-danger">Hello-Note Book</strong>  and <strong><a href="helloengg.epizy.com" className="text-danger" target="_blank">Hello Engg</a> </strong>
            <br />
            MERN Stack Developer
            <br />
            Basic of C, C++, JAVA
            <br />
            <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> Coder in <strong> <a href="https://www.codechef.com/users/harshrajsinha1" className="text-danger" target="_blank" rel="noreferrer">CODE CHEF</a> </strong>
          </p>
          <a href="mailto:helloengg.420@gmail.com" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-success">Contact Us</button></a>

        </div>

        <div className="col-lg-4 mx-3 my-3">
          <img src="/image/badal.jpg" alt="" width="140" height="140" className="img-fluid img-thumbnail bd-placeholder-img rounded-circle" />
          <h2 className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Badal Kumar</h2>
          <h4 className={`opacity-75 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Content Manager</h4>
          <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            Pursuing diploma from computer science
            <br />
            Work as a content manager in <strong className="text-danger">Hello-Note Book</strong> to manage the content upload on it
            <br />
            Basic of <strong className="text-danger">HTML, CSS, C, Python</strong>
          </p>
          <a href="mailto:krbadal200@gmail.com" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-success">Contact Us</button></a>
        </div>

        <div className="col mx-3 my-3">
          <img src="/image/shivam.png" alt="" width="140" height="140" className="img-fluid img-thumbnail bd-placeholder-img rounded-circle" />
          <h2 className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Shivam Kumar</h2>
          <h4 className={`opacity-75 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Supporter</h4>
          <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            Student of GOVT. Polytechnic, GAYA
            <br />
            Work as a Supporter in <strong className="text-danger">Hello-Note Book</strong>
            <br />
            Basic of <strong className="text-danger">HTML, CSS, C, Python</strong>
          </p>
          <a href="mailto:shivamkrs777@gmail.com" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-success">Contact Us</button></a>
        </div>

        <h3 style={{ marginTop: '25px', marginBottom: '-10px' }}>OUR TEAMMATES (NOOB CODER)</h3>
        <div className="col mx-3 my-3">
          <img src="/image/ritesh.jpg" alt="" width="140" height="140" className="img-fluid img-thumbnail bd-placeholder-img rounded-circle" />
          <h2 className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Ritesh Kumar</h2>
          <h4 className={`opacity-75 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Supporter</h4>
          <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            Student of GOVT. Polytechnic, GAYA
            <br />
            Work as a Supporter in <strong className="text-danger">Hello-Note Book</strong>
            <br />
            Basic of <strong className="text-danger">HTML, CSS, C, Python</strong>
          </p>
          <a href="mailto:riteshkumar8582@gmail.com" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-success">Contact Us</button></a>
        </div>
        <div className="col mx-3 my-3">
          <img src="/image/anu.jpg" alt="" width="140" height="140" className="img-fluid img-thumbnail bd-placeholder-img rounded-circle" />
          <h2 className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Anurag Sharma</h2>
          <h4 className={`opacity-75 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Supporter</h4>
          <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            Student of GOVT. Polytechnic, GAYA
            <br />
            Work as a Supporter in <strong className="text-danger">Hello-Note Book</strong>
            <br />
            Basic of <strong className="text-danger">HTML, CSS, C, Python</strong>
          </p>
          <a href="mailto:riteshkumar8582@gmail.com" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-success">Contact Us</button></a>
        </div>
      </div>
    </div>
  )
}

export default About
