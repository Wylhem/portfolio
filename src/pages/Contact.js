import React from 'react';
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
    return (
        <div className="container">
            <Navbar name="navigation" />
            <ButtonScroll left={'/portfolio'}  />
        </div>
    );
};

export default Contact;
