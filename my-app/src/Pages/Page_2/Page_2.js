import React from "react";

import icon from '../../Assets/Capturar.PNG';
import './style.css';

export default function Page_2 (){
    return(
        <div className="Page2_container"> 
            <h1 className="Header_Page2">Who we are</h1>
            <div className="text_container_Page2">
                <img className="img_page2" src={icon}/>
                <p>Dempsey and Delta is a management consultancy firm with 25 years of industry experience. We are firm believers in data, and its power to guide decisions, spearhead innovation, and create lasting change.<br/>We are dedicated to advising forward-thinking leaders, helping them make sound business decisions that positively impact not just their organization, but also the wider community.
                </p>
            </div>
        
        </div>
    )
}