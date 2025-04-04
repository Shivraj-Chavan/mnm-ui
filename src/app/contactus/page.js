"use client"
import React, { useState } from "react";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company_name: "",
    name: "",
    phone: "",
    enquiry: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Your enquiry has been sent successfully!");
        setFormData({ company_name: "", name: "", phone: "", enquiry: "" });
      } else {
        setMessage(result.message || "Something went wrong!");
      }
    } catch (error) {
      setMessage("Failed to send enquiry!");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center px-6 py-6 bg-gradient-to-br from-[#FF9933] via-white to-[#138808]">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Enter Your Details, Our Team Will Contact You Soon...
        </h2>

        {message && <p className="text-center text-green-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <TextInput
            label="Company Name"
            id="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Your Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Phone Number"
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextArea
            label="Enquiry"
            id="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          />
          <Button text={loading ? "Sending..." : "Submit"} disabled={loading} />
        </form>
      </div>
    </div>
  );
}
