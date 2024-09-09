import React from 'react';
import assets from '../assets/assets';

function Projects() {

    const projectDetails = [
        {
          imageSrc: assets.ShopNext,
          description: `This was my first project during my BTech.
                        I'm excited to share ShopNext, an e-commerce homepage
                        design that provides a modern, user-friendly experience. Built with HTML and CSS, this project showcases my front-end development skills,
                        emphasizing clean design and enhanced user engagement.
                        Working on this project allowed me to refine my approach to
                        layout structuring, and color schemes, resulting in a visually appealing
                        interface. I'm eager to expand it further with additional pages.`,
          skills: 'HTML · Cascading Style Sheets (CSS)',
          codeLink: 'https://github.com/Durgaprasad09102003/HTML-mini-projects/tree/main/ShopNext',
          demoLink: 'https://durgaprasad09102003.github.io/HTML-mini-projects/ShopNext/html/main.html',
        },
        {
            imageSrc: assets.TemperatureConverter,
            description: `🌟Temperature Converter Using React JS🌟
                        I'm excited to share my project: a Temperature Converter built using React.js! 🌡️ 
                        This project allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin seamlessly. 
                        I'm particularly proud of this one because I love the design and how it turned out! 💙`,
            skills: 'React JS · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/Temperature-Converter-Reactjs',
            demoLink: 'https://durgaprasad09102003.github.io/Temperature-Converter-Reactjs/',
          },
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
