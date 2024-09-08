import React from 'react';// Import the SocialMediaIcon component



function Footer() {
    const icons = [

        { src: 'https://img.icons8.com/?size=100&id=106562&format=png&color=000000', alt: 'GitHub', link: 'https://github.com' },
        { src: 'https://img.icons8.com/?size=100&id=85141&format=png&color=000000', alt: 'LinkedIn', link: 'https://linkedin.com' },
        { src: 'https://img.icons8.com/?size=100&id=118490&format=png&color=000000', alt: 'Facebook', link: 'https://facebook.com' },
        { src: 'https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=000000', alt: 'Twitter', link: 'https://twitter.com' },
        { src: 'https://img.icons8.com/?size=100&id=84884&format=png&color=000000', alt: 'Instagram', link: 'https://instagram.com' },
        { src: 'https://img.icons8.com/?size=100&id=84909&format=png&color=000000', alt: 'YouTube', link: 'https://youtube.com' },
        { src: 'https://img.icons8.com/?size=100&id=103541&format=png&color=000000', alt: 'Snapchat', link: 'https://snapchat.com' },
        { src: 'https://img.icons8.com/?size=100&id=85466&format=png&color=000000', alt: 'telegram', link: 'https://telegram.com' },
        { src: 'https://img.icons8.com/?size=100&id=85192&format=png&color=000000', alt: 'WhatsApp', link: 'https://whatsapp.com' },
        
      ];


  return (

    <div className='footer'>
      <div className='footermedia'>
        <h1>Social Media</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} className='footermediaicons'>
                {icons.map((icon, index) => (
                    <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <img src={icon.src} alt={icon.alt} style={{ margin: '0 10px', width: '35px', height: '35px' }} className='footermediaimg' />
                    </a>
                ))}
            </div>    
      </div>
      <div className='footerdetails'>
        <div className='copyrightdet'>
            <h3>Durga prasad</h3>
            <span>Copyright &copy; 2024, durgaprasad</span>
        </div>
        <div className='conditionsfooter'> 
                <p>Privacy policy</p>
                <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
