import React from 'react';
import ButtonScroll from "../components/buttonsScroll/ButtonScroll";
import Navbar from "../components/Navbar/Navbar";
import {motion} from "framer-motion";

const Education = () => {
    return (
        <div className="container">
            <Navbar name="nav" />
            <div className="educ-containt">
                <div className="grid-left">
                    <h1>Formation</h1>
                    <ul>
                        <li><p>2019-2021 : Université Paris Saclay  : DUT informatique</p></li>
                        <li><p>2016-2019 : Lycée René Cassin</p> </li>
                    </ul>
                </div>
                <div className="grid-right">
                    <motion.span
                        className="circle-1"
                        drag OnDragEnd
                        dragConstraints={{left:-150 , right:10 , top : -5 , bottom : 50}}
                        whileTap={{scale : 0.5}}
                    >
                    </motion.span>
                    <motion.span
                        className="circle-2"
                        drag OnDragEnd
                        dragConstraints={{left:-150 , right:10 , top : -5 , bottom : 50}}
                        whileTap={{scale : 0.5}}
                    >
                    </motion.span>
                    <motion.span
                        className="circle-3"
                        drag OnDragEnd
                        dragConstraints={{left:-80 , right:15 , top : -5 , bottom : 2}}
                        whileTap={{scale : 0.5}}
                    >
                    </motion.span>
                    <motion.span
                        className="circle-4"
                        drag OnDragEnd
                        dragConstraints={{left:50 , right:5 , top : -5 , bottom : 10}}
                        whileTap={{scale : 0.8}}
                    >
                    </motion.span>

                </div>
            </div>
            <ButtonScroll left={"/"} right={"/portfolio"}/>
        </div >
    );
};

export default Education;
