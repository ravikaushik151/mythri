'use client';

import { useEffect, useState } from 'react';

export default function ContactFormPopup() {
    const [formVisible, setFormVisible] = useState(false);
    const [thankyouVisible, setThankyouVisible] = useState(false);

    // Show popup
    const handleTriggerClick = (e) => {
        e.preventDefault();
        setFormVisible(true);
    };

    // Close popup
    const closePopup = () => {
        setFormVisible(false);
        setThankyouVisible(false);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const response = await fetch(e.target.action, {
                method: e.target.method,
                body: formData,
            });

            if (response.ok) {
                closePopup(); // Hide form
                setThankyouVisible(true); // Show thank you message
                document.getElementById("brochure-download-link")?.click(); // Trigger download
            } else {
                alert("There was an issue with your submission. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <>
            {/* Trigger Link */}
            <a id="brochure-download-trigger" href="#" className="button" onClick={handleTriggerClick}>
                Download e-brochure
            </a>

            {/* Hidden Brochure Download Link */}
            <a id="brochure-download-link" href="/files/brochure.pdf" style={{ display: 'none' }} download>
                Download Brochure
            </a>

            {/* Popup Form Container */}
            <div id="popup-form" className="popup-form" style={{ display: formVisible ? "flex" : "none" }}>
                <div className="popup-content">
                    {/* ✅ Ab yeh kaam karega */}
                    <span className="close-button" onClick={closePopup}>
                        &times;
                    </span>

                    {/* Embedded Form */}
                    <div className="contact-hero_details w-form">
                        <form
                            id="wf-form-Melodies-of-Life-Contact-Form"
                            action="https://www.assetzproperty.com/melodiesoflife/crm.php"
                            method="POST"
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            <input type="text" name="Name" placeholder="Your name" required />
                            <input type="text" name="mobile" placeholder="Phone number" required pattern="[0-9]{10}" />
                            <input type="email" name="email" placeholder="Your email" required />
                            <label>
                                <input type="checkbox" name="WhatsappConsent" defaultChecked /> Get Notified on Whatsapp
                            </label>
                            <input type="hidden" name="projectname" value="Ims" />
                            <input type="hidden" name="SourceURL" value={typeof window !== 'undefined' ? window.location.href : ''} />
                            <input type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>

            {/* Popup Thankyou */}
            <div id="popup-thankyou" className="popup-form" style={{ display: thankyouVisible ? "flex" : "none" }}>
                <div className="popup-content" style={{ padding: '40px 20px', textAlign: 'center' }}>
                    <span className="close-button" onClick={closePopup}>
                        &times;
                    </span>
                    <h3>Thank you for contacting us</h3>
                    <p>We will get back to you soon</p>
                </div>
            </div>
        </>
    );
}