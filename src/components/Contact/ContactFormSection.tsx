import React from "react";

const ContactFormSection: React.FC = () => {
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
            className="
              rounded-2xl
              border border-black/10
              bg-[#f8f7f4]
              p-8
            "
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6">

              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    mt-2 w-full rounded-md
                    border border-black/10
                    bg-white
                    px-4 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#2f5d50]/50
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    mt-2 w-full rounded-md
                    border border-black/10
                    bg-white
                    px-4 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#2f5d50]/50
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Project type
                </label>
                <select
                  className="
                    mt-2 w-full rounded-md
                    border border-black/10
                    bg-white
                    px-4 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#2f5d50]/50
                  "
                >
                  <option>Website</option>
                  <option>Web application</option>
                  <option>UI improvements</option>
                  <option>Bug fixes</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2b2b2b]">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe what you need help with"
                  className="
                    mt-2 w-full rounded-md
                    border border-black/10
                    bg-white
                    px-4 py-3
                    text-sm
                    outline-none
                    resize-none
                    transition
                    focus:border-[#2f5d50]/50
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  mt-4 inline-flex items-center justify-center
                  rounded-full
                  bg-[#2f5d50]
                  px-8 py-3
                  text-sm font-semibold text-white
                  shadow-lg shadow-[#2f5d50]/40
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[#2f5d50]/60
                "
              >
                Send message
              </button>

            </div>
          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;
