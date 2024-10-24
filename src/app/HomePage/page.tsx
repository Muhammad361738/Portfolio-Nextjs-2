import React from 'react';
import Image from 'next/image';
import lin from "../Assests/lin.png";
import fac from "../Assests/fac.jpg";
import insta from "../Assests/insta.jpg";
import github1 from "../Assests/github1.jpg";
import myImg from "../Assests/myImg.png";

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <div className="intro-text">
                    <h2>Hi There</h2>
                    <h2 className="name-text">I am Muhammad Talha</h2>
                    <p className="description-text">I am into <span className="highlight-text">frontend development</span></p>
                </div>
                <div className="btn-container">
                    <button className="about-btn">About Me</button>
                </div>
                <div className="social-links">
                    <ul className="social-list">
                        <li>
                            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank">
                                <Image className="social-icon" src={lin} alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank">
                                <Image className="social-icon" src={fac} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a aria-label="Instagram" href="#" target="_blank">
                                <Image className="social-icon" src={insta} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a aria-label="Github" href="https://github.com/Muhammad361738" target="_blank">
                                <Image className="social-icon" src={github1} alt="Github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="image-container">
                <Image className="profile-img" src={myImg} alt="Muhammad Talha" />
            </div>
        </div>
    );
}

export default HomePage;
