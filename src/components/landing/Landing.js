import React from 'react';
import Hero from "../../assets/Hero.svg";
import "./Landing.css";

function Landing() {
  return (
    <div className="hero">
      <div className="heroCard">
        <div className="textBox">
          <h1 className="heading">Everything you need is here!</h1>
          <h6 className="heading">What are you waiting for? Let's Start Shopping...</h6>
          <button className="cta">Get Started</button>
        </div>
        <div className="imageBox">
          <img src={Hero} alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Landing