import React from 'react';
import Image from 'next/image';
import smiu from "../Assests/smiu.jpg";
import formen from "../Assests/formen.jpg";
import uni from "../Assests/uni.jpg";
import gover from "../Assests/gover.jpg";

const Page = () => {
    return (
        <div className="education-container">
            <div className="title-container">
                <p className="title-text">My <span className="highlight-text">Education</span></p>
                <div className="title-underline"></div>
            </div>
            <div className="education-cards">
                <div className="education-card">
                    <div><Image className="education-image" src={smiu} alt="SMIU" /></div>
                    <div className="education-details">
                        <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
                        <p className="education-institute">Sindh Madressatul Islam University</p>
                        <p className="education-duration">2023-2027 | Pursuing</p>
                    </div>
                </div>
                <div className="education-card">
                    <div><Image className="education-image" src={gover} alt="Governor House" /></div>
                    <div className="education-details">
                        <h3 className="education-degree">Artificial Intelligence & Web 3.O</h3>
                        <p className="education-institute">Sindh Governor House</p>
                        <p className="education-duration">2023- | Pursuing</p>
                    </div>
                </div>
                <div className="education-card">
                    <div><Image className="education-image" src={formen} alt="Formen College" /></div>
                    <div className="education-details">
                        <h3 className="education-degree">HSC Science | Pre -Engineering</h3>
                        <p className="education-institute">Government College Formen</p>
                        <p className="education-duration">2021-2023 | Completed</p>
                    </div>
                </div>
                <div className="education-card">
                    <div><Image className="education-image" src={uni} alt="Universal Grammar Secondary School" /></div>
                    <div className="education-details">
                        <h3 className="education-degree">SSC Science</h3>
                        <p className="education-institute">Universal Grammar Secondary School</p>
                        <p className="education-duration">2019-2021 | Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
