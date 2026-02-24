// components/Specifications.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Specifications({ data }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <div className="row g-5 g-md-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4"
          >
            {/* Desktop View */}
            <div
              className="specifications-card p-4 text-center h-100 d-none d-md-block"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index ? (
                <div className="spec-details text-start">
                  <h5 className="fw-bold mb-3 text-center">
                    {item.title}
                  </h5>
                  {item.details}
                </div>
              ) : (
                <>
                  <div className="icon-circle mb-3 mx-auto">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="spec-icon"
                    />
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                </>
              )}
            </div>

            {/* Mobile View */}
            <div className="d-block d-md-none position-relative bg-white rounded-4 shadow-sm p-4 mt-3 h-100">
              <div className="position-absolute start-50 translate-middle" style={{ top: '0' }}>
                <div className="rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #001f4d, #036)' }}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="spec-icon"
                  />
                </div>
              </div>
              <div className="pt-4 text-center">
                <h5 className="fw-bold mt-3 mb-3 text-secondary">{item.title}</h5>
                <div className="text-start text-muted text-break" style={{ maxHeight: '200px', overflowY: 'auto', fontSize: '14px' }}>
                  {item.details}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
