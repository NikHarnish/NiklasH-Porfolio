import React, {useState} from 'react'; 
import './App.css'; 
import ProjectText from './ProjectText.js';

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
      <h1 className='landingPageName'>🧙‍♀️ Welcome to my Portfolio 🧙‍♀️</h1>
      <div className='buttons'>
        <button className = 'showResume' onClick={getResume}>Show Resume</button>
        <button className = 'showProjects' onClick={getProjects}>Show Projects</button>
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