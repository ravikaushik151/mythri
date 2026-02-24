
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../app/components/ContactForm";
import "./../privacy.css";
export default function Contact() {
    return (
        <>
            <div id="carouselExampleDark" className="header-section ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container position-relative">
                            <Image
                                src="/images/contact-us-page-header.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="masterpiece"
                            />
                            <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-start align-items-center margin-top-20">
                                <div className="text-white d-block text-center">
                                    <p className="fs-1 mb-3 text-uppercase ">Privacy Policy</p>
                                    <p className="fs-6 text-center">
                                        <Link className="text-white text-decoration-none" href="https://mythribuilders.com/">
                                            Home
                                        </Link>{" "}
                                        / Privacy Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="section-padding bg-white theme-bg-dark contact ">
                <div className="container">


                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row">
                                {/* Contact Form */}
                                <div className="col-md-12 ">
                                    <div className="contact_form_inner px-md-5 px-3 mb-4 ">
                                        <div className="contact_field theme-color-light text-black">
                                            <h2 className="text-center ">Privacy Policy</h2>

                                            <p>Mythri Builders (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you interact with our services, including our website (<strong>https://mythribuilders.com/</strong>), lead forms, marketing campaigns, and integrated platforms. By using our services, you agree to the practices described below.</p>

                                            <h3>1. Information We Collect</h3>
                                            <p><strong>Personal Information:</strong> Includes name, email address, phone number, and preferences you provide through forms.</p>
                                            <p><strong>Automatically Collected Data:</strong> IP address, browser type, device information, visited pages, and time spent — collected via cookies, Facebook Pixel, and Google Analytics.</p>

                                            <h3>2. How We Use Your Information</h3>
                                            <p>We use your data to:</p>
                                            <ul>
                                                <li>Respond to inquiries and provide updates about our offerings</li>
                                                <li>Customize brochures, messages, and promotional materials via our CRM</li>
                                                <li>Schedule callbacks, appointments, or property visits</li>
                                                <li>Improve our services through analytics and user behavior insights</li>
                                            </ul>

                                            <h3>3. Legal Basis for Processing</h3>
                                            <p>Under GDPR and similar regulations, we process your data based on:</p>
                                            <ul>
                                                <li><strong>Consent:</strong> Given through web forms or cookie banners</li>
                                                <li><strong>Contractual necessity:</strong> To fulfill your requests</li>
                                                <li><strong>Legitimate interests:</strong> For marketing and service enhancement</li>
                                            </ul>

                                            <h3>4. Cookies &amp; Tracking Technologies</h3>
                                            <p>We use cookies, Facebook Pixel, and Google Analytics to personalize content and measure performance. When visiting our site, you will be prompted to accept or reject tracking cookies. You can change your preferences anytime through your browser settings.</p>

                                            <h3>5. Data Sharing &amp; Third Parties</h3>
                                            <p>Your data may be shared with:</p>
                                            <ul>
                                                <li>Internal sales, marketing, and support teams</li>
                                                <li>Authorized agents or real estate partners</li>
                                                <li>Third-party platforms like Google and Meta for ads</li>
                                                <li>CRM and cloud-based marketing service providers</li>
                                            </ul>
                                            <p><strong>Note:</strong> We do not sell or rent your personal data to any third parties.</p>

                                            <h3>6. Your Rights &amp; Choices</h3>
                                            <p>Depending on your location, you may have the right to:</p>
                                            <ul>
                                                <li>Access and receive a copy of your data</li>
                                                <li>Request corrections or updates to your data</li>
                                                <li>Request deletion or restrict how your data is used</li>
                                                <li>Withdraw consent at any time without affecting prior processing</li>
                                            </ul>
                                            <p>To exercise any of these rights, please contact us at <strong>enquiry@mythribuilders.com</strong>.</p>

                                            <h3>7. Data Retention</h3>
                                            <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations. Typically, this does not exceed 24 months from your last interaction.</p>

                                            <h3>8. Data Security</h3>
                                            <p>We apply technical and administrative measures to safeguard your data. While we strive to protect your personal information, no internet transmission or storage method is 100% secure. Always use strong passwords and be cautious with shared credentials.</p>

                                            <h3>9. Children&quot;s Privacy</h3>
                                            <p>Our services are not intended for children under the age of 18. We do not knowingly collect personal information from minors. If we become aware of such data, we will delete it promptly.</p>

                                            <h3>10. External Links</h3>
                                            <p>Our website may include links to third-party websites or services. We are not responsible for their privacy policies or practices. We encourage users to read the privacy policies of any external sites they visit.</p>

                                            <h3>11. Policy Updates</h3>
                                            <p>We may update this policy periodically to reflect changes in law or business practices. Any updates will be posted on this page with the new &quot;Effective Date.&quot; Continued use of our services implies your acceptance of these changes.</p>

                                            <h3>12. Contact Us</h3>
                                            <p>If you have questions or requests related to this Privacy Policy or your personal data, please contact us using the details below:</p>
                                            <p>
                                                <strong>Mythri Builders</strong><br /> <br />
                                                Address: #2802, Broadway Building,<br />
                                                27th Main Road, Sector 1,<br />
                                                HSR Layout, Bengaluru - 560102.<br />

                                                <br />
                                                Email: <a className="theme-color-light text-black" href="mailto:enquiry@mythribuilders.com">enquiry@mythribuilders.com</a><br />
                                                Website: <a className="theme-color-light text-black" href="https://mythribuilders.com">https://mythribuilders.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
