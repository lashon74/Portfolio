import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "HTML / CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "C#",
  "ASP.Net Core",
  "SQL",
  "REST API",
  "Git / GitHub",
  "WordPress",
  "MongoDB",
  "JQuery",
  "Bootstrap",
  "UI/UX Design",
  "SEO",
  "PostMan",
  "Scrum",
  "JIRA",
  "VB .Net",
  "TFS",
  "S.O.L.I.D",
  "Web Design",
  "Reporting",
  "Azure DevOps",
  "React Native",
];

function getSpherePositions(count, radius) {
  const positions = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    positions.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return positions;
}

const RADIUS = 200;
const spherePositions = getSpherePositions(skills.length, RADIUS);

const SkillSphere = ({ isDark }) => {
  const [rotation, setRotation] = useState(0);
  const [phase, setPhase] = useState("hidden");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const rafRef = useRef(null);
  const rotRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;
    // Phase 1: appear scattered
    setPhase("scatter");
    // Phase 2: converge to sphere
    const t1 = setTimeout(() => setPhase("sphere"), 1200);
    return () => clearTimeout(t1);
  }, [isInView]);

  // Spin once in sphere phase
  useEffect(() => {
    if (phase !== "sphere") return;
    const spin = () => {
      rotRef.current += 0.004;
      setRotation(rotRef.current);
      rafRef.current = requestAnimationFrame(spin);
    };
    rafRef.current = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  const bg = isDark ? "#f5f5f5" : "#1b1b1b";
  const fg = isDark ? "#1b1b1b" : "#f5f5f5";
  const accent = isDark ? "rgba(88,230,217,0.35)" : "rgba(182,62,150,0.25)";

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: 520,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse at center, ${accent} 0%, transparent 65%)`,
        }}
      />

      {/* Center badge */}
      <motion.div
        animate={{
          opacity: phase === "hidden" ? 0 : 1,
          scale: phase === "sphere" ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          zIndex: 20,
          width: 76,
          height: 76,
          borderRadius: "50%",
          background: bg,
          color: fg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 13,
          boxShadow: `0 0 24px ${accent}`,
        }}
      >
        Skills
      </motion.div>

      {/* Skill pills */}
      {skills.map((skill, i) => {
        // Random scatter position
        const scatterX = ((i * 137 + 50) % 600) - 300;
        const scatterY = ((i * 97 + 30) % 400) - 200;

        // 3D sphere projection
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const sp = spherePositions[i];
        const x3d = sp.x * cosR - sp.z * sinR;
        const z3d = sp.x * sinR + sp.z * cosR;
        const y3d = sp.y;
        const persp = 550;
        const scale3d = persp / (persp + z3d);
        const x2d = x3d * scale3d;
        const y2d = y3d * scale3d;
        const depth = (z3d + RADIUS) / (RADIUS * 2);
        const opacity3d = 0.3 + depth * 0.7;

        const isSphere = phase === "sphere";
        const targetX = isSphere ? x2d : phase === "hidden" ? 0 : scatterX;
        const targetY = isSphere ? y2d : phase === "hidden" ? 0 : scatterY;
        const targetOpacity =
          phase === "hidden" ? 0 : isSphere ? opacity3d : 0.85;
        const targetScale = isSphere
          ? Math.max(0.55, scale3d)
          : phase === "hidden"
            ? 0
            : 1;

        return (
          <motion.div
            key={skill}
            animate={{
              x: targetX,
              y: targetY,
              opacity: targetOpacity,
              scale: targetScale,
              zIndex: isSphere ? Math.round(depth * 15) : 5,
            }}
            transition={{
              x: { duration: isSphere ? 0.05 : 1, ease: "easeOut" },
              y: { duration: isSphere ? 0.05 : 1, ease: "easeOut" },
              opacity: {
                duration: 0.5,
                delay: phase === "scatter" ? i * 0.04 : 0,
              },
              scale: {
                duration: 0.5,
                delay: phase === "scatter" ? i * 0.04 : 0,
              },
            }}
            whileHover={{
              scale: (isSphere ? Math.max(0.55, scale3d) : 1) * 1.25,
              zIndex: 50,
            }}
            style={{ position: "absolute", cursor: "pointer" }}
          >
            <div
              style={{
                background: bg,
                color: fg,
                padding: "5px 13px",
                borderRadius: 999,
                fontSize: isSphere ? Math.max(9, 13 * scale3d) : 11,
                fontWeight: 600,
                whiteSpace: "nowrap",
                boxShadow: isSphere
                  ? `0 0 ${Math.round(10 * depth)}px ${accent}`
                  : "none",
                transition: "font-size 0.1s",
              }}
            >
              {skill}
            </div>
          </motion.div>
        );
      })}

      {/* Orbit ring decorations */}
      {phase === "sphere" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ position: "absolute", pointerEvents: "none" }}
        >
          {[
            { w: 420, h: 140, rz: 0 },
            { w: 380, h: 130, rz: 60 },
            { w: 360, h: 120, rz: -45 },
          ].map((ring, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: ring.w,
                height: ring.h,
                borderRadius: "50%",
                border: `1px dashed ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
                transform: `translate(-50%, -50%) rotateX(75deg) rotateZ(${ring.rz}deg)`,
                top: 0,
                left: 0,
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Mobile version — staggered grid reveal
const MobileSkills = ({ isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const bg = isDark ? "#f5f5f5" : "#1b1b1b";
  const fg = isDark ? "#1b1b1b" : "#f5f5f5";

  return (
    <div ref={ref} style={{ padding: "1rem", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: bg,
              color: fg,
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkDark();
    checkMobile();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("resize", checkMobile);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full mb-64 md:mb-32 mt-8 flex items-center justify-center">
        {isMobile ? (
          <MobileSkills isDark={isDark} />
        ) : (
          <SkillSphere isDark={isDark} />
        )}
      </div>
    </>
  );
};

export default Skills;
