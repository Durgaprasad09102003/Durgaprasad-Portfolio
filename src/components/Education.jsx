import React from 'react'
import assets from '../assets/assets';

const educationDetails = [
  {
      imageSrc: assets.gmritlogo,
      institution: 'GMR Institute of Technology',
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science and Engineering (CSE)',
      duration: '2021-2025',
      location: 'Vizianagaram, Andhra Pradesh',
      altText: 'GMR Institute of Technology Logo'
  },
  {
      imageSrc: assets.chaitanyalogo,
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate',
      specialization: 'MPC (Mathematics, Physics, Chemistry)',
      duration: '2019-2021',
      location: 'Visakhapatnam, Andhra Pradesh',
      altText: 'Sri Chaitanya Junior College Logo'
  }
];

function Education() {
  return (
    <div className='Education' id="Education">
      <h1>Education</h1> <hr />

        <div className='Educontent'>
              {educationDetails.map((edu, index) => (
                  <div key={index} className='educard'>
                      <div className='educardimg'>
                          <img src={edu.imageSrc} alt={edu.altText} />
                      </div>
                      <h2 className='eduname'>{edu.institution}</h2>
                      <div className='edudetails'>
                          <label>{edu.degree}</label>
                          <h3>{edu.specialization}</h3>
                          <h5>{edu.duration}</h5>
                          <h5>{edu.location}</h5>
                      </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Education
