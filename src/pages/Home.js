import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import DynamicText from "../components/DynamicText/DynamicText";
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";

const Home = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
                <SocialNetwork/>
                <div className="home-main">
                    <div className="home-content">
                        <h1>Wylhem Dorville</h1>
                        <h2><DynamicText/></h2>
                    </div>
                </div>
                <ButtonScroll right={"/education"} />
            </div>
        </div>
    );
};

export default Home;
