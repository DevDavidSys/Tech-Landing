import React from 'react';

import icon from '../../Assets/ICON.png';
import './index.css';

export default function Page_1(){
    return(
    <div className='page1_container'>
        <div className="header">
          <div className="icon"><img src={icon}/></div>
          <span className='icon'>Dempsey and Delta<br/>Consultancy Services</span>
        </div>
        <div className="centralize">
          <div className="text_center">Let <strong className="secondary">data</strong> lead <br/>the way.</div>
          <div className="consultation">Request a Consultation</div>
        
      </div>
    </div>
    )
}