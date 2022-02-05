import React, { useState } from "react";
import "./App.js";



function Menu() {

const [about, setAbout] = useState(false);
const [contact, setContact] = useState(false);


function getAbout() {
    if (contact === false) {
    setAbout(!about);}
}

function getContact() {
    if (about === false) {
    setContact(!contact);}
}

    return(
            <div className = "menuBar">
                <div className = "menuButtons">
                    <button className = "menuButtonsSub" onClick={getAbout}>ABOUT</button>
                    <button className = "menuButtonsSub" onClick={getContact}>CONTACT</button>
                </div> 
                <div className = {about ? "aboutText" : "aboutTextHidden"}>
                <div className = {contact ? "contactText" : "contactTextHidden"}></div>
                </div>
            </div>
            
    );
}

export default Menu;