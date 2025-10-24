import InnerPreloader from "../components/InnerPerloader";
import SwiperGallery from "../components/SwiperComponent"



export default function GalleryPage() {
    return (
        <>
            <InnerPreloader />
            <div className="main-wrapper">
                <section id="TOP" className="section_gallery-slider">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="gallery-slider_component">
                                <div className="gallery-slider_header">
                                    <div className="gallery-slider_left">
                                        <h1 data-animate={2} className="heading-style-h2">
                                            Our vision for Ims
                                        </h1>
                                    </div>
                                    <div className="gallery-slider_right">
                                        {/* <div class="text-size-regular text-color-light-green">Browse our gallery of renders and videos to see how we envision Ims when finished.</div> */}
                                        <div className="text-size-regular text-color-light-green">
                                            Browse our gallery to see how we envision Ims when finished.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider">
                                <SwiperGallery />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-gallery-video-new">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="gallery-video_header">
                                <h2
                                    data-animate={1}
                                    className="heading-style-h2"
                                    style={{ paddingBottom: 40 }}
                                >
                                    Browse our videos
                                </h2>
                            </div>
                            <div className="video-gallery-sec">
                                <div
                                    className="video-gallery-sec-1"
                                    style={{ background: "#f3f4ef" }}
                                >
                                    <video
                                        controls
                                        src="/images/gallery/Assetz-Melodies-Of-Life-Route.mp4"
                                    ></video>
                                </div>
                                <div
                                    className="video-gallery-sec-1"
                                    style={{ background: "#f3f4ef" }}
                                >
                                    <video
                                        controls
                                        src="/images/gallery/Assetz-Melodies-Of-Life-Lifestyle-Av.mp4"
                                    ></video>
                                </div>
                                <div
                                    className="video-gallery-sec-1"
                                    style={{ background: "#f3f4ef" }}
                                >

                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/zXBgNPzO6G8?si=Vo49TI7g5kKDDTKw"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
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