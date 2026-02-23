import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    percent: 90,
    level: "Expert",
    category: "Primary",
    color: "#f97316",
  },
  {
    name: "CSS3",
    percent: 85,
    level: "Expert",
    category: "Primary",
    color: "#06b6d4",
  },
  {
    name: "JavaScript",
    percent: 85,
    level: "Expert",
    category: "Primary",
    color: "#eab308",
  },
  {
    name: "React.js",
    percent: 80,
    level: "Advanced",
    category: "Primary",
    color: "#61dafb",
  },
  {
    name: "Node.js",
    percent: 78,
    level: "Advanced",
    category: "Primary",
    color: "#22c55e",
  },
  {
    name: "MongoDB",
    percent: 75,
    level: "Advanced",
    category: "Primary",
    color: "#4ade80",
  },
  {
    name: "Tailwind CSS",
    percent: 85,
    level: "Expert",
    category: "Primary",
    color: "#38bdf8",
  },
  {
    name: "Python",
    percent: 60,
    level: "Intermediate",
    category: "Primary",
    color: "#3b82f6",
  },
  {
    name: "Flutter",
    percent: 70,
    level: "Intermediate",
    category: "Secondary",
    color: "#06b6d4",
  },
  {
    name: "Figma",
    percent: 80,
    level: "Advanced",
    category: "Secondary",
    color: "#8b5cf6",
  },
  {
    name: "Git / GitHub",
    percent: 80,
    level: "Advanced",
    category: "Secondary",
    color: "#f43f5e",
  },
  {
    name: "Java",
    percent: 65,
    level: "Intermediate",
    category: "Secondary",
    color: "#f59e0b",
  },
  {
    name: "C / C++",
    percent: 65,
    level: "Intermediate",
    category: "Secondary",
    color: "#6366f1",
  },
  {
    name: "Express.js",
    percent: 75,
    level: "Advanced",
    category: "Secondary",
    color: "#94a3b8",
  },
];

const levelColors = {
  Expert: { bg: "rgba(34,197,94,0.12)", text: "#22c55e" },
  Advanced: { bg: "rgba(99,102,241,0.12)", text: "#6366f1" },
  Intermediate: { bg: "rgba(251,191,36,0.12)", text: "#f59e0b" },
};

function Skills({ homeView = false }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Primary Skills", "Secondary Skills"];

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // On home page mobile: only show primary skills, hide filter tabs
  const mobileHomeView = homeView && isMobile;

  const filtered = mobileHomeView
    ? skills.filter((s) => s.category === "Primary")
    : skills.filter(
        (s) =>
          filter === "All" ||
          (filter === "Primary Skills" && s.category === "Primary") ||
          (filter === "Secondary Skills" && s.category === "Secondary"),
      );

  const primaryCount = skills.filter((s) => s.category === "Primary").length;
  const secondaryCount = skills.filter(
    (s) => s.category === "Secondary",
  ).length;

  return (
    <section
      id="skills"
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl tablet:text-4xl laptop:text-5xl font-black mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Technologies and tools I work with regularly
          </p>
        </motion.div>

        {/* Filter Tabs – hidden on mobile home view */}
        {!mobileHomeView && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={
                  filter === f
                    ? {
                        background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                        color: "white",
                        boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
                      }
                    : {
                        background: "var(--bg-card)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-color)",
                      }
                }
              >
                {f}
              </button>
            ))}
          </motion.div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 mb-12">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              {/* Top row: name + percent */}
              <div className="flex items-center justify-between mb-3">
                <h4
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {skill.name}
                </h4>
                <span
                  className="text-xl font-black"
                  style={{ color: skill.color }}
                >
                  {skill.percent}%
                </span>
              </div>

              {/* Category badge */}
              <div className="mb-3">
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--tag-bg)",
                    color: "var(--tag-text)",
                  }}
                >
                  {skill.category} Skills
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="h-1.5 rounded-full mb-3 overflow-hidden"
                style={{ background: "var(--progress-track)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.04 + 0.2,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  }}
                />
              </div>

              {/* Level badge */}
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-md"
                style={{
                  background: levelColors[skill.level].bg,
                  color: levelColors[skill.level].text,
                }}
              >
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile home view: link to full skills page */}
        {mobileHomeView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <Link
              to="/skills"
              className="accent-btn"
              style={{ textDecoration: "none" }}
            >
              View All Skills →
            </Link>
          </motion.div>
        )}

        {/* Desktop: show 'View All' reset button when filtered */}
        {!mobileHomeView && filter !== "All" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <button onClick={() => setFilter("All")} className="accent-btn">
              ↩ View All Skills ({skills.length})
            </button>
          </motion.div>
        )}

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3
            className="text-lg font-bold text-center mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Skills Overview
          </h3>
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-6 text-center">
            {[
              { num: primaryCount, label: "Primary Skills", color: "#06b6d4" },
              {
                num: secondaryCount,
                label: "Secondary Skills",
                color: "#8b5cf6",
              },
              { num: "10+", label: "Projects Built", color: "#22c55e" },
              { num: "12+", label: "Certifications", color: "#f43f5e" },
            ].map((item, i) => (
              <div key={i}>
                <div
                  className="text-4xl font-black mb-2"
                  style={{ color: item.color }}
                >
                  {item.num}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
