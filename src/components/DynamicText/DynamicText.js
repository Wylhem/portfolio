import React from 'react';
import Typewriter from 'typewriter-effect';

const DynamicText = () => {
    return (
        <span className="dynamic-text">

                <Typewriter
                    options={{
                        autoStart : true,
                        loop:true,
                    }}
                    onInit={(typewriter) =>{
                    typewriter
                        .typeString('Ma formation')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('Mes Projets')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('Me Contacter')
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}/>
        </span>
    );
};

export default DynamicText;
