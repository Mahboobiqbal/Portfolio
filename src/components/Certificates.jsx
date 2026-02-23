import React from "react";
import cert1 from "../assets/1.jpg";
import cert2 from "../assets/2.jpg";
import cert3 from "../assets/3.jpg";
import cert4 from "../assets/4.jpg";
import cert5 from "../assets/5.jpg";
import cert6 from "../assets/6.jpg";
import cert7 from "../assets/7.jpg";
import cert8 from "../assets/8.jpg";
import cert9 from "../assets/9.jpg";
import cert10 from "../assets/10.jpg";
import cert11 from "../assets/11.jpg";
import cert12 from "../assets/12.jpg";
import { motion } from "framer-motion";

function Certificates() {
  const certs = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
    cert10,
    cert11,
    cert12,
  ];

  return (
    <section
      id="certificates"
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-3xl tablet:text-4xl laptop:text-5xl font-black mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Certificates
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Professional certifications and achievements
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert}
                  alt={`Certificate ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(99,102,241,0.12), transparent)",
                  }}
                />
              </div>
              {/* <div className="p-4">
                <h6
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Certificate {idx + 1}
                </h6>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
