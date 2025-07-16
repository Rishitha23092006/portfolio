import React from 'react'
import './About.css'
import profile from '../../assets/Profile-img.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme-pattern"/>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="profile" height="350px" width="300px" className='profile-img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am  a passionate and curious B.Sc. student at BITS, currently building my expertise in web development, cloud technologies, and DevOps tools. With hands-on experience in HTML, CSS, Python, and CI/CD tools like GitHub Actions, Jenkins, and Azure DevOps, I enjoy building solutions that bridge development and deployment, Iam from  Warangal, Telangana.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr className="line" style={{width:"80%"}}/>
                    <p>JavaScript</p><hr style={{width:"70%"}}/>
                    <p>React.js</p><hr style={{width:"80%"}}/>
                    <p>Node.js</p><hr style={{width:"75%"}}/>
                    <p>MySQL</p><hr style={{width:"70%"}}/>
                    <p>python</p><hr style={{width:"80%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>Certificates</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>4+</h1>
            <p>Real-world projects completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>6+</h1>
            <p>Attended Podcasts hosted by NxtWave</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>4+</h1>
            <p>Workshops</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
