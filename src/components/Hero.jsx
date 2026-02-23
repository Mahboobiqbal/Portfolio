import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/profile-pic.png";
import cv from "../assets/Resume.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

function Hero() {
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
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12 w-full">
        <div className="flex flex-col laptop:flex-row items-center justify-between gap-12">
          {/* ── Profile Image – order-1 = top on mobile, order-2 = right on laptop ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 90,
              damping: 20,
            }}
            className="relative flex-shrink-0 order-1 laptop:order-2"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-25"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6)",
                transform: "scale(1.15)",
              }}
            />

            {/* Gradient border frame */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6)",
                padding: "3px",
                width: "clamp(270px, 28vw, 370px)",
              }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  height: "clamp(330px, 36vw, 450px)",
                }}
              >
                <img
                  src={img}
                  alt="Mahboob Iqbal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge – Open to Work */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Open to Work 🚀
              </span>
            </motion.div>

            {/* Floating badge – MERN Stack */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-4 -right-6 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                backdropFilter: "blur(10px)",
              }}
            >
              <HiOutlineCode style={{ color: "#6366f1", fontSize: "1.1rem" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                MERN Stack
              </span>
            </motion.div>
          </motion.div>

          {/* ── Text Content – order-2 = below image on mobile, order-1 = left on laptop ── */}
          <div className="flex-1 max-w-2xl order-2 laptop:order-1">
            {/* Availability Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </span>
              <span className="tech-tag">MERN Stack Dev</span>
              <span className="tech-tag">UI/UX Designer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-black leading-[1.08] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Full Stack Web
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #6366f1 55%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Developer
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-medium mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Building intelligent solutions that transform ideas into reality
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-sm mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Specializing in MERN Stack, Flutter, UI/UX Design, and
              cutting-edge web technologies
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                to="/projects"
                className="accent-btn"
                style={{ textDecoration: "none" }}
              >
                View My Work
              </Link>
              <a
                href={cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  border: "1.5px solid var(--border-hover)",
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                }}
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm text-white shadow-md"
                    style={{ background: social.color, textDecoration: "none" }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 pt-10 pb-10"
        >
          <span
            className="text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            Scroll Down
          </span>
          <FiArrowDown
            className="animate-bounce text-xl"
            style={{ color: "var(--text-muted)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
