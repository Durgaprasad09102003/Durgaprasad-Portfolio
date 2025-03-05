import React from 'react';

const skills = [
    { name: 'C' },
    { name: 'Python' },
    { name: 'Java' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React.js' },
    { name: 'MongoDB' },
    { name: 'Express.js' },
    { name: 'Node.js' },
    { name: 'PHP' },
    { name: 'MySQL' },
    { name: 'PhotoShop' },
    { name: 'Premiere Pro' }
];

function Skills() {
  return (
    <div className='skills'>
        <h1>Skills</h1> <hr />
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <button>{skill.name}</button>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Skills;