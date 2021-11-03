import React from "react";
import "./Coursehead.css";
import { Link } from 'react-router-dom';

function Coursehead() {
    return (
      <>
        <div className="split">
            <div className="hd2">
              <h2><span className="hola2"><a href="https://www.entrepreneurshipnetwork.net/shop">Our Courses</a></span></h2>
            </div>
            <div className="hd1">
              <span className="hola1">Your New<br/>
Journey Begins Here, Today</span>
            </div>
            

        </div>
        </>
    );
}

export default Coursehead;