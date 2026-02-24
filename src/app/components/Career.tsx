'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import './../career.css';
import { Phone, Mail } from "lucide-react";

export default function Career() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        phone: '',
        post1: 'Sales Manager',
        experience: 'Fresher',
        msg: '',
        fileatt: null,
    });

    const [statusMessage, setStatusMessage] = useState(''); // ✅ To show response message
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>(''); // ✅ Success/Error state

    const reasons = [
        'Culture of Integrity',
        'Innovation-First Mindset',
        'Impact-Driven Work',
        'Trusted Legacy',
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null) form.append(key, value);
        });

        try {
            const response = await fetch('https://mythribuilders.com/cmail.php', {
                method: 'POST',
                headers: {
                    "Accept": "application/json, text/plain, */*",
                },
                body: form,
            });

            if (!response.ok) {
                const errorResult = await response.json().catch(() => ({ message: 'Server error occurred.' }));
                throw new Error(`Submission failed: ${response.status} - ${errorResult.message}`);
            }

            const result = await response.json();

            // ✅ Show success message
            setStatusMessage(result.message || 'Form submitted successfully!');
            setStatusType('success');

            // ✅ Reset form fields
            setFormData({
                name: '',
                email: '',
                city: '',
                phone: '',
                post1: 'Sales Manager',
                experience: 'Fresher',
                msg: '',
                fileatt: null,
            });

            // Optional: Hide message after few seconds
            setTimeout(() => {
                setStatusMessage('');
                setStatusType('');
            }, 5000);
        } catch (err) {
            console.error('Submission Error:', err);
            setStatusMessage('Error submitting form. Please try again later.');
            setStatusType('error');
        }
    };

    return (
        <>
            {/* Banner */}

            <div id="carouselExampleDark" className="header-section ">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="image-container">
                            <Image src="/images/Mythri website career image.webp" height={2880} width={1920} className='img-fluid masterpiece ' alt="masterpiece" />
                            <div className="overlay2 ">
                                <div className="text-white d-block">
                                    <h1 className="text-center d-block fs-1 mb-3 text-uppercase"> Career</h1>
                                    <p className="text-center d-block fs-6 ">
                                        <Link className="text-white text-decoration-none" href="https://mythribuilders.com/"> Home</Link> / Career
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Section */}
            <section className="bg-light py-5  theme-bg-light carrer section carrer-new">
                <div className="container">
                    <div className="text-center mb-5 theme-color-dark">
                        <h2 className="mb-2">Build the Future with Mythri Builders</h2>
                        <span className=' theme-color-dark'>
                            Be part of a mission where values lead, ideas thrive, and growth is a shared journey.
                        </span>
                    </div>

                    <div className="row align-items-center">
                        {/* Why Join */}
                        <div className="col-lg-6 mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4  theme-color-dark m-center">
                                Why Join <span className="text-color-accent m-center">Mythri </span> Builders?
                            </h2>
                            <p className="mb-4  theme-color-dark m-center">
                                At Mythri Builders, we’re building more than a brand we’re growing a culture rooted in purpose, innovation, and integrity.
                            </p>

                            <div className="row">
                                {reasons.map((reason) => (
                                    <div key={reason} className="col-6 d-flex align-items-start mb-3">
                                        <FaCheckCircle className="text-color-accentme-2 mt-1" />
                                        <span className="text-dark  theme-color-dark">&nbsp; {reason} </span>
                                    </div>
                                ))}
                            </div>
                            <p className="d-flex align-items-center gap-2 mt-5">
                                <Phone size={16} />
                                <span>9164789898</span>
                            </p>

                            <p className="d-flex align-items-center gap-2">
                                <Mail size={16} />
                                <span>enquiry@mythribuilders.co.in</span>
                            </p>
                        </div>

                        {/* Job Form */}
                        <div className="col-lg-6 mb-5">
                            <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                                <h5 className="text-uppercase mb-4 theme-color-dark " style={{ color: '#282563' }}>
                                    APPLY FOR YOUR JOB
                                </h5>
                                {/* ✅ Status Message */}
                                {statusMessage && (
                                    <div
                                        className={`alert ${statusType === 'success' ? 'alert-success' : 'alert-danger'
                                            } py-2`}
                                    >
                                        {statusMessage}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="row">
                                        {[
                                            ['name', 'Name', 'text', 'Name'],
                                            ['email', 'Email address', 'email', 'Email'],
                                            ['city', 'City', 'text', 'City'],
                                            ['phone', 'Phone Number', 'text', 'Mobile No.'],
                                        ].map(([name, label, type, placeholder]) => (
                                            <div className="form-group col-md-6" key={name}>
                                                <input
                                                    type={type}
                                                    name={name}
                                                    className="form-control mb-3 py-2"
                                                    onChange={handleChange}
                                                    required
                                                    placeholder={placeholder}
                                                />
                                            </div>
                                        ))}

                                        <div className="form-group col-md-12">
                                            <select
                                                name="experience"
                                                className="form-control mb-3 py-2"
                                                onChange={handleChange}
                                            >
                                                <option value="">Designation</option>
                                                <option value="1-2 Years">1-2 Years</option>
                                                <option value="2-5 Years">2-5 Years</option>
                                                <option value="5-7 Years">5-7 Years</option>
                                                <option value="7-10 Years">7-10 Years</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <textarea
                                                name="msg"
                                                className="form-control mb-3 py-2"
                                                onChange={handleChange}
                                                required
                                                placeholder="Description"
                                            ></textarea>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <input
                                                type="file"
                                                name="fileatt"
                                                className="form-control mb-3 py-2"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="text-center col-md-12">
                                            <button type="submit" className="btn theme-bg-dark text-white py-2 px-4 mt-2">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
