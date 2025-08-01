import React from "react";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Animation variant
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow">
        <motion.section
          id="home"
          className="scroll-mt-40 mt-40 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <Home />
        </motion.section>

        <motion.section
          id="about"
          className="scroll-mt-40 mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <About />
        </motion.section>

        <motion.section
          id="portfolio"
          className="scroll-mt-40 mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <Portfolio />
        </motion.section>

        <motion.section
          id="experience"
          className="scroll-mt-40 mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-40 mt-40 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <Contact />
        </motion.section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
