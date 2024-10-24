import React from 'react';
import Image from 'next/image';
import myImg from "../Assests/myImg.png";

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="title-container">
                <h1>About <span className="highlight-text">Me</span></h1>
            </div>

            <div className="content-container">
                <div className="image-wrapper">
                    <Image className="profile-img" src={myImg} alt="Profile Image" />
                </div>
                <div className="description-container">
                    <h3 className="name-heading">I am Talha</h3>
                    <p className="job-title">Frontend Developer</p>
                    <p className="description">
                        I am a Frontend developer based in Karachi, Pakistan. I am an Information Technology undergraduate student at SMIU. I am passionate about improving my coding skills and developing applications and websites. I build WebApps and Websites using Frontend technologies. I am working to improve my skills and love building FullStack clones.
                    </p>
                    <div className="resume-btn-wrapper">
                        <a href="https://hackhtonmilestone-1-2.vercel.app/" target="_blank">
                            <button className="resume-btn">Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
