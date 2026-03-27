import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SideNav = ({ sections }) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers = sections.map((section, i) => {
      const el = document.getElementById(section.id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            right: 24,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
          }}
          className="md:hidden"
        >
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => scrollTo(section.id)}
              title={section.label}
              style={{
                width: active === i ? 10 : 8,
                height: active === i ? 10 : 8,
                borderRadius: "50%",
                background: active === i ? "#B63E96" : "transparent",
                border: `2px solid ${active === i ? "#B63E96" : "#888"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                padding: 0,
                position: "relative",
              }}
            >
              {/* Tooltip */}
              <span
                style={{
                  position: "absolute",
                  right: "calc(100% + 10px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#1b1b1b",
                  color: "#f5f5f5",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 6,
                  whiteSpace: "nowrap",
                  opacity: 0,
                  pointerEvents: "none",
                  transition: "opacity 0.15s",
                }}
                className="nav-tooltip"
              >
                {section.label}
              </span>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
