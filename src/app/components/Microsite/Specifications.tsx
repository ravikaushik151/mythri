// components/Specifications.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Specifications({ data }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="d-none d-md-block">
            <div className="row g-4">
                {data.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div
                            className="specifications-card p-4 text-center h-100"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {hovered === index ? (
                                <div className="spec-details text-start">
                                    <h5 className="fw-bold mb-3 text-center">{item.title}</h5>
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
                    </div>
                ))}
            </div>
        </div>
    );
}
