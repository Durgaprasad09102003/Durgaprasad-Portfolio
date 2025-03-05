import React from 'react';
import assets from '../assets/assets';

function Projects() {

    const projectDetails = [
        {
            imageSrc: assets.movieSystem,
            description: `I'm thrilled to introduce my latest project—a Movie Management System built with CSS, JavaScript, PHP, and MySQL on a WAMP server! 
            🎬 This application lets users seamlessly browse, add, and manage movie listings, 
            making it a great tool for movie enthusiasts.
            While I'm proud of the progress so far, I plan to enhance it further by improving user authentication, 
            adding a search function, and refining the overall design for an even better user experience. 
            This project has been an incredible opportunity to deepen my web development skills and 
            explore full-stack technologies hands-on. Your feedback and suggestions for improvement would be greatly appreciated!`,
            skills: 'HTML · Cascading Style Sheets (CSS) · JavaScript · PHP · MYSQL',
            codeLink: 'https://github.com/Durgaprasad09102003/DigitalPulse-OTT-MovieSystem',
            demoLink: 'https://digitalpulsemovies.infinityfreeapp.com/movie-system/php/Home.php',
        },
        {
            imageSrc: assets.chatApplication,
            description: `I'm excited to share my real-time Chat Application built using the MERN stack! 💬 
            This project enables seamless messaging with real-time updates, user authentication, and an intuitive UI. 
            It was an incredible experience working with WebSockets and React to enhance the chat experience. 
            I plan to improve it further by adding features like group chats, media sharing, and message reactions 
            for a more engaging conversation experience. 
            Your feedback and suggestions are always welcome! 🚀`,
            skills: 'MongoDB · Express.js · React · Node.js · WebSockets',
            codeLink: 'https://github.com/Durgaprasad09102003/FSI-CHATAPP',
            demoLink: 'https://github.com/Durgaprasad09102003/FSI-CHATAPP',
        }
        
    ];

  return (
    <div className='Projects'>
        <h1>Projects</h1> 
        <hr />
        <div className='Projectrow'>
            {projectDetails.map((project, index) => (
                <div key={index} className='ProjectCard'>
                    <div className='ProjectDisplay'>
                        <img src={project.imageSrc} alt='Project Thumbnail' />
                        <div className='projectHoverFiled'></div>
                        <p className='hoverPara'>
                            {project.description}
                            <span>Skills: {project.skills}</span>
                        </p>
                    </div>
                    <div className='projectLinks'>
                        <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                            <button type='button'>Project Code</button>
                        </a>
                        <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                            <button type='button'>Live Demo</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Projects;
