"use client";

import { useEffect, useState } from "react";
import "./homepage.css";
import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import LatestBlogs from "./components/LatestBlogs";
import CoreValuesSlider from "./components/CoreValuesSlider";
import ProjectsSection from "./components/ProjectsSection";
import QualityBlock from "./quality/page";

export default function Home() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // ----------------- LENIS SMOOTH SCROLL -----------------
    let lenis;
    let rafId;

    if (typeof window !== "undefined" && window.Lenis) {
      lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const getCurrentPath = () => window.location.pathname;
      const setLerp = () => {
        lenis.options.lerp =
          getCurrentPath() === "/being-here-at-studio" ? 0.1 : undefined;
      };
      setTimeout(setLerp, 100);

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // ----------------- HERO VIDEO LAZY LOAD -----------------
    const enableVideo = () => {
      setShouldLoadVideo(true);
    };

    const userEvents = ["scroll", "mousemove", "touchstart", "keydown", "click"];
    userEvents.forEach((evt) =>
      window.addEventListener(evt, enableVideo, { once: true })
    );

    // ----------------- POPUP / FORM HANDLING -----------------
    const form = document.getElementById(
      "wf-form-Melodies-of-Life-Contact-Form"
    );
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");
    const sourceInput = document.getElementById("SourceURL");

    if (sourceInput) {
      sourceInput.value = window.location.href;
    }

    const handleTriggerClick = (e) => {
      if (!popup) return;
      e.preventDefault();
      popup.style.display = "flex";
    };

    if (trigger && popup) {
      trigger.addEventListener("click", handleTriggerClick);
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };

    const handleSubmit = (e) => {
      if (!form) return;
      e.preventDefault();

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      })
        .then((res) => {
          if (res.ok) {
            closePopup();
            document.getElementById("brochure-download-link")?.click();
            if (thankYou) thankYou.style.display = "flex";
          } else {
            alert(
              "There was an issue with your submission. Please try again."
            );
          }
        })
        .catch((err) => console.error("Submission error:", err));
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    // ----------------- CLEANUP -----------------
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();

      userEvents.forEach((evt) =>
        window.removeEventListener(evt, enableVideo)
      );

      if (trigger) {
        trigger.removeEventListener("click", handleTriggerClick);
      }
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <>
      <main className="main-wrapper">
        {/* HERO INTRO SECTION */}
        <div className="overflow-clip">
          <div className="overflow-hidden position-relative">
            <div
              className="position-relative text-white d-flex align-items-md-center align-items-end"
              style={{ height: "100vh" }}
            >
              {/* Desktop Hero: poster first, video only after interaction */}
              <div className="d-none d-md-block position-absolute top-0 start-0 w-100 h-100">
                {shouldLoadVideo ? (
                  <video
                    autoPlay
                    loop={false}
                    muted
                    playsInline
                    preload="none"
                    className="w-100 h-100 object-cover"
                    poster="/images/Mythri-Logo-Mobile-Poster.webp" // हल्की static image
                    onEnded={() => {
                      const nextSection =
                        document.getElementById("next-section") ||
                        document.getElementById("scroll-more");
                      if (nextSection) {
                        nextSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {/* NOTE: इस MP4 को compress करो (720p / low bitrate) */}
                    <source
                      src="/images/Mythri Logo_Cideo.mp4"
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    src="/images/Mythri-Logo-Mobile-Poster.webp"
                    alt="Mythri Builders"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
              </div>

              {/* Mobile Hero */}
              <div className="d-block d-md-none position-absolute top-0 start-0 w-100 h-100">
                {shouldLoadVideo ? (
                  <video
                    autoPlay
                    loop={false}
                    muted
                    playsInline
                    preload="none"
                    className="w-100 h-100 object-cover"
                    poster="/images/Mythri-Logo-Mobile-Poster.webp"
                    onEnded={() => {
                      const nextSection = document.getElementById("scroll-more");
                      if (nextSection) {
                        nextSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {/* NOTE: इस MP4 को भी compress करो (480p / low bitrate) */}
                    <source
                      src="/images/Mythri Logo-Mobile Version.mp4"
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    src="/images/Mythri-Logo-Mobile-Poster.webp"
                    alt="Mythri Builders"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
              </div>

              {/* OPTIONAL overlay (अगर dark करना हो तो rgba लगा सकते हो) */}
              <div className="position-absolute top-0 start-0 w-100 h-100" />

              {/* Foreground Content (अभी hidden रखा है) */}
              <div className="container position-relative z-2 d-none">
                <div className="d-flex flex-column my-md-0 my-5 py-md-0 py-4 align-items-center">
                  <h1 className="display-4 fw-bold mb-3 w-100 text-center bannertext">
                    Crafting Landmarks, Building Trust
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AFTER HERO */}
        <div id="scroll-more">
          <section className="section-remove px-md-5 theme-bg-light homehome">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-7 py-lg-5">
                  <h2 className="mb-0 theme-color-dark">
                    The Art of Living, Perfected Through Architecture.
                  </h2>
                  <p className="mt-4 theme-color-dark text-justify">
                    At Mythri Builders, every home begins with a clear vision -
                    to create spaces where design meets purpose and trust meets
                    craftsmanship. Since 2019, Mythri Builders Bangalore has
                    been shaping the city’s skyline with developments that bring
                    together affordable luxury, sustainable design, and
                    architectural precision.
                    <br />
                    <br />
                    With 800+ apartments delivered across 10+ acres, we are
                    recognised among the Top Builders in Bangalore, celebrated
                    for transparency, punctuality, and a people-first approach.
                    For us, a home isn’t just built - it’s carefully crafted for
                    life.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/about"
                      className="btn theme-bg-dark text-white border mt-4"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 d-md-none">
                  <div>{/* mobile image/graphic (optional) */}</div>
                </div>
              </div>
            </div>

            {/* यह image hero के बाद है, इसलिए priority हटाई गई है */}
            <Image
              alt="Project"
              src="/images/home-about.png" // इसे compress / .webp में convert करना ज़रूरी है
              width={1000}
              height={750}
              className="img-fluid w-100 d-none p-0 mb-0 mt-3"
              sizes="(min-width: 992px) 50vw, 100vw"
            // no priority => Next.js इसे lazy-load करेगा
            />
          </section>

          <ProjectsSection />
          <CoreValuesSlider />
          <QualityBlock />
          <TestimonialSlider />
          <LatestBlogs />
        </div>
      </main>
    </>
  );
}