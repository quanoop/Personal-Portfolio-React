import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* {left side} */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Skills</span>
        <span>
          I am a Computer Science and Engineering Student. So, I have <br />
          explored various fiels of technologies and have worked very <br />
          dedicatedly on few of them.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {right side} */}
      <div className="cards">
        <div style={{ left: "20rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Herokku etc."}
          />
        </div>
        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, Nodejs, Express, Mongo, React etc"}
          />
        </div>
        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"Data Scientist"}
            detail={
              "Python, Pandas, OpenCV, Web Crawling, Web Automation, Matplotlib, Seaborn"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
