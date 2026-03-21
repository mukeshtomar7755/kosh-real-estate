"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      form.reset();
      setSuccess(true);
    } else {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-[#0b1d33] to-[#1f3a5f] text-white">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-gray-300">
            Looking for your dream property? Contact us today and we’ll help you find the perfect match.
          </p>

          <div className="mt-6 space-y-3 text-gray-300">
            <p>📞 +91 8448932592</p>
            <p>📧 koshrealestate@gmail.com</p>
            <p>📍 Uttam Nagar, Delhi</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-4"
        >
          
          <h3 className="text-xl font-semibold mb-2">Send Enquiry</h3>

          <input
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-400 text-sm text-center">
              ✅ Enquiry sent successfully!
            </p>
          )}
        </form>

      </div>
    </section>
  );
}