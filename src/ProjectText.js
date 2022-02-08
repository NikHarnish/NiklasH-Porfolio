import React from "react";
import "./App.css";

function ProjectText() {
    return(
        <div className = "projectTextDiv">
            <h2 className = "titlesOfText">Projects</h2>
            <p>------------</p>
            <div className = "text">
                <p>This website was made by myself, using ReactJS</p>
                <a href = "https://github.com/NikHarnish/NiklasH-Porfolio">Github Link</a>
            </div>
        </div>
    );
}

export default ProjectText;