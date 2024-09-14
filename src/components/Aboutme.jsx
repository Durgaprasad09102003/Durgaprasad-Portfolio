import React from 'react';
import assets from '../assets/assets';


function Aboutme() {
  return (
    <div className='About-me' id='Aboutmelink'>
        <h1>About me</h1> <hr />
      <div className='About-box'>

      <div className="about-details">
        <p>
            <pre>
            <code>
                {`class `}
                <span className="keyword">durgaprasad</span>
                {` {
        `}
                <span className="comment">// I can, because I did.</span>
                {`
        `}
                <span className="comment">// My vast variety of skills is continuously expanding.</span>
                {`
constructor() {
    this.`}
    <span className="property">name</span>
    {` = `}
    <span className="string">'Durga Prasad Pilli'</span>
    {`;
    this.`}
    <span className="property">dayOfBirthTimestamp</span>
    {` = 09-Oct-2003;
    this.`}
    <span className="property">email</span>
    {` = `}
    <span className="string">'durgaprasadpilli02@gmail.com'</span>
    {`;
}
`}
<span className="function">workExperience</span>
{`() {
return [
    { `}
    <span className="string">'05/08/2024-23/09/2024'</span>
    {`: `}
    <span className="string">'Full-stack Developer(MERN STACK)/Intern at BrainOVision'</span>
    {` },
    { `}
    <span className="string">'10/07/2023-07/08/2023'</span>
    {`: `}
    <span className="string">'Data Science Using Python/Intern at NSIC Technical Services Centre'</span>
    {` }
];
}
`}
<span className="function">skills</span>
{`() {
return [
    `}
<span className="string">'C Programming Language'</span>
{`, `}
<span className="string">'Python'</span>
{`, `}
<span className="string">'Java (Basics)'</span>
{`, `}
<span className="string">'HTML'</span>
{`, `}
<span className="string">'CSS'</span>
{`, `}
<span className="string">'Java Script'</span>
{`, `}
<span className="string">'React JS'</span>
{`, `}
<span className="string">'Node Js'</span>
{`, `}
<span className="string">'Mongo DB'</span>
{`, `}
<span className="string">'Express JS'</span>
{`, `}
<span className="string">'PhotoShop'</span>
{`, `}
<span className="string">'PremierePro'</span>
{`, `}
<span className="string">'github'</span>
];
}
}`}
</code>
</pre>
        </p>
        </div>










        <div className='about-pic'>
                <img src={assets.durga} alt='' />

        </div>

      </div>
    </div>
  )
}

export default Aboutme
