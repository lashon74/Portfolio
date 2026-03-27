import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import AboutIcon from "./LiIcon";

const degrees = [
  {
    type: "Master of Science, Software Engineering",
    time: "2017 – 2020",
    place: "Kennesaw State University",
    location: "Kennesaw, GA",
    badge: "MS",
    color: "#B63E96",
    highlight: "Graduate",
    info: "Completed an advanced software engineering curriculum with a focus on system design, software architecture, and large-scale application development.",
    capstone:
      "Capstone: Designed and built a full-stack GitBucket clone using Angular as a team project — covering auth, repos, issues, and pull requests end to end.",
    courses: [
      "Software Architecture",
      "System Design",
      "Agile Methods",
      "Software Testing",
      "Project Management",
      "Full Stack Development",
    ],
  },
  {
    type: "Bachelor of Science, Computer Science & Technology",
    time: "2014 – 2017",
    place: "Savannah State University",
    location: "Savannah, GA",
    badge: "BS",
    color: "#58E6D9",
    highlight: "Undergraduate",
    info: "Built a strong foundation in computer science fundamentals, database management, operating systems, and software engineering principles.",
    capstone: null,
    courses: [
      "Data Structures & Algorithms",
      "Database Management",
      "Operating Systems",
      "Computer Systems Engineering",
      "Software Architecture",
      "Advanced Java",
      "Visual Basic for Applications",
    ],
  },
  {
    type: "Bachelor of Science, Cybersecurity",
    time: "2023 – 2026",
    place: "Western Governors University",
    location: "Remote",
    badge: "In Progress",
    color: "#B63E96",
    highlight: "In Progress",
    info: "Actively completing coursework in cybersecurity, network defense, ethical hacking, and information assurance — expanding enterprise-level security expertise.",
    capstone: null,
    courses: [
      "Network Security",
      "Ethical Hacking",
      "Information Assurance",
      "Cloud Security",
      "Risk Management",
      "Security Operations",
    ],
  },
];

const EducationCard = ({ degree, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className="w-full"
      >
        <div
          className="relative rounded-2xl border-2 border-solid border-dark dark:border-light 
            bg-light dark:bg-dark p-8 md:p-6 sm:p-4 mt-4 overflow-hidden"
          style={{ borderLeftColor: degree.color, borderLeftWidth: 6 }}
        >
          {/* Shadow block */}
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light" />

          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-4 sm:flex-col">
            <div className="flex-1">
              <h3 className="font-bold text-2xl sm:text-xl xs:text-lg capitalize leading-tight">
                {degree.type}
              </h3>
              <span className="text-dark/60 dark:text-light/50 font-medium text-sm mt-1 block">
                {degree.place} &nbsp;|&nbsp; {degree.location} &nbsp;|&nbsp;{" "}
                {degree.time}
              </span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0 min-w-[80px]"
              style={{
                background: `${degree.color}20`,
                border: `2px solid ${degree.color}`,
              }}
            >
              <span
                className="font-bold text-lg text-center leading-tight"
                style={{ color: degree.color }}
              >
                {degree.badge}
              </span>
              <span className="text-xs font-medium text-dark/70 dark:text-light/70 text-center">
                {degree.highlight}
              </span>
            </motion.div>
          </div>

          {/* Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm font-medium text-dark/80 dark:text-light/80 mb-4 leading-relaxed"
          >
            {degree.info}
          </motion.p>

          {/* Capstone if exists */}
          {degree.capstone && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mb-4 p-3 rounded-xl text-sm font-medium italic"
              style={{
                background: `${degree.color}12`,
                borderLeft: `3px solid ${degree.color}`,
                color: "inherit",
              }}
            >
              {degree.capstone}
            </motion.div>
          )}

          {/* Course tags */}
          <div className="flex flex-wrap gap-2">
            {degree.courses.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: `${degree.color}18`,
                  color: degree.color,
                  border: `1px solid ${degree.color}50`,
                }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <div className="my-64">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl"
      >
        Education
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-base text-dark/75 dark:text-light/75 mb-20 max-w-xl mx-auto"
      >
        Academic foundation across computer science, software engineering, and
        cybersecurity — always learning, always building.
      </motion.p>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        {/* Static background line */}
        <div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full 
  bg-dark/10 dark:bg-light/10 rounded-full"
        />
        {/* Animated progress line */}
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] 
    origin-top rounded-full"
          style={{
            scaleY: scrollYProgress,
            height: "100%",
            background: "linear-gradient(to bottom, #B63E96, #58E6D9)",
          }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {degrees.map((degree, i) => (
            <EducationCard key={i} degree={degree} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
