import React, { useState } from "react";
import "./App.js";

function Menu() {

const [about, setAbout] = useState(false);
const [contact, setContact] = useState(false);    

function getAbout() {
    setAbout(!about);
    setContact(false);
}

function getContact() {
    setContact(!contact);
    setAbout(false);
}


    return(
        <div className = "menuBar">
            <div className = "menuButtons">
                <button className = {about? "underLine " : "menuButtonsSub"} onClick={getAbout} id='aboutButton'>ABOUT</button>
                <button className = {contact? "underLine " : "menuButtonsSub"} onClick={getContact}>CONTACT</button>
            </div> 
            <div className = {about ? "menuBarText" : "Hidden"}>
                <div className = "text">
                    <h1>WORK IN PROGRESS</h1>
                    <p>------------</p>
                </div>
            </div>
            <div className = {contact ? "menuBarText" : "Hidden"}>
                <div className = "text">
                    <h1>WORK IN PROGRESS</h1>
                    <p>------------</p>
                    <br></br>
                    <h1>Contact me at niklas.harnish@hotmail.com</h1>
                    <br></br>
                    <br></br>
                    <h1>You can also message me on LinkedIn</h1>
                </div>
            </div>
        </div>
    );
}

export default Menu;