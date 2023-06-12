import React from "react";

const Fact = (props) =>{
    return(
        <article className="Fact">
            <div className="Left">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.information}
                </p>
            </div>
            <div>
                
            </div>
            <div className="Right">
                {/*image here of the topic discussed below is temp for testing*/}
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.information}
                </p>
            </div>
            
        </article>
    );
}

export default Fact;