import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        {/* Outer track ring */}
        <circle
          cx="75"
          cy="50"
          r="22"
          pathLength="1"
          className="stroke-primary dark:stroke-primaryDark"
          style={{ strokeWidth: 1, fill: "none", opacity: 0.3 }}
        />
        {/* Animated progress ring */}
        <motion.circle
          cx="75"
          cy="50"
          r="22"
          pathLength="1"
          className="stroke-primary dark:stroke-primaryDark"
          style={{
            pathLength: scrollYProgress,
            strokeWidth: 4,
            fill: "none",
            strokeLinecap: "round",
          }}
        />
        {/* Inner fill circle */}
        <motion.circle
          cx="75"
          cy="50"
          r="12"
          pathLength="1"
          className="fill-light dark:fill-dark"
          style={{ stroke: "none" }}
        />
        {/* Center dot — always visible, pulses */}
        <circle
          cx="75"
          cy="50"
          r="6"
          className="fill-primary dark:fill-primaryDark animate-pulse"
          style={{ stroke: "none" }}
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
