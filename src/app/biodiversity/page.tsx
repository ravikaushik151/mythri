'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import InnerPreloader from '../components/InnerPerloader';

export default function BiodiversityPage() {
    useEffect(() => {
        const items = document.querySelectorAll('.home-header_left-item');
        const wrapper = document.querySelector('.home-header_right-wrap');

        items.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                const yOffset = -index * 40;
                gsap.to(wrapper, {
                    y: `${yOffset}rem`,
                    duration: 0.6,
                    ease: 'power2.inOut',
                });
            });
        });

        return () => {
            items.forEach((item) => {
                item.removeEventListener('mouseenter', () => { });
            });
        };
    }, []);

    return (
        <>
            <InnerPreloader />
            <div className="main-wrapper">
                <div id="TOP" className="section_biodiversity-hero">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="biodiversity-hero-components">
                                <div className="biodiversity-hero_content-wrapper">
                                    <div className="biodiversity-hero_heading">
                                        <div className="text-color-dark-rainforest">
                                            <h1 data-animate={2} className="heading-style-h2">
                                                Walk amidst this wonderland. <br />
                                                You wont believe that its your home.
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="biodiversity-hero-grid">
                                        <div className="biodiversity-hero_img-wrap">
                                            <img
                                                src="/images/biodiversity-hero.png"
                                                loading="lazy"
                                                alt=""
                                                className="biodiversity-hero_image mol-img_parallax"
                                            />
                                        </div>
                                        <div className="biodiversity-hero_text-wrapper">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-regular">
                                                    By leaving the woodland untouched, we can enable nature to
                                                    reclaim a land that was once lost in time. In return, this
                                                    woodland rewards us with fresher, healthier air and better
                                                    quality living.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-id="70c72621-338b-5838-a15f-cf37f1254d05"
                    className="section_biodiversity-tabs"
                >
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="home-header_component-copy">
                                <div
                                    id="w-node-_70c72621-338b-5838-a15f-cf37f1254d09-ac1b3eca"
                                    className="home-header_left"
                                >
                                    <div className="home-highlights_items">
                                        <div className="home-header_left-item">
                                            <div className="home-highlights_quality-heading">
                                                <div className="heading-style-h2">Improved Air Quality</div>
                                            </div>
                                            <div className="home-highlights_arrow-wrapper">
                                                <img
                                                    src="/images/Caret.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="home-highlights_arrow"
                                                />
                                            </div>
                                        </div>
                                        <div className="home-highlights_content-hidden">
                                            <div className="home-highlights_content-wrap">
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-regular">
                                                        For decades, studies have shown that living near a dense
                                                        cover of trees leads to fresher air, better mental health
                                                        and a happier life.
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/quality-highlights.png"
                                                loading="lazy"
                                                alt=""
                                                className="home-header_mbl-image"
                                            />
                                        </div>
                                        <div className="home-highlights_border-line" />
                                    </div>
                                    <div
                                        id="w-node-_70c72621-338b-5838-a15f-cf37f1254d18-ac1b3eca"
                                        className="home-highlights_items"
                                    >
                                        <div className="home-header_left-item">
                                            <div className="home-highlights_quality-heading">
                                                <div className="heading-style-h2">Temperature Regulation</div>
                                            </div>
                                            <div className="home-highlights_arrow-wrapper">
                                                <img
                                                    src="/images/Caret.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="home-highlights_arrow"
                                                />
                                            </div>
                                        </div>
                                        <div className="home-highlights_content-hidden">
                                            <div className="home-highlights_content-wrap">
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-regular">
                                                        With the trees continuously replenishing the air, the
                                                        atmosphere will remain cooler and the air will remain
                                                        crisper.
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/highlights-temperature.png"
                                                loading="lazy"
                                                alt=""
                                                className="home-header_mbl-image"
                                            />
                                        </div>
                                        <div className="home-highlights_border-line" />
                                    </div>
                                    <div
                                        id="w-node-_70c72621-338b-5838-a15f-cf37f1254d26-ac1b3eca"
                                        className="home-highlights_items"
                                    >
                                        <div className="home-header_left-item">
                                            <div className="home-highlights_quality-heading">
                                                <div className="heading-style-h2">Biodiversity</div>
                                            </div>
                                            <div className="home-highlights_arrow-wrapper">
                                                <img
                                                    src="/images/Caret.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="home-highlights_arrow"
                                                />
                                            </div>
                                        </div>
                                        <div className="home-highlights_content-hidden">
                                            <div className="home-highlights_content-wrap">
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-regular">
                                                        A forest brings biodiversity. The forest within our gates
                                                        will soon be the venue for a wide variety of indigenous
                                                        flora and fauna, creating a thriving ecosystem that will
                                                        make our grounds and its inhabitants flourish.
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/highlights-biodiverstiy.png"
                                                loading="lazy"
                                                alt=""
                                                className="home-header_mbl-image"
                                            />
                                        </div>
                                        <div className="home-highlights_border-line" />
                                    </div>
                                    <div
                                        id="w-node-_70c72621-338b-5838-a15f-cf37f1254d34-ac1b3eca"
                                        className="home-highlights_items"
                                    >
                                        <div className="home-header_left-item">
                                            <div className="home-highlights_quality-heading">
                                                <div className="heading-style-h2">Scenic Views</div>
                                            </div>
                                            <div className="home-highlights_arrow-wrapper">
                                                <img
                                                    src="/images/Caret.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="home-highlights_arrow"
                                                />
                                            </div>
                                        </div>
                                        <div className="home-highlights_content-hidden">
                                            <div className="home-highlights_content-wrap">
                                                <div className="text-color-dark-rainforest">
                                                    <div className="home-highlights_content-wrap">
                                                        <div className="text-size-regular">
                                                            As far as the eye can see, youll see a lovely cover of
                                                            green, making for a picturesque backdrop and a serene
                                                            mental picture.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/highlights-scenic.png"
                                                loading="lazy"
                                                alt=""
                                                className="home-header_mbl-image"
                                            />
                                        </div>
                                        <div className="home-highlights_border-line" />
                                    </div>
                                    <div
                                        id="w-node-_70c72621-338b-5838-a15f-cf37f1254d43-ac1b3eca"
                                        className="home-highlights_items"
                                    >
                                        <div className="home-header_left-item">
                                            <div className="home-highlights_quality-heading">
                                                <div className="heading-style-h2">Water Conservation</div>
                                            </div>
                                            <div className="home-highlights_arrow-wrapper">
                                                <img
                                                    src="/images/Caret.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="home-highlights_arrow"
                                                />
                                            </div>
                                        </div>
                                        <div className="home-highlights_content-hidden">
                                            <div className="home-highlights_content-wrap">
                                                <div className="text-color-dark-rainforest">
                                                    <div className="home-highlights_content-wrap">
                                                        <div className="text-size-regular">
                                                            From rainwater collection pits to the pond to water
                                                            treatment pits, every drop of water will be collected
                                                            and reused.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/highlights-water.png"
                                                loading="lazy"
                                                alt=""
                                                className="home-header_mbl-image"
                                            />
                                        </div>
                                        <div className="home-highlights_border-line" />
                                    </div>
                                </div>
                                <div className="home-header_right">
                                    <div className="home-header_right-wrap">
                                        <img
                                            src="/images/quality-highlights.png"
                                            loading="lazy"
                                            alt=""
                                            className="home-header_right-wrap-image"
                                        />
                                        <img
                                            src="/images/highlights-temperature.png"
                                            loading="lazy"
                                            alt=""
                                            className="home-header_right-wrap-image"
                                        />
                                        <img
                                            src="/images/highlights-biodiverstiy.png"
                                            loading="lazy"
                                            alt=""
                                            className="home-header_right-wrap-image"
                                        />
                                        <img
                                            src="/images/highlights-scenic.png"
                                            loading="lazy"
                                            alt=""
                                            className="home-header_right-wrap-image"
                                        />
                                        <img
                                            src="/images/highlights-water.png"
                                            loading="lazy"
                                            alt=""
                                            sizes="(max-width: 991px) 100vw, 34vw"
                                            className="home-header_right-wrap-image"
                                        />
                                        <div className="home-header_right-wrap-top" />
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/images/Top-leaf.svg"
                                loading="lazy"
                                alt=""
                                className="home-highlights_right-leaf"
                            />
                            <img
                                src="/images/highlights-leaf-center.svg"
                                loading="lazy"
                                alt=""
                                className="home-highlifhts_center-leaf"
                            />
                        </div>
                    </div>
                </div>
                <section className="section_biodiversity-tree">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="biodiversity-tree_component">
                                <div className="biodiversity-hero_tree-left">
                                    <div
                                        className="biodiversity-hero_lottie"
                                        data-w-id="e671583f-ca72-5156-bef4-22eca57068de"
                                        data-animation-type="lottie"
                                        data-src="documents/tree-1.json"
                                        data-loop={0}
                                        data-direction={1}
                                        data-autoplay={1}
                                        data-is-ix2-target={0}
                                        data-renderer="svg"
                                        data-default-duration={7}
                                        data-duration={0}
                                    />
                                </div>
                                <div className="biodiversity-tree_content">
                                    <div className="biodiversity-hero_heading-wrapper">
                                        <div className="text-color-accent">
                                            <h2 className="display-v2">1000+</h2>
                                        </div>
                                        <div className="biodiversity-hero_subtext">
                                            <div className="text-color-dark-rainforest">
                                                <h2 className="heading-style-h2">Trees</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="biodiversity-trees_grid-wrapper">
                                        <div className="biodiversity-trees_left-wrapper">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-large">
                                                    And 15,000 sq. ft. of Miyawaki Forest
                                                </div>
                                            </div>
                                        </div>
                                        <div className="biodiversity-trees_right-wrapper">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-regular">
                                                    The Miyawaki is symbolic of the role trees play in our
                                                    lives. Their importance stems far beyond beauty. Their
                                                    enormous existence in your environment revitalises your
                                                    life, improves air quality, and builds a rich ecosystem that
                                                    replenishes nature.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="biodiversity-hero_tree-right"
                                    data-w-id="ad642444-0b75-7799-52b7-c7572b867291"
                                    data-animation-type="lottie"
                                    data-src="documents/tree-2.json"
                                    data-loop={0}
                                    data-direction={1}
                                    data-autoplay={1}
                                    data-is-ix2-target={0}
                                    data-renderer="svg"
                                    data-default-duration={7}
                                    data-duration={0}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section_biodiversity-benefits">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="biodiversity-benefits_components">
                                <div
                                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                                    className="biodiversity-benefits_header-wrap"
                                >
                                    <h2 data-animate={1} className="heading-style-h2">
                                        Benefits of living at Ims
                                    </h2>
                                </div>
                                <div
                                    id="w-node-e51eebe9-017b-be74-9093-7c6dbea5d495-ac1b3eca"
                                    className="biodiversity-benefits_items"
                                >
                                    <div className="biodiversity-benefits_image-wrapper">
                                        <div className="biodiversity-benefits_image w-embed">
                                            <svg
                                                width={50}
                                                height={50}
                                                viewBox="0 0 50 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="air"
                                                    d="M30 1H20M28 5H22M30 49H20M28 45H22M27 5V45M23 5V31.5M23 35.5V41M31 19.5H46.5C47.163 19.5 47.799 19.237 48.268 18.768C48.737 18.299 49 17.663 49 17C49 15.619 47.881 14.5 46.5 14.5C45.692 14.5 45 14.5 45 14.5M31 30.5H46.5C47.163 30.5 47.799 30.763 48.268 31.232C48.737 31.701 49 32.337 49 33C49 34.381 47.881 35.5 46.5 35.5C45.692 35.5 45 35.5 45 35.5M29.846 10.901H38.3C39.239 10.901 40 10.14 40 9.201C40 8.262 39.239 7.5 38.3 7.5C38.119 7.5 38 7.5 38 7.5M29.846 39.099H38.3C39.239 39.099 40 39.86 40 40.799C40 41.738 39.239 42.5 38.3 42.5C38.119 42.5 38 42.5 38 42.5M5 12C5 13.1046 4.10457 14 3 14C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10C4.10457 10 5 10.8954 5 12ZM19.423 9.401C19.423 10.5056 18.5276 11.401 17.423 11.401C16.3184 11.401 15.423 10.5056 15.423 9.401C15.423 8.29643 16.3184 7.401 17.423 7.401C18.5276 7.401 19.423 8.29643 19.423 9.401ZM15 28.074C15 29.1786 14.1046 30.074 13 30.074C11.8954 30.074 11 29.1786 11 28.074C11 26.9694 11.8954 26.074 13 26.074C14.1046 26.074 15 26.9694 15 28.074ZM8 41.099C8 42.2036 7.10457 43.099 6 43.099C4.89543 43.099 4 42.2036 4 41.099C4 39.9944 4.89543 39.099 6 39.099C7.10457 39.099 8 39.9944 8 41.099Z"
                                                    stroke="#1E291D"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="biodiversity-benefits_text-wrapper">
                                        <div className="text-color-dark-rainforest">
                                            <h5 className="heading-style-h5">A Breath of Fresh Air</h5>
                                        </div>
                                        <div className="biodiversity-benefits_text">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-small-2">
                                                    An abundance of trees helps absorb carbon dioxide from the
                                                    air, purifying the atmosphere.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_91ca4f9c-c42a-1f93-46d6-06f3b53f6ede-ac1b3eca"
                                    className="biodiversity-benefits_items"
                                >
                                    <div className="biodiversity-benefits_image-wrapper">
                                        <div className="biodiversity-benefits_image w-embed">
                                            <svg
                                                width={50}
                                                height={41}
                                                viewBox="0 0 50 41"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="light"
                                                    d="M1 40H7.74296C8.53905 40 9.30202 39.6909 9.86523 39.142C10.4275 38.5922 10.7442 37.8474 10.7442 37.0702C10.7442 33.7067 10.7442 28.2201 10.7442 24.8566C10.7442 24.0794 10.4275 23.3346 9.86523 22.7848C9.30202 22.236 8.53905 21.9268 7.74296 21.9268C4.87915 21.9268 1 21.9268 1 21.9268M10.7442 25.7317C10.7442 25.7317 12.2292 25.3455 13.8603 24.9203C16.5926 24.2098 19.4798 24.3115 22.1526 25.2142C24.5682 26.0313 27.4807 27.0149 29.2123 27.5999C30.1867 27.93 31.2478 27.9167 32.2135 27.5628C33.5455 27.0748 35.4924 26.3624 36.8682 25.8592C37.8329 25.5063 38.9194 25.8478 39.4904 26.6839L39.4914 26.6848C39.7428 27.0539 39.8266 27.5076 39.7223 27.9385C39.618 28.3694 39.3355 28.7395 38.9408 28.9592C36.9306 30.0807 33.6429 31.9146 33.6429 31.9146M15.6162 37.9539C15.6162 37.9539 24.6364 38.5684 29.1645 38.8766C30.7957 38.9879 32.4122 38.518 33.716 37.5544C37.3925 34.8396 45.0845 29.157 48.2806 26.7961C49.0767 26.2073 49.2365 25.101 48.6372 24.321L48.6353 24.3191C48.4112 24.0262 48.0195 23.9073 47.6638 24.0233C45.6916 24.6644 39.4894 26.6829 39.4894 26.6829M14.6418 28.5854C14.6418 28.5854 18.2647 26.9759 21.4627 28.5854M25.3604 20.0244L31.2069 20.9756M27.3092 22.7192L29.2581 23.0369M25.3604 16.3565C25.3604 14.9097 24.7485 13.5285 23.6698 12.5373C22.3085 11.3331 21.4627 9.59141 21.4627 7.65854C21.4627 3.98398 24.5195 1 28.2836 1C32.0478 1 35.1045 3.98398 35.1045 7.65854C35.1045 9.56288 34.2841 11.2808 32.9696 12.4955C31.8529 13.5447 31.2225 14.9924 31.2225 16.5049C31.2069 16.5058 31.2069 16.5077 31.2069 16.5077C31.2069 16.9091 31.0256 17.2915 30.7109 17.5512C30.3971 17.8109 29.982 17.9222 29.5757 17.8566C28.4707 17.6768 27.0578 17.4466 26.1808 17.3039C25.7073 17.2269 25.3604 16.8273 25.3604 16.3584V16.3565Z"
                                                    stroke="#222A33"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="biodiversity-benefits_text-wrapper">
                                        <div className="text-color-dark-rainforest">
                                            <h5 className="heading-style-h5">Shine a Light</h5>
                                        </div>
                                        <div className="biodiversity-benefits_text-two">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-small-2">
                                                    Alternate street lights will be smart poles that run on
                                                    solar power and reduce energy consumption.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_5088ab87-c65b-e4c4-76ce-e39d7e8521f9-ac1b3eca"
                                    className="biodiversity-benefits_items"
                                >
                                    <div className="biodiversity-benefits_image-wrapper">
                                        <div className="biodiversity-benefits_image w-embed">
                                            <svg
                                                width={50}
                                                height={43}
                                                viewBox="0 0 50 43"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="stream"
                                                    d="M29.474 4C32.414 8.273 37.086 17.166 37.086 20.414C37.086 27.084 31.67 32.5 25 32.5C18.33 32.5 12.914 27.084 12.914 20.414C12.914 15.371 19.822 6.111 23.193 1.893C23.623 1.33 24.291 1 25 1M33.5 21.957C33.5 25.292 30.792 28 27.457 28M41 36C41 37.104 33.831 38 25 38C16.169 38 9 37.104 9 36M39.395 33C45.226 33.913 49 35.365 49 37C49 39.76 38.246 42 25 42C11.754 42 1 39.76 1 37C1 35.365 4.774 33.913 10.605 33"
                                                    stroke="#222A33"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="biodiversity-benefits_text-wrapper">
                                        <div className="text-color-dark-rainforest">
                                            <h5 className="heading-style-h5">A Steady Stream of Life</h5>
                                        </div>
                                        <div className="biodiversity-benefits_text-one">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-small-2">
                                                    Water collection and treatment enable the reuse of water to
                                                    nurture the soil and the trees.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_29e40762-160f-2c2d-333d-5c958b683456-ac1b3eca"
                                    className="biodiversity-benefits_items-copy"
                                >
                                    <div className="biodiversity-benefits_image-wrapper">
                                        <div className="biodiversity-benefits_image w-embed">
                                            <svg
                                                width={44}
                                                height={44}
                                                viewBox="0 0 44 44"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="water"
                                                    d="M25.3283 15.426C26.8991 17.7063 28.4288 20.3727 28.4288 22.1068C28.4288 25.666 25.5368 28.5565 21.9737 28.5565C18.4106 28.5565 15.5186 25.666 15.5186 22.1068C15.5186 19.415 19.2079 14.4736 21.0083 12.2222C21.2387 11.9219 21.5952 11.746 21.9737 11.746M25.2012 22.2679C25.2012 24.0475 23.7548 25.4927 21.9737 25.4927M21.9737 1.85786C33.0949 1.85786 42.1239 10.8794 42.1239 21.9912L38.6195 18.4898M21.9737 42.1246C10.8526 42.1246 1.82353 33.1031 1.82353 21.9912L5.32791 25.4927M36.8673 40.3739C36.8673 40.3739 35.8011 40.05 35.1151 38.6232M36.7955 30.007C37.0242 29.6988 37.386 29.5168 37.7697 29.5168C38.1534 29.5168 38.5153 29.6988 38.7439 30.007C40.2569 31.9231 43 35.6855 43 37.7741C43 40.6584 40.6564 43 37.7697 43C34.883 43 32.5394 40.6584 32.5394 37.7741C32.5394 35.6855 35.2825 31.9231 36.7955 30.007ZM5.25607 1.4902C5.48473 1.18208 5.84656 1 6.23029 1C6.61402 1 6.97584 1.18208 7.20451 1.4902C8.71752 3.40638 11.4606 7.16869 11.4606 9.25731C11.4606 12.1416 9.11702 14.4832 6.23029 14.4832C3.34355 14.4832 1 12.1416 1 9.25731C1 7.16869 3.74305 3.40638 5.25607 1.4902Z"
                                                    stroke="#222A33"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="biodiversity-benefits_text-wrapper">
                                        <div className="text-color-dark-rainforest">
                                            <h5 className="heading-style-h5">The Water Recycle</h5>
                                        </div>
                                        <div className="biodiversity-benefits_text-three">
                                            <div className="text-color-dark-rainforest">
                                                <div className="text-size-small-2">
                                                    The water you consume gets treated onsite and is reused to
                                                    irrigate the landscapes.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section_biodiversity-highlights">
                    <div className="marquee">
                        <div className="marquee-content scroll">
                            <img
                                src="/images/Tennis.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/badmiton.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/dog.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/biodiversity-highlights-4.png"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/biodiversity-highlights-5.png"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/biodiversity-highlights-6.png"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/jogging.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                        </div>
                        <div className="marquee-content scroll">
                            <img
                                src="/images/Tennis.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/badmiton.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/dog.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/biodiversity-highlights-4.png"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/biodiversity-highlights-5.png"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/biodiversity-highlights-6.png"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                            <img
                                src="/images/jogging.jpg"
                                loading="lazy"
                                alt=""
                                className="marquee-image"
                            />
                        </div>
                    </div>
                </section>
                <div className="section_biodiversity-experience">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="biodiversity-experience_components">
                                <div
                                    id="w-node-_0e242a0f-0c14-b773-8013-15c3f84a8f1a-ac1b3eca"
                                    className="biodiversity-experience_heading-wrapper"
                                >
                                    <div className="text-color-dark-rainforest">
                                        <h2 data-animate={1} className="heading-style-h2">
                                            Walk into a whole universe of experiences
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    id="w-node-d85b0454-d162-7c52-868d-7862dae47fc2-ac1b3eca"
                                    className="biodiversity-experience_text-wrapper"
                                >
                                    <div className="text-color-green">
                                        <div className="text-size-regular">
                                            Life here is a series of opportunities to live a vibrant life,
                                            full of meaningful sights, sounds and pursuits. Physical
                                            wellbeing. Crystal clear clarity. Emotional richness. Ims is
                                            built to show you just how much you can get from the earth.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-d0652c2b-b21b-1534-5aec-fe2f6fe24122-ac1b3eca"
                                    className="button-group"
                                >
                                    <a href="amenities" className="button w-inline-block">
                                        <div className="button_text dark">View all amenities</div>
                                        <div className="button-arrow_wrapper white" />
                                        <div className="button-arrow_image w-embed">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 12.0737V11.0161L14.9117 11.0295L11.6453 7.77644L12.3949 7L16.9599 11.5382L12.4083 16.1031L11.6587 15.3267L14.9251 12.0737H7Z"
                                                    fill="#738e62"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
