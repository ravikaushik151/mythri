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

import { useMenu } from "./context/MenuContext";

export default function Home() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { menuOpen } = useMenu();

  useEffect(() => {
    // ----------------- LENIS SMOOTH SCROLL -----------------
    let lenis;
    let rafId;

    if (typeof window !== "undefined" && window.Lenis) {
      lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        direction: "vertical",
        gestureDirection: "vertical",
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // ----------------- HERO VIDEO LAZY LOAD -----------------
    const enableVideo = () => setShouldLoadVideo(true);

    const userEvents = ["scroll", "mousemove", "touchstart", "keydown", "click"];
    userEvents.forEach((evt) =>
      window.addEventListener(evt, enableVideo, { once: true })
    );

    // ----------------- CLEANUP -----------------
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();

      userEvents.forEach((evt) =>
        window.removeEventListener(evt, enableVideo)
      );
    };
  }, []);

  return (
    <>
      <main className="main-wrapper">
        {/* ================= HERO SECTION ================= */}
        <div className="overflow-hidden position-relative">
          <div
            className="position-relative text-white d-flex align-items-md-center align-items-end"
            style={{ height: "100vh" }}
          >
            {/* ---------- DESKTOP HERO ---------- */}
            <div className="d-none d-md-block position-absolute top-0 start-0 w-100 h-100">
              {shouldLoadVideo ? (
                <video
                  autoPlay
                  loop                 // ✅ infinite loop
                  muted
                  playsInline
                  preload="none"
                  className="w-100 h-100 object-cover"
                  poster="/images/Mythri-Logo-Mobile-Poster.webp"
                >
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

            {/* ---------- MOBILE HERO ---------- */}
            <div className="d-block d-md-none position-absolute top-0 start-0 w-100 h-100">
              {shouldLoadVideo ? (
                <video
                  autoPlay
                  loop                 // ✅ infinite loop
                  muted
                  playsInline
                  preload="none"
                  className="w-100 h-100 object-cover"
                  poster="/images/Mythri-Logo-Mobile-Poster.webp"
                >
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

            {/* Overlay (optional) */}
            <div className="position-absolute top-0 start-0 w-100 h-100" />

            {/* ---------- SCROLL DOWN BUTTON ---------- */}
            <a
              href="#about"
              className={`scroll-down-container ${menuOpen ? "invisible" : ""}`}
              aria-label="Scroll to About Section"
            >
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </a>

          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div id="scroll-more">
          <section className="section-remove px-md-5 theme-bg-light homehome" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-7 py-lg-5">
                  <h1 className="mb-0 theme-color-dark">
                    The Art of Living, Perfected Through Architecture.
                  </h1>

                  <p className="mt-4 theme-color-dark text-justify">
                    At Mythri Builders, every home begins with a clear vision to create spaces where design meets purpose and trust meets craftsmanship. Since 2019, Mythri Builders Bangalore has been shaping the city’s skyline with affordable luxury, sustainable design, and architectural precision.
                    <br /><br />
                    With 1000+ apartments delivered across 10+ acres, we are recognised among the Top Builders in Bangalore for transparency, punctuality, and a people-first approach.
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
              </div>
            </div>
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
