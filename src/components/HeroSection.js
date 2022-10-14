import React from "react";
import video from "../videos/video-1.mp4";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import ivan from "../imgs/ivan.png";
import arrows from "../imgs/arrows.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="left">
        {/* <img src={ivan} /> */}

        <h1 className="h1">BUDI FIT</h1>
        <div className="hero--btns">
          <Link to="/online/trening">
            <Button
              // className="btns"
              // buttonStyle="btn--outline1"
              className="button"
              buttonSize="btn--large"
              to="/omeni"
            >
              UPOZNAJ ME
            </Button>
          </Link>
        </div>
      </div>

      <div className="right">
        <img src={arrows} className="photo--arrows" alt="" />
        <img src={ivan} className="photo--ivan" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
