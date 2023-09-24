// import React, { useState } from "react";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import './index.css'

const LightSwitch = ({lightIsOn, setLightIsOn}) => {

    return (
        <div className='page-container'>
            <WbIncandescentIcon className={`lightbulb  ${lightIsOn ? "color-yellow" : ""}`}/>
            <button onClick={()=> setLightIsOn(!lightIsOn)}>Turn the light On/Off</button>
        </div>
    )
};

export default LightSwitch;
