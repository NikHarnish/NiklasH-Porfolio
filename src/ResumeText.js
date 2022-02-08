import React from "react";
import "./App.css";

function ResumeText() {
    return(
        <div className = "projectTextDiv">
            <div className = "text">
                <h2 className = "titlesOfText">Experience</h2>
                <p>------------</p>
                <p>I have experience in: Java, C, Database-Management with MySQL</p>
                <p>and ReactJS (including HTML, CSS and Javascript)</p>
                <br></br>
                <p>I fluently speak both German & English</p>
                <br></br>
                <h2 className="titlesOfText">Education and Work</h2>
                <p>------------</p>
                <p>Graduated from International School of Dusseldorf</p>
                <p>Currently studying Computer Science at Lancaster University Leipzig</p>
                <p>No job experience yet, maybe you can be the first?</p>
            </div>
        </div>
    );
}

export default ResumeText;