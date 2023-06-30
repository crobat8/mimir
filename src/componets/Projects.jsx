import React from "react";

import Project from "./Project";

import mjolnir from "../img/mjolnir_screen_shot.png";
import PartyUp from "../img/PartyUpScreenShotEdited.png"

const Projects = () =>{

    

    return(
        <div className="ProjectPage">
            <Project
                title="Mijolnir Athletics"
                information="This is a react application with a firebase database 
                and hosted by them too. The function of the app is to allow users 
                to track throwing and lifting marks to allow to see some form of 
                corrilation in lifting numbers and the corrilated track events. 
                Such as seeing that as an athletes bench press increases does the
                athlets Shot Put marks increase. "
                testEmail="test2@gmail.com"
                testPassword="testtest"
                image={mjolnir}
                link="https://mjolnirathletics-e59de.firebaseapp.com/"  
            />
            <Project
                title="Party Up"
                information="This is a react application that has a built in firebase
                database what allows for user to create events in there area. These
                events are then shared to everyone near by. After that other users can
                then talk about  what is going on at the event with the built in chat 
                feature and notify the group if they are coming. this also allows users
                to see if they have any friends coming (friends list in website). This
                webiste also incorporates google maps api to show locations and information
                of places that people create events at."
                testEmail="test2@gmail.com"
                testPassword="testtest"
                image={PartyUp}
                link="https://partyup-76d1a.web.app/"
            />
        </div>
    );
}

export default Projects;