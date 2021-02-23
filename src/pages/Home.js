import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import DynamicText from "../components/DynamicText/DynamicText";
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <div>
            <div className="container">
                <Navbar name="navigation" />
                <SocialNetwork/>
                <div className="home-main">
                    <div className="home-content">
                        <motion.h1
                            drag OnDragEnd
                            dragConstraints={{left:-250 , right:250 , top : -250 , bottom : 250}}
                        >
                            Wylhem Dorville
                        </motion.h1>
                        <motion.h2
                            drag OnDragEnd
                            dragConstraints={{left:-250 , right:250 , top : -250 , bottom : 250}}
                        ><DynamicText/></motion.h2>
                    </div>
                </div>
                <ButtonScroll right={"/education"} />
            </div>
        </div>
    );
};

export default Home;
