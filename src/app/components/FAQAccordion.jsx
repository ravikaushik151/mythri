"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function FAQAccordion({ faqs }) {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="container p-0 ">
            <h2 className="mb-4">FAQs</h2>

            {/* defaultActiveKey="0" ka matlab hai pehla item (index 0) open rahega */}
            <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>

                        {/* HEADER */}
                        <h3 className="accordion-header" id={`heading-${index}`}>
                            <button
                                className={`accordion-button fs-5 ${index !== 0 ? "collapsed" : ""}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse-${index}`}
                            >
                                {faq.question}
                            </button>
                        </h3>

                        {/* BODY */}
                        <div
                            id={`collapse-${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            aria-labelledby={`heading-${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}