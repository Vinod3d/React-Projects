import React from "react"
import logo from "./pic/logo.png"
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className='conatiner text-center top'>
          <div className='img logo'>
            <a href="#home">
              <img src={logo} alt='' />
            </a>
          </div>
          <p>© 2023. All rights reserved by Vinod Chandra.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
