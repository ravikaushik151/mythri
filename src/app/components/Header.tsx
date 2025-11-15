"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`main-navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-wrapper">
        {/* Logo Left */}
        <div className="logo-box">
          <Link href="/">
            <Image
              src="/images/logo-dark.webp"
              alt="Mana Projects logo"
              width={100}
              height={40}
              className="white-png logo img-fluid"
              priority
            />
          </Link>
        </div>

        {/* Hamburger Right */}
        <div
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
        <ul className="overlay-menu">
          <li><Link href="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>ABOUT US</Link></li>
          <li><Link href="/project" onClick={toggleMenu}>PROJECTS</Link></li>
          <li><Link href="/career" onClick={toggleMenu}>CAREER</Link></li>
          <li><Link href="/blog" onClick={toggleMenu}>BLOGS</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
}
