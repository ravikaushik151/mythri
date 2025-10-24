'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import InnerPreloader from '../components/InnerPerloader';

gsap.registerPlugin(ScrollTrigger);


export default function AmenitiesPage() {
    const splitRef = useRef(null);
    const typeSplitInstance = useRef(null);

    useEffect(() => {
        const runSplit = () => {
            typeSplitInstance.current = new SplitType(splitRef.current, {
                types: ['lines', 'words'],
            });

            document.querySelectorAll('.line').forEach((line) => {
                const mask = document.createElement('div');
                mask.classList.add('line-mask');
                line.appendChild(mask);
            });

            createAnimation();
        };

        const createAnimation = () => {
            document.querySelectorAll('.line').forEach((line) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: line,
                        start: 'top center',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                });
                tl.to(line.querySelector('.line-mask'), {
                    width: '0%',
                    duration: 3,
                    ease: 'cubic-bezier(.3, 0, .7, 1)',
                });
            });
        };

        runSplit();

        let windowWidth = window.innerWidth;
        const onResize = () => {
            if (window.innerWidth !== windowWidth) {
                windowWidth = window.innerWidth;
                typeSplitInstance.current.revert();
                runSplit();
            }
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            typeSplitInstance.current?.revert();
        };
    }, []);


    return (
        <>
            <InnerPreloader />
            <div className="main-wrapper">
                <section id="TOP" className="section_amenities-hero">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="amenities-hero_components">
                                <div className="amenities-hero_content-wrapper">
                                    <div className="amenities-hero_heading-wrapper">
                                        <div className="text-color-dark-rainforest">
                                            <h1 data-animate={2} className="heading-style-h2">
                                                Our amenities will foster a greater sense of belonging
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="amenities-hero_text-head">
                                        <div className="text-color-green">
                                            <div className="text-size-regular">
                                                Right from the cobblestones under your feet to the flowers
                                                around you, every inch of Ims has been planned to immerse you
                                                in a sea of comfort.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-hero_image-grid">
                                    <a
                                        href="#The-clubhouse"
                                        id="w-node-c2583b6b-0f11-cfc9-1a0c-7c8cda0b9f31-ac1b3ec9"
                                        className="amenities-hero_wrapper w-inline-block"
                                    >
                                        <div className="amenities-hero_image-wrapper">
                                            <img
                                                src="/images/Amenities--The-Clubhouze.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="amenities-hero_image mol-img_parallax"
                                            />
                                        </div>
                                        <div className="amenities-hero_info">
                                            <div className="amenities-hero_text-wrapper">
                                                <div className="text-color-offwhite">
                                                    <div className="text-size-medium">The Clubhouse</div>
                                                </div>
                                                <div className="amenities-hero_text">
                                                    <div className="text-color-silvermillow">
                                                        <div className="text-size-small-2">
                                                            A whole world in itself
                                                        </div>
                                                    </div>
                                                    <div className="amenities-hero_arrow-wrapper">
                                                        <img
                                                            src="/images/amenities-arrow.svg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="amenities-hero_arrow-imge"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="#btb"
                                        id="w-node-_4884a04d-a21a-9b34-99ad-6c3327acc06f-ac1b3ec9"
                                        className="amenities-hero_wrapper w-inline-block"
                                    >
                                        <div className="amenities-hero_image-wrapper">
                                            <img
                                                src="/images/Outdoor-Amenities.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="amenities-hero_image mol-img_parallax"
                                            />
                                        </div>
                                        <div className="amenities-hero_info">
                                            <div className="amenities-hero_text-wrapper">
                                                <div className="text-color-offwhite">
                                                    <div className="text-size-medium">Outdoor Amenities</div>
                                                </div>
                                                <div className="amenities-hero_text">
                                                    <div className="text-color-silvermillow">
                                                        <div className="text-size-small-2">
                                                            Amenities you want, need, and love
                                                        </div>
                                                    </div>
                                                    <div className="amenities-hero_arrow-wrapper">
                                                        <img
                                                            src="/images/amenities-arrow.svg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="amenities-hero_arrow-imge"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="#wide-roads"
                                        id="w-node-_6ab2384e-ad41-e75d-1234-0e96661a2588-ac1b3ec9"
                                        className="amenities-hero_wrapper w-inline-block"
                                    >
                                        <div className="amenities-hero_image-wrapper">
                                            <img
                                                src="/images/Wide-Roads.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="amenities-hero_image mol-img_parallax"
                                            />
                                        </div>
                                        <div className="amenities-hero_info">
                                            <div className="amenities-hero_text-wrapper">
                                                <div className="text-color-offwhite">
                                                    <div className="text-size-medium">Wide Roads</div>
                                                </div>
                                                <div className="amenities-hero_text">
                                                    <div className="text-color-silvermillow">
                                                        <div className="text-size-small-2">
                                                            Bordered by green, connecting it all
                                                        </div>
                                                    </div>
                                                    <div className="amenities-hero_arrow-wrapper">
                                                        <img
                                                            src="/images/amenities-arrow.svg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="amenities-hero_arrow-imge"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="#The-Utility"
                                        className="amenities-hero_wrapper w-inline-block"
                                    >
                                        <div className="amenities-hero_image-wrapper">
                                            <img
                                                src="/images/The-Utilities.jpg"
                                                loading="lazy"
                                                alt=""
                                                className="amenities-hero_image mol-img_parallax"
                                            />
                                        </div>
                                        <div className="amenities-hero_info">
                                            <div className="amenities-hero_text-wrapper">
                                                <div className="text-color-offwhite">
                                                    <div className="text-size-medium">The Utilities</div>
                                                </div>
                                                <div className="amenities-hero_text">
                                                    <div className="text-color-silvermillow">
                                                        <div className="text-size-small-2">
                                                            Silently running to let you thrive
                                                        </div>
                                                    </div>
                                                    <div className="amenities-hero_arrow-wrapper">
                                                        <img
                                                            src="/images/amenities-arrow.svg"
                                                            loading="lazy"
                                                            alt=""
                                                            className="amenities-hero_arrow-imge"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <section id="The-clubhouse" className="section_amenities-clubhouse">
                        <div className="padding-global">
                            <div className="container-large">
                                <div className="amenities-clubhouse_components">
                                    <div className="amenities-clubhouse_content-wrapper">
                                        <div className="amenities-clubhouse_heading-wrapper">
                                            <h2 data-animate={1} className="heading-style-h2">
                                                The Clubhouse
                                            </h2>
                                        </div>
                                        <div className="amenities-clubhouse_text-wrapper">
                                            <div>
                                                <div className="text-size-regular">
                                                    The Clubhouse at Ims offers the astute pleasure-seeker a
                                                    plethora of immersive luxury experiences. This sprawling
                                                    structure is conceived to give you every aspect of what a
                                                    luxurious lifestyle means.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="amenities-clubhouse_bg-image-wrapper">
                            <img
                                src="/images/Amenities-clubhouse-min.jpg"
                                loading="lazy"
                                width="Auto"
                                alt=""
                                className="amenities-clubhouse_bg-image mol-img_parallax"
                            />
                        </div>
                    </section>
                    <section className="section_amenities-benefits">
                        <div className="padding-global">
                            <div className="container-large">
                                <div className="amenities-benefits_components">
                                    <div
                                        id="w-node-_35648b6f-5c73-6fe1-7408-4561de1fe01a-ac1b3ec9"
                                        className="amenities-benefits_content-wrapper"
                                    >
                                        <h4 className="display-v4 split-lines" ref={splitRef}>
                                            Lounge
                                            <br />
                                            Party Hall &amp; Pantry
                                            <br />
                                            Table Tennis
                                            <br />
                                            Billiards Room
                                            <br />
                                            Library &amp; Cafe
                                            <br />
                                            Swimming Pool &amp; Deck
                                            <br />
                                            Badminton Court
                                            <br />
                                            Gymnasium
                                            <br />
                                            Yoga Space
                                            <br />
                                            Board Games
                                            <br />
                                            Steam &amp; Sauna Room
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_amenities-view">
                        <img
                            src="/images/Amenities-Club-Rare-min.jpg"
                            loading="lazy"
                            alt=""
                            className="amenities-view_bg-image mol-img_parallax"
                        />
                        <div className="padding-global">
                            <div className="container-large">
                                <div className="amenities-view_components">
                                    <div className="amenities-view_text">
                                        <div className="text-size-regular">
                                            A view of the clubhouse and its surrounding areas.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="amenities-view_bg-image-overlay" />
                    </section>
                </div>
                <section id="btb" className="section_amenities-btb">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="amenities-btb_component">
                                <div className="amenities-btb_features-wrap amenities-btb_features-wrap01">
                                    <div className="amenities-btb_feature amenities-btb_amphitheater">
                                        <div className="amenities-btb_feature-img-wrap">
                                            <img
                                                src="/images/Amphitheater.webp"
                                                loading="lazy"
                                                width={394}
                                                sizes="(max-width: 479px) 56vw, (max-width: 991px) 45vw, 37vw"
                                                alt=""
                                                className="amenities-btb_feature-img mol-img_parallax"
                                            />
                                        </div>
                                        <div className="text-size-regular text-style-allcaps">
                                            AMPHITHEATRE
                                        </div>
                                    </div>
                                    <div className="amenities-btb_feature amenities-btb_kids-play">
                                        <div className="amenities-btb_feature-img-wrap">
                                            <img
                                                src="/images/Kids-Play-Area.webp"
                                                loading="lazy"
                                                width={394}
                                                sizes="(max-width: 479px) 56vw, (max-width: 991px) 45vw, 37vw"
                                                alt=""
                                                className="amenities-btb_feature-img mol-img_parallax"
                                            />
                                        </div>
                                        <div className="text-size-regular text-style-allcaps">
                                            KIDS PLAY AREA
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_35a806b4-1343-bea9-28ac-5983030c8e85-ac1b3ec9"
                                    className="amenities-btb_features-wrap"
                                >
                                    <div className="amenities-btb_feature header">
                                        <h2 data-animate={1} className="heading-style-h2">
                                            The many pieces with which you can build a wholesome life
                                        </h2>
                                        <div className="amenities-btb_feature-content">
                                            <div className="text-size-regular text-color-light-green">
                                                Between your front door and our main gates lies a whole world
                                                of comfort, convenience and enrichment. Take your pick.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-btb_features-wrap amenities-btb_features-wrap02">
                                    <div className="amenities-btb_feature amenities-btb_citizen-park">
                                        <div className="amenities-btb_feature-img-wrap">
                                            <img
                                                src="/images/Senior-citizen-park.webp"
                                                loading="lazy"
                                                width={394}
                                                alt=""
                                                className="amenities-btb_feature-img mol-img_parallax"
                                            />
                                        </div>
                                        <div className="text-size-regular text-style-allcaps">
                                            SENIOR CITIZEN PARK
                                        </div>
                                    </div>
                                    <div className="amenities-btb_feature amenities-btb_box-cricket">
                                        <div className="amenities-btb_feature-img-wrap">
                                            <img
                                                src="/images/Box-Cricket.webp"
                                                loading="lazy"
                                                width={394}
                                                sizes="(max-width: 479px) 56vw, (max-width: 991px) 45vw, 37vw"
                                                alt=""
                                                className="amenities-btb_feature-img mol-img_parallax"
                                            />
                                        </div>
                                        <div className="text-size-regular text-style-allcaps">
                                            BOX CRICKET
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-f3744ea5-98de-cb2d-c7a5-fd64098d4ff8-ac1b3ec9"
                                    className="amenities-btb_features-wrap amenities-btb_features-wrap03"
                                >
                                    <div className="amenities-btb_feature amenities-btb_pet-park">
                                        <div className="amenities-btb_feature-img-wrap">
                                            <img
                                                src="/images/Pet-park.webp"
                                                loading="lazy"
                                                width={394}
                                                sizes="(max-width: 479px) 19vw, (max-width: 991px) 21vw, 37vw"
                                                alt=""
                                                className="amenities-btb_feature-img mol-img_parallax"
                                            />
                                        </div>
                                        <div className="text-size-regular text-style-allcaps">
                                            PET PARK
                                        </div>
                                    </div>
                                    <div className="amenities-btb_feature amenities-btb_bird-zone">
                                        <div className="amenities-btb_feature-img-wrap">
                                            <img
                                                src="/images/Bird-watching-zone.webp"
                                                loading="lazy"
                                                width={394}
                                                sizes="(max-width: 479px) 38vw, (max-width: 991px) 21vw, 37vw"
                                                alt=""
                                                className="amenities-btb_feature-img mol-img_parallax"
                                            />
                                        </div>
                                        <div className="text-size-regular text-style-allcaps">
                                            BIRD WATCHING ZONE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="amenities-btb_divider" />
                        </div>
                    </div>
                </section>
                <section className="section_amenities-cover">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="amenities-cover_components">
                                <div className="amenities-cover_heading-wrapper">
                                    <div className="text-color-dark-rainforest">
                                        <div className="text-size-large">
                                            Sunlit lawns, endless trees, wide roads, and a number of
                                            versatile spaces where children and senior citizens alike can
                                            enjoy the facilities offered by Ims. This is a space that makes
                                            life richer.
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-cover_image-wrapper">
                                    <img
                                        src="/images/Amenities-Roundbout-View-min.jpg"
                                        loading="lazy"
                                        alt=""
                                        className="amenities-cover_image mol-img_parallax"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="wide-roads" className="section_amenities-road">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="amenities-road_component01">
                                <div className="amenities-road_grid">
                                    <div id="w-node-_66bbd8cc-862a-8cbf-7bff-f96a82fa1af4-ac1b3ec9">
                                        <h2 data-animate={1} className="heading-style-h2">
                                            12 Meter Roads
                                        </h2>
                                    </div>
                                    <div
                                        id="w-node-f4435fa9-75cd-8a51-6069-db58ab9e7a3c-ac1b3ec9"
                                        className="amenities-road_right"
                                    >
                                        <img
                                            src="/images/12-m-wide-roads-09-09.png"
                                            loading="lazy"
                                            alt=""
                                            className="amenities-road_img"
                                        />
                                    </div>
                                    <div className="amenities-road_left">
                                        <div className="amenities-road_features-grid">
                                            <div className="text-size-large">Features</div>
                                            <div
                                                id="w-node-b4a60db6-6ecb-1821-3062-1bc230b56e56-ac1b3ec9"
                                                className="amenities-road_features-gap"
                                            />
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">PLOT ENTRY</div>
                                                <div className="text-size-small-2">
                                                    A dedicated 4-meter-wide entry to each plot, meticulously
                                                    designed for easy access.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    AVENUE PLANTATION
                                                </div>
                                                <div className="text-size-small-2">
                                                    Avenue plantation on both sides of the road designed to
                                                    accommodate larger trees for enhanced privacy.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    VEHICULAR MOVEMENT
                                                </div>
                                                <div className="text-size-small-2">
                                                    ~7.5 meter-wide concrete driveway accommodating two-way
                                                    vehicular movement along with ample space for one car to be
                                                    parked.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    THREE-TIERED LANDSCAPE
                                                </div>
                                                <div className="text-size-small-2">
                                                    Aesthetically designed three-tiered landscape that
                                                    seamlessly blends tall and low shrubs along with a tree for
                                                    a touch of nature right at your doorstep.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    CHAMBER-FREE DRIVEWAYS
                                                </div>
                                                <div className="text-size-small-2">
                                                    All chambers are planned below walkways or landscape areas.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    DRIP IRRIGATION
                                                </div>
                                                <div className="text-size-small-2">
                                                    Drip irrigation for hassle-free landscape maintenance.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    SEAMLESS WALKWAYS
                                                </div>
                                                <div className="text-size-small-2">
                                                    Walkways are designed to ensure seamless walking by
                                                    minimising level differences at regular intervals.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    ENERGY EFFICIENT LIGHTING
                                                </div>
                                                <div className="text-size-small-2">
                                                    A combination of solar-powered and electrical streetlights
                                                    planned at regular intervals.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-road_image-wrap">
                                    <img
                                        src="/images/12-meter-bg-image-min.jpg"
                                        loading="lazy"
                                        alt=""
                                        className="amenities-road_image mol-img_parallax"
                                    />
                                    <div className="amenities-road_image-overlay" />
                                    <div className="amenities-road_tag-wrap">
                                        <div className="amenities-road_tag-text">
                                            View of the 12 meter roads
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="amenities-road_divider" />
                            <div className="amenities-road_component02">
                                <div className="amenities-road_grid">
                                    <div>
                                        <h2 data-animate={1} className="heading-style-h2">
                                            9 Meter Roads
                                        </h2>
                                    </div>
                                    <div
                                        id="w-node-_57b48417-d953-3292-d3cb-f392a19dfcbb-ac1b3ec9"
                                        className="amenities-road_right"
                                    >
                                        <img
                                            src="/images/9-m-wide-roads-09-10.png"
                                            loading="lazy"
                                            alt=""
                                            className="amenities-road_img"
                                        />
                                    </div>
                                    <div className="amenities-road_left">
                                        <div className="amenities-road_features-grid">
                                            <div className="text-size-large">Features</div>
                                            <div
                                                id="w-node-_57b48417-d953-3292-d3cb-f392a19dfc92-ac1b3ec9"
                                                className="amenities-road_features-gap"
                                            />
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">PLOT ENTRY</div>
                                                <div className="text-size-small-2">
                                                    A dedicated 4-meter-wide entry to each plot, meticulously
                                                    designed for easy access.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    AVENUE PLANTATION
                                                </div>
                                                <div className="text-size-small-2">
                                                    Avenue plantation on both sides of the road for enhanced
                                                    privacy.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    VEHICULAR MOVEMENT
                                                </div>
                                                <div className="text-size-small-2">
                                                    ~5.75 meter-wide concrete driveway accommodating two-way
                                                    vehicular movement.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    THREE-TIERED LANDSCAPE
                                                </div>
                                                <div className="text-size-small-2">
                                                    Aesthetically designed three-tiered landscape that
                                                    seamlessly blends tall and low shrubs along with a tree for
                                                    a touch of nature right at your doorstep.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    CHAMBER-FREE DRIVEWAYS
                                                </div>
                                                <div className="text-size-small-2">
                                                    All chambers are planned below walkways or landscape areas.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    DRIP IRRIGATION
                                                </div>
                                                <div className="text-size-small-2">
                                                    Drip irrigation for hassle-free landscape maintenance.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    SEAMLESS WALKWAYS
                                                </div>
                                                <div className="text-size-small-2">
                                                    Walkways are designed to ensure seamless walking by
                                                    minimising level differences at regular intervals.
                                                </div>
                                            </div>
                                            <div className="amenities-road_features">
                                                <div className="amenities-road_features-text">
                                                    ENERGY EFFICIENT LIGHTING
                                                </div>
                                                <div className="text-size-small-2">
                                                    A combination of solar-powered and electrical streetlights
                                                    planned at regular intervals.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-road_image-wrap">
                                    <img
                                        src="/images/9-meter-bg-image-min.jpg"
                                        loading="lazy"
                                        alt=""
                                        className="amenities-road_image mol-img_parallax"
                                    />
                                    <div className="amenities-road_image-overlay" />
                                    <div className="amenities-road_tag-wrap">
                                        <div className="amenities-road_tag-text">
                                            View of the 9 meter roads
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="The-Utility" className="section_amenities-utilities">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="amenities-utilities_components">
                                <div className="amenities-utilities_heading-wrapper">
                                    <div className="text-color-dark-rainforest">
                                        <h2 data-animate={1} className="heading-style-h2">
                                            What makes it sing
                                        </h2>
                                    </div>
                                    <div className="amenities-utilities_subcontent">
                                        {/* <div class="text-size-regular">The bones of Ims are strong, robust, and of excellent quality. Everything that has gone into the built is meant to last a lifetime, or more.</div> */}
                                        <div className="text-size-regular">
                                            The foundation of Ims is strong, robust, and of excellent
                                            quality. Everything that has gone into the built is meant to
                                            last a lifetime or more.
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities-utilities_grid-wrapper">
                                    <div
                                        id="w-node-_32928ade-c218-ea26-4393-d5f4adab57c1-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-_32928ade-c218-ea26-4393-d5f4adab57c3-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={59}
                                                        height={69}
                                                        viewBox="0 0 59 69"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6934)">
                                                            <path
                                                                d="M23.1597 25.1325V13.4425H17.1797L29.8097 1.0625L42.4497 13.4425H36.4697V34.7025V35.2225V38.4525V38.9725V40.6025"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M36.4702 56.0625V66.9725H36.4602H23.1602V53.4025V47.5925V40.8125"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M36.4686 56.0584V66.9684H23.1486V40.8084C23.1486 39.5084 22.0886 38.4484 20.7886 38.4484H13.4386V44.4184L1.05859 31.7884L13.4286 19.1484V25.1284H13.4586H23.1486C30.4986 25.1284 36.4686 31.0884 36.4686 38.4484V40.5984"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M44.6906 40.6028H36.4606C29.1106 40.6028 23.1406 46.5628 23.1406 53.9228V54.4428V63.0628V66.9728H36.4606V63.0628V56.2828C36.4606 54.9828 37.5206 53.9228 38.8206 53.9228H44.6906H44.7206V59.9028L57.0906 47.2728L44.7206 34.6328V40.6128H44.6906V40.6028Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M29.8086 26.9128V11.8828"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M29.8105 42.37V39.21C29.8105 35.09 26.4705 31.75 22.3505 31.75H12.4805"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M44.4586 47.2578H37.2686C33.1486 47.2578 29.8086 50.5978 29.8086 54.7178V66.1178"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6934">
                                                                <rect width="58.16" height="68.03" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Roads and Pathways</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_32928ade-c218-ea26-4393-d5f4adab57c8-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Internal roads with concrete finish.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Pedestrian pathways along the driveway with paver
                                                                finish.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Landscaped avenue plantation on either side of the
                                                                road.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Road &amp; plots with signages &amp; plot numbering.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Each plot will have a defined access finished in
                                                                concrete/paver from the approach road.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline" />
                                    </div>
                                    <div
                                        id="w-node-_56574605-1cb1-c122-6c01-79d973226c19-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-_06968f2d-cf89-6393-5492-30694295af3b-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={55}
                                                        height={69}
                                                        viewBox="0 0 55 69"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6823)">
                                                            <path
                                                                d="M13.2695 39.1641C13.6695 39.8841 14.0795 40.5841 14.4695 41.2941C16.9595 45.7341 18.2395 50.2841 18.0095 55.4241H27.3695"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M9.95703 31.3203C10.237 32.7103 10.717 34.0603 11.307 35.3603"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M27.3686 55.4231H36.7286C36.4886 50.2831 37.7786 45.7331 40.2686 41.2931C42.4686 37.3631 45.0686 33.3031 45.0686 28.6431C45.0686 18.8731 37.1486 10.9531 27.3786 10.9531C18.2986 10.9531 10.8286 17.7931 9.80859 26.5931"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M27.3672 55.4219V50.1719"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M24.418 50.1562H30.318"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M34.3284 55.4219H20.3984V59.6519H34.3284V55.4219Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M32.0884 59.6562H22.6484V63.8862H32.0884V59.6562Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M27.3672 63.8828V67.9528"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.47859 21.9744L1.05859 20.2344"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M14.4203 10.9706L11.0703 6.39062"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M27.3091 6.7525L27.2891 1.0625"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M40.2188 10.9147L43.5487 6.30469"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M48.2188 21.8638L53.6287 20.0938"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M29.7186 17.9922L19.0586 33.2022H27.6486L25.5486 44.6522L35.6886 29.8122H27.3686L29.7186 17.9922Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6823">
                                                                <rect width="54.69" height="69.01" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Electrical</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_1d5f5eb2-61ea-848a-d91b-61451a67412a-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                LED light fixtures in common areas.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                100% DG Backup for the common service areas.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Underground conduits provision for fibre cables.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Underground power lines to distribute power from the
                                                                transformer yard up to the feeder pillar.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Provision to lay cables lines from feeder pillars to
                                                                individual plots.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline" />
                                    </div>
                                    <div
                                        id="w-node-_7d105b3c-01e0-e9c9-ddc7-fd625428d639-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-_7d105b3c-01e0-e9c9-ddc7-fd625428d63b-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={68}
                                                        height={59}
                                                        viewBox="0 0 68 59"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6840)">
                                                            <path
                                                                d="M19.4688 51.8203C23.4188 54.1303 28.0087 55.4603 32.9187 55.4603"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M13.0195 46.5234C13.8695 47.4734 14.7795 48.3634 15.7595 49.1934"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M48.7791 28.8125H38.3391C35.3491 28.8125 32.9291 26.3925 32.9291 23.4025V7.5625H6.28906V28.8125C6.28906 33.9225 7.71906 38.6825 10.1991 42.7225"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M32.9219 55.4609H48.7819"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M34.9486 1.0625H4.30859C2.51367 1.0625 1.05859 2.51757 1.05859 4.3125C1.05859 6.10743 2.51367 7.5625 4.30859 7.5625H34.9486C36.7435 7.5625 38.1986 6.10743 38.1986 4.3125C38.1986 2.51757 36.7435 1.0625 34.9486 1.0625Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M55.8086 53.9806V29.6406C55.8086 27.8457 54.3535 26.3906 52.5586 26.3906C50.7637 26.3906 49.3086 27.8457 49.3086 29.6406V53.9806C49.3086 55.7756 50.7637 57.2306 52.5586 57.2306C54.3535 57.2306 55.8086 55.7756 55.8086 53.9806Z"
                                                                stroke="#738E62"
                                                                strokeWidth="1.91"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M66.7086 29.8516H55.8086V53.7716H66.7086V29.8516Z"
                                                                stroke="#738E62"
                                                                strokeWidth="1.84"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M60.7386 29.8516L55.8086 35.2516"
                                                                stroke="#738E62"
                                                                strokeWidth="1.84"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M66.7086 31.6484L55.8086 43.6084"
                                                                stroke="#738E62"
                                                                strokeWidth="1.84"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M66.7086 40.0078L55.8086 51.9678"
                                                                stroke="#738E62"
                                                                strokeWidth="1.84"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M66.7091 48.3594L61.7891 53.7694"
                                                                stroke="#738E62"
                                                                strokeWidth="1.84"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6840">
                                                                <rect width="67.64" height="58.18" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Plumbing</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_7d105b3c-01e0-e9c9-ddc7-fd625428d63d-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Underground sanitary line network from STP till the
                                                                plot entry.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Underground water supply lines till the plot entry.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Drip irrigation network for majority of the common
                                                                landscape areas.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline" />
                                    </div>
                                    <div
                                        id="w-node-ed9da547-1924-eab6-1a9b-c68015c11d21-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-ed9da547-1924-eab6-1a9b-c68015c11d23-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={60}
                                                        height={65}
                                                        viewBox="0 0 60 65"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6852)">
                                                            <path
                                                                d="M18.3681 37.8666L16.8981 41.1966L20.6181 44.9166L23.9481 43.4466L25.5081 44.0966L26.8281 47.4866H32.0881L33.4081 44.0966L34.9681 43.4466L38.2981 44.9166L42.0181 41.1966L40.5481 37.8666L41.1981 36.3066L44.5881 34.9966V29.7266L41.1981 28.4066L40.5481 26.8466L42.0181 23.5266L38.2981 19.7966L34.9681 21.2666L33.4081 20.6266L32.0881 17.2266H26.8281L25.5081 20.6266L23.9481 21.2666L20.6181 19.7966L16.8981 23.5266L18.3681 26.8466L17.7181 28.4066L14.3281 29.7266V34.9966L17.7181 36.3066L18.3681 37.8666Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M36.4066 28.975C36.9066 29.995 37.1866 31.145 37.1866 32.355C37.1866 36.625 33.7266 40.085 29.4566 40.085C25.1866 40.085 21.7266 36.625 21.7266 32.355C21.7266 28.085 25.1866 24.625 29.4566 24.625C29.9666 24.625 30.4666 24.675 30.9466 24.765"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M7.38863 14.5469C3.41863 19.4569 1.04863 25.7069 1.05863 32.5169C1.09863 48.2369 13.8786 60.9469 29.5986 60.9069C36.2086 60.8869 42.2986 58.6169 47.1186 54.8169"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M51.4613 50.5867C55.5513 45.6467 58.0113 39.2867 57.9913 32.3667C57.9513 16.6467 45.1713 3.93666 29.4513 3.97666C22.8813 3.99666 16.8412 6.23666 12.0312 9.98666"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M20.5319 13.7725L10.9219 10.6725L14.0119 1.0625"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M38.4219 51.8828L48.3019 53.9328L46.2619 63.8128"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6852">
                                                                <rect width="59.06" height="64.88" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Services</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-ed9da547-1924-eab6-1a9b-c68015c11d25-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Sewage treatment plant.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Centralized underground sump supplying treated water.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Overhead water tank for domestic water supply till the
                                                                plot entry.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Organic waste converter.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline last" />
                                    </div>
                                    <div
                                        id="w-node-f3f85561-5c79-044f-1ba1-5f01ea2966b3-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-f3f85561-5c79-044f-1ba1-5f01ea2966b5-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={58}
                                                        height={69}
                                                        viewBox="0 0 58 69"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6860)">
                                                            <path
                                                                d="M28.5686 67.7025C43.0886 63.4425 56.0686 49.5725 56.0686 34.3825V9.8425L28.5686 1.0625L1.05859 9.8425V34.3925C1.05859 49.5825 14.0386 63.4525 28.5586 67.7125L28.5686 67.7025Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M42.98 49.7578C42.15 50.8078 41.24 51.8278 40.25 52.7978"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M36.9192 55.6603C34.4592 57.5003 31.6692 59.0503 28.5592 60.1903C15.7692 55.5303 8.19922 43.7003 8.19922 34.3903V15.0603L28.5592 8.57031L48.9192 15.0603V34.3803C48.9192 38.0503 47.7392 42.1203 45.5292 45.9803"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M25.0197 44.7722L15.9297 34.5422L21.0497 30.0022L25.4397 34.9522L37.0097 23.9922L41.7097 28.9522L25.0197 44.7722Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6860">
                                                                <rect width="57.13" height="68.76" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">
                                                        Safety &amp; Security
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-f3f85561-5c79-044f-1ba1-5f01ea2966b7-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Security cabin with boom carriers.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Peripheral boundary with Entry Exit signages.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                CCTV surveillance at the entry and exit points,
                                                                service yard, and kids play area.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline" />
                                    </div>
                                    <div
                                        id="w-node-ec99d0a4-25f6-f91f-c7ea-9189a567b2d2-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-ec99d0a4-25f6-f91f-c7ea-9189a567b2d4-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={72}
                                                        height={61}
                                                        viewBox="0 0 72 61"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M42.2931 5.28571C46.4284 11.39 53 24.0943 53 28.7343C53 38.2629 45.3819 46 36 46C26.6181 46 19 38.2629 19 28.7343C19 21.53 28.7167 8.30143 33.4583 2.27571C34.0631 1.47143 35.0027 1 36 1"
                                                            stroke="#738E62"
                                                            strokeWidth={2}
                                                            strokeMiterlimit={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M48 31C48 35.9669 44.415 40 40 40"
                                                            stroke="#738E62"
                                                            strokeWidth={2}
                                                            strokeMiterlimit={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M59 51C59 52.656 48.6946 54 36 54C23.3054 54 13 52.656 13 51"
                                                            stroke="#738E62"
                                                            strokeWidth={2}
                                                            strokeMiterlimit={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M56.9927 47C65.4963 48.3188 71 50.4161 71 52.7778C71 56.7644 55.3171 60 36 60C16.6829 60 1 56.7644 1 52.7778C1 50.4161 6.50375 48.3188 15.0073 47"
                                                            stroke="#738E62"
                                                            strokeWidth={2}
                                                            strokeMiterlimit={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Water Conservation</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-ec99d0a4-25f6-f91f-c7ea-9189a567b2d9-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Treated water used for landscape irrigation.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Recharge pit for rainwater harvesting.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline" />
                                    </div>
                                    <div
                                        id="w-node-_9d3c7d4c-b36a-7e00-857e-1e80f8be039b-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-_9d3c7d4c-b36a-7e00-857e-1e80f8be039d-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={59}
                                                        height={64}
                                                        viewBox="0 0 59 64"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6942)">
                                                            <path
                                                                d="M48.2185 21.3998C42.5885 19.8998 36.3385 21.3498 31.9285 25.7698C27.5185 30.1798 26.0585 36.4398 27.5585 42.0598C33.1885 43.5598 39.4385 42.1098 43.8485 37.6898C48.2585 33.2798 49.7185 27.0198 48.2185 21.3998Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M37.4688 32.16L39.3787 30.25"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M27.5586 42.0566L33.8886 35.7266"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M13.2915 38.5426C16.9515 42.2026 22.1315 43.4026 26.7915 42.1626C28.0315 37.5026 26.8315 32.3226 23.1715 28.6626C19.5115 25.0026 14.3315 23.8026 9.67151 25.0426C8.43151 29.7026 9.63151 34.8826 13.2915 38.5426Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M26.79 42.1572L17 32.3672"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M7.28044 14.1406C3.38044 18.9606 1.05044 25.1106 1.07044 31.8006C1.11044 47.2506 13.6704 59.7506 29.1204 59.7106C35.6204 59.6906 41.6004 57.4606 46.3404 53.7306"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M50.6094 49.5623C54.6294 44.7023 57.0494 38.4623 57.0294 31.6523C56.9894 16.2023 44.4294 3.70228 28.9794 3.74228C22.5194 3.76228 16.5794 5.96228 11.8594 9.65228"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                            <path
                                                                d="M20.1805 13.3863L10.7305 10.3463L13.7705 0.90625"
                                                                stroke="#738E62"
                                                                strokeWidth="1.81"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M37.4609 50.9375L47.1209 53.1975L44.8609 62.8575"
                                                                stroke="#738E62"
                                                                strokeWidth="1.81"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6942">
                                                                <rect width="58.09" height="63.77" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Energy Conservation</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_9d3c7d4c-b36a-7e00-857e-1e80f8be03a2-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Energy efficient fixtures for common areas.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Timer controlled streetlights.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Clubhouse with ample natural lighting and ventilation.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline" />
                                    </div>
                                    <div
                                        id="w-node-aeaa10be-eb21-4c3a-a2e9-d97da205f968-ac1b3ec9"
                                        className="amenities-utilites_items"
                                    >
                                        <div className="amenities-utilities_content-wrapper">
                                            <div
                                                id="w-node-aeaa10be-eb21-4c3a-a2e9-d97da205f96a-ac1b3ec9"
                                                className="amenities-utilities_icon-wrapper"
                                            >
                                                <div className="amenities-utilities_icons w-embed">
                                                    <svg
                                                        width={65}
                                                        height={60}
                                                        viewBox="0 0 65 60"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1527_6952)">
                                                            <path
                                                                d="M6.18031 31.75H1.07031V40.01H6.18031H27.2103H32.4403V34.93"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M12.7314 31.75H10.1914"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M25.6495 31.75H17.0195"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M32.4286 47.2891H1.05859V52.3691H32.4286V47.2891Z"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.17969 47.2878V40.0078"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.17969 57.3872V52.3672"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M27.2188 47.2878V40.0078"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M27.2188 57.3872V52.3672"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M43.4883 18.3672V52.3672"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M36.2109 23.7422L43.4909 30.6422"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M50.6283 19.7969L43.4883 27.1869"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M37.3398 58.1272C37.5398 54.9072 40.2198 52.3672 43.4898 52.3672C43.8698 52.3672 44.2398 52.3972 44.5998 52.4672"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M44.5898 52.4681C45.6998 50.8781 47.5498 49.8281 49.6498 49.8281C53.0498 49.8281 55.8098 52.5881 55.8098 55.9881C55.8098 56.7381 55.6798 57.4581 55.4298 58.1281"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M31.3814 15.8303C31.2614 15.1203 31.1914 14.3803 31.1914 13.6403C31.1914 6.70031 36.8214 1.07031 43.7614 1.07031C50.7014 1.07031 56.3314 6.70031 56.3314 13.6403C56.3314 15.0403 56.1014 16.3903 55.6714 17.6603"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M55.6683 17.6528C55.8283 17.6428 55.9883 17.6328 56.1483 17.6328C60.2683 17.6328 63.6083 20.9728 63.6083 25.0928C63.6083 29.2128 60.2683 32.5528 56.1483 32.5528C54.4983 32.5528 52.9683 32.0128 51.7383 31.1028"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M31.3819 15.8281C26.7419 16.5081 23.1719 20.4981 23.1719 25.3281C23.1719 30.6281 27.4719 34.9281 32.7719 34.9281C34.4119 34.9281 35.9519 34.5181 37.3019 33.7881"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M37.3203 33.7972C38.8703 35.6272 41.1803 36.7972 43.7703 36.7972C47.4703 36.7972 50.6103 34.4172 51.7503 31.1172"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M1.07031 58.1328H63.6203"
                                                                stroke="#738E62"
                                                                strokeWidth="2.13"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1527_6952">
                                                                <rect width="64.68" height="59.19" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text-color-dark-rainforest">
                                                    <div className="text-size-medium">Landscaped Features</div>
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-aeaa10be-eb21-4c3a-a2e9-d97da205f96f-ac1b3ec9"
                                                className="amenities-utilities_head-wrapper"
                                            >
                                                <ul role="list" className="amenities-utilities_text">
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Common green spaces.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Avenue plantation for internal and masterplan roads.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-text">
                                                        <div className="text-color-dark-rainforest">
                                                            <div className="text-size-small-2">
                                                                Low maintenance plants along the roadside.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="amenities-utilities_borderline last" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_amenities-gateway">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="amenities-gateway_components">
                                <div className="amenities-gateway_content-wrapper">
                                    <div
                                        id="w-node-b7203c57-5ce2-da7c-7385-d9b1aef4f261-ac1b3ec9"
                                        className="amenities-gateway_heading-wrapper"
                                    >
                                        <div className="text-color-dark-rainforest">
                                            <h2 data-animate={1} className="heading-style-h2">
                                                A gateway into a thriving community
                                            </h2>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-_46dc619f-be5b-5619-2002-3e0f193c9b8e-ac1b3ec9"
                                        className="amenities-gateway_text-wrapper"
                                    >
                                        <div className="text-color-dark-rainforest">
                                            <div className="text-size-regular">
                                                Green spaces to bloom. Fast city-life to thrive in. You get
                                                both here, with vast open spaces to develop on and fast
                                                connectivity to Bengaluru.
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-c5f35628-85c6-3565-78f5-6ee45993ec32-ac1b3ec9"
                                        className="button-group"
                                    >
                                        <a href="location" className="button w-inline-block">
                                            <div className="button_text">Learn about the location</div>
                                            <div className="button-arrow_wrapper" />
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
                                                        fill="#F3F4EF"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="amenities-gateway_image-wrapper">
                                    <img
                                        src="/images/Amenities-community-min.jpg"
                                        loading="lazy"
                                        alt=""
                                        className="amenities-gateway_image mol-img_parallax"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}