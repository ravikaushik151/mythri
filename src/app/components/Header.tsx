"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();

  // ❗ Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`main-navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-wrapper">
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

        <div
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>
      </div>

      <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
        <ul className="overlay-menu">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/project">PROJECTS</Link></li>
          <li><Link href="/career">CAREER</Link></li>
          <li><Link href="/blog">BLOGS</Link></li>
          <li><Link href="/contact">CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
}
