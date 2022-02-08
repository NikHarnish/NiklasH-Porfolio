import React from "react";
import "./App.css";

function ResumeText() {
    return(
        <div className = "projectTextDiv">
            <div className = "text">
                <h2 className = "titlesOfText">Experience</h2>
                <p>------------</p>
                <p>I have experience in: Java, C, ReactJS (including HTML, CSS and Javascript)</p>
                <p>I fluently speak both German & English</p>
                <br></br>
                <br></br>
                <h2 className="titlesOfText">Education and Jobs</h2>
                <p>------------</p>
                <p>Graduated from International School of Dusseldorf</p>
                <p>Currently studying Computer Science at Lancaster University Leipzig</p>
                <p>No job experience yet, maybe you can be the first?</p>
            </div>
        </div>
    );
}

export default ResumeText;