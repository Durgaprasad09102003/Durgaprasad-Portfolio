import React from 'react'
import assets from '../assets/assets';

const experienceDetails = [
  {
      imageSrc: assets.BovLogo,
      company: 'Brainovision Solutions',
      position: 'Full Semester Internship (FSI)',
      role: 'Full Stack Development (MERN)',
      duration: '05/08/2024 - 23/11/2024',
      location: 'Hyderabad, Telangana',
      altText: 'Brainovision Solutions Logo'
  },
  {
      imageSrc: assets.Nsiclogo,
      company: 'NSIC Technical Services Centre',
      position: 'Summer Internship',
      role: 'Data Science using Python',
      duration: '10/07/2023 - 07/08/2023',
      location: 'Hyderabad, Telangana',
      altText: 'NSIC Technical Services Centre Logo'
  }
];

function Education() {
  return (
    <div className='Education'>
      <h1>Experience</h1> <hr />

        <div className='Educontent'>
              {experienceDetails.map((edu, index) => (
                  <div key={index} className='educard'>
                      <div className='educardimg'>
                          <img src={edu.imageSrc} alt={edu.altText} />
                      </div>
                      <h2 className='eduname'>{edu.company}</h2>
                      <div className='edudetails'>
                          <label>{edu.position}</label>
                          <h3>{edu.role}</h3>
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
