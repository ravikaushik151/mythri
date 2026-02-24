import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../app/components/ContactForm";
export default function Contact() {
  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container position-relative">
              <Image
                src="/images/contact us.webp"
                height={2880}
                width={1920}
                className="img-fluid masterpiece "
                alt="masterpiece"
              />
              <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="text-white d-block text-center">
                  <h1 className="fs-1 mb-3 text-uppercase">Contact Us</h1>
                  <p className="fs-6 text-center">
                    <Link className="text-white text-decoration-none " href="https://mythribuilders.com/">
                      Home
                    </Link>{" "}
                    / Contact Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white theme-bg-dark contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="heading">
                <h2 className="text-center text-black mt-md-0 mt-4 mb-0 mb-md-5">GET IN TOUCH WITH OUR TEAM</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
                {/* Contact Form */}
                <div className="col-md-7 content-card">
                  <div className="contact_form_inner px-md-5 px-3 mb-4">
                    <div className="contact_field">
                      <p className="text-main text-black mb-3">
                        Feel free to contact us any time. We will get back to
                        you as soon as we can!
                      </p>
                      <ContactForm
                        inputClass="form-control mb-2"
                        buttonClass="btn theme-bg-dark text-light px-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="col-md-5 d-flex align-items-center">
                  <div className="contact_info_sec text-bg-dark px-md-5 py-md-5 px-4 py-4 text-white shadow  theme-bg-light">
                    <div className="py-md-4">
                      <h4 className="text-white mb-3 theme-color-dark ">Contact Info</h4>

                      {/* <div className="d-flex info_single align-items-center pb-2">
                        <Link
                          href="tel:+911234567890"
                          className="text-white text-decoration-none theme-color-dark"
                        >
                          <svg style={{ width: "20px", height: "20px" }} className="w-8 h-8 text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z" /></svg>
                          <span> +91 80 XXX XXXX</span>
                        </Link>
                      </div>  */}

                      <div className="d-flex info_single align-items-center pb-2">
                        <Link
                          href="mailto:ienquiry@mythribuilders.co.in"
                          className="text-white text-decoration-none theme-color-dark"
                        >
                          <svg style={{ width: "20px", height: "20px" }} className="w-8 h-8 text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>

                          <span> enquiry@mythribuilders.co.in</span>
                        </Link>
                      </div>

                      <div className="d-flex info_single pb-2">

                        <svg style={{ width: "20px", height: "20px" }} className="w-10 h-10 text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 112C576 100.9 570.3 90.6 560.8 84.8C551.3 79 539.6 78.4 529.7 83.4L413.5 141.5L234.1 81.6C226 78.9 217.3 79.5 209.7 83.3L81.7 147.3C70.8 152.8 64 163.9 64 176L64 528C64 539.1 69.7 549.4 79.2 555.2C88.7 561 100.4 561.6 110.3 556.6L226.4 498.5L399.7 556.3C395.4 549.9 391.2 543.2 387.1 536.4C376.1 518.1 365.2 497.1 357.1 474.6L255.9 440.9L255.9 156.4L383.9 199.1L383.9 298.4C414.9 262.6 460.9 240 511.9 240C534.5 240 556.1 244.4 575.9 252.5L576 112zM512 288C445.7 288 392 340.8 392 405.9C392 474.8 456.1 556.3 490.6 595.2C502.2 608.2 521.9 608.2 533.5 595.2C568 556.3 632.1 474.8 632.1 405.9C632.1 340.8 578.4 288 512.1 288zM472 408C472 385.9 489.9 368 512 368C534.1 368 552 385.9 552 408C552 430.1 534.1 448 512 448C489.9 448 472 430.1 472 408z" /></svg>
                        <span className="text-white">
                          <strong className="d-block mb-0">&nbsp;Office Address</strong>
                          #2802, Broadway Building<br />  27th Main Road<br /> Sector 1, HSR Layout,<br /> Bengaluru - 560102.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Contact Info */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0 d-none">
        <div className="contanter-fuild">
          <div className="row">
            <div className="col-md-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248853.859776601!2d77.43455888476556!3d12.949982343870047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1752757648398!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
