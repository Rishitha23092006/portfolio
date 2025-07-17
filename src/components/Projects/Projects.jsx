import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import theme_pattern from '../../assets/theme_pattern.svg';

const projects=[
    {
        id:1,
        imageUrl:"https://cdn.dribbble.com/userupload/11224083/file/original-3d2769866b4db0ae0c4fc7a7b1ed3687.png?resize=450x338&vertical=center",
        name:"Crypto-verse Application With React.Js and Redux Toolkit",
        description:"Provides the information like total number of cryptocurrencies, total markets and market caps.",
        projectUrl:"http://20.124.93.88"
    },
    {
        id:2,
        imageUrl:"https://allinpython.com/wp-content/uploads/2022/06/Guess-a-number.png",
        name:"Guess the Number ",
        description:"A fun and interactive number guessing game built using HTML, CSS, and JavaScript. The player tries to guess a randomly generated number with real-time feedback and score tracking.",
        projectUrl:"https://game1230.niat.tech/"
    },
    {
        id:3,
        imageUrl:"https://static.vecteezy.com/system/resources/previews/029/619/723/non_2x/homepage-of-wikipedia-website-on-the-display-of-pc-url-wikipedia-org-free-photo.jpg",
        name:"Wikipidia Website",
        description:"The site features responsive design, internal navigation, and a user-friendly interface to simulate the look and feel of the real Wikipedia experience.",
        projectUrl:"https://wikiport.niat.tech/"
    },
    
]

const Projects = () => {
  return (
    <div id="projects" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme_pattern"/>
      </div>
      <div className="mywork-container">
        {projects.map(project=>(
            <ProjectCard projectDetails={project} key={project.id}/>
        ))}
      </div>
    </div>
  )
}

export default Projects

