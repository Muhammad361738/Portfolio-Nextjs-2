import React from 'react';
import Image from 'next/image';
import f1 from "../Assests/f1.jpg";
import f2 from "../Assests/f2.jpg";
import f6 from "../Assests/f6.jpg";
import github1 from "../Assests/github1.jpg";
import Link from 'next/link';


const Page = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-column">
                <h3 className="portfolio-title">Portfolio</h3>
                <div className="portfolio-description">
                    <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                </div>
                <div className="contact-info">
                    <p>Phone : +92 3XXXXXXX</p>
                    <p>Email : abc@gmail.com</p>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank" aria-label="Facebook">
                        <Image className="social-icon" src={f1} alt="Facebook" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank" aria-label="Facebook">
                        <Image className="social-icon" src={f2} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank" aria-label="LinkedIn">
                        <Image className="social-icon" src={f6} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Muhammad361738" target="_blank" aria-label="GitHub">
                        <Image className="social-icon" src={github1} alt="GitHub" />
                    </a>
                </div>
            </div>

            <div className="portfolio-column">
                <h3 className="portfolio-title">Useful Links</h3>
                <div className="useful-links">
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/About">About</Link></p>
                    <p><Link href="/Education">Education</Link></p>
                    <p>Services</p>
                    <p>Terms of services</p>
                    <p>Privacy policy</p>
                </div>
            </div>

            <div className="portfolio-column">
                <h3 className="portfolio-title">Our Services</h3>
                <div className="services-list">
                    <p>Web Design</p>
                    <p>Web Development</p>
                    <p>Product Management</p>
                    <p>Marketing</p>
                    <p>Graphic Design</p>
                </div>
            </div>

            <div className="portfolio-column">
                <h3 className="portfolio-title">Our Newsletter</h3>
                <div className="newsletter">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <button className="subscribe-button">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Page;
