"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../app/components/ContactForm";

export default function Footer() {
  const pathname = usePathname();

  const micrositeData = {
    "mythri-sankalp": {
      logo: "/images/sankalp/Mythri Sankalp DKM Logo copy.webp",
      address:
        "Sy No 59/7 Hebron Avenue Road Hallehalli, Bengaluru East, Bengaluru, Karnataka 560036",
      mob: "9741218002",
    },
    "mythri-sikharam": {
      logo: "/images/sikharam/Sikharam Logo.webp",
      address:
        "Survey No. 48/4, off Sarjapur Main Road, Hadosiddapura, Chikkakannalli, Bengaluru, Karnataka 560035",
      mob: "8951370333",
    },
    "mythri-sity": {
      logo: "/images/sity/sity.webp",
      address:
        "Sy No. 67/2, Behind RGA Tech Park, Off Sarjapur Rd, Kodathi Village, Varthur, Chikkakannalli, Bengaluru, Karnataka 560035",
      mob: "9513140111",
    },
    "mythri-street": {
      logo: "/images/street/Mythri street_final logo.png",
      address:
        "Survey No. 67/3, Behind RGA Tech Park, Off Sarjapur Rd, Kodathi Village, Varthur, Chikkakannalli, Bengaluru, Karnataka 560035",
      mob: "9513140111",
    },
  };

  const currentSlug = pathname?.split("/")[1];
  const currentMicrosite = micrositeData[currentSlug];

  const logo = currentMicrosite?.logo || "/images/logo-dark.webp";
  const mob = currentMicrosite?.mob || "9164789898";
  const address =
    currentMicrosite?.address ||
    `#2802, Broadway Building,
27th Main Road, Sector 1,
HSR Layout, Bengaluru - 560102.`;

  return (
    <footer className="footer-section position-relative footer-section-2 ">
      {/* Title */}


      {/* Footer Content */}
      <div className="container position-absolute bottom-0 start-50 translate-middle-x">
        <div className="row g-4 text-white text-center text-md-start justify-content-center ">

          {/* Column 1 : Address + Mobile Logo */}
          <div className="col-md-4 magin-top-footer">

            {/* Mobile Logo Centered */}
            <div className="d-flex justify-content-center d-md-none mb-3 mt-5 ">
              <Image
                src={logo}
                alt="Mythri Builders Mobile Logo"
                width={120}
                height={70}
                className="white-png logo img-fluid"
                priority
              />
            </div>

            <h4 className="footer-title">Office Address</h4>
            <p style={{ whiteSpace: "pre-line" }}>{address}</p>
            <p><Link href="tel:+919164789898" className="text-white text-decoration-none">9164789898</Link></p>
            <p><Link className="text-white text-decoration-none" href="mailto:enquiry@mythribuilders.co.in">enquiry@mythribuilders.co.in </Link> </p>

            <h5 className="fw-bold mt-3 mb-2">Follow Us</h5>
            <div className="footer-social d-flex gap-3 justify-content-center justify-content-md-start">
              <Link href="https://www.facebook.com/Mythribuilders">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com/mythribuilders/">
                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://x.com/mythribuilder98">
                <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://in.linkedin.com/company/mythri-builders">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="https://www.youtube.com/@mythribuilders">
                <Image src="/images/youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>

          {/* Column 2 : Desktop Logo + Links */}
          <div className="col-md-4">

            {/* Desktop Logo Centered */}
            <div className="d-none d-md-flex justify-content-center mb-3">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Mythri Builders Logo"
                  width={160}
                  height={100}
                  className="white-png logo img-fluid"
                />
              </Link>
            </div>

            <h4 className="footer-title text-rights">Quick Links</h4>
            <ul className="footer-links list-unstyled text-rights">
              <li className="mb-1"><Link href="/" >Home</Link></li>
              <li className="mb-1"><Link href="/about">About</Link></li>
              <li className="mb-1"><Link href="/project" >Project</Link></li>
              <li className="mb-1"><Link href="/blogs" >Blog</Link></li>
              <li className="mb-1"><Link href="/career" >Career</Link></li>
              <li className="mb-1"><Link href="/contact" >Contact</Link></li>
              <li className="mb-1"><Link href="/privacy-policy" >Privacy Policy</Link></li>
              <li className="mb-1"><Link href="/term-and-conditions" >Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3 : Contact Form */}
          <div className="col-md-4 magin-top-footer">
            <h4 className="footer-title">Get in Touch</h4>
            <ContactForm
              inputClass="footer-input rounded-0 mb-2"
              buttonClass="btn btn-light text-dark w-100"
              hideMessageField
              defaultMessage="Interested in this project"
            />
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center mt-5 pt-4 pb-3 border-top border-light">
          <p className="mb-0">
            © {new Date().getFullYear()} Mythri Builders. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating */}
      <Link
        href="https://wa.me/9164789898"
        target="_blank"
        className="whatsapp-float"
      >
        <Image
          src="/images/black-white-whatsapp-icon.png"
          alt="WhatsApp"
          width={50}
          height={50}
        />
      </Link>
    </footer>
  );
}
