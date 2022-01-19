import React from "react";
import Img from "../../Assets/img_Page6.png";
import "./Page_6.css";

export default function Page_6(){
    return(
        <div className="container_Page6">
            <div className="Text_container_Page6 ">
                
                <h1>Get in touch</h1>
                <div className="text_cont">
                    <h1 className="secondary_Page6">Main Office</h1>
                    <p>123 Anywhere St., Any City, Any State</p>
                </div>
                <div className="text_cont">
                    <h1 className="secondary_Page6">Email Address</h1>
                    <p>hello@reallygreatsite.com</p>
                </div>
                <div className="text_cont">
                    <h1 className="secondary_Page6">Phone Number</h1>
                    <p>(123) 456 7890</p>
                </div>
                <div>
                    <div>
                        <h3 className="footer_Page6">Schedule a Chat</h3>
                    </div>
                </div>

            
            </div>
            
            <div className="img_Page6">
                <img src={Img}/>
            </div>
        </div>
    );

}

