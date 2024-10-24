"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h2>Portfolio</h2>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <ul className="navbar-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Skills">Skills</Link></li>
              <li><Link href="/Education">Education</Link></li>
              <li><Link href="/Contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="navbar-hamburger">
            <button onClick={toggleMenu} className="hamburger-btn">&#8801;</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button onClick={toggleMenu} className="close-btn">&#10006;</button>
          <ul className="mobile-menu-links">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/About" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/Skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="/Education" onClick={toggleMenu}>Education</Link></li>
            <li><Link href="/Contact" onClick={toggleMenu}>Contact us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
