"use client";
import { useEffect } from "react";

export default function Walkthrough({
    title = "Project Walkthrough",
    thumbnail,
    youtubeId,
}) {
    useEffect(() => {
        const modal = document.getElementById("walkthroughModal");

        if (modal) {
            modal.addEventListener("hidden.bs.modal", () => {
                const iframe = modal.querySelector("iframe");
                if (iframe) iframe.src = "";
            });
        }
    }, []);

    const openVideo = () => {
        const iframe = document.getElementById("walkthroughIframe");
        iframe?.setAttribute("src", `https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
    };

    return (
        <>
            {/* Section */}
            <section className="walkthrough-section py-5">
                <div className="container text-center" style={{
                                        padding: "40px 0",
                }}>
                  
                      <div className="text-center">
 <h2 className="gallery-title small-title">{title}</h2>
                     </div>

                    <div
                        className="walkthrough-thumb position-relative d-inline-block"
                        data-bs-toggle="modal"
                        data-bs-target="#walkthroughModal"
                        onClick={openVideo}
                    >
                        <img
                            src={thumbnail}
                            alt="Walkthrough Video"
                            className="img-fluid rounded"
                        />
                        <span className="play-btn">▶</span>
                    </div>
                </div>
            </section>

            {/* Bootstrap Modal */}
            <div
                className="modal fade"
                id="walkthroughModal"
                tabIndex={-1}
                aria-hidden={true}
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-black">
                        <div className="modal-body p-0 position-relative">
                            <button
                                type="button"
                                className="btn-close btn-close-white position-absolute end-0 m-3"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>

                            <div className="ratio ratio-16x9">
                                <iframe
                                    id="walkthroughIframe"
                                    title="YouTube Walkthrough"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
