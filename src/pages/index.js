import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/profilepic.JPG";
import TransitionEffect from "@/components/TransitionEffect";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { motion } from "framer-motion";
import { useState } from "react";
import SideNav from "@/components/SideNav";
import ContactModal from "@/components/ContactModal";

const offerings = [
  {
    title: "Website Design & Development",
    desc: "Custom built websites from scratch — mobile responsive, fast, and designed to convert visitors into customers. No templates, no shortcuts.",
    icon: "🖥️",
    color: "#B63E96",
  },
  {
    title: "Monthly Maintenance Plans",
    desc: "Worry-free website management. I handle updates, security, hosting, and content changes so you can focus on running your business.",
    icon: "🔧",
    color: "#58E6D9",
  },
  {
    title: "Google Business & SEO Setup",
    desc: "Get found on Google. I set up and optimize your Google Business profile and make sure local customers can find you before your competition.",
    icon: "📍",
    color: "#B63E96",
  },
  {
    title: "E-Commerce & Booking Systems",
    desc: "Sell products or take appointments directly from your website. Full online store or scheduling system setup — ready to take orders from day one.",
    icon: "🛒",
    color: "#58E6D9",
  },
];

const sections = [
  { id: "hero", label: "Home" },
  { id: "offerings", label: "What I Offer" },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Lashon Hudson — Web Design & Consulting</title>
        <meta
          name="description"
          content="Senior Software Engineer and web consultant helping local businesses build a powerful online presence. Based in Savannah, GA."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          {/* ── Hero ── */}
          <div
            id="hero"
            className="flex w-full items-start justify-center gap-x-10 md:flex-col"
          >
            <div className="w-1/4 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Lashon"
                className="h-auto w-full rounded-3xl"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="I build websites that grow your business."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I&apos;m <strong>Lashon Hudson</strong> — Senior Software
                Engineer and founder of Hudson Web Design &amp; Consulting,
                based in Savannah, GA. With 8+ years of enterprise engineering
                experience, I bring serious technical skill to every project.
                Whether you&apos;re a barbershop, salon, restaurant, or local
                service business with no website or a bad one — I&apos;ll build
                you something professional, fast, and affordable. Your first
                consultation is completely free.
              </p>

              <div className="mt-2 flex items-center self-start lg:self-center gap-4 flex-wrap">
                <Link
                  href="/services"
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base transition-all duration-200"
                >
                  View Services <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <button
                  onClick={() => setModalOpen(true)}
                  className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base bg-transparent border-none cursor-pointer"
                >
                  Get a Free Quote
                </button>

                <Link
                  href="/LashonHudson.pdf"
                  target="_blank"
                  className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  download
                >
                  Resume
                </Link>
              </div>

              <div className="mt-4 flex items-center self-start lg:self-center gap-2">
                <PhoneCallbackIcon />
                <a
                  href="tel:912-604-7859"
                  className="text-lg font-medium text-dark dark:text-light"
                >
                  (912)-604-7859
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6 self-start lg:self-center sm:grid-cols-3 w-full">
                {[
                  { value: "8+", label: "Years of experience" },
                  { value: "30+", label: "Projects completed" },
                  { value: "97%", label: "Client satisfaction" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className="flex flex-col items-start lg:items-center"
                  >
                    <span className="text-4xl font-bold md:text-3xl sm:text-2xl">
                      {stat.value}
                    </span>
                    <p className="text-sm font-medium text-dark/75 dark:text-light/75">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── What I Offer ── */}
          <div id="offerings" className="mt-24 mb-8 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bold text-5xl w-full text-center mb-4 md:text-4xl sm:text-3xl"
            >
              What I Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-center text-base text-dark/75 dark:text-light/75 mb-12 max-w-xl mx-auto"
            >
              Everything your business needs to look professional online — built
              by an engineer who actually knows what he&apos;s doing.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
              {offerings.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="relative rounded-2xl border-2 border-solid p-8 cursor-pointer overflow-visible z-10"
                  style={{
                    background: "#1b1b1b",
                    borderColor: item.color,
                    borderLeftWidth: 5,
                  }}
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-medium text-sm leading-relaxed"
                    style={{ color: "#f5f5f5" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center rounded-lg border-2 border-solid bg-dark p-3 px-8
                  text-lg font-semibold capitalize text-light
                  hover:border-dark hover:bg-transparent hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-light
                  dark:hover:bg-dark dark:hover:text-light
                  transition-all duration-200 cursor-pointer"
              >
                Book a Free Consultation <LinkArrow className="ml-2 !w-6" />
              </button>
            </motion.div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="lashoncodes"
          />
        </div>
      </article>

      <SideNav sections={sections} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
