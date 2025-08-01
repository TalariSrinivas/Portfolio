import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      access_key: "1e3be67f-e689-4a6c-8d67-8e7f9555b029",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Your message has been sent!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-[#0d1117] text-white">
      
      {/* Heading */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-semibold mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 tracking-wide">
          &lt;Contact Me /&gt;
        </h1>
        <p className="text-gray-400 mb-10 text-lg">Feel free to reach out through socials or the form below.</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-14"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          {
            href: "https://www.linkedin.com/in/talari-srinivas/",
            src: "/linkedin.png",
            label: "talari-srinivas",
            color: "text-blue-400",
            border: "border-blue-500",
            shadow: "hover:shadow-blue-500/30"
          },
          {
            href: "https://github.com/TalariSrinivas",
            src: "/github.png",
            label: "TalariSrinivas",
            color: "text-gray-300",
            border: "border-white",
            shadow: "hover:shadow-purple-500/30"
          },
          {
            href: "mailto:talarisrinivas201067@gmail.com",
            src: "/mail.png",
            label: "talarisrinivas201067@gmail.com",
            color: "text-yellow-300",
            border: "border-yellow-300",
            shadow: "hover:shadow-yellow-400/30"
          },
        ].map(({ href, src, label, color, border, shadow }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className={`flex items-center bg-[#161b22] border border-gray-700 rounded-xl px-6 py-4 transition duration-300 shadow-md ${shadow}`}>
              <img src={src} alt={label} className={`w-12 h-12 rounded-full ${border}`} />
              <p className={`ml-4 ${color} text-lg underline break-all`}>{label}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="flex justify-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#161b22] border border-gray-700 p-8 rounded-2xl w-full max-w-md text-white shadow-lg shadow-blue-500/10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
            Send a Message
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-teal-400"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">This field is required</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-300">Email Address</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-teal-400"
              placeholder="Your email address"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">This field is required</p>}
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-gray-300">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-teal-400"
              placeholder="Type your message here..."
              rows={4}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">This field is required</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-purple-600 hover:to-teal-600 text-white py-2 rounded-xl font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
