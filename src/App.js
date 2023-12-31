import React, { useState } from 'react';
import './App.css';

import logo from "./img/portfolio_LOGO3.png"

import "./style.scss"
import About from './componets/About';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import { AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram } from 'react-icons/ai';


function App() {
  const [page,setPage] = useState(1);
  
  function HandleSwap(){
        
    if(page === 1){
        return <About/>
    }else if(page === 2){
        return <Projects/>
    }else if(page === 3){
      return <Contact/>
    }else {
        return null;
    }

}

let iconStyles = { color: "#e2f1ff", fontSize: "1.5em" };
  return (
    
    <div className="Landing">
      
      <header className="TopBar">
        <div className="Logo">
          <img src={logo} alt="logo" ></img>
        </div>
        <div className="Navigation">
          <button className="NavButton" onClick={()=>setPage(1)}>
            About 
          </button>
          <button className="NavButton" onClick={()=>setPage(2)}>
            Projects
          </button>
          <button className="NavButton" onClick={()=>setPage(3)}>
            Contact
          </button>
          
        </div>
        <div className="Links" >
        
          <a href="https://github.com/crobat8">
            <AiFillGithub style={iconStyles}/>
          </a>
          <a href="https://www.linkedin.com/in/benjamin-malquist-62530324b/">
            <AiFillLinkedin style={iconStyles}/>
          </a>
          <a href="https://www.facebook.com/ben.malquist/">
            <AiFillFacebook style={iconStyles}/>
          </a>
          <a href="https://www.instagram.com/benmalquist/">
            <AiFillInstagram style={iconStyles}/>
          </a>
        </div>
      </header>
      <main className="Page">
        <HandleSwap/>
      </main>

      <footer className="Information">
        contact information
      </footer>
    </div>
  );
}

export default App;
