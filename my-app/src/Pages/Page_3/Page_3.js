import React from "react";
import img1 from "../../Assets/img1_Page3.png";
import img2 from "../../Assets/img2_Page3.png";
import img3 from "../../Assets/img3_Page3.png";
import './Page_3.css';

export default function Page_1(){
    return(
        <div className="Page3_container">
            <h1 className="Header_Page3">What we do</h1>
            <div className="img_container">
                <div className="card">
                    <div className="img">
                        <img src={img1}/>
                    </div>
                    <div>
                        <h3 className="titlecontainer_Page3">Financial Advisory</h3>
                        <p>Guidance on mergers, acquisitions,<br/>
                            and restructuring</p>
                    </div>    
                </div>
                
                <div className="card">
                    <div className="img">
                    <img src={img2}/>
                    </div>
                    <div>
                    <h3 className="titlecontainer_Page3">Tax Advisory</h3>
                        <p>Solutions for tax-related issues across<br/>all disciplines</p>
                    </div>    
                </div>
                <div className="card">
                    <div className="img">
                        <img src={img3}/>
                    </div>
                    <div>
                    <h3 className="titlecontainer_Page3">Risk Advisory</h3>
                        <p>Mitigation of financial and operational <br/>risks</p>
                    </div>    
                </div>

            </div>
            
        </div>
    );
}