"use client";
import React from "react";

const EnquiryForm = () => {
    return (
        <div
            className="form-box p-4 rounded-3 shadow position-relative"
            style={{
                maxWidth: "360px",
                marginTop: "-100px",
                marginLeft: "70%",
                background: "rgba(255, 255, 255, 0.4)", // 👈 80% transparent white
                backdropFilter: "blur(6px)", // optional: adds glassy blur effect
            }}
        >

            <h5 className="text-center mb-3 text-white">Enquire Now</h5>
            <form>
                <input type="text" className="form-control mb-2" placeholder="Name" />
                <input type="email" className="form-control mb-2" placeholder="E-mail" />
                <input type="tel" className="form-control mb-2" placeholder="Mobile" />
                <select className="form-select mb-2">
                    <option>Apartment Interested In?</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                </select>
                <select className="form-select mb-2">
                    <option>Purpose of Enquiry</option>
                    <option>Investment</option>
                    <option>Own Stay</option>
                </select>
                <div className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Enter Captcha"
                    />
                    <div className="bg-light border rounded px-3 py-2">5381</div>
                </div>
                <button className="btn btn-dark w-100">Submit</button>
            </form>
        </div>
    );
};

export default EnquiryForm;
