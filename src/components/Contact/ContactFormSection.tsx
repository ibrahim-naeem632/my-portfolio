import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactFormSection: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    projectType: "Website",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  // Handle change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors: Errors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(form.name)) {
      newErrors.name = "Name must contain only letters";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (/[<>]/.test(form.email)) {
      newErrors.email = "Invalid characters in email";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Must be a valid @gmail.com address";
    }

    const messageRegex = /^[A-Za-z0-9\s.,:/?&=#+-]*$/;
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (!messageRegex.test(form.message)) {
      newErrors.message = "Invalid characters in message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit (EmailJS)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await emailjs.send(
        "service_g3pzybt",
        "template_fexj3ks",
        {
          name: form.name,
          email: form.email,
          project: form.projectType,
          message: form.message,
        },
        "XsAE1WCl1Cv5sqp10"
      );
// 🔥 AUTO REPLY
await emailjs.send(
  "service_g3pzybt",
  "template_d749nwt", // 👉 client wala
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  "XsAE1WCl1Cv5sqp10"
);

      toast.success("Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        projectType: "Website",
        message: "",
      });

    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold text-[#2f5d50]">
              Get in touch
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
              Tell us about your project
            </h2>

            <p className="mt-4 max-w-md text-sm text-[#2b2b2b]/70">
              Share a few details about your idea. We’ll review it and respond quickly.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-black/10 bg-[#f8f7f4] p-8"
          >
            <div className="grid gap-6">

              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-md border border-black/10"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-md border border-black/10"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              {/* Project */}
              <div>
                <label className="text-sm font-medium">Project Type</label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-md border border-black/10"
                >
                  <option>Website</option>
                  <option>Web application</option>
                  <option>UI improvements</option>
                  <option>Bug fixes</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 w-full px-4 py-3 rounded-md border border-black/10"
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-[#2f5d50] text-white py-3 rounded-full"
              >
                {loading ? "Sending..." : "Send message"}
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;