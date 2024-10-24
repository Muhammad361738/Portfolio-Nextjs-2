import React from 'react';
import Image from 'next/image';
import html from "../Assests/html.jpg";
import css from "../Assests/css.jpg";
import javascript from "../Assests/javascript.jpg";
import node from "../Assests/node.jpg";
import c from "../Assests/c.jpg";
import java from "../Assests/java.jpg";
import git1 from "../Assests/git1.jpg";
import github1 from "../Assests/github1.jpg";
import react from "../Assests/react.jpg";
import next from "../Assests/next.jpg";
import tailwind from "../Assests/tailwind.jpg";
import ts from "../Assests/ts.jpg";

const Page = () => {
    return (
        <div className="skills-container">
            <div className="skills-title">
                <p>Skills</p>
                <div className="title-underline"></div>
            </div>
            <div className="skills-grid">
                <div className="skill-item">
                    <Image className="skill-image" src={html} alt="HTML5" />
                    <p className="skill-name">HTML5</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={css} alt="CSS3" />
                    <p className="skill-name">CSS3</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={javascript} alt="JavaScript" />
                    <p className="skill-name">JavaScript</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={node} alt="Node.js" />
                    <p className="skill-name">Node.js</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={tailwind} alt="Tailwind CSS" />
                    <p className="skill-name">Tailwind CSS</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={ts} alt="TypeScript" />
                    <p className="skill-name">TypeScript</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={react} alt="React.js" />
                    <p className="skill-name">React.js</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={next} alt="Next.js" />
                    <p className="skill-name">Next.js</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={git1} alt="Git" />
                    <p className="skill-name">Git</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={github1} alt="GitHub" />
                    <p className="skill-name">GitHub</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={c} alt="C" />
                    <p className="skill-name">C</p>
                </div>
                <div className="skill-item">
                    <Image className="skill-image" src={java} alt="Java" />
                    <p className="skill-name">Java</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
