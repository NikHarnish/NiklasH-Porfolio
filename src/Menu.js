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
            <div className = {about ? "menuBarText" : "Hidden"}></div>
            <div className = {contact ? "menuBarText" : "Hidden"}></div>
        </div>
    );
}

export default Menu;