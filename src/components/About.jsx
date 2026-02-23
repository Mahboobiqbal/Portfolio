import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppShortcut } from "react-icons/md";
import { TfiRulerPencil } from "react-icons/tfi";
import { FaGitAlt } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stats = [
  { value: "12+", label: "Certificates", color: "#06b6d4" },
  { value: "10+", label: "Projects", color: "#8b5cf6" },
  { value: "2+", label: "Companies", color: "#22c55e" },
  { value: "4+", label: "Years Study", color: "#f43f5e" },
];

function About() {
  const services = [
    {
      icon: CgWebsite,
      title: "Web Development",
      description:
        "Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB for building full-stack web applications.",
      color: "#8b5cf6",
    },
    {
      icon: MdOutlineAppShortcut,
      title: "App Development",
      description:
        "Flutter developer with a strong foundation in app UI design. Creating user-friendly apps with high performance.",
      color: "#f59e0b",
    },
    {
      icon: TfiRulerPencil,
      title: "UI/UX Design",
      description:
        "Designing intuitive UIs with Figma & Adobe XD, prioritizing user-friendly, accessible experiences.",
      color: "#f43f5e",
    },
    {
      icon: FaGitAlt,
      title: "Version Control",
      description:
        "Leveraging Git & GitHub for seamless collaboration and clean code management.",
      color: "#06b6d4",
    },
  ];

  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8 laptop:px-12">
        {/* Stats Row */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 laptop:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="text-5xl font-black mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Section Title */}
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
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
        </motion.div>

        {/* Description – 2 columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mb-20"
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            As an aspiring Software Engineer, I possess a strong foundation in{" "}
            <strong style={{ color: "var(--text-primary)" }}>JavaScript</strong>
            , particularly in{" "}
            <strong style={{ color: "var(--text-primary)" }}>MERN Stack</strong>{" "}
            and{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              web development
            </strong>
            , with a solid foundation in{" "}
            <strong style={{ color: "var(--text-primary)" }}>Python</strong>.
            Self-motivated and hardworking, eager to contribute in a dynamic
            environment.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Seeking opportunities to apply my skills, I aim to grow
            professionally while making meaningful contributions to the
            organization&apos;s success.
          </motion.p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3
            className="text-2xl tablet:text-3xl font-bold mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            What I Do!
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card p-6 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{
                    background: `${service.color}18`,
                    color: service.color,
                  }}
                >
                  <Icon />
                </div>
                <h4
                  className="font-bold text-base mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
