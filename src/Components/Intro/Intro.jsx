import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import prof from "../../img/port1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Anoop Kumar</span>
          <span>
            I am a MERN Stack developer with a good command over the tools. I
            also have decent skills in Data Analysis with Python. Strong
            creative and analytical skills with Computer Science Literacy. Team
            player with an eye for detail and a Problem solver.
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/quanoop">
            <img src={Github} alt="Githum Icon" />
          </a>
          <a href="https://www.linkedin.com/in/anoop-rajput-857a59206/">
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>
          <a href="https://www.instagram.com/aksr0_/">
            <img src={Instagram} alt="Instagram Icon" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={prof} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          className="floating-div"
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={thumbup} text1="Data" text2="Analyst" />
        </motion.div>
        {/* blur divs*/}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
