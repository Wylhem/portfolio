import React from 'react';
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";
import Project from "../components/Project/Project";
import Navbar from "../components/Navbar/Navbar";

const Portfolio = () => {
    return (
        <div className="container">
            <Navbar name="navigation" />

            <Project number={0}/>
            <ButtonScroll left={"/education"} right={'/contact'}/>

        </div>
    );
};

export default Portfolio;
