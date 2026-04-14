import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
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

  // ✅ NAME (only alphabets + spaces)
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (!nameRegex.test(form.name)) {
    newErrors.name = "Name must contain only letters";
  }

  // ✅ EMAIL (gmail + no <> + must end with .com)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (/[<>]/.test(form.email)) {
    newErrors.email = "Invalid characters in email";
  } else if (!emailRegex.test(form.email)) {
    newErrors.email = "Must be a valid @gmail.com address";
  }

  // ✅ MESSAGE (allow text, numbers, links)
  const messageRegex = /^[A-Za-z0-9\s.,:/?&=#+-]*$/;

  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  } else if (!messageRegex.test(form.message)) {
    newErrors.message = "Invalid characters in message";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  // Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        setForm({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (err) {
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT: TEXT */}
          <div>
            <p className="text-sm font-semibold text-[#2f5d50]">
              Get in touch
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
              Tell us about your project
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#2b2b2b]/70">
              Share a few details about what you’re working on.
              We’ll review your message and get back to you with next steps.
            </p>
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-2xl
              border border-black/10
              bg-[#f8f7f4]
              p-8
            "
          >
            <div className="grid gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2f5d50]/50"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2f5d50]/50"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Project type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2f5d50]/50"
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
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe what you need help with"
                  className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none resize-none transition focus:border-[#2f5d50]/50"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#2f5d50] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f5d50]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2f5d50]/60"
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