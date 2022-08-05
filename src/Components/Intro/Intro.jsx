import React from 'react';
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv' 
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import prof from '../../img/port1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Anoop Kumar</span>
                    <span>Full Stack MERN Developer, Data Scientist with intermediate level of working exprience. Always producing the Quality Work</span>
                </div>
                <button className="button i-button">
                Hire me
            </button>
            <div className='i-icons'>
            <a href="https://github.com/quanoop">
            <img src={Github} alt="Githum Icon" />
            </a>
            <a href="https://www.linkedin.com/in/anoop-rajput-857a59206/">
            <img src={LinkedIn} alt="LinkedIn icon" />
            </a>
            <a href="#">
            <img src={Instagram} alt="Instagram Icon" />
            </a>
                
            
                
            </div>
            </div>
            
            <div className="i-right">
                <img src={Vector1}alt="" />
                <img src={Vector2} alt="" />
                <img src={prof} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} text1="Web" text2="Developer"
                    />
                </div>
                <div style={{top:'18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} text1="Data" text2="Scientist"
                    />
                </div>
                  {/* blur divs*/}
                  <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
                  <div className='blur' style={{background: "#C1F5FF", top: '17rem', left: '-9rem', width:"21rem", height:"11rem" }}></div>
            </div>
        </div>
    );
}

export default Intro ;