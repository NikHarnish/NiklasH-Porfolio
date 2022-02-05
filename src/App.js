import React, {useState} from 'react'; 
import './App.css'; 
import ProjectText from './ProjectText.js';
import Menu from './Menu';

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



  return(
    <div className = 'landingPage'>
      <div className='buttons'>
        <button className = 'showResume' onClick={getResume}>Resume</button>
        <button className = 'showProjects' onClick={getProjects}>Projects</button>
        </div>
        <Menu /> 
        <h1 className='landingPageName'>HI. IM NIK.</h1>
        <div className = "socials">
            <button className = "gitHub"></button>
            <button className = "linkedIn"></button>                  
        </div>
        <div className = {resume ? 'resumeText' : 'resumeTextHidden'}>
          <p1>Nothing here yet 😭</p1>
        </div>
        <div className= {projects ? 'projectText' : 'projectTextHidden'}>
          <ProjectText />
        </div>
      </div>
)}

export default App;