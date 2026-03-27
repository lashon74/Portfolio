import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactModal = ({ isOpen, onClose }) => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Website Design & Development",
    "Monthly Maintenance Plan",
    "Google Business & SEO Setup",
    "E-Commerce & Online Store",
    "Logo Design",
    "Social Media Setup",
    "Booking & Appointment System",
    "Domain Setup & Management",
    "Speed & Performance Optimization",
    "Content Writing",
    "Not sure yet — let's talk",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        PUBLIC_KEY,
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
        onClose();
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again or call directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "#2a2a2a",
    border: "1.5px solid #333",
    borderRadius: 10,
    padding: "8px 12px",
    color: "#f5f5f5",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle = {
    color: "#a0a0a0",
    fontSize: 11,
    fontWeight: 600,
    display: "block",
    marginBottom: 4,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              zIndex: 200,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
              zIndex: 201,
              width: "calc(100% - 32px)",
              maxWidth: 500,
              height: "fit-content",
              maxHeight: "calc(100vh - 40px)",
              overflowY: "auto",
              overflowX: "hidden",
              background: "#1b1b1b",
              borderRadius: 20,
              border: "2px solid #B63E96",
              padding: "1.25rem",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                background: "transparent",
                border: "none",
                color: "#a0a0a0",
                fontSize: 20,
                cursor: "pointer",
                lineHeight: 1,
                zIndex: 10,
                padding: 4,
              }}
            >
              ✕
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "2rem 0" }}
              >
                <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
                <h3
                  style={{
                    color: "#B63E96",
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Message sent!
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: 13 }}>
                  I received your message and will get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div style={{ marginBottom: "0.75rem", paddingRight: 24 }}>
                  <p
                    style={{
                      color: "#B63E96",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Free Consultation
                  </p>
                  <h2
                    style={{
                      color: "#f5f5f5",
                      fontSize: 20,
                      fontWeight: 800,
                      marginBottom: 3,
                    }}
                  >
                    Let&apos;s build something great
                  </h2>
                  <p style={{ color: "#a0a0a0", fontSize: 12 }}>
                    Fill this out and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        placeholder="(912) 000-0000"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle}>What do you need? *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        color: form.service ? "#f5f5f5" : "#666",
                      }}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {services.map((s, i) => (
                        <option
                          key={i}
                          value={s}
                          style={{ color: "#f5f5f5", background: "#2a2a2a" }}
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>
                      Tell me about your business *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="What does your business do? What are your goals for the website?"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 80,
                      }}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p
                      style={{
                        color: "#E24B4A",
                        fontSize: 12,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      background: loading ? "#555" : "#B63E96",
                      border: "none",
                      borderRadius: 10,
                      padding: "11px 24px",
                      color: "#f5f5f5",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s, opacity 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) e.currentTarget.style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {loading ? "Sending..." : "Send Message — It's Free"}
                  </button>

                  <p
                    style={{
                      color: "#555",
                      fontSize: 11,
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Your info is never shared. I&apos;ll respond within 24
                    hours.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
