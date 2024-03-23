import React, { useState } from "react"
import "./Header.css"
import logo from "../pic/logo.png"
import { Navlinks } from "./NavLinks"
import Sidebar from "./Sidebar"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollY = window.scrollY;

    if (scrollY > 50 && scrollY < 300) {
      header.style.transform = "translateY(-100px)";
    } else if (scrollY >= 300) {
      header.classList.add("active");
      header.style.transform = "translateY(0px)";
    } else {
      header.style.transform = "translateY(0px)";
      header.classList.remove("active");
    }
  });
  
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'> 
          <div className='logo'>
            <a href="#home">
              <img src={logo} alt='' />
            </a>
          </div>
          
          <div className='navlink'>
            <ul className="link f_flex uppercase">

                {Navlinks.map((link) =>{
                    const {id, url, text, className} = link;
                    return (
                        <li key={id}>
                            <a href={url} className={className}>
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? null : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
{/* 
      {
        !Mobile ? null : (<Sidebar mobile={Mobile} setMobile={setMobile}/>)
      } */}
      
      <Sidebar mobile={Mobile} setMobile={setMobile}/>

      {/* <section className="demo"></section> */}
    </>
  )
}

export default Header;