"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

interface FormData {
    name: string;
    email: string;
    mobile: string;
    message: string;
}

export default function ScheduleVisitForm() {
    const phpEndpoint = "https://mythribuilders.com/mail.php";

    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        mobile: "",
        message: "Schedule Visit Request",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [note, setNote] = useState("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setNote("");

        // Basic validation
        if (!form.name || !form.email || !form.mobile) {
            setNote("All fields are required!");
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setNote("Enter a valid email address!");
            setLoading(false);
            return;
        }

        try {
            const formData = new URLSearchParams();
            formData.append("name", form.name);
            formData.append("email", form.email);
            formData.append("phone", form.mobile);
            formData.append("message", form.message);

            const response = await fetch(phpEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json, text/plain, */*",
                },
                body: formData.toString(),
            });

            const resultText = await response.text();

            if (response.ok && resultText.includes("success")) {
                setSuccess(true);
                setNote("");
                setForm({
                    name: "",
                    email: "",
                    mobile: "",
                    message: "Schedule Visit Request",
                });
                setTimeout(() => {
                    window.location.href = "/thank-you";
                }, 1000);
            } else {
                setNote("Error sending email. Please try again.");
            }
        } catch (err) {
            console.error("Submit error:", err);
            setNote("Network error. Try again later.");
        }

        setLoading(false);
    };

    return (
        <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="py-5"
            style={{ backgroundColor: "#0a1927", color: "#fff" }}
        >
            <Container>
                <h3 className="text-center mb-4" style={{ fontWeight: 400 }}>
                    Schedule your visit
                </h3>

                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">
                        <Col md={3} sm={12} className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Name*"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="rounded-0"
                            />
                        </Col>

                        <Col md={3} sm={12} className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Email*"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="rounded-0"
                            />
                        </Col>

                        <Col md={3} sm={12} className="mb-3">
                            <Form.Control
                                type="tel"
                                placeholder="Phone*"
                                name="mobile"
                                required
                                value={form.mobile}
                                onChange={handleChange}
                                className="rounded-0"
                            />
                        </Col>

                        <Col md="auto" sm={12} className="mb-3">
                            <Button
                                variant="outline-light"
                                type="submit"
                                disabled={loading}
                                className="rounded-0 px-4"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </Button>
                        </Col>
                    </Row>
                </Form>

                {note && <p className="text-center text-danger mt-2">{note}</p>}

                {success && (
                    <p className="text-center text-success mt-2">
                        ✅ Thank you! We’ll get back to you soon.
                    </p>
                )}
            </Container>
        </section>
    );
}
