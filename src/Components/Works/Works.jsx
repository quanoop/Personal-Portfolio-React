import React, { useContext } from "react";
import "./Works.css";
import Reacto from "../../img/react.png";
import Express from "../../img/express.png";
import Node from "../../img/node.png";
import Next from "../../img/next.png";
import Boot from "../../img/bootstrap.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works with All these
        </span>
        <span>Liberaries & Frameworks</span>
        <span>
          These tools makes the production work easy and efficient.
          <br />
          I am comfortable in working with many popular Liberaries and
          <br /> Framworks for production development.
        </span>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button s-button">Hire Me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {right section} */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Next} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reacto} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Boot} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
