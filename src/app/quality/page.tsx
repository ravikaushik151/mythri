"use client";
import React from "react";
import "../styles/QualityBlock.css"; // optional CSS file if you want to separate styles

const QualityBlock = () => {
  return (
    <section
      className="quality-block p-5"
      style={{
        backgroundImage: "url('/images/qy.webp')",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p
              style={{
                color: "#1f1d1d",
                fontSize: "30px",
                marginBottom: "20px",
              }}
            >
              Designed for Today. Built for Tomorrow.
            </p>
            <p style={{ lineHeight: "1.5" }}>Discover our ongoing, completed, and upcoming projects across Bengaluru’s most promising neighbourhoods. <br />Every Mythri community combines architectural excellence, connectivity, and contemporary living, ensuring <br />your investment grows in comfort and value.


            </p>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="container sec mb-4">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12">
            {/* First Row */}
            <div className="row text-dark">
              <div className="col-lg-6">
                <div className="countpara">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number text-center"
                      data-to="25"
                      data-speed="1500"
                    >
                      6
                    </h2>
                  </div>
                  <div className="count2">
                    <p className="count12">+</p>
                  </div>
                  <div className="count3">
                    <p>COMPLETED</p>
                    <p
                      style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                        marginTop: "-8px",
                      }}
                    >
                      PROJECTS

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="countpara">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number"
                      data-to="10"
                      data-speed="1500"
                    >
                      4
                    </h2>
                  </div>
                  <div className="count2">
                    <p className="count12">+</p>
                  </div>
                  <div className="count3">
                    <p>UPCOMING</p>
                    <p
                      style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                        marginTop: "-8px",
                      }}
                    >
                      PROJECTS

                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <hr style={{ border: "1px solid grey", width: "78%" }} />
            <br />

            {/* Second Row */}
            <div className="row text-dark">
              <div className="col-lg-6">
                <div className="countpara">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number"
                      data-to="10"
                      data-speed="1500"
                    >
                      4
                    </h2>
                  </div>
                  <div className="count2">
                    <p className="count12"></p>
                  </div>
                  <div className="count3">
                    <p>ONGOING </p>
                    <p
                      style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                        marginTop: "-8px",
                      }}
                    >
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="countpara">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number"
                      data-to="30"
                      data-speed="1500"
                    >
                      800
                    </h2>
                  </div>
                  <div className="count2">
                    <p className="count12">+</p>
                  </div>
                  <div className="count3">
                    <p>TEAM </p>
                    <p
                      style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                        marginTop: "-8px",
                      }}
                    >
                      Happy Families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityBlock;
