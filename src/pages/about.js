import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/logo.jpg";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import SideNav from "@/components/SideNav";
import ContactModal from "@/components/ContactModal";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0) + suffix;
        }
      }),
    [springValue, value, suffix],
  );

  return <span ref={ref} />;
}

const stats = [
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
];

const highlights = [
  {
    icon: "🏗️",
    text: "Enterprise ERP architecture at a global aerospace manufacturer",
  },
  {
    icon: "🌐",
    text: "Full-stack web development for local Savannah businesses",
  },
  { icon: "🎓", text: "MS Software Engineering — Kennesaw State University" },
  {
    icon: "🔐",
    text: "BS Cybersecurity in progress — Western Governors University",
  },
  { icon: "📱", text: "Mobile app development with React Native & Expo" },
  { icon: "🚀", text: "Founder — Hudson Web Design & Consulting" },
];

const whatIDo = [
  {
    title: "Enterprise Engineering",
    color: "#B63E96",
    icon: "🏗️",
    desc: "Lead architect for large-scale ERP systems, hub-gateway architectures, and high-performance .NET applications used in production environments.",
  },
  {
    title: "Web Design & Consulting",
    color: "#58E6D9",
    icon: "🌐",
    desc: "Professional websites for local Savannah businesses — custom built, mobile responsive, and designed to turn visitors into paying customers.",
  },
  {
    title: "Mobile & App Development",
    color: "#B63E96",
    icon: "📱",
    desc: "React Native and Expo mobile apps, AI-powered tools, and full-stack web applications from concept to production deployment.",
  },
];

const sections = [
  { id: "bio", label: "About" },
  { id: "stats", label: "Stats" },
  { id: "whatido", label: "What I Do" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>About Lashon Hudson</title>
        <meta
          name="description"
          content="Senior Software Engineer and founder of Hudson Web Design & Consulting. Based in Savannah, GA."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          {/* ── Bio ── */}
          <div
            id="bio"
            className="grid w-full grid-cols-12 gap-12 mb-20 md:gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="col-span-4 xl:col-span-5 md:col-span-12"
            >
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-3xl -z-10"
                  style={{
                    background: "rgba(182,62,150,0.15)",
                    border: "2px solid rgba(182,62,150,0.3)",
                  }}
                />
                <Image
                  src={profile}
                  alt="Lashon Hudson"
                  className="w-full h-auto rounded-3xl border-2 border-solid border-dark dark:border-light"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl shadow-xl"
                  style={{ background: "#1b1b1b" }}
                >
                  <p className="font-bold text-sm" style={{ color: "#f5f5f5" }}>
                    Lashon Hudson
                  </p>
                  <p className="text-xs" style={{ color: "#a0a0a0" }}>
                    Savannah, GA
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="col-span-8 xl:col-span-7 md:col-span-12 flex flex-col justify-center md:mt-10"
            >
              <h2
                className="mb-2 text-sm font-bold uppercase tracking-widest"
                style={{ color: "#B63E96" }}
              >
                Who I Am
              </h2>
              <h3 className="text-4xl font-bold mb-6 leading-tight md:text-3xl sm:text-2xl">
                Senior Software Engineer &amp;
                <br />
                Web Consultant
              </h3>
              <p className="font-medium text-dark/80 dark:text-light/80 mb-4 leading-relaxed">
                I&apos;m <strong>Lashon Hudson</strong> — a Senior Software
                Engineer and founder of Hudson Web Design &amp; Consulting,
                based in Savannah, GA. With 8+ years of full-stack engineering
                experience across manufacturing, education, and consulting, I
                bring enterprise-level technical skill to every project no
                matter the size.
              </p>
              <p className="font-medium text-dark/80 dark:text-light/80 mb-6 leading-relaxed">
                Through Hudson Web Design &amp; Consulting, I help local
                Savannah businesses build professional websites that attract
                customers, establish credibility, and grow revenue. From a
                single-page site for a barbershop to a full e-commerce platform
                — I design and build it right the first time, then stick around
                to keep it running.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-1">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm font-medium text-dark/75 dark:text-light/75"
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6
                    text-base font-semibold capitalize text-light
                    hover:border-dark hover:bg-transparent hover:text-dark
                    dark:bg-light dark:text-dark dark:hover:border-light
                    dark:hover:bg-dark dark:hover:text-light transition-all duration-200 cursor-pointer"
                >
                  Hire Me <LinkArrow className="ml-1 !w-5" />
                </button>
                <Link
                  href="/LashonHudson.pdf"
                  target="_blank"
                  download
                  className="flex items-center rounded-lg border-2 border-solid border-dark p-2.5 px-6
                    text-base font-semibold capitalize text-dark
                    hover:bg-dark hover:text-light
                    dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark
                    transition-all duration-200"
                >
                  Resume <LinkArrow className="ml-1 !w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── Stats ── */}
          <motion.div
            id="stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-3 gap-6 mb-20 sm:grid-cols-1"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border-2 border-solid p-8 text-center overflow-visible"
                style={{
                  background: "#1b1b1b",
                  borderColor: i % 2 === 0 ? "#B63E96" : "#58E6D9",
                  borderTopWidth: 5,
                }}
              >
                <span
                  className="block text-6xl font-bold mb-2 md:text-5xl"
                  style={{ color: i % 2 === 0 ? "#B63E96" : "#58E6D9" }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span
                  className="font-medium text-sm uppercase tracking-wider"
                  style={{ color: "#a0a0a0" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── What I Do ── */}
          <motion.div
            id="whatido"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mb-20"
          >
            <h2 className="font-bold text-5xl mb-4 text-center md:text-4xl sm:text-3xl">
              What I Do
            </h2>
            <p className="text-center mb-12 max-w-xl mx-auto text-sm font-medium text-dark/75 dark:text-light/75">
              From enterprise systems to local business websites — here&apos;s
              where I spend my time.
            </p>
            <div className="grid grid-cols-3 gap-6 md:grid-cols-1">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="relative rounded-2xl border-2 border-solid p-6 overflow-visible z-10 cursor-pointer"
                  style={{
                    background: "#1b1b1b",
                    borderColor: item.color,
                    borderTopWidth: 5,
                  }}
                >
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: "#f5f5f5" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>
        </Layout>
      </main>

      <SideNav sections={sections} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
