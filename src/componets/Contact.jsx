import React from "react";

import head from "../img/HeadShot.jpg";

const Contact = () =>{

    return(
        <div className="Contact">
            <img src={head} alt="picture of my face">
            </img>
            <div className="ContactInfo">
                <div className="email">
                    <h4>
                        Email:
                    </h4>
                    <p>
                        malquist.ben@gmail.com 
                    </p>
                </div>
                <div className="phone">
                    <h4>
                        Phone Number:
                    </h4>
                    <p>
                        +1(360)595-4605
                    </p>
                </div>
                <div className="LinkedIn">
                    <h4>
                        LinkedIn:
                    </h4>
                    <a href="https://www.linkedin.com/in/benjamin-malquist-62530324b/">https://www.linkedin.com/in/benjamin-malquist-62530324b/</a>
                </div>
                <div className="GitHub">
                    <h4>
                        GitHub:
                    </h4>
                    <a href="https://github.com/crobat8">https://github.com/crobat8</a>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;