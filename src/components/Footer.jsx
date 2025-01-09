import React from 'react';// Import the SocialMediaIcon component



function Footer() {
    const icons = [

        { src: 'https://img.icons8.com/?size=100&id=106562&format=png&color=000000', alt: 'GitHub', link: 'https://github.com/Durgaprasad09102003' },
        { src: 'https://img.icons8.com/?size=100&id=85141&format=png&color=000000', alt: 'LinkedIn', link: 'https://www.linkedin.com/in/durga-prasad-pilli-a1056329b/' },
        { src: 'https://img.icons8.com/?size=100&id=118490&format=png&color=000000', alt: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100076580822974' },
        { src: 'https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=000000', alt: 'Twitter', link: 'https://x.com/Durga09102003?t=JaYjeuUXpqJboE3-s4KX2g&s=09' },
        { src: 'https://img.icons8.com/?size=100&id=84884&format=png&color=000000', alt: 'Instagram', link: 'https://www.instagram.com/digital_pulse_offical?igsh=MWd6YmxnY3k4YjRxag==' },
        { src: 'https://img.icons8.com/?size=100&id=84909&format=png&color=000000', alt: 'YouTube', link: 'https://www.youtube.com/@digitalpulse0919' },
        { src: 'https://img.icons8.com/?size=100&id=103541&format=png&color=000000', alt: 'Snapchat', link: 'https://www.snapchat.com/add/durgaprasad0919?share_id=vjG7KCid0Ys&locale=en-US' },
        { src: 'https://img.icons8.com/?size=100&id=85466&format=png&color=000000', alt: 'telegram', link: 'http://t.me/Durgaprasad0919' },
        { src: 'https://img.icons8.com/?size=100&id=85192&format=png&color=000000', alt: 'WhatsApp', link: 'https://wa.me/qr/7O7NZ3HXQBYWI1' },
        
      ];


  return (

    <div className='footer'>
      <div className='footermedia'>
        <h1>FOLLOW ME</h1>
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
