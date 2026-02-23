import React from "react";
import project1 from "../assets/desktop-design.webp";
import project2 from "../assets/Amazing-car-company.webp";
import project3 from "../assets/Shawlser.webp";
import worki1 from "../assets/proj1.jpg";
import worki2 from "../assets/proj2.jpg";
import worki3 from "../assets/proj3.jpg";
import worki4 from "../assets/proj4.jpg";
import project4 from "../assets/Superheroes.webp";
import project5 from "../assets/mobile-design.webp";
import project6 from "../assets/Music-player.webp";
import { motion } from "framer-motion";

function Works() {
  const projects = [
    {
      img: worki4,
      category: "University FAQs, AI Chatbot",
      title: "University FAQs Chatbot AI",
    },
    {
      img: worki1,
      category: "School Management, Accuracy System",
      title: "School Accuracy System",
    },
    {
      img: worki2,
      category: "AI, Face Recognition System",
      title: "Face Recognition",
    },
    {
      img: worki3,
      category: "E-commerce Website, Bakery",
      title: "E-commerce for Bakery",
    },
    { img: project1, category: "E-Commerce Website", title: "Sneakers" },
    {
      img: project2,
      category: "Services Website, HTML CSS",
      title: "Cars",
    },
    {
      img: project5,
      category: "Interactive Card, HTML, CSS",
      title: "Payment",
    },
    {
      img: project3,
      category: "E-commerce Store, WordPress",
      title: "ShawlsLer",
    },
    { img: project4, category: "Portfolio, Reactjs", title: "Superheroes" },
    { img: project6, category: "Music Player, HTML CSS", title: "Songs" },
  ];

  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
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
              Projects
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            A selection of my recent work and projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const tags = project.category.split(", ");
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.7)" }}
                  >
                    <span
                      className="text-white font-semibold text-sm px-5 py-2.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      View Project
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h4
                    className="font-bold text-base mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span key={i} className="tech-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Works;
