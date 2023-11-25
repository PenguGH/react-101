import React from "react";
import Navbar from "../components/Navbar";
import "../navbar-styles.css";

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div id="homePage">
        <br></br>
        <h1>This is the Home Page! </h1>
        
        <br></br>
        Welcome this is an introductory web application built using React.js.
        <br></br> 
        The navbar was built using React Router Dom.
        <br></br>
        <br></br> 
        Click on the navbar to go and explore the different pages.
        <br></br>
        Such as the tic-tac-toe page and the api exercise page.
        <br></br>
        Or watch some videos on React below. 
        <br></br>
        <br></br> 

        React is a very popular JavaScript library for building reactive web applications. 
        <br></br>
        So definetly take a look at the videos below.
        </div>

        <div>
        <br></br>
        <h1>Here are some useful videos for learning React!</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM?si=DrmWr6SN4roeHBjh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/N3AkSS5hXMA?si=gabAUOr0-Gpg_rvH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/s2skans2dP4?si=6JUs-8Fv3XaQzDW5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w7ejDZ8SWv8?si=00eFSubnDXU0M2_X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  );
}

export default HomePage;
