import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import LiIcon from "./LiIcon";

const roles = [
  {
    position: "Founder & Lead Software Engineer",
    company: "Hudson Web Design & Consulting",
    companyLink: "https://www.thelashonhudson.com",
    time: "2017 – Present",
    address: "Savannah, GA",
    impact: "97%",
    impactLabel: "Client Satisfaction",
    color: "#B63E96",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "SQL",
      "UI/UX",
      "SEO",
      "WordPress",
      "Tailwind",
    ],
    bullets: [
      "Founded and operate a full-service web design and consulting practice serving local businesses across Savannah — building sites that are fast, professional, and built to convert.",
      "Design and develop custom websites from scratch including mobile-responsive layouts, contact forms, booking systems, and e-commerce stores.",
      "Provide ongoing monthly maintenance plans covering hosting, security, SEO tweaks, and content updates so clients never have to worry about their site.",
      "Advise small business owners on digital strategy, Google Business setup, and online marketing to drive measurable, real-world growth.",
      "Built reusable Angular and React component libraries that reduced development time by 20% across client projects.",
      "Integrated RESTful APIs including a real-time inventory system for a multi-location grocery chain, boosting efficiency by 30%.",
    ],
  },
  {
    position: "Software Engineer II",
    company: "Integrisource",
    companyLink: "https://integrisource.net/",
    time: "2023 – 2024",
    address: "Remote, USA",
    impact: "40%",
    impactLabel: "System Efficiency Boost",
    color: "#58E6D9",
    tags: [
      "C#",
      "ASP.NET Core",
      "T-SQL",
      "Kendo UI",
      "Entity Framework",
      "Dapper",
      "Active Reports",
    ],
    bullets: [
      "Engineered a robust ASP.NET Core MVC application in C# with T-SQL, increasing system throughput and reliability by 40% for a large public school district.",
      "Led conversion of a legacy client-server school board system to a modern data-centric web application, modernizing the experience for district administrators.",
      "Enhanced application security protocols, achieving a 40% reduction in vulnerability exposure across client-facing systems.",
      "Built reusable Kendo UI and .NET Framework components for multi-project applicability, accelerating feature delivery across the team.",
      "Boosted query performance by 25% via Dapper and Entity Framework optimizations across high-traffic endpoints.",
      "Developed customized reports for business analysts using Active Reports, translating complex requirements into actionable visualizations.",
    ],
  },
  {
    position: "Software Engineer I",
    company: "Precision Castparts Corporation (PCC) Airfoils",
    companyLink: "https://www.pccairfoils.com/business-units/douglas/",
    time: "2021 – 2023",
    address: "Douglas, GA",
    impact: "$75K",
    impactLabel: "Cost Savings Delivered",
    color: "#B63E96",
    tags: [
      "C#",
      ".NET",
      "SQL Server",
      "Razor Pages",
      "VB6",
      "Crystal Reports",
      "Power BI",
      "SSRS",
    ],
    bullets: [
      "Co-architected a migration pattern to move a legacy MES to a modern web platform using Razor Pages, contributing to $75K in estimated cost savings.",
      "Integrated system upgrades in a .NET manufacturing environment that increased production productivity by 50% and reduced operational costs by 20%.",
      "Reduced data-related issues by 15% through proficient stored procedure optimization and data management on SQL Server.",
      "Diagnosed and resolved Visual Basic 6 legacy code issues in a Linux-based virtual environment, cutting production downtime incidents by 30%.",
      "Collaborated with engineers and stakeholders to build and maintain unit test coverage, reducing bug-related delays by 25%.",
      "Developed ad hoc management reports using Crystal Reports, Power BI, and SSRS to surface key production metrics for executive decision-making.",
    ],
  },
];

const ExperienceCard = ({ role, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className="w-full"
      >
        {/* Card */}
        <div
          className="relative rounded-2xl border-2 border-solid border-dark dark:border-light 
            bg-light dark:bg-dark p-8 md:p-6 sm:p-4 mt-4 overflow-hidden"
          style={{ borderLeftColor: role.color, borderLeftWidth: 6 }}
        >
          {/* Shadow block */}
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light" />

          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-4 sm:flex-col">
            <div>
              <h3 className="font-bold text-2xl sm:text-xl xs:text-lg capitalize leading-tight">
                {role.position}{" "}
                <a
                  href={role.companyLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: role.color }}
                  className="hover:underline"
                >
                  @{role.company}
                </a>
              </h3>
              <span className="text-dark/60 dark:text-light/50 font-medium text-sm mt-1 block">
                {role.time} &nbsp;|&nbsp; {role.address}
              </span>
            </div>

            {/* Impact badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0"
              style={{
                background: `${role.color}20`,
                border: `2px solid ${role.color}`,
              }}
            >
              <span
                className="font-bold text-2xl"
                style={{ color: role.color }}
              >
                {role.impact}
              </span>
              <span className="text-xs font-medium text-dark/70 dark:text-light/70 text-center whitespace-nowrap">
                {role.impactLabel}
              </span>
            </motion.div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {role.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: `${role.color}18`,
                  color: role.color,
                  border: `1px solid ${role.color}50`,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {role.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-sm font-medium text-dark/80 dark:text-light/80 md:text-sm"
              >
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: role.color }}
                />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
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
        Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-base text-dark/75 dark:text-light/75 mb-20 max-w-xl mx-auto"
      >
        8+ years of building systems that work — from local business websites to
        enterprise manufacturing platforms.
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
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {roles.map((role, i) => (
            <ExperienceCard key={i} role={role} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
