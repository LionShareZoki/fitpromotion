import React from "react";
import video from "../videos/video-1.mp4";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import ivan from "../imgs/ivan.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />

      <h1>BUDI FIT</h1>
      <p>Što čekate?</p>
      <div className="hero--btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ZAPOČNI
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          TKO SMO MI?
        </Button>
      </div>

      <div className="ivan--photo">{/* <img src={ivan} /> */}</div>
    </div>
  );
};

export default HeroSection;
