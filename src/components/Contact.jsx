import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import cv from "../assets/Resume.pdf";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_n8ua2ta", "template_iwygehi", form.current, {
        publicKey: "haTzPLqS_TJp1liFN",
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const contactDetails = [
    {
      icon: CiMail,
      label: "mahboobiqbal774@gmail.com",
      href: "mailto:mahboobiqbal774@gmail.com",
      color: "#06b6d4",
    },
    {
      icon: IoPhonePortraitOutline,
      label: "+92 347 2886228",
      href: "tel:+923472886228",
      color: "#22c55e",
    },
    {
      icon: FaLocationDot,
      label: "Islamabad, Pakistan",
      href: "#",
      color: "#f59e0b",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/mahboobiqbal/",
      color: "#06b6d4",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Mahboobiqbal",
      color: "#8b5cf6",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/MkBhaii987654321/",
      color: "#6366f1",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/mk__bhaii/",
      color: "#f43f5e",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl tablet:text-4xl laptop:text-5xl font-black mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Have a project in mind? Let&apos;s work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
          {/* Left – Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="modern-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="modern-input"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="modern-input"
                  placeholder="Your message..."
                  rows={5}
                  style={{ resize: "vertical", minHeight: "140px" }}
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="accent-btn w-full justify-center"
              >
                <IoSendSharp />
                Send Message
              </motion.button>

              {successMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium text-center mt-2"
                  style={{ color: "var(--success-color)" }}
                >
                  ✓ {successMessage}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 flex flex-col gap-6"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div>
              <h3
                className="font-bold text-xl mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Let&apos;s connect and collaborate!
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                I&apos;m open to freelance projects, full-time positions, and
                exciting opportunities.
              </p>
            </div>

            {/* Direct Contact */}
            <div>
              <h5
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Direct Contact
              </h5>
              <div className="space-y-3">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-3 group"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                        style={{
                          background: `${item.color}18`,
                          color: item.color,
                        }}
                      >
                        <Icon />
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Connect With Me */}
            <div>
              <h5
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Connect With Me
              </h5>
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm text-white"
                      style={{
                        background: social.color,
                        textDecoration: "none",
                      }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <a
              href={cv}
              download
              className="accent-btn w-full justify-center mt-auto"
              style={{ textDecoration: "none" }}
            >
              <FaDownload />
              Download My CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
