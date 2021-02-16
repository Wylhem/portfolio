import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

library.add(
    faGithub,
    faLinkedin
)

const SocialNetwork = () => {
    const anim =()=>{


        let navLinks = document.querySelectorAll('.socialNetwork a');
        navLinks.forEach(link =>{
           link.addEventListener('mouseover' , (e)=>{
               let attX = e.offsetX - 20;
               let attY = e.offsetY - 13;
               link.style.transform = `translate(${attX}px , ${attY}px)`
            })
            link.addEventListener('mouseleave' , ()=>{
                link.style.transform='';
            })
        });
    }

    return (
        <div className="socialNetwork">
            <ul className="content">
                <a href="https://github.com/Wylhem" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><FontAwesomeIcon icon={faGithub} size={"lg"}/></li>
                </a>
                <a href="https://www.linkedin.com/in/wylhem-dorville/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><FontAwesomeIcon icon={faLinkedin} size={"lg"}/></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;
