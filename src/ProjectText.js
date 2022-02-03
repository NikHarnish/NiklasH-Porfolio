import React from "react";
import "./App.css";

function ProjectText() {
    return(
        <div className = "projectTextDiv">
            <h1 className = "titlesOfText">Projects</h1>
            <p>------------</p>
            <div className = "text">
                <p>This website was made by myself, using ReactJs</p>
                <a href = "https://github.com/NikHarnish/NiklasH-Porfolio">Github Link</a>
            </div>
        </div>
    );
}

export default ProjectText;