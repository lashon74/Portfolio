import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkArrow } from "@/components/Icons";
import { useState } from "react";
import SideNav from "@/components/SideNav";
import ContactModal from "@/components/ContactModal";

const BulletItem = ({ text, color }) => (
  <li className="flex items-start gap-3">
    <span
      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
      style={{ background: color }}
    />
    <span
      className="text-sm font-medium leading-relaxed"
      style={{ color: "#f5f5f5" }}
    >
      {text}
    </span>
  </li>
);

const packages = [
  {
    name: "Starter",
    price: "$300–$500",
    desc: "Perfect for businesses that just need a clean online presence fast.",
    color: "#58E6D9",
    popular: false,
    includes: [
      "1 page — homepage only",
      "Mobile responsive design",
      "Contact form",
      "Google Maps embed",
      "Basic SEO setup",
      "Delivered in 5–7 days",
    ],
  },
  {
    name: "Business",
    price: "$600–$900",
    desc: "The most popular choice for local Savannah businesses ready to grow.",
    color: "#B63E96",
    popular: true,
    includes: [
      "Up to 5 pages",
      "Home, About, Services, Gallery, Contact",
      "Mobile responsive design",
      "Contact form + Google Maps",
      "Google Business Profile setup",
      "Basic SEO optimization",
      "Delivered in 7–14 days",
    ],
  },
  {
    name: "Professional",
    price: "$1,000–$1,500",
    desc: "For businesses that want the full package — booking, blog, and everything.",
    color: "#58E6D9",
    popular: false,
    includes: [
      "Up to 10 pages",
      "Everything in Business package",
      "Online booking or scheduling system",
      "Blog or news section",
      "Custom contact forms",
      "Advanced SEO setup",
      "Delivered in 14–21 days",
    ],
  },
  {
    name: "E-Commerce",
    price: "$1,500–$2,500",
    desc: "Full online store — sell products directly from your website.",
    color: "#B63E96",
    popular: false,
    includes: [
      "Full online store setup",
      "Product pages and inventory",
      "Stripe and PayPal integration",
      "Shopping cart and checkout",
      "Order management",
      "Everything in Professional",
      "Delivered in 21–30 days",
    ],
  },
];

const maintenance = [
  {
    name: "Basic Care",
    price: "$49/mo",
    color: "#58E6D9",
    popular: false,
    features: [
      "Hosting management",
      "Security monitoring",
      "Uptime monitoring",
      "Monthly backup",
    ],
  },
  {
    name: "Standard",
    price: "$79/mo",
    color: "#B63E96",
    popular: true,
    features: [
      "Everything in Basic Care",
      "1 content update per month",
      "Google Analytics report",
      "Performance check",
      "Priority email support",
    ],
  },
  {
    name: "Growth",
    price: "$149/mo",
    color: "#58E6D9",
    popular: false,
    features: [
      "Everything in Standard",
      "4 content updates per month",
      "SEO tweaks monthly",
      "Social media link updates",
      "Priority phone support",
      "Quarterly strategy call",
    ],
  },
];

const allServices = [
  {
    icon: "🖥️",
    title: "Website Design & Development",
    desc: "Custom built websites from scratch — no templates, no shortcuts. Mobile responsive, fast loading, and designed to convert visitors into paying customers.",
    color: "#B63E96",
  },
  {
    icon: "🔧",
    title: "Monthly Maintenance Plans",
    desc: "I keep your site running, secure, and up to date every month so you never have to worry about it. Hosting, updates, backups — all handled.",
    color: "#58E6D9",
  },
  {
    icon: "📍",
    title: "Google Business & SEO Setup",
    desc: "Get found on Google before your competition. I set up and optimize your Google Business profile and make sure local customers can find you first.",
    color: "#B63E96",
  },
  {
    icon: "🛒",
    title: "E-Commerce & Online Stores",
    desc: "Full online store setup with product pages, shopping cart, Stripe and PayPal payment integration, and order management — ready to take orders from day one.",
    color: "#58E6D9",
  },
  {
    icon: "🎨",
    title: "Logo Design",
    desc: "A professional logo that represents your brand. Clean, modern, and delivered in multiple formats for web, print, and social media use.",
    color: "#B63E96",
  },
  {
    icon: "📱",
    title: "Social Media Setup & Integration",
    desc: "I connect your website to all your social platforms, set up your profiles properly, and make sure everything links together seamlessly.",
    color: "#58E6D9",
  },
  {
    icon: "📅",
    title: "Booking & Appointment Systems",
    desc: "Let customers book directly from your website 24/7. Perfect for salons, barbershops, and service businesses. No more phone tag.",
    color: "#B63E96",
  },
  {
    icon: "🌐",
    title: "Domain Setup & Management",
    desc: "I handle your domain purchase, setup, and yearly renewal so you never have to think about it. Your name, secured and managed.",
    color: "#58E6D9",
  },
  {
    icon: "⚡",
    title: "Speed & Performance Optimization",
    desc: "Slow websites lose customers. I audit your site, fix what is dragging it down, and get your load times fast — better for users and better for Google rankings.",
    color: "#B63E96",
  },
  {
    icon: "✍️",
    title: "Content Writing for Websites",
    desc: "Professional copy written for your homepage, about page, and service pages. Words that tell your story, build trust, and turn visitors into customers.",
    color: "#58E6D9",
  },
];

const clientTypes = [
  { icon: "✂️", label: "Barbershops & Salons" },
  { icon: "🍽️", label: "Restaurants & Food Businesses" },
  { icon: "🖊️", label: "Tattoo Parlors" },
  { icon: "🛍️", label: "Local Retail Stores" },
  { icon: "🔨", label: "Service Businesses" },
  { icon: "⛪", label: "Churches & Nonprofits" },
  { icon: "👤", label: "Personal Brands & Freelancers" },
  { icon: "📍", label: "Any Local Savannah Business" },
];

const addons = [
  { name: "Extra Page Added", price: "$75–$150" },
  { name: "Rush Delivery (under 5 days)", price: "+$150" },
  { name: "Content Update (outside plan)", price: "$50/hr" },
  { name: "Speed and SEO Audit + Fixes", price: "$100–$200" },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We hop on a call or meet in person. I learn about your business, your goals, and what you need. No pressure, no cost.",
    color: "#B63E96",
  },
  {
    step: "02",
    title: "Proposal & Quote",
    desc: "I send you a clear proposal with exactly what I will build, the timeline, and the price. No hidden fees ever.",
    color: "#58E6D9",
  },
  {
    step: "03",
    title: "Design & Build",
    desc: "I get to work. You will see progress updates and can request changes along the way. Built right the first time.",
    color: "#B63E96",
  },
  {
    step: "04",
    title: "Review & Launch",
    desc: "You review the final site, we make any last tweaks, then I launch it live on your domain. Done.",
    color: "#58E6D9",
  },
  {
    step: "05",
    title: "Ongoing Support",
    desc: "Sign up for a maintenance plan and I keep your site running, updated, and performing month after month.",
    color: "#B63E96",
  },
];

const sections = [
  { id: "hero", label: "Intro" },
  { id: "whatido", label: "Services" },
  { id: "packages", label: "Packages" },
  { id: "maintenance", label: "Maintenance" },
  { id: "addons", label: "Add-Ons" },
  { id: "process", label: "Process" },
  { id: "cta", label: "Contact" },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Services — Hudson Web Design & Consulting</title>
        <meta
          name="description"
          content="Professional website design and consulting services for local Savannah businesses. Custom websites starting at $300."
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* ── Hero ── */}
          <div id="hero">
            <AnimatedText
              text="Let's Build Your Online Presence."
              className="mb-4 !text-7xl !leading-tight lg:!text-6xl sm:!text-4xl xs:!text-3xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center text-base text-dark/75 dark:text-light/75 mb-6 max-w-2xl mx-auto font-medium"
            >
              Professional websites for local Savannah businesses — built by a
              Senior Software Engineer with 8+ years of experience. No
              templates. No shortcuts. Built right the first time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {clientTypes.map((client, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                    border border-solid text-dark dark:text-light border-dark/20 dark:border-light/20 bg-light dark:bg-dark"
                >
                  <span>{client.icon}</span>
                  {client.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── All Services ── */}
          <div id="whatido">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bold text-5xl mb-4 text-center md:text-4xl sm:text-3xl"
            >
              What I Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-sm text-dark/75 dark:text-light/75 mb-12 max-w-xl mx-auto font-medium"
            >
              Everything your business needs to look professional online.
            </motion.p>
            <div className="grid grid-cols-2 gap-6 mb-24 md:grid-cols-1">
              {allServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="relative rounded-2xl border-2 border-solid p-6 overflow-visible z-10"
                  style={{
                    background: "#1b1b1b",
                    borderColor: service.color,
                    borderLeftWidth: 5,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">
                      {service.icon}
                    </span>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: service.color }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm font-medium leading-relaxed"
                        style={{ color: "#f5f5f5" }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Packages ── */}
          <div id="packages">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bold text-5xl mb-4 text-center md:text-4xl sm:text-3xl"
            >
              Website Packages
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-sm text-dark/75 dark:text-light/75 mb-12 max-w-xl mx-auto font-medium"
            >
              One-time build fee — you own your site outright. No subscriptions,
              no surprises.
            </motion.p>
            <div className="grid grid-cols-2 gap-8 mb-24 md:grid-cols-1">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="relative rounded-2xl border-2 border-solid p-8 overflow-visible z-10 md:p-6"
                  style={{
                    background: "#1b1b1b",
                    borderColor: pkg.color,
                    borderTopWidth: 5,
                  }}
                >
                  {pkg.popular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                      style={{ background: pkg.color, color: "#f5f5f5" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-5 gap-4">
                    <div>
                      <h3
                        className="font-bold text-2xl mb-1"
                        style={{ color: pkg.color }}
                      >
                        {pkg.name}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#a0a0a0" }}
                      >
                        {pkg.desc}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span
                        className="font-bold text-2xl"
                        style={{ color: "#f5f5f5" }}
                      >
                        {pkg.price}
                      </span>
                      <p className="text-xs" style={{ color: "#a0a0a0" }}>
                        one time
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, j) => (
                      <BulletItem key={j} text={item} color={pkg.color} />
                    ))}
                  </ul>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center w-full rounded-lg border-2 border-solid p-2.5 px-6 text-sm font-semibold capitalize transition-all duration-200 cursor-pointer"
                    style={{
                      background: pkg.color,
                      borderColor: pkg.color,
                      color: "#f5f5f5",
                    }}
                  >
                    Get Started <LinkArrow className="ml-1 !w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Maintenance ── */}
          <div id="maintenance">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bold text-5xl mb-4 text-center md:text-4xl sm:text-3xl"
            >
              Monthly Maintenance Plans
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-sm text-dark/75 dark:text-light/75 mb-12 max-w-xl mx-auto font-medium"
            >
              Keep your site running, secure, and up to date every month without
              lifting a finger.
            </motion.p>
            <div className="grid grid-cols-3 gap-8 mb-24 md:grid-cols-1">
              {maintenance.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="relative rounded-2xl border-2 border-solid p-8 overflow-visible z-10"
                  style={{
                    background: "#1b1b1b",
                    borderColor: plan.color,
                    borderTopWidth: 5,
                  }}
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                      style={{ background: plan.color, color: "#f5f5f5" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3
                    className="font-bold text-xl mb-1"
                    style={{ color: plan.color }}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-5">
                    <span
                      className="font-bold text-3xl"
                      style={{ color: "#f5f5f5" }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <BulletItem key={j} text={feature} color={plan.color} />
                    ))}
                  </ul>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center w-full rounded-lg border-2 border-solid p-2.5 px-6 text-sm font-semibold capitalize transition-all duration-200 cursor-pointer"
                    style={{
                      background: plan.color,
                      borderColor: plan.color,
                      color: "#f5f5f5",
                    }}
                  >
                    Sign Up <LinkArrow className="ml-1 !w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Add-ons ── */}
          <div id="addons">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bold text-5xl mb-4 text-center md:text-4xl sm:text-3xl"
            >
              Add-On Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-sm text-dark/75 dark:text-light/75 mb-12 max-w-xl mx-auto font-medium"
            >
              Need something extra? Add any of these to any package.
            </motion.p>
            <div className="grid grid-cols-2 gap-4 mb-24 md:grid-cols-1 w-full max-w-3xl mx-auto">
              {addons.map((addon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4 rounded-xl border border-solid px-5 py-4"
                  style={{
                    background: "#1b1b1b",
                    borderColor: i % 2 === 0 ? "#B63E96" : "#58E6D9",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: i % 2 === 0 ? "#B63E96" : "#58E6D9",
                      }}
                    />
                    <span
                      className="font-medium text-sm"
                      style={{ color: "#f5f5f5" }}
                    >
                      {addon.name}
                    </span>
                  </div>
                  <span
                    className="font-bold text-sm flex-shrink-0"
                    style={{ color: i % 2 === 0 ? "#B63E96" : "#58E6D9" }}
                  >
                    {addon.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Process ── */}
          <div id="process">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bold text-5xl mb-4 text-center md:text-4xl sm:text-3xl"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-sm text-dark/75 dark:text-light/75 mb-12 max-w-xl mx-auto font-medium"
            >
              Simple, transparent process from first call to launch day.
            </motion.p>
            <div className="w-full max-w-3xl mx-auto mb-24">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-6 last:mb-0 md:gap-4"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 md:w-12 md:h-12 md:text-base"
                      style={{ background: step.color, color: "#f5f5f5" }}
                    >
                      {step.step}
                    </div>
                    {i < process.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{ background: `${step.color}40`, minHeight: 32 }}
                      />
                    )}
                  </div>
                  <div className="pb-6 last:pb-0">
                    <h3
                      className="font-bold text-xl mb-2 md:text-lg"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-dark/75 dark:text-light/75">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            id="cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full rounded-2xl border-2 border-solid p-16 text-center mb-16 md:p-10 sm:p-8"
            style={{
              background: "#1b1b1b",
              borderColor: "#B63E96",
              borderTopWidth: 5,
            }}
          >
            <h2
              className="font-bold text-5xl mb-4 md:text-4xl sm:text-3xl"
              style={{ color: "#f5f5f5" }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-base font-medium mb-8 max-w-xl mx-auto"
              style={{ color: "#a0a0a0" }}
            >
              Your first consultation is completely free. Let&apos;s talk about
              your business and figure out exactly what you need. No pressure,
              no commitment.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center rounded-lg border-2 border-solid p-3 px-8 text-lg font-semibold capitalize transition-all duration-200 cursor-pointer"
                style={{
                  background: "#B63E96",
                  borderColor: "#B63E96",
                  color: "#f5f5f5",
                }}
              >
                Book Free Consultation <LinkArrow className="ml-2 !w-6" />
              </button>
              <a
                href="tel:912-604-7859"
                className="flex items-center rounded-lg border-2 border-solid p-3 px-8 text-lg font-semibold capitalize transition-all duration-200"
                style={{ borderColor: "#58E6D9", color: "#58E6D9" }}
              >
                Call (912)-604-7859
              </a>
            </div>
          </motion.div>
        </Layout>
      </main>

      <SideNav sections={sections} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
