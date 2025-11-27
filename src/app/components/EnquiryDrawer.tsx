"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function EnquiryDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Enquire Button */}
            <button
                onClick={() => setOpen(true)}
                className="position-fixed top-50 text-white fw-semibold shadow rounded-top px-3 py-2 rotate-90 z-3 right-side-button"
            >
                Enquire Now
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-2"
                ></div>
            )}

            {/* Right Slide Drawer */}
            <div
                className="position-fixed top-0 h-100 bg-white shadow p-4 z-3"
                style={{
                    width: "380px",
                    right: open ? "0" : "-380px",
                    transition: "right 0.3s ease",
                }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                    style={{ zIndex: 9999 }}
                ></button>

                <h4 className="fw-bold mb-4">ENQUIRE NOW</h4>

                {/* Form */}
                <ContactForm
                    inputClass="form-control mb-2"
                    buttonClass="btn text-white bg-dark px-4"
                />
                <form className="d-none">

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Your Name*</label>
                        <input
                            type="text"
                            className="form-control border-0 border-bottom rounded-0"
                            placeholder="Enter Your Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Mobile*</label>
                        <input
                            type="text"
                            className="form-control border-0 border-bottom rounded-0"
                            placeholder="Your Mobile"
                        />
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Do you have whatsapp activated on this number?
                        </label>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Your Email*</label>
                        <input
                            type="email"
                            className="form-control border-0 border-bottom rounded-0"
                            placeholder="Enter Your Email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Projects Type*</label>
                        <select className="form-select border-0 border-bottom rounded-0">
                            <option>Select Project Type</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Plot</option>
                        </select>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Yes, I want to receive newsletters & updates.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn w-100 border border-2 mt-3"
                        style={{
                            borderColor: "#8b6a40",
                            color: "#8b6a40",
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
