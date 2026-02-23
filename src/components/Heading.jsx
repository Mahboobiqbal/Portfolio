import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "./DarkModeContex";
import { FaMoon } from "react-icons/fa";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Heading() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: "var(--navbar-bg)",
        borderBottom: scrolled
          ? "1px solid var(--border-color)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-md)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12">
        <div className="flex items-center justify-between h-16 tablet:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-xl tablet:text-2xl tracking-tight"
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

          {/* Desktop Nav Links */}
          <div className="hidden laptop:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color:
                    pathname === link.to ? "#6366f1" : "var(--text-secondary)",
                  textDecoration: "none",
                  background:
                    pathname === link.to
                      ? "rgba(99,102,241,0.08)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <div
              className={`theme-toggle ${isDarkMode ? "active" : ""}`}
              onClick={toggleDarkMode}
              role="button"
              aria-label="Toggle dark mode"
            >
              <span className="theme-toggle-icon theme-toggle-sun">
                <FiSun />
              </span>
              <span className="theme-toggle-icon theme-toggle-moon">
                <FaMoon />
              </span>
            </div>

            {/* Hire Me Button – laptop and above only */}
            <div className="hidden laptop:block">
              <Link
                to="/contact"
                className="accent-btn text-sm px-5 py-2.5"
                style={{ textDecoration: "none" }}
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="laptop:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="laptop:hidden overflow-hidden border-t"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link block"
                  style={{
                    textDecoration: "none",
                    color: pathname === link.to ? "#6366f1" : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="accent-btn w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  Hire Me
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Heading;
