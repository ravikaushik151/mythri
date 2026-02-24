
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import "./../privacy.css";
export default function Contact() {
    return (
        <>
           <div id="carouselExampleDark" className="header-section ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container position-relative">
                            <Image
                                src="/images/Termsconditions_banner.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece masterpiece4"
                                alt="masterpiece"
                            />
                            <div className="overlay2 position-absolute top- w-100 h-100 d-flex flex-column justify-content-end align-items-center">
                                <div className="text-white d-block text-center">
                                    <p className="fs-1 mb-3 text-uppercase text-black">TERMS AND CONDITIONS</p>
                                    <p className="fs-6 text-center text-black">
                                        <Link className="text-black text-decoration-none " href="https://mythribuilders.com/">
                                            Home
                                        </Link>{" "}
                                        / TERMS AND CONDITIONS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-padding bg-white theme-bg-dark contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row">
                                {/* Contact Form */}
                                <div className="col-md-12">
                                    <div className="contact_form_inner px-md-5 px-3 mb-4">
                                        <div className="contact_field theme-color-light text-black">
                                            <h3>Terms &amp; Conditions &ndash; Mythri Builders</h3>
                                            <p>Please read these Terms of Use carefully before using this website. By accessing mythribuilders.com, you acknowledge and accept these Terms of Use from the moment you first visit the site. If you do not agree with any of thetermslisted here, please do not use this website. Mythri Builders reserves the right, in its sole discretion, to modify or update these Terms of Use at any time. Continued use of the website implies that you agree to the revised terms. It is your responsibility to review these Terms periodically.</p>
                                            <h3>Copyrights, Trademarks and Restrictions</h3>
                                            <p>All content on this website, including images, designs, text, graphics, project details, audio and video files, is protected by copyright and trademark laws. These materials are owned by Mythri Builders or are licensed to us by third parties.</p>
                                            <p>Unless clearly permitted under these Terms, no content from mythribuilders.com or any site operated by Mythri Builders may be copied, reproduced, republished, uploaded, distributed or transmitted in any form. Any alteration orunauthoriseduse of this material for purposes other than personal, non-commercial viewing is strictly prohibited and may violate intellectual property rights.</p>
                                            <p>Where downloads are allowed, Mythri Builders grants a limited, non-transferable and non-exclusivelicencefor personal use only. You may not modify, sell, decompile, reverse engineer, sublicense or distribute any downloaded material. No ownership rights are transferred to you.</p>
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
