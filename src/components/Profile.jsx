import React from "react";
import img from "../assets/profile-pic.png";
import cv from "../assets/Resume.pdf";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa6";
import { useDarkMode } from "./DarkModeContex";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Profile() {
  const { isDarkMode } = useDarkMode();

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

  const contactInfo = [
    {
      icon: IoPhonePortraitOutline,
      label: "Phone",
      value: "+92 347 2886228",
      color: "#f43f5e",
    },
    {
      icon: CiMail,
      label: "Email",
      value: "mahboobiqbal774@gmail.com",
      color: "#06b6d4",
    },
    {
      icon: FaLocationDot,
      label: "Location",
      value: "Islamabad, Pakistan",
      color: "#f59e0b",
    },
    {
      icon: SlCalender,
      label: "Birthday",
      value: "March 12th, 2001",
      color: "#8b5cf6",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card-static p-6 laptop:p-8 laptop:sticky laptop:top-24"
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="w-40 h-40 tablet:w-48 tablet:h-48 rounded-2xl overflow-hidden ring-2 ring-offset-2"
          style={{
            ringColor: "var(--border-hover)",
            ringOffsetColor: "var(--bg-card)",
          }}
        >
          <img
            src={img}
            className="w-full h-full object-cover"
            alt="Mahboob Iqbal"
          />
        </motion.div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-6">
        <h2
          className="text-xl font-bold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Mahboob Iqbal
        </h2>
        <span
          className="inline-block text-sm font-medium px-4 py-1.5 rounded-lg"
          style={{
            background: "var(--tag-bg)",
            color: "var(--tag-text)",
          }}
        >
          Developer | Designer | Freelancer
        </span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 mb-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300"
              style={{
                background: "var(--bg-input)",
                color: social.color,
                border: "1px solid var(--border-color)",
              }}
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>

      {/* Contact Info */}
      <div
        className="rounded-2xl p-4 space-y-1 mb-6"
        style={{
          background: "var(--bg-input)",
          border: "1px solid var(--border-color)",
        }}
      >
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 py-3 ${
                index < contactInfo.length - 1 ? "border-b" : ""
              }`}
              style={{ borderColor: "var(--border-color)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: "var(--bg-card)",
                  color: item.color,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Icon />
              </div>
              <div className="min-w-0">
                <span
                  className="block text-xs font-medium uppercase tracking-wider mb-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </span>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Download CV Button */}
      <motion.a
        href={cv}
        download
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="accent-btn w-full justify-center"
      >
        <FaDownload className="text-sm" />
        Download CV
      </motion.a>
    </motion.div>
  );
}

export default Profile;
