import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import DynamicText from "../components/DynamicText/dynamicText";

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
            </div>
        </div>
    );
};

export default Home;
