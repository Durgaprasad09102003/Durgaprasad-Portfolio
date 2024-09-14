import React, { useState } from 'react';
import assets from '../assets/assets';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const [navVisible, setNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisible(!navVisible);
    };


  return (
    <div className="Header">
        <nav className={navVisible ? "slider" : "navbar"}>
            <ul className={navVisible ?  ' nav-list nav-visible': 'nav-list' }>  
                <li className="nav-item"><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><a href="#Education" > Education </a></li>
                <li className="nav-item"><a href="#Aboutmelink" id="link_transition">About me</a></li>
                <li className="nav-item brand " ><b>DURGA PRASAD</b></li>
                <li className="nav-item"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li className="nav-item"><a href={assets.Portfolio} target="_blank" rel="noopener noreferrer">
                    Resume
                    </a></li>
                <li className="nav-item"><NavLink to="/media" activeClassName="active">Visume</NavLink></li>
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
