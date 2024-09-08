import React, { useState } from 'react';
import assets from '../assets/assets';

export default function Header() {

    const [navVisible, setNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisible(!navVisible);
    };


  return (
    <div className="Header">
        <nav className={navVisible ? "slider" : "navbar"}>
            <ul className={navVisible ?  ' nav-list nav-visible': 'nav-list' }>  
                <li className="nav-item active">Home</li>
                <li className="nav-item"><a href="#Education" > Education </a></li>
                <li className="nav-item"><a href="#Aboutmelink" id="link_transition">About us</a></li>
                <li className="nav-item brand " ><b>DURGA PRASAD</b></li>
                <li className="nav-item">Projects</li>
                <li className="nav-item"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    Resume
                    </a></li>
                <li className="nav-item">Media</li>
            </ul>

            
            <button onClick={toggleNavVisibility} className={navVisible ? " toggle-btn sliderup" : 'toggle-btn'}>
                {navVisible ?
                    <img 
                        src={assets.close} 
                        alt='Toggle Navigation' 
                        className='nav-visible'
                    />
                    :
                    <img 
                        src={assets.hb} 
                        alt='Toggle Navigation' 
                        className='hamberger-tag'
                        
                    />
                    
                }
            </button>

            
            
        </nav>
    </div>
  )
}
