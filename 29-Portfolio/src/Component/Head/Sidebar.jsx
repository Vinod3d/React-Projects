import React from 'react';
import './Sidebar.css'
import { Navlinks } from './NavLinks';
import { FaTimes } from 'react-icons/fa';
// import { useGlobalContext } from './context';
import logo from "../pic/logo.png"

const Sidebar = ({mobile, setMobile}) => {
//   const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={mobile ? " show-sidebar" : "sidebar"}>
    {/* <aside className={'sidebar show-sidebar' : 'sidebar'}> */}
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className='logo' />
        <button className='close-btn' onClick={() => setMobile(!mobile)}>
            <FaTimes/>
        </button>
      </div>

      <ul className="links">
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

    </aside>
  )
}

export default Sidebar