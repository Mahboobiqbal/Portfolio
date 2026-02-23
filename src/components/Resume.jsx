import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Resume() {
  const education = [
    {
      period: "Sep 2020 – Dev 2024",
      title: "BS: Software Engineering",
      place: "University of Swat",
    },
    {
      period: "Aug 2017 – July 2019",
      title: "F.sc: Pre-Engineering",
      place: "GOVT Degree College Mingora Swat",
    },
    {
      period: "2015 – 2017",
      title: "Matric: Science",
      place: "Al-Azhar Educational Institute Swat",
    },
  ];

  const experience = [
    {
      period: "2025 – 2025",
      title: "Web Developer",
      place: "Dev Diligent. Islamabad",
    },
    {
      period: "Nov 2024 – March 2025",
      title: "Web Developer",
      place: "SoftoSol Pvt Ltd. Islamabad",
    },
    {
      period: "Semester [2021]",
      title: "Web Developer",
      place: "Semester project (personal project)",
    },
  ];

  const TimelineItem = ({ item, index, total }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative pl-10 pb-6 last:pb-0"
    >
      <div className="timeline-dot" />
      {index < total - 1 && (
        <div className="timeline-line" style={{ top: "22px" }} />
      )}
      <div className="glass-card p-5">
        <span
          className="inline-block text-xs font-mono font-medium px-3 py-1 rounded-md mb-2"
          style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
        >
          {item.period}
        </span>
        <h4
          className="font-semibold text-base mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {item.title}
        </h4>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {item.place}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2
            className="text-3xl tablet:text-4xl laptop:text-5xl font-black mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Experience &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Education
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  color: "white",
                }}
              >
                <FaGraduationCap />
              </div>
              <h3
                className="font-bold text-xl"
                style={{ color: "var(--text-primary)" }}
              >
                Education
              </h3>
            </motion.div>
            <div className="relative">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  total={education.length}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white",
                }}
              >
                <IoBriefcaseOutline />
              </div>
              <h3
                className="font-bold text-xl"
                style={{ color: "var(--text-primary)" }}
              >
                Experience
              </h3>
            </motion.div>
            <div className="relative">
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  total={experience.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
