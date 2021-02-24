import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import DynamicText from "../components/DynamicText/DynamicText";
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";
import {AnimatePresence, motion} from "framer-motion";

const Home = () => {

    const variants = {
        enter: {
            opacity: 0,
            transition: {duration: 3},
            x: 100,
        },
        visible: {
            opacity: 1,
            transition: {duration: 0.7},
            x: 0,
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: {duration: 2},
        },
    }


    return (
        <AnimatePresence>
            <motion.div
                className="home"
                initial="enter"
                animate="visible"
                exit="exit"
                variants={variants}
            >
                <div
                    className="container"
                >
                    <Navbar name="navigation"/>
                    <SocialNetwork/>
                    <div className="home-main">
                        <div className="home-content">
                            <motion.h1
                                drag OnDragEnd
                                dragConstraints={{left: -250, right: 250, top: -250, bottom: 250}}
                            >
                                Wylhem Dorville
                            </motion.h1>
                            <motion.h2
                                drag OnDragEnd
                                dragConstraints={{left: -250, right: 250, top: -250, bottom: 250}}
                            ><DynamicText/></motion.h2>
                        </div>
                    </div>
                    <ButtonScroll right={"/education"}/>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Home;
