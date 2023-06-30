import React from "react";

const Project = (props) =>{

    

    return(
        <article className="Project">
            <div className="left">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.information}
                </p>
                <p>
                    Test Email: {props.testEmail}
                </p>
                <p>
                    test Password: {props.testPassword }
                </p>
            </div>
            <div>
            </div>

            <a href={props.link} className="right">
                <img src={props.image} alt="screenshot of the graph page of the project">
                </img>
                <p>
                    click me
                </p>
            </a>
            
        </article>
    );
}

export default Project;