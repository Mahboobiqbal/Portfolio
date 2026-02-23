import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { LiaFileSignatureSolid } from "react-icons/lia";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { FaRegAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Navbar({ setSelectedItem }) {
  const [activeLink, setActiveLink] = useState("about");

  const toggleLink = (link) => {
    setActiveLink(link);
    setSelectedItem(link);
  };

  const navItems = [
    { id: "about", label: "About", icon: CiUser },
    { id: "resume", label: "Resume", icon: LiaFileSignatureSolid },
    { id: "work", label: "Works", icon: IoBriefcaseOutline },
    { id: "certificate", label: "Licences", icon: PiCertificateLight },
    { id: "contact", label: "Contact", icon: FaRegAddressBook },
  ];

  return (
    <div className="hidden tablet:block">
      <div className="glass-card-static rounded-2xl p-2 inline-flex gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeLink === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => toggleLink(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex flex-col items-center justify-center w-[80px] h-[76px] rounded-xl font-medium text-sm cursor-pointer border-none outline-none transition-all duration-300"
              style={{
                background: isActive ? "var(--accent-gradient)" : "transparent",
                color: isActive ? "#ffffff" : "var(--text-secondary)",
              }}
            >
              <Icon className="text-xl mb-1.5" />
              <span className="text-xs font-semibold">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "var(--accent-gradient)", zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
