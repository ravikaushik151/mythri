"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface ContactFormProps {
  showMessage?: boolean;
  inputClass?: string;
  buttonClass?: string;
  hideMessageField?: boolean; // hide textarea
  defaultMessage?: string; // default message
  redirectUrl?: string; // optional redirect
  autoDownloadPdf?: string; // optional PDF download URL
  phpEndpoint?: string; // default "mail.php"
}

export default function ContactForm({
  showMessage = true,
  inputClass = "form-control mb-2",
  buttonClass = "btn btn-primary",
  hideMessageField = false,
  defaultMessage = "",
  redirectUrl,
  autoDownloadPdf,
  phpEndpoint = "mail.php",
}: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: defaultMessage,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [note, setNote] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      // Prepare form data for PHP endpoint
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.mobile);
      formData.append("message", form.message);

      const response = await fetch(phpEndpoint, {
        method: "POST",
        body: formData,
      });

      const resultText = await response.text();

      if (response.ok && resultText.includes("success")) {
        setSuccess(true);
        setForm({ name: "", email: "", mobile: "", message: defaultMessage });
        setNote("");

        // Auto-download PDF if provided
        if (autoDownloadPdf) {
          const link = document.createElement("a");
          link.href = autoDownloadPdf;
          link.download = autoDownloadPdf.split("/").pop() || "download.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        // Optional redirect
        if (redirectUrl) {
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 2000);
        }
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
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile"
        required
        value={form.mobile}
        onChange={handleChange}
        className={inputClass}
      />

      {!hideMessageField && (
        <textarea
          name="message"
          placeholder="Message"
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      )}

      <div className="text-start">
        <button type="submit" disabled={loading} className={buttonClass}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>

      {note && <p className="text-danger mt-2">{note}</p>}

      {success && showMessage && (
        <div className="text-center">
          <p className="text-success mt-2">
            ✅ Thank you! We’ll get back to you soon.
          </p>
        </div>
      )}
    </form>
  );
}
