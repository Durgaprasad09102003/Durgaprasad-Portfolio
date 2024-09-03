import React, { useState } from 'react';
import assets from '../assets/assets';

export default function Header() {

    const [leftVisible, setLeftVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);

    const LeftVisibility = () =>{
        setLeftVisible(!leftVisible);
    }

    const RightVisibility = () =>{
        setRightVisible(!rightVisible);
    }

  return (
    <div className="Header">
        <nav className="navbar">
            <ul className="nav-list">       

                    {leftVisible ?
                        <div className="header-fit">
                            <li className="nav-item active">Home</li>
                            <li className="nav-item">Skill</li>
                            <li className="nav-item"><a href="#projects">Projects</a></li>
                            <div className='arr circular' onClick={LeftVisibility}>
                                <img src={assets.up_arrow} alt='' id="arrow"/>
                            </div>
                        </div>
                        :
                        <div className='arr circular' onClick={LeftVisibility}>
                            <img src={assets.down_arrow} alt='' id="arrow"/>
                        </div>
                    }
            
                <li className="nav-item brand"><b>DURGA PRASAD</b></li>

                {rightVisible ?
                        <div className="header-fit">
                            <div className='arr circular'>
                                <img src={assets.down_arrow} alt='' id="arrow" onClick={RightVisibility}/>
                            </div>
                            <li className="nav-item">Portfolio</li>
                            <li className="nav-item"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                Resume
                                </a></li>
                            <li className="nav-item">Contact</li>
                        </div>
                            :
                            <div className='arr circular' onClick={RightVisibility}>
                                <img src={assets.up_arrow} alt='' id="arrow"/>
                            </div>
                    }
            
               

            </ul>
        </nav>
    </div>
  )
}
