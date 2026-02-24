"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
  project: string; // ✅ New field
}

interface ContactFormProps {
  showMessage?: boolean;
  inputClass?: string;
  buttonClass?: string;
  hideMessageField?: boolean;
  defaultMessage?: string;
  redirectUrl?: string;
  autoDownloadPdf?: string;
  phpEndpoint?: string;
}

export default function ContactForm({
  showMessage = true,
  inputClass = "form-control mb-2",
  buttonClass = "btn theme-bg-dark text-white border",
  hideMessageField = false,
  defaultMessage = "",
  redirectUrl,
  autoDownloadPdf,
  phpEndpoint = "https://mythribuilders.com/mail.php",
}: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: defaultMessage,
    project: "", // ✅ initial value
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [note, setNote] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> // ✅ added HTMLSelectElement
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setNote("");

    // ✅ Basic validation (now includes project)
    if (!form.name || !form.email || !form.mobile || !form.project) {
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
      formData.append("project", form.project); // ✅ send project to PHP

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
        setForm({
          name: "",
          email: "",
          mobile: "",
          message: defaultMessage,
          project: "", // ✅ reset
        });
        setNote("");

        if (autoDownloadPdf) {
          const link = document.createElement("a");
          link.href = autoDownloadPdf;
          link.download = autoDownloadPdf.split("/").pop() || "download.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        if (redirectUrl) {
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.href = "/thank-you";
          }, 1000);
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

      {/* ✅ Select Project field */}
      <select
        name="project"
        required
        value={form.project}
        onChange={handleChange}
        className={inputClass}
      >
        <option value="">Select Project</option>
        <option value="Mythri Street">Mythri Street</option>
        <option value="Mythri Sity">Mythri Sity</option>
        <option value="Mythri Sikharam">Mythri Sikharam</option>
        <option value="Mythri Sankalp">Mythri Sankalp</option>
      </select>

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

      <div className="text-center">
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