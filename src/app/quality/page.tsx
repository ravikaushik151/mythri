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
     <div className="d-none d-md-block">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 text-justify">
        <p
          style={{
            color: "#1f1d1d",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          Designed for Today. Built for Tomorrow.
        </p>

        <p>
        Discover our ongoing, completed, and upcoming projects across Bengaluru&rsquo;s most promising <br />neighbourhoods. Each project reflects thoughtful planning, responsible design, and <br />the reliability that defines Mythri Builders Bangalore.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="d-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-12 mobile-text-block">
        <h5>Designed for Today.</h5>
        <h5>Built for Tomorrow.</h5>

        <p>
          Discover our ongoing, completed, and upcoming projects across Bengaluru’s
          most promising neighbourhoods. Each project reflects thoughtful planning,
          responsible design, and the reliability that defines Mythri Builders Bangalore.
        </p>
      </div>
    </div>
  </div>
</div>


      <br />
      <br />
      <div className="d-none d-md-block">

        <div className="container sec mb-4">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 card-aligment">
              {/* First Row */}
              <div className="row text-dark">
                <div className="col-lg-6 col-12">
                  <div className="countpara">
                    <div className="counter">
                      <h2
                        className="timer count-title count-number text-center"
                        data-to="25"
                        data-speed="1500"
                      >
                        5
                      </h2>
                    </div>
                    <div className="count2">
                      <p className="count12">+</p>
                    </div>
                    <div className="count3">
                      <p style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                      }}>COMPLETED</p>
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

                <div className="col-lg-6 col-12">
                  <div className="countpara">
                    <div className="counter">
                      <h2
                        className="timer count-title count-number"
                        data-to="10"
                        data-speed="1500"
                      >
                        8
                      </h2>
                    </div>
                    <div className="count2">
                      <p className="count12">+</p>
                    </div>
                    <div className="count3">
                      <p style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                      }}>UPCOMING</p>
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
              <div className="row text-dark ">
                <div className="col-lg-6 col-12">
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
                      <p style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                      }}>ONGOING </p>
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

                <div className="col-lg-6 col-12">
                  <div className="countpara">
                    <div className="counter">
                      <h2
                        className="timer count-title count-number"
                        data-to="30"
                        data-speed="1500"
                      >
                        1000
                      </h2>
                    </div>
                    <div className="count2">
                      <p className="count12">+</p>
                    </div>
                    <div className="count3">
                      <p style={{
                        fontSize: "15px",
                        letterSpacing: "2px",
                      }}>HAPPY </p>
                      <p
                        style={{
                          fontSize: "15px",
                          letterSpacing: "2px",
                          marginTop: "-8px",
                        }}
                      >
                        FAMILIES
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div className="container py-4 mobile-stats">

          <div className="stat-item">
            <div className="stat-number">5<span>+</span></div>

            <div className="stat-text">Completed Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">8<span>+</span></div>

            <div className="stat-text">Upcoming Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">4</div>

            <div className="stat-text">Ongoing Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">1000<span>+</span></div>

            <div className="stat-text">Happy Families</div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default QualityBlock;
