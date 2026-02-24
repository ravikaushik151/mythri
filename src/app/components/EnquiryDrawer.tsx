"use client";
import ContactForm from "./ContactForm";
import { useEnquiry } from "./EnquiryContext";

export default function EnquiryDrawer() {
  const { open, openDrawer, closeDrawer } = useEnquiry();

  return (
    <>
      {/* Floating Enquire Button */}
      <button
        onClick={openDrawer}
        className="position-fixed top-50 text-white fw-semibold shadow rounded-top px-3 py-2 rotate-90 z-3 right-side-button"
      >
        Enquire Now
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={closeDrawer}
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-2"
        />
      )}

      {/* Drawer */}
      <div
        className="position-fixed top-0 h-100 bg-white shadow p-4 z-3"
        style={{
          width: "380px",
          right: open ? "0" : "-380px",
          transition: "right 0.3s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={closeDrawer}
          className="btn-close position-absolute top-0 end-0 mt-3 me-3"
        />

        <h4 className="fw-bold mb-4">ENQUIRE NOW</h4>

        <ContactForm
          inputClass="form-control mb-2"
          buttonClass="btn text-white bg-dark px-4"
        />
      </div>
    </>
  );
}
