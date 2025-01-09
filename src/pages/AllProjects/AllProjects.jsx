import React from 'react'
import assets from '../../assets/assets';
import './AllProjects.css'

function AllProjects() {
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
          {
            imageSrc: assets.Currencyconverter,
            description: `🌟 Currency Converter Project using ReactJS 🌟
                        I'm thrilled to share my latest project: a Currency Converter built with ReactJS! 
                        This application allows users to convert between Indian Rupee (INR), Japanese Yen (JPY), US Dollar (USD), and South Korean Won (KRW).`,
            skills: 'React JS · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/CurrencyConverter-Reactjs',
            demoLink: 'https://durgaprasad09102003.github.io/CurrencyConverter-Reactjs/',
          },
          {
            imageSrc: assets.MyFirstPortfolio,
            description: `🌟My First Portfolio 🌟
                        🚀 Excited to Share My First Portfolio! 🌟

                        I'm thrilled to present my first portfolio, 
                        built from scratch using HTML and CSS. 
                        This project has been a great learning experience for me, 
                        and I'm proud of the design I've created, inspired by various sources I found through Google Images.`,
            skills: 'HTML · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/HTML-mini-projects/tree/main/portfolio%20web%20page%20template',
            demoLink: 'https://durgaprasad09102003.github.io/HTML-mini-projects/portfolio%20web%20page%20template/html/home.html',
          },
          {
            imageSrc: assets.miniPortfolio,
            description: `Mini Portfolio Inspired by ATM Card Design 💳

                        Excited to share my latest project, a unique mini portfolio inspired by the structure of an ATM card. 
                        💼 This creative approach allowed me to showcase my skills in web design, 
                        focusing on simplicity and functionality while maintaining a professional aesthetic. 
                        ✨ Check it out and let me know your thoughts!`,
            skills: 'React JS · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/card-portfolio',
            demoLink: 'https://durgaprasad09102003.github.io/card-portfolio/',
          },

          {
            imageSrc: assets.WeatherAPIApp,
            description: `"🌦 Weather API Application | React.js Project"

                        "Excited to share my latest project — a weather application built using React.js! 
                        This application fetches real-time weather data through a weather API, 
                        providing detailed information like temperature, humidity, and wind speed for any location. 
                        I used React hooks, API integration, and modern UI design principles to create a responsive, 
                        user-friendly interface. This project was a great opportunity to enhance my front-end development skills 
                        and implement efficient API handling in React. Looking forward to building more dynamic applications!"`,

            skills: 'React JS · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/WEATHER-API-APP',
            demoLink: 'https://durgaprasad09102003.github.io/WEATHER-API-APP/',
          },
          {
            imageSrc: assets.ToDoList,
            description: `"To-Do List Application with React.js 📋"

                          "I'm thrilled to share my To-Do List application built with React.js! 
                          This project helped me sharpen my front-end development skills, 
                          particularly in using React for dynamic UI updates and managing state.`,

            skills: 'React JS · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/TO-DO-LIST',
            demoLink: 'https://durgaprasad09102003.github.io/TO-DO-LIST/',
          },

          {
            imageSrc: assets.Spotifyhomepage,
            description: `🎧 Spotify Homepage Clone with Basic Functionalities | React Project 🎶

                          I’ve developed a Spotify homepage clone from scratch using React, 
                          featuring 6 songs with essential music controls like ▶️ play, ⏸️ pause, 🔊 volume adjustment, and ⏹️ stop. 
                          This project demonstrates my front-end skills, utilizing React to build an interactive UI. 
                          🚀 In the future, I plan to add more features and expand this into a full-stack web application.`,

            skills: 'React JS · Cascading Style Sheets (CSS)',
            codeLink: 'https://github.com/Durgaprasad09102003/Spotify-homepage',
            demoLink: 'https://durgaprasad09102003.github.io/Spotify-homepage/',
          },
    ];
  return (
    <div className='Alltech Projects '>
        <div className='Projectrow '>
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
  )
}

export default AllProjects
