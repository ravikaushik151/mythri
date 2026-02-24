'use client';

export default function InnerPreloader() {
    return (
        <>
            <div
                data-w-id="3856ff45-881d-ce61-98a0-e516df143e58"
                style={{
                    opacity: 1,
                    WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    display: "flex"
                }}
                className="sub-preloader"
            >
                <div
                    style={{
                        WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(null, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                            "translate3d(0, 0, 0) scale3d(null, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                            "translate3d(0, 0, 0) scale3d(null, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                            "translate3d(0, 0, 0) scale3d(null, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    }}
                    className="sub-preloader_wrap"
                />
            </div>
        </>
    );
}