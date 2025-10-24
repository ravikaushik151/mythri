import InnerPreloader from "../components/InnerPerloader";


export default function ContactPage() {
    return (
        <>
            <InnerPreloader />
            <div className="main-wrapper">
                <div id="TOP" className="section_contact-hero">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="contact-hero_components">
                                <div
                                    id="w-node-ab27b142-73cd-a3b6-fddc-1fd11f57efca-ac1b3ecb"
                                    className="contact-hero_image-wrapper"
                                >
                                    <img
                                        className="contact-hero_image"
                                        src="/images/contact-hero.png"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    id="w-node-_1795b472-96a0-1725-f645-679892ebd94f-ac1b3ecb"
                                    className="contact-hero_details-wrapper"
                                >
                                    <div className="contact-hero_content">
                                        <div className="contact-hero_heading-wrapper">
                                            <div className="text-color-dark-rainforest">
                                                <h1 data-animate={2} className="heading-style-h2">
                                                    Arent You Excited for What Life Has the Potential to Be?
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="contact-hero_text-wrapper">
                                            <div className="text-color-green">
                                                <div className="text-size-regular">
                                                    Take that first step towards the green, thriving life you
                                                    want. Fill in the form and begin your journey to exploring
                                                    Ims.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-hero_details w-form">
                                            <form
                                                id="wf-form-Melodies-of-Life-Contact-Form"
                                                action=""
                                                name="wf-form-Melodies-of-Life-Contact-Form"
                                                data-name="Ims Contact Form"
                                                method="POST"
                                                className="form"
                                                data-wf-page-id={123456}
                                                data-wf-element-id="80e2e176-32f8-e8ff-8100-fe105c83cfef"
                                            >
                                                <input
                                                    className="form_input w-input"
                                                    maxLength={256}
                                                    name="Name"
                                                    data-name="Name"
                                                    placeholder="Your name"
                                                    type="text"
                                                    id="name"
                                                    required
                                                    pattern="[a-zA-Z][a-zA-Z\s]*"
                                                />
                                                <input
                                                    className="form_input w-input"
                                                    maxLength={256}
                                                    name="mobile"
                                                    data-name="Phone Number"
                                                    placeholder="Your phone number"
                                                    type="text"
                                                    id="Phone-Number"
                                                    required
                                                    pattern="^\d{10}$"
                                                />
                                                <input
                                                    className="form_input w-input"
                                                    maxLength={256}
                                                    name="email"
                                                    data-name="Email"
                                                    placeholder="Your email address"
                                                    type="email"
                                                    id="Email"
                                                    required
                                                    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                                />
                                                <textarea
                                                    id="field"
                                                    name="message"
                                                    maxLength={5000}
                                                    data-name="Field"
                                                    placeholder="Your questions and comments"
                                                    className="form_input is-text-area w-input"
                                                    defaultValue={""}
                                                />
                                                <label className="checkbox-label">
                                                    <input
                                                        type="checkbox"
                                                        id="customChecknew"
                                                        name="WhatsappConsent"
                                                        defaultValue="yes"
                                                        defaultChecked
                                                    />{" "}
                                                    Get Notified on Whatsapp
                                                </label>
                                                <input
                                                    type="hidden"
                                                    name="projectname"
                                                    className="noclass"
                                                    defaultValue="Ims"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="SourceURL"
                                                    className="form-url"
                                                    name="SourceURL"
                                                />
                                                <input
                                                    type="submit"
                                                    defaultValue="SUBMIT"
                                                    data-wait="Please wait..."
                                                    className="button is-form-submit w-button"
                                                />
                                            </form>
                                            <div className="success-message w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="error-message w-form-fail">
                                                <div>
                                                    Oops! Something went wrong while submitting the form.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_contact-forefront">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="contact-forefront_components">
                                <div className="contact-forefront_content-wrapper">
                                    <div className="contact-forefront_content">
                                        <div className="contact-forefront_text">
                                            <div className="text-color-offwhite">
                                                <div className="text-size-regular">
                                                    There’s living and then, there’s Assetz Living. Every Assetz
                                                    home is a Carbon Healing Home, meeting our commitment to
                                                    creating sustainable homes that minimise the impact on the
                                                    environment but do not minimise on the living experience.
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="https://www.assetzproperty.com/"
                                            className="contact-forefront_website w-inline-block"
                                        >
                                            <div className="text-color-accent">
                                                <div className="text-size-regular">Assetz website</div>
                                            </div>
                                            <div className="contact-forefront_arrow">
                                                <img
                                                    src="/images/location_venue-arrow.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="contact-forefront_arrow"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="contact-forefront_heading-wrapper">
                                        <div className="text-color-darkgreen">
                                            <h2 data-animate={1} className="heading-style-h2">
                                                At the forefront of trendsetting real estate
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-forefront_image-wrapper">
                                    <img
                                        src="/images/Copy-of-Central-Park-View-2-min.jpg"
                                        loading="lazy"
                                        alt="Central-Park"
                                        className="contact-forefront_image mol-img_parallax"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}