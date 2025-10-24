"use client";
import Image from "next/image";

const coreValues = [
  {
    title: "Transparency",
    text: "Every promise made is a promise kept.",
    img: "/images/Sutainablity.png",
  },
  {
    title: "Punctuality",
    text: "We deliver on time, every time.",
    img: "/images/Innovation_2.png",
  },
  {
    title: "Trust",
    text: "The foundation on which every Mythri relationship is built.",
    img: "/images/Intergrity.png",
  },
  {
    title: "Focus",
    text: "One project, one vision - executed with precision.",
    img: "/images/Quality.png",
  },
  {
    title: "Integrity",
    text: "Ethics in every action, honesty in every deal.",
    img: "/images/Quality.png",
  },
  {
    title: "Excellence",
    text: "Quality that endures, design that inspires.",
    img: "/images/Quality.png",
  },
];

export default function CoreValuesGrid() {
  return (
    <section className="core-values-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold theme-color-dark"> Mythri Builders Core Values</h2>
          <p className="text-muted text-center fs-4">Our principles define who we are and how we work.</p>
        </div>

        <div className="row g-4">
          {coreValues.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="core-value-card position-relative p-4 text-center h-100">
                <div className="icon-circle mb-3 mx-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
