import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>quanoopz@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/anoop-rajput-857a59206/">
            <Linkedin color="white" size="3rem" />
          </a>
          <a href="https://github.com/quanoop">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/aksr0_/">
            <Insta color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
