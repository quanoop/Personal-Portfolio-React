import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      {/* {left side} */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
          Being a pre-final year student of B.Tech in Computer Science <br />
          and Engineering. I have explored a few domains. <br />I love learning
          new technologies and more than that <br /> I love to make a good use
          of them.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {right side} */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
          style={{ left: "20rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Problem Solver"}
            detail={
              "Data Structures and Alogorithms, Leetcode, Codechef, GFG, etc"
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "HTML, CSS, Javascript, Nodejs, Express, MongoDB, React, etc"
            }
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Data Analyst"}
            detail={
              "Python, Pandas, OpenCV, Web Crawling, Web Automation, Matplotlib, Seaborn, etc"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
