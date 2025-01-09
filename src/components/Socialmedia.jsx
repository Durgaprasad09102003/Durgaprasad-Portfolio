import React,{useState} from 'react'
import assets from '../assets/assets'

function Socialmedia() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleBox = () => {
        setIsVisible(!isVisible);
    };

  return (
    <div className='mediabtn'>
        <button onClick={toggleBox}>
            {isVisible ? <img src={assets.down_arrow} alt='' /> : <img src={assets.up_arrow} alt='' />}
        </button>

        {isVisible && (
            <div className='socialmedia'>
                <div className="Contact">
                    <h2>Contact</h2>
                    <hr />
                    <div className="phone cont">
                        <a href="tel:+918639981992">
                        <img src={assets.phone_icon} alt='' />
                        <p>+91 8639981992</p></a>
                    </div>
                    <div className='email cont'>
                        <a href="mailto:durgaprasadpilli02@gmail.com?">
                        <img src={assets.email_icon} alt='' />
                        <p>durgaprasadpilli02@gmail.com</p></a>
                    </div>
                </div>

                <div className='Contact'>
                        <h2>Social Media</h2>
                        <hr />
                            <div className='media cont'>
                                <a href='https://github.com/Durgaprasad09102003' target='blank'><img src={assets.github_icon} alt='' /></a>
                                <a href='https://www.linkedin.com/in/durga-prasad-pilli-a1056329b/' target='blank'><img src={assets.linkedin_icon} alt='' /></a>
                                <a href='https://www.instagram.com/digital_pulse_offical?igsh=MWd6YmxnY3k4YjRxag==' target='blank'><img src={assets.instagram_icon} alt='' /></a>
                            </div>
                    </div>
            </div>
        )}
    </div>
  )
}

export default Socialmedia
