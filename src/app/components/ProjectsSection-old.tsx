"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../styles/ProjectsSection.css";

const projects = [
  {
    title: "Mythri Street",
    location: "Off Sarjapur Road, Kodathi",
    status: "Under Construction",
    projectType: "Residential Apartments",
    configuration: "2 & 3 BHK",
    numberOfUnits: "219 Units",
    possession: "2028",
    description:
      "Mythri Street is a thoughtfully crafted residential landmark spread across 3 acres of prime land. With 80% open spaces, it blends urban sophistication with serene living.",
    image: "/images/street.webp",
    link: "/mythri-street",
  },
  {
    title: "Mythri Sity",
    location: "Off Sarjapur Road, Bengaluru",
    status: "Under Construction",
    projectType: "Residential Apartments",
    configuration: "2, 2.5, 3, 3.5 and 4 BHK",
    numberOfUnits: "423 Units",
    possession: "2028",
    description:
      "Mythri Sity is that kind of place — where thoughtful design meets timeless comfort. Spread across 5 acres, it brings together the warmth of community living and the freedom of open spaces.",
    image: "/images/sity.webp",
    link: "/mythri-sity",
  },
  {
    title: "Mythri Sikharam",
    location: "Off Sarjapur Road, Hadosiddapura",
    status: "Under Construction",
    projectType: "Residential Apartments",
    configuration: "2 & 3 BHK",
    numberOfUnits: "182 Units",
    possession: "October 2027",
    description:
      "Mythri Sikharam is a thoughtfully designed residential project offering a balance of modern living and timeless comfort. The homes are spacious, airy, and finished with premium materials to enhance aesthetics and functionality.",
    image: "/images/sikharam.webp",
    link: "/mythri-sikharam",
  },
  {
    title: "Mythri Sankalp",
    location: "KR Puram, Bengaluru",
    status: "Under Construction",
    projectType: "Residential Apartments",
    configuration: "2 & 3 BHK",
    numberOfUnits: "101 Units",
    possession: "December 2026",
    description:
      "Mythri Sankalp offers spacious 2 & 3 BHK apartments designed for comfort and modern living. Located KR Puram, the project is RERA approved, providing an ideal blend of convenience and luxury.",
    image: "/images/mythrisapphire.webp",
    link: "/mythri-sankalp",
  }
];




const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="stretcher-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-wrap text-center">
              <h2 className="section-title wow fadeInUp">Ongoing Projects</h2>
            </div>
          </div>
        </div>
      </div>

      <ul className="stretcher">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`stretcher-item ${activeIndex === index ? "active" : activeIndex !== null ? "inactive" : ""
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <h4 className="">
                  {project.title}
                </h4>
                <figcaption>{project.description}</figcaption>
                <div className="project-info-grid text-white">
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Project Type:</strong> {project.projectType}</p>
                  <p><strong>Configuration:</strong> {project.configuration}</p>
                  <p><strong>Units:</strong> {project.numberOfUnits}</p>
                  <p><strong>Status:</strong> {project.status}</p>
                  <p><strong>Possession:</strong> {project.possession}</p>
                </div>
              </a>
            </figure>
            {/*<a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Anchor link
            </a>*/}
          </li>
        ))}

        {/* View More */}
        <li
          className={`stretcher-item more ${activeIndex === "more" ? "active" : activeIndex !== null ? "inactive" : ""
            }`}
          onMouseEnter={() => setActiveIndex("more")}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="more-icon">
            <span data-title-show="VIEW MORE" data-title-hide="+"></span>
          </div>
          <Link href="/ongoing-projects">Anchor link</Link>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsSection;
