import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaDownload, FaChevronDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import cv from "../assets/Resume.pdf";

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="laptop:block">
      {/* Mobile header – clickable */}
      <button
        className="laptop:hidden w-full flex items-center justify-between py-3 border-b"
        style={{
          borderColor: "var(--border-color)",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <h4
          className="font-bold text-sm uppercase tracking-widest"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h4>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FaChevronDown
            style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}
          />
        </motion.span>
      </button>

      {/* Desktop header – always visible */}
      <h4
        className="hidden laptop:block font-bold text-sm uppercase tracking-widest mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h4>

      {/* Mobile content – animated accordion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="laptop:hidden overflow-hidden"
          >
            <div className="py-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop content – always visible */}
      <div className="hidden laptop:block">{children}</div>
    </div>
  );
}

function Footer() {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contact", to: "/contact" },
  ];

  const professionalLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mahboobiqbal/" },
    { label: "GitHub", href: "https://github.com/Mahboobiqbal" },
    { label: "Facebook", href: "https://www.facebook.com/MkBhaii987654321/" },
    { label: "Instagram", href: "https://www.instagram.com/mk__bhaii/" },
  ];

  const socialLinks = [
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
  ];

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12 py-16">
        {/* Top columns */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 mb-12">
          {/* Col 1 – Brand */}
          <div>
            <Link
              to="/"
              className="font-bold text-2xl mb-4 block"
              style={{ color: "var(--text-primary)", textDecoration: "none" }}
            >
              Mahboob Iqbal
              <span
                style={{
                  background: "var(--accent-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                .
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Full-Stack Developer &amp; AI Engineer passionate about building
              intelligent solutions that transform ideas into reality.
            </p>
            <div className="flex flex-col gap-2">
              <span
                className="inline-flex items-center gap-2 text-xs font-medium"
                style={{ color: "#22c55e" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities
              </span>
              <span
                className="inline-flex items-center gap-2 text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Available for freelance
              </span>
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <AccordionSection title="Quick Links">
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-indigo-500"
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Col 3 – Professional */}
          <AccordionSection title="Professional">
            <ul className="space-y-3">
              {professionalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 hover:text-indigo-500"
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Col 4 – Get In Touch */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mahboobiqbal774@gmail.com"
                  className="text-sm hover:text-indigo-500 transition-colors"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  mahboobiqbal774@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923472886228"
                  className="text-sm hover:text-indigo-500 transition-colors"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  +92 347 2886228
                </a>
              </li>
              <li>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col tablet:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Mahboob Iqbal. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm text-white"
                  style={{ background: social.color, textDecoration: "none" }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="text-xs px-4 py-2 rounded-lg font-semibold"
              style={{
                background: "var(--accent-gradient)",
                color: "white",
                textDecoration: "none",
              }}
            >
              Hire Me
            </Link>
            <a
              href={cv}
              download
              className="text-xs px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-1.5"
              style={{
                border: "1px solid var(--border-hover)",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              <FaDownload className="text-[10px]" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
