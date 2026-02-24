"use client";
import React, { useState } from "react";
import { Accordion, Row, Col } from "react-bootstrap";

const specificationsData = [
    {
        title: "R.C.C",
        content: "Earthquake-resistant RCC framed structure with concrete walls.",
    },
    {
        title: "Plaster",
        content: "External sand faced plaster and internal gypsum plaster finish.",
    },
    {
        title: "Brickwork",
        content: "High-quality masonry work ensuring strength and insulation.",
    },
    {
        title: "Kitchen",
        content:
            "Granite countertop with stainless steel sink and dado tiles up to lintel level.",
    },
    {
        title: "Door",
        content:
            "Main door with teakwood frame and laminated flush shutter. Internal doors in wood frame with skin finish shutter.",
    },
    {
        title: "Windows",
        content: "UPVC sliding windows with mosquito mesh and safety grills.",
    },
    {
        title: "Toilets",
        content:
            "Designer tiles up to lintel height, branded sanitary fittings, and concealed plumbing.",
    },
    {
        title: "Painting",
        content:
            "Internal walls with acrylic emulsion paint; external with weather shield paint.",
    },
    {
        title: "Electrification",
        content:
            "Concealed copper wiring with modular switches, TV and internet points in living & master bedroom.",
    },
    {
        title: "Flooring",
        content: "Vitrified tiles in all rooms and anti-skid tiles in toilets & balconies.",
    },
];

export default function Specifications() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h3 className="text-center mb-4 fw-bold text-uppercase">
                    Specifications
                </h3>
                <Row>
                    {/** Divide items into two columns */}
                    <Col md={6}>
                        <Accordion
                            activeKey={activeKey ?? undefined}
                            onSelect={(key) => setActiveKey(key === activeKey ? null : (key as string))}
                        >
                            {specificationsData.slice(0, 5).map((item, idx) => (
                                <Accordion.Item eventKey={String(idx)} key={idx} className="mb-2">
                                    <Accordion.Header className="mb-0">{item.title}</Accordion.Header>
                                    <Accordion.Body>{item.content}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>

                    <Col md={6}>
                        <Accordion
                            activeKey={activeKey ?? undefined}
                            onSelect={(key) => setActiveKey(key === activeKey ? null : (key as string))}
                        >
                            {specificationsData.slice(5).map((item, idx) => (
                                <Accordion.Item
                                    eventKey={String(idx + 5)}
                                    key={idx + 5}
                                    className="mb-2"
                                >
                                    <Accordion.Header className="mb-0">{item.title}</Accordion.Header>
                                    <Accordion.Body>{item.content}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
