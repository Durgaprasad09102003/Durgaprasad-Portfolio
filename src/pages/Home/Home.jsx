import React from 'react';
import './Home.css';
import assets from '../../assets/assets';
import Socialmedia from '../../components/Socialmedia';
import Aboutme from '../../components/Aboutme';
import Education from '../../components/Education';
import Experiences from '../../components/Experiences';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='Home'>
      {/* Main Content Section */}
      <section className='maincontent'>
        <div className='imagedisplay'>
          <img src={assets.durga} alt='Durga Prasad Pilli' />
        </div>
        <div className='details'>
          <h1><b>DURGA PRASAD PILLI</b></h1>
          <p>
            Student & aspiring Software developer | Pursuing a Btech degree in CSE at GMR Institute of Technology | Intern at Brainovision | MERN Stack Web Developer
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <Skills />
      <Socialmedia />
      <Projects />
      <Education />
      <Experiences />
      <Aboutme />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;