import Image from "next/image";
import Link from "next/link";
import "./../project.css";
import TestimonialSlider from "../components/Home/TestimonialSlider";

export default function Project() {
  return (
    <>
      {/* Header Section */}
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/project-header.png"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="Projects Banner"
              />
              <div className="overlay2">
                <div className="text-white d-block">
                  <p className="text-center d-block fs-1 mb-3 text-uppercase">
                    Our Projects
                  </p>
                  <p className="text-center d-block fs-6">
                    <Link className="text-white text-decoration-none" href={"./"}>
                      Home
                    </Link>{" "}
                    / Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section-1 aboutproject" id="TOP">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-5">
              <div className="mb-md-0 text-center">
                <h2 className="mb-3 theme-color-dark">MYTHRI BUILDERS PROJECTS</h2>
                <p className="fs-4 theme-color-dark">
                 Shaping modern spaces that inspire confidence and stand the test of time.

                </p>
                <p className="mt-4 theme-color-dark">
                  <strong>
                    Every development by Mythri Builders represents a promise - of quality, on-time delivery, and lasting satisfaction.

                  </strong>
                  <br />
                  From premium residences to thoughtfully curated communities, our projects redefine modern living through sustainable architecture and meticulous craftsmanship. As one of the most trusted Real Estate Developers in Sarjapur, Mythri Builders offers exceptional Flats for Sale in Sarjapur Road, designed for discerning homeowners who value comfort, connectivity, and long-term value. Each home is a celebration of thoughtful design and enduring trust - built to inspire, built to last.

                </p>

                <div className="text-center">
                  <Link href="/microsite" className="btn theme-bg-dark text-light mt-4 mb-md-5">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          alt="Luxury interior"
          width={648}
          height={338}
          className="img-fluid w-100 mt-3 d-md-none"
          src="/images/admist-bg.png"
          style={{ objectFit: "cover", minHeight: "350px" }}
        />
      </section>

      {/* Add Testimonial Slider if needed */}
      {/* <TestimonialSlider /> */}
    </>
  );
}
