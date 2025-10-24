"use client";
import Image from "next/image";
import ContactForm from "../../app/components/ContactForm";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer-section position-relative footer-section-2"

    >
      {/* Title Section */}
      <div className="text-center position-relative bg-white pt-5">
        <h1
          className="kalyani-title"
          style={{
            backgroundImage: "url('/images/Footer.webp')",
          }}
        >
          Mythri Builders
        </h1>
      </div>

      {/* Footer Content (bottom aligned and centered) */}
      <div className="container position-absolute bottom-0 start-50 translate-middle-x">
        <div className="row g-4 text-white text-center text-md-start justify-content-center">
          {/* Logo & Address */}
          <div className="col-md-3">
            <Link href="/">
              <Image
                src="/images/logo-dark.webp"
                alt="Mythri Builders Logo"
                width={160}
                height={100}
                className="mb-3 white-png logo img-fluid"
              />
            </Link>

            <h4 className="footer-title">Office Address</h4>
            <p>
              #2802, Broadway Building, <br />
              27th Main Road, Sector 1, <br />
              HSR Layout, Bengaluru - 560102.
            </p>

            <h5 className="fw-bold mt-3 mb-2">Follow Us</h5>
            <div className="footer-social d-flex gap-3 justify-content-md-start justify-content-center">
              <Link href="#" className="text-white">
                <i className="bi bi-facebook fs-4"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-instagram fs-4"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-youtube fs-4"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-linkedin fs-4"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/microsite">Project</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h4 className="footer-title">Get in Touch</h4>
            <ContactForm
              inputClass="footer-input rounded-0 mb-2"
              buttonClass="btn btn-light text-dark w-100"
              hideMessageField={true}
              defaultMessage="Interested in this project"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center mt-5 pt-4 pb-3 border-top border-light">
          <p className="mb-0">
            © {new Date().getFullYear()} Mythri Builders. All rights reserved. Digital Partner:{" "}
            <Link
              href="https://www.imsolutions.co/"
              target="_blank"
              className="text-white text-decoration-underline"
            >
              IM Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
