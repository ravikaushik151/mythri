"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import "../styles/Navbar.css";

import { useMenu } from "../context/MenuContext";

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useMenu();
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pathname = usePathname();

  const isHome = pathname === "/";


  // ❗ Auto-close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <nav className={`main-navbar d-none ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-wrapper">
          <div className="logo-box">
            <Link href="/">
              <Image
                src="/images/logo-dark.webp"
                alt="Mana Projects logo"
                width={100}
                height={40}
                className="white-png logo img-fluid"
                style={{ height: 'auto' }} // ✅ Crucial for 'img-fluid' to work without distortion
                priority
              />
            </Link>
          </div>

          <div
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
          </div>
        </div>


      </nav>

      <nav
        className={`main-navbar navbar navbar-expand-lg fixed
          ${isSticky ? "sticky" : ""}
          ${isHome ? "home-navbar" : "inner-navbar"}
        `}
      >

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
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
          </div>
          {/* <div className={`nav-overlay collapse navbar-collapse ${isOpen ? "open" : ""}`} id="navbarSupportedContent"> */}
          <div className={`nav-overlay navbar-collapse ${menuOpen ? "open" : "d-none d-lg-flex"}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 overlay-menu">
              <li className="nav-item"><Link href="/">HOME</Link></li>
              <li className="nav-item"><Link href="/about">ABOUT US</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PROJECTS</Link>
                <ul className="dropdown-menu bg-black">
                  <li><Link href="/ongoing-projects">Ongoing Projects</Link></li>
                  <li><Link href="/completed-projects">Completed Projects</Link></li>
                  <li className="d-none"><Link href="/upcoming-projects">Upcoming Projects</Link></li>
                </ul>
              </li>
              <li className="nav-item slide-down"><Link href="/career">CAREER</Link></li>
              <li className="nav-item slide-down"><Link href="/blogs">BLOGS</Link></li>
              <li className="nav-item slide-down"><Link href="/contact">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
