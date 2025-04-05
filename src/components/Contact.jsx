import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>support@codemaster.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Send a Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
