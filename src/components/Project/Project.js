import React, {useState} from 'react';
import {projectsData} from "../../data/projectsData";
import {AnimatePresence, motion} from "framer-motion";

const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.number];
    const variants = {
        enter: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,

            x: 0,
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.4},
            x: -100,
        }
    }
    const transition = {
        x: {type: "spring", stiffness: 300, damping: 30},
        opacity: {duration: 0.2}
    }

    let plusMinux = Math.random() > 0.4 ? 1 : -1;
    let imgX = Math.random() * 350 * plusMinux;
    let imgY = Math.random() * 120 * plusMinux;

    const imgAnim = {
        enter: {
            opacity: 0,
            x: imgX,
            y: imgY,
        },
        visible: {
            transition: {duration: 0.4},
            opacity: 1,
            x: 0,
            y: 0
        }
    }


    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial="enter"
                animate="animate"
                exit={{
                    transition: {duration: 0.4},
                    x: -100,
                }}
                variants={variants}
                transition={transition}
                className="project-main">
                <div className="project-content">
                    <h1>{project.title}</h1>
                    <p className="date">{project.date}</p>
                    <ul className="languages">
                        {project.languages.map((item) => {
                            return <li key={item}>{item}</li>
                        })}
                    </ul>
                </div>
                <motion.div
                    initial="enter"
                    animate="visible"
                    variants={imgAnim}
                    transition ={transition}
                    className="img-content">
                    <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.info}</p>
                    </span>
                        <img src={project.src} alt={project.title}/>
                    </div>
                    <div className="button-container">
                        <a href="https://wylhem-portf.netlify.app" target="_blank" rel="noopener noreferrer"
                           className="hover">
                            <span className="button">Voir le site </span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};


export default Project;
