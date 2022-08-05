import React from 'react';
import './FloatingDiv.css'

const FloatingDiv = ({image, text1, text2})=> {
    return (
        <div>
            <div className="floatingdiv">
                <img src={image} alt="" />
                <span>{text1}
                <br />
                {text2}
                </span>
            </div>
        </div>
    );
}

export default FloatingDiv;