"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            router.push("/");
        }
    }, [timeLeft, router]);

    return (
        <>
            <div className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container position-relative">
                            <Image
                                src="/images/contact us.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="Thank You"
                            />
                            <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-white d-block text-center">
                                    <h1 className="fs-1 mb-3 text-uppercase">Thank You</h1>
                                    <p className="fs-6 text-center">
                                        <Link className="text-white text-decoration-none" href="/">Home</Link> / Thank You
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 text-center">
                            <div className="bg-white p-5 rounded shadow-sm">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
                                <p className="text-gray-600 mb-4">
                                    Your message has been successfully sent. We will get back to you soon.
                                </p>
                                <p className="text-muted mb-4">
                                    Redirecting to home in <span className="fw-bold text-primary">{timeLeft}</span> seconds...
                                </p>
                                <Link
                                    href="/"
                                    className="btn btn-primary px-4 py-2"
                                >
                                    Go Back Home Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
