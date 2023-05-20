import React from 'react'

function Footer(props) {
  return (
    <div>
      <footer className="py-5 px-5">
        <div className={`d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <p>© 2022 Hello Engineers, Inc. All rights reserved.</p>

          <ul className="list-unstyled d-flex">
            <a href="https://instagram.com/babu_.patel_._" target='_blank' rel="noreferrer"><i className="bi bi-instagram ms-3"></i></a>
            <a href="https://wa.me/+916203086263?text=hello" target='_blank' rel="noreferrer"><i className="bi bi-whatsapp ms-3"></i></a>
            <a href="mailto:helloengg.420@gmail.com" target='_blank' rel="noreferrer"><i className="bi bi-envelope-at ms-3"></i></a>
            <a href="https://www.facebook.com/mrconqureror/" target='_blank' rel="noreferrer"><i className="bi bi-facebook ms-3"></i></a>
            
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
