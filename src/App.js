import React, {useState} from 'react'; 
import './App.css'; 
import ProjectText from './ProjectText.js';
import Menu from './Menu';
import ResumeText from './ResumeText';

function App() {

  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);

  function getProjects() {
    setProjects(!projects);
    setResume(false);
  }

  function getResume() {
    setResume(!resume);
    setProjects(false);
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/in/niklas-harnish/");
  }

  function openGithub() {
    window.open("https://github.com/NikHarnish");
  }

  return(
    <div className = 'landingPage'>
      <div className='buttons'>
        <button className = 'showResume' onClick={getResume}>Resume</button>
        <button className = 'showProjects' onClick={getProjects}>Projects </button>
        </div>
        
        <div className = "socials">
            <button className = "gitHub" onClick={openGithub}></button>
            <button className = "linkedIn" onClick={openLinkedin}></button>                  
        </div>
        <div className = {resume ? 'resumeText' : 'Hidden'}>
          <ResumeText />
        </div>
        <div className= {projects ? 'projectText' : 'Hidden'}>
          <ProjectText />
        </div>
        <Menu /> 
        <h1 className='landingPageName'>HI. IM NIK.</h1>
      </div>
)}
export default App;