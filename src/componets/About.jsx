import React from "react";

import Fact from "./Fact";

const About = () =>{
    return(
        <div className="AboutPage">
            <Fact
                title="About me"
                information="My Name is Ben Malquist I am computer science graduate
                from western washington university in Bellingham Washington. During 
                my time at Western I was a captain on the track and field team where
                I learned how to be a great leader for my teamates and developed a
                passion for being the best I can be at everything I try."
            />
            <Fact
                title="Story"
                information="When I was in high school I decided to do running start 
                at the local community college. While there I decided to get started
                on my lab science classes to get a jump on it prior to going to university.
                the class I decided on was computer programming 141 fundamentals of java.
                In this class I learned the basics and developed a passion for programing.
                From there I knew that this is what I wanted to do with my life really
                build websites and applications that I am proud of."
            />
            <Fact
                title="Education"
                information="After high school I got accepted to Western Washington University
                on a full ride for sports. with this oppritunity I decided to purse a degree in
                computer science. the classes ranged from operating systems to web developement
                and everything in between including analysis of algorithims and human computer 
                interaction. through all of this I really developed a niche of web development.
                The ability to create websites that anyone could use from any device was very 
                intreging since it allowed me to build projects for my friends that could really
                help them with tasks on a daily basis "
            />
            <Fact
                title="What I can do"
                information="My main skell set is focused on web developement primarily in back
                back end working with databases and storing data gotten from a website
                and then later recalling that data. the services that I have the most work with 
                are react and firebase. both the ability to build a site that is easily scalable
                and host it with a database always semmed simplist with these two services at
                my disposal. this doesnt mean that I dont have experiance with plain javaScript 
                with Html or other database services firebase is just what I am most comfortable
                with."
            />
        </div>
    );
}

export default About;