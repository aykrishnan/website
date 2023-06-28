import React from 'react'

import './About.css'


const About = () => {
  return (
    <div className="about-me">
        <div className="about-heading">What I do</div>
        I started my professional journey by pursuing a MS in Computer Science at DePaul, having recently decided that law school was not the next step in my path.
        I graduated in 2018, while working at a Chicago-based EdTech startup. By this time,
        I had picked up skills in Python and Java, as well as valuable lessons on how to be a successful engineer.
        I eventually entered the world of consulting, and gained further experience as a technical lead and solutions architect.
        I earned my Professional Cloud Architect certification from Google and my Solutions Architect Associate certification from Amazon,
        and very much enjoy both working with clients to architect solutions as well as collaborating with and mentoring teammates.
        I have also attended and hosted various tech meetups in the Chicago area,
        where I have presented on tech topics as well as mentored newer programmers on best practices.

        <img className="about-image" src="/working.jpg"/>

        <br/>
        <div className="about-heading">What I know</div>
        <ul style={{"list-style-type": "none"}}>
          <li>Programming languages: Java 11+, Kotlin (my favorite language), Python 3, JavaScript/TypeScript</li>
          <li>Frameworks: Spring Boot, Django, Flask/Chalice, Angular, React.js</li>
          <li>Cloud technologies: Google Cloud Platform, Amazon Web Services, Cloud Foundry</li>
          <li>Other skills: Mentorship, event organizing and hosting, Agile software development</li>
        </ul>

        <br/>
        This website is designed in React.js and is hosted in S3.

        <img className="about-image" src="/bar.jpg"/>

        <br/>
        <div className="about-heading">Who I am</div>
        Outside of my work in tech, I enjoy Muay Thai, playing the violin and guitar, working out, keeping up with current events, and organizing meetups.
        I'm a big brother to one, a son to two, a friend to many, and a pain in the neck to my therapist. 
    </div>
  )
}

export default About;
