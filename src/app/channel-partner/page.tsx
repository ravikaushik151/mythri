'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./../career.css";

export default function ChannelPartner() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [note, setNote] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setNote('');

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone) {
            setNote('All fields are required!');
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setNote('Enter a valid email address!');
            setLoading(false);
            return;
        }

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('message', formData.message);

            const response = await fetch('/cmail.php', {
                method: 'POST',
                body: data,
            });

            const resultText = await response.text();

            if (response.ok && resultText.toLowerCase().includes('success')) {
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setNote('');

                // Optional: PDF download (if needed)
                // const pdfUrl = '/assets/sample.pdf';
                // const link = document.createElement('a');
                // link.href = pdfUrl;
                // link.download = pdfUrl.split('/').pop() || 'download.pdf';
                // document.body.appendChild(link);
                // link.click();
                // document.body.removeChild(link);

                // Optional redirect
                // setTimeout(() => window.location.href = '/thank-you', 2000);
            } else {
                setNote('Error sending email. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setNote('Network error. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <>
            {/* Banner Section */}
            <div className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container">
                            <Image
                                src="/images/Channel Partner.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece "
                                alt="Channel Partner"
                            />
                            <div className="overlay2">
                                <div className="text-white d-block">
                                    <p className="text-center fs-1 mb-3 text-uppercase">Channel Partner</p>
                                    <p className="text-center fs-6">
                                        <Link className="text-white text-decoration-none" href={'./'}>Home</Link> / Channel Partner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Channel Partner Form Section */}
            <section className="bg-light py-5 theme-bg-light carrer section">
                <div className="container">
                    <div className="text-center mb-5 theme-color-dark">
                        <h2 className="mb-2">Become Our Channel Partner</h2>
                        <p className="theme-color-dark text-center">
                            Partner with Mythri Builders and be part of a trusted legacy that delivers excellence, quality, and innovation in every project.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                                <h5 className="text-uppercase mb-4 theme-color-dark" style={{ color: '#282563' }}>
                                    Partner With Us
                                </h5>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control py-2"
                                            placeholder="Name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control py-2"
                                            placeholder="Email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control py-2"
                                            placeholder="Phone Number"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <textarea
                                            name="message"
                                            className="form-control py-2"
                                            placeholder="Message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn theme-bg-dark text-white py-2 px-4 mt-2"
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Submit"}
                                        </button>
                                    </div>

                                    {note && <p className="text-danger mt-2 text-center">{note}</p>}
                                    {success && <p className="text-success mt-2 text-center">✅ Thank you! We’ll get back to you soon.</p>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
