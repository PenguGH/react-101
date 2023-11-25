import React from "react";
import { Link } from "react-router-dom";
import "../navbar-styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">React 101</div>
      <ul className="navbar-menu">
        {/* <li><a href="/home">Home</a></li> */}

        {/* Better Practice. Does not refresh the page when you go to different links. */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
        </li>
        <li>
          <Link to="/api-exercise">Api Exercise</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
