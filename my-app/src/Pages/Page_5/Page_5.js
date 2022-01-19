import React from "react";
import img1 from "../../Assets/img1_Page5.png";
import img2 from "../../Assets/img2_Page5.png";
import img3 from "../../Assets/img3_Page5.png";
import "./Page_5.css";

export default function(){
    return(
        <div className="page4_container">
            <div>
                <h1 className="header_Page4">Your Leaders</h1>
            </div>
            <div className="Leaders_container">
                <div className="Leader">
                    <img src={img1}/>
                    <div className="">
                        <h3 className="secondary_Page5">Elliot Sterling, CEO</h3>
                        <p className="p_Page5">Elliot brings over two decades of industry experience. He is also the resident expert in finance and tax advisory.</p>
                    </div>
                </div>
                <div className="Leader">
                    <img src={img2}/>
                    <div>
                        <h3 className="secondary_Page5">Musa Watson, CFO</h3>
                        <p className="p_Page5">A lawyer by profession, Musa leads both the finance and legal teams. His expertise is on mergers and acquisitions.</p>
                    </div>
                </div>
                <div className="Leader">
                    <img src={img3}/>
                    <div>
                        <h3 className="secondary_Page5">Teddy Yuhui, COO</h3>
                        <p className="p_Page5">Teddy's background in HR and systems management makes him a pro at company operations. He also handles the risk advisory team. </p>
                    </div>
                </div>
                
            </div>
        </div>


    );
}