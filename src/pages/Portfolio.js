import React from 'react';
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";

const Portfolio = () => {
    return (
        <div className="container">
            <ButtonScroll left={"/education"} right={'/contact'}/>
        </div>
    );
};

export default Portfolio;
