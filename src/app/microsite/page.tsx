"use client";
import { useEffect } from "react";
//import './style.css';
import "./../microsite.css";
import Link from "next/link";

import Image from "next/image";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import MicroHomeHeroSlider from "../components/Microsite/MicroHomeHeroSlider";
import Clubhouse from "../components/ClubhouseMarquee";
import MasterPlanSection from "../components/Microsite/MasterPlanSection";

export default function Home() {
  useEffect(() => {

    const form = document.getElementById(
      "wf-form-Melodies-of-Life-Contact-Form"
    );
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");




    if (trigger && popup) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };


  }, []);

  return (
    <>
      <main className="main-wrapper">
        <div className="overflow-clip" id="main-slider">
          <MicroHomeHeroSlider />
        </div>
        <div id="scroll-more">
          <section
            className="project-info-section theme-bg-dark section-small mobileoverview"

          >
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">Project Size</h6>
                  <span className="mb-0 fs-2 fw-light theme-color-light">18+  Acres</span>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">Approved</h6>
                  <span className="mb-0 fs-2 fw-light theme-color-light">BMRDA</span>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3  theme-color-light">
                    Possession
                  </h6>
                  <span className="mb-0 fs-2 fw-light theme-color-light">12 Months</span>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">
                    Plot Sizes
                  </h6>
                  <span className="mb-0 fs-2 fw-light theme-color-light">1500 - 3300 sq.ft.</span>
                </div>
              </div>
            </div>
          </section>




          <section className="section theme-bg-light page-project-amidst" id="about" >
            <div className="container">
              <div className="row  px-md-5">
                <div className="col-md-6 d-flex align-items-center" >
                  <div className=" ">
                    <h2 className="mb-0 theme-color-dark text-center">Amidst Nature</h2>
                    <span className="fs-5 theme-color-dark text-center d-block">Crafted by Earth. Designed by Mythri Builders.</span>
                    <p className="mt-4  theme-color-dark">
                      <strong>Every plot at &ldquo;Amidst Nature&rdquo; is a promise of green mornings, golden silence, and grounded luxury.</strong><strong><br /></strong>Spread across 18+ lush acres in Kaggalipura, just off Kanakapura Road, this premium plotted development invites you to design your forever home in a place where the city fades and nature speaks. Thoughtfully approved by BMRDA and connected to every urban convenience, this is more than a plot - it&rsquo;s a path back to balance.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="px-md-5">
                    <Image
                      alt="Project"
                      src="/images/UpcomingProject.avif"
                      width={5500}
                      height={750}
                      className="img-fluid  mb-3  rounded-4"
                      priority
                      fetchPriority="high" style={{ maxHeight: "50vh", objectFit: "cover", objectPosition: "bottom center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="py-5 theme-bg-dark d-none" >
            <div className="padding-global">
              <div className="container-large">
                <div className="home-stats_components">
                  <div className="home-stats_content-wrapper">
                    <div className="home-stats_text-wrapper">
                      <div className="text-color-grey">
                        <div className="text-size-medium theme-color-light fs-5">
                          Enter and see a sprawling canvas of green within the
                          city
                        </div>
                      </div>
                    </div>
                    <div className="home-stats_items highlights">
                      <div
                        id="w-node-cdea1d55-fe63-8f1c-3822-d0c3250461c3-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">Acres</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">15 acres</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">
                            Plot Sizes<span className="heading-style-h5"></span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">
                            1500 – 3300 Sqft
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">Approved </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">
                            BMRDA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-5 bg-light d-none" id="price">
            <div className="container">
              <h2 className="text-center">Price</h2>
              <div className="row justify-content-center g-4">
                {/* 2 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      2 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 98 Lakh*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">
                      Size – 1180 to 1200 Sq.ft.
                    </p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
                {/* 3 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      3 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 1.35 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">
                      Size – 1630 to 1660 Sq.ft.
                    </p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <section className="section_biodiversity-benefits py-5  theme-bg-light" id="amenities"  >
            <div className="padding-global" >
              <div className="container-large" >
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className=""
                  >
                    <h2 data-animate={1} className="m-center text-center  theme-color-dark">
                      Amenities
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <AmenitiesMarquee />

          </section>


          {/* Section 2: 360 Lifestyle Cards */}
          <section className="section_biodiversity-benefits py-5 theme-bg-dark section-small" id="amenities">
            <div className="padding-global">
              <div className="container-large">
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className=""
                  >
                    <h2 data-animate={1} className=" theme-color-light text-center">
                      Club House
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <Clubhouse />
          </section>


          <MasterPlanSection />
          <section className="section_home-connectivity theme-bg-dark page-about-mv" id="location">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-connectivity_content">
                  <div className="home-connectivity_heading-wrapper text-center">
                    <h2
                      data-animate={1}
                      className="heading-style-h2 text-color-offwhite theme-color-light m-center"
                    >
                      Location
                    </h2>
                  </div>
                </div>
                <div className="home-connectivity_components">
                  <div className="home-connectivity_image-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7781.187708608875!2d77.51706043914793!3d12.804854316360881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4169b07f2a7b%3A0xe6d9ff13f19a5517!2sAmidst%20Nature!5e0!3m2!1sen!2sin!4v1759994801277!5m2!1sen!2sin" width="100%" height="500" loading="lazy"></iframe>
                  </div>
                  <div
                    id="w-node-ae28a13d-3673-7d72-6c93-35ac2b8ff216-ac1b3e9a"
                    className="home-connectivity_content-wrapper  position-relative"
                  >
                    <div className="home-connectivity_content">
                      <div className="home-connectivity_heading-wrapper">
                        <h3
                          data-animate={1}
                          className="fs-2 text-color-offwhite theme-color-light m-center mb-3"
                        >
                          Located in{" "}
                          <span className="text-white">
                            Kaggalipura,
                          </span>{" "}
                          Off Kanakapura Road, Bengaluru.
                        </h3>
                      </div>
                      <div className="w-100">
                        <div className="text-size-regular text-color-offwhite theme-color-light m-center">
                          Surrounded by serene greenery and nestled along the city’s fast-developing Kanakapura stretch, Kaggalipura is a peaceful retreat that’s seamlessly connected to Bengaluru’s most prominent hubs. With wide roads, clean air, and spiritual landmarks nearby, it’s not just a location — it’s a lifestyle.
                        </div>
                      </div>
                    </div>
                    <div className="home-connectivity_distance-wrapper">
                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Art of Living International Center
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;7 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Vajarahalli Metro Station
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;15 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • NICE Road Junction
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;10 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Kumarans School
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;10–15 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Metro Cash & Carry
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;20–25 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Global Village Tech Park
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;20–25 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <Image
                      width={800}
                      height={200}
                      src="/images/page-6.png"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img img-fluid bg-transparent mt-3 rounded-3"
                      style={{ top: "220px", maxHeight: "270px", objectFit: "cover", objectPosition: "bottom bottom", position: "absolute", opacity: ".6" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
