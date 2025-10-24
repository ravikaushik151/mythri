"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../styles/ProjectsSection.css";

const projects = [
  {
    title: "Mythri Sapphire",
    location: "Off Sarjapur Road",
    status: "Sold Out",
    description:
      "Mythri Sapphire offers spacious 2 & 3 BHK apartments designed for comfort and modern living. Located off Sarjapur Road, the project is RERA approved and ready to move in, providing an ideal blend of convenience and luxury.",
    image: "images/mythrisapphire.webp",
    link: "#", // replace with actual project link if available
  },
  {
    title: "Mythri Sikharam",
    location: "Sarjapur Road",
    status: "Under Construction",
    description:
      "Mythri Sikharam is a thoughtfully designed residential project offering a balance of modern living and timeless comfort. The homes are spacious, airy, and finished with premium materials to enhance both aesthetics and functionality",
    image: "images/sikharam.webp",
    link: "#",
  },
  {
    title: "Mythri Sity",
    location: "Off Sarjapur Road",
    status: "Under Construction",
    description:
      "Mythri Sity is that kind of place — where thoughtful design meets timeless comfort. Spread across 5 acres, it brings together the warmth of community living and the freedom of open spaces.",
    image: 'images/sity.webp',
    link: "#",
  },
  {
    title: "MYHTRI STREET",
    location: "Off Sarjapur Road",
    status: "Under Construction",
    description:
      "Mythri Street is a thoughtfully crafted residential landmark spread across 3 acres of prime land off Sarjapur Road, Kodathi, Bengaluru. Designed with a vision to blend urban sophistication with open tranquility, it offers 2 & 3 BHK residences surrounded by 80% open spaces, ensuring balance between nature and modern living.",
    image: 'images/street.webp',
    link: "#",
  },
];


const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="stretcher-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-wrap text-center">
              <h2 className="section-title wow fadeInUp">OUR Projects</h2>
            </div>
          </div>
        </div>
      </div>

      <ul className="stretcher">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`stretcher-item ${
              activeIndex === index ? "active" : activeIndex !== null ? "inactive" : ""
            }`}
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="stretcher-logo">
              <div className="text">
                <span className="text-intro h4">{project.title}</span>
              </div>
            </div>
            <figure>
              <h4 className="">
                {project.title}, {project.location} <br/> <span >{project.status}</span>
              </h4>
              <figcaption>{project.description}</figcaption>
            </figure>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Anchor link
            </a>
          </li>
        ))}

        {/* View More */}
        <li
          className={`stretcher-item more ${
            activeIndex === "more" ? "active" : activeIndex !== null ? "inactive" : ""
          }`}
          onMouseEnter={() => setActiveIndex("more")}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="more-icon">
            <span data-title-show="VIEW MORE" data-title-hide="+"></span>
          </div>
          <Link href="/projects">Anchor link</Link>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsSection;
