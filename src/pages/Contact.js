import React from 'react';
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
    return (
        <div className="container">
            <Navbar name="navigation"/>
            <div className="home-main">
                <div className="home-content">
                    <h1>En cours</h1>
                </div>
            </div>
            <ButtonScroll left={'/portfolio'}/>
        </div>
    );
};

export default Contact;
