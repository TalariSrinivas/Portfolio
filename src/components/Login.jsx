import React, { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "1e3be67f-e689-4a6c-8d67-8e7f9555b029");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccess(true);
      event.target.reset();
    }
  };

  return (
    <>
      <style>{`
        @property --a {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .about-border {
          border-radius: 1rem;
          border: 2px solid transparent;
          background: linear-gradient(#0f0f0f, #0f0f0f) padding-box,
            conic-gradient(
              from 0deg,
              #f72585,
              #7209b7,
              #3a0ca3,
              #4361ee,
              #4cc9f0,
              #f72585
            ) border-box;
        }

        .download-btn-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 12px;
          padding: 8px;
          background: transparent;
          z-index: 0;
          width: 100%;
        }

        .download-btn-wrapper::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(from var(--a), #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #f72585);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: spin 4s linear infinite;
          z-index: -1;
        }

        .download-btn {
          position: relative;
          border-radius: 10px;
          background: black;
          color: white;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          z-index: 1;
          text-decoration: none;
          user-select: none;
          transition: background-color 0.3s ease;
          width: 100%;
        }

        .download-btn:hover {
          background-color: #1a1a1a;
        }

        @keyframes spin {
          to {
            --a: 360deg;
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#0f0f0f] px-6 md:px-16 py-16 flex items-center justify-center text-white">
        <div className="about-border w-full max-w-xl p-8 bg-black bg-opacity-80 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-purple-500 text-center">
            Contact Me
          </h2>

          {success && (
            <div className="mb-4 p-4 bg-green-900 border border-green-700 text-green-400 rounded">
              ✅ Message sent successfully!
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6 font-mono">
            <div>
              <label htmlFor="name" className="block text-sm mb-1 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] text-white p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] text-white p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] text-white p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              ></textarea>
            </div>

            <div className="download-btn-wrapper">
              <button type="submit" className="download-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
