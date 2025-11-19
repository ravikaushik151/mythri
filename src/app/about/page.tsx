import Image from "next/image";
import Link from "next/link";
import "./../about.css";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import TeamSection from "../components/TeamSection";

export default function About() {
  return (
    <>
      {/* Header Section */}
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/About_mythri.webp"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="masterpiece"
              />
              <div className="overlay2">
                <div className="text-white d-block text-center">
                  <p className="fs-1 mb-3 text-uppercase">About Us</p>
                  <p className="fs-6">
                    <Link href="./" className="text-white text-decoration-none">Home</Link> / About Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section_amenities-hero theme-bg-light aboutabout section">
        <div className="padding-global">
          <div className="container-large">
            <div className="text-center mb-5">
              <h2 className="heading-style-h2 theme-color-dark fs-2">
                WELCOME TO MYTHRI BUILDERS
              </h2>
              <p className="fs-5 theme-color-dark">
                Building experiences that blend design, detail, and distinction.

              </p>
            </div>

            <section className="section-1">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 offset-md-6">
                    <h2 className="mb-3 theme-color-dark fs-2 text-center">About Us</h2>
                    <p className="mb-2 theme-color-dark">
                      Mythri Builders is a trusted real estate developer in Bangalore, committed to building communities that thrive. We combine modern design, sustainability, and transparency to create premium residential projects that feel like home from day one.
                    </p>
                    <p className="mb-2 theme-color-dark">
                      With years of experience, our approach emphasizes quality, attention to detail, and timely delivery. Every project is designed to foster connection with the environment and with the community, ensuring a harmonious living experience.
                    </p>
                    <p className="mb-2 theme-color-dark">
                      Our goal is not just to build houses, but to craft lasting relationships with our clients through integrity, trust, and exceptional service.
                    </p>
                  </div>
                </div>
              </div>

              <Image
                alt="Luxury interior"
                width={648}
                height={338}
                className="img-fluid w-100 d-none my-4"
                src="/images/about page_mythri.webp"
                style={{ objectFit: "cover", minHeight: "350px" }}
              />
            </section>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section_amenities-hero theme-bg-dark page-about-mv section">
        <div className="padding-global">
          <div className="container-large">
            <div className="text-center mb-4">
              <h2 className="mb-3 theme-color-light">Our Mission & Vision</h2>
              <span className="theme-color-light fs-4 mb-0">Our guiding philosophy - the foundation of every structure we create.</span>
            </div>

            <div className="row my-3">
              <div className="col-md-5 d-block mx-auto px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light">
                <div className="text-center">
                  <Image src="/images/mission_mythri.webp" height={2880} width={1920} className='img-fluid mb-4' alt="masterpiece" />
                  <h3 className="fw-bold theme-color-dark">Our Mission</h3>
                  <p className="theme-color-dark">
                    To redefine modern living through spaces that blend innovation, craftsmanship, and purpose. At Mythri Builders, our mission is to design and deliver environments that inspire connection, enhance everyday experiences, and stand as timeless reflections of quality, transparency, and trust.

                  </p>
                </div>
              </div>
              <div className="col-md-5 d-block mx-auto px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light">
                <div className="text-center">
                  <Image src="/images/Vision_mythri.webp" height={2880} width={1920} className='img-fluid mb-4' alt="masterpiece" />
                  <h3 className="fw-bold theme-color-dark">Our Vision</h3>
                  <p className="theme-color-dark">
                    To be a symbol of reliability and excellence in real estate - known for creating homes that transcend functionality and become legacies of design and value. We envision a future where every Mythri creation enriches lives, empowers communities, and endures with the same integrity with which it was built.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Testimonials */}
      <TestimonialSlider />
    </>
  );
}
