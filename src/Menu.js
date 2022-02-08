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
                <button className = "menuButtonsSub" onClick={getAbout} id='aboutButton'>ABOUT</button>
                <button className = "menuButtonsSub" onClick={getContact}>CONTACT</button>
            </div> 
            <div className = {about ? "aboutText" : "Hidden"}></div>
            <div className = {contact ? "contactText" : "Hidden"}></div>
        </div>
    );
}

export default Menu;