"use client";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import Link from "next/link";
import Image from "next/image";
import { experience } from "../../data/experience";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const buttons = [
    { label: "Download Resume", href: "/resume.pdf", solid: true, icon: null },
    { label: "GitHub", href: "https://github.com/rjdpX", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rajdeepforreal", icon: <FaLinkedin /> },
  ];
  
const projects = [
  {
    title: "Traffic Light Recognition",
    summary:
      "Robust CV pipeline for traffic light detection/classification under real-world conditions.",
    tags: ["Computer Vision", "PyTorch", "Autonomous Systems"],
    links: [
      { label: "GitHub", href: "https://github.com/YOUR_GITHUB/traffic-light" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Driver Distraction Detection",
    summary:
      "ML model for classifying distraction levels from time-series/vision signals; tuned for safety-critical thresholds.",
    tags: ["ML", "Time Series", "Safety"],
    links: [{ label: "GitHub", href: "https://github.com/YOUR_GITHUB/distraction" }],
  },
  {
    title: "Certificate Classification (Doc AI)",
    summary:
      "LLM + OCR stack for document parsing and certificate classification (LayoutLM, Azure Doc Intelligence, PaddleOCR, PyMuPDF, Docling, LlamaParse, PDFMiner).",
    tags: ["LLM", "OCR", "Document AI"],
    links: [{ label: "GitHub", href: "https://github.com/YOUR_GITHUB/cert-classifier" }],
  },
];

export default function Home() {

  // Track cursor pos inside buttons container (relative)
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
}

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      {/* NAV */}
      <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide">
            RB • Robotics
          </Link>
          <nav className="flex gap-5 text-sm">
            <Link href="#projects" className="opacity-90 hover:opacity-100">Projects</Link>
            <Link href="#experience" className="opacity-90 hover:opacity-100">Experience</Link>
            <a href="/resume.pdf" className="opacity-90 hover:opacity-100">Resume</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Typing animation replaced with static text here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-[#d2c17c] to-[#00eaff] bg-clip-text text-transparent"
        >
          Hey there! I’m Rajdeep — welcome to my digital lab of AI, robots, and innovation!
        </motion.div>

        <p className="text-sm uppercase tracking-wider text-neutral-400">
          MS Robotics @ WPI · ex-ZF · ex-Accenture
        </p>

        <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
          Engineering the Future:{" "}
          <span className="bg-gradient-to-r from-[#d2c17c] to-[#00eaff] bg-clip-text text-transparent">
            AI, Robotics & Autonomous Mobility
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-neutral-300">
          Building applied AI systems—from computer vision for autonomy to LLM-powered automation. Focused on robust, real-world deployment.
        </p>

        {/* Glowing buttons with icons and cursor-follow glow */}
        <div className="mt-8 flex flex-wrap gap-3">
          {buttons.map(({ label, href, solid, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative rounded-xl px-5 py-2.5 font-medium overflow-hidden group
                ${solid
                  ? "bg-white text-black shadow hover:shadow-xl"
                  : "border border-white/30 text-white hover:border-white/60"}
              `}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ cursor: "pointer" }}
            >
              {/* Glow circle */}
              <span
                className={`pointer-events-none absolute rounded-full
                            bg-gradient-to-r from-[#d2c17c] to-[#00eaff]
                            opacity-0 group-hover:opacity-60
                            transition-opacity duration-300 ease-in-out
                            blur-3xl
                            w-32 h-32
                            mix-blend-screen
                            `}
                style={{
                  top: glowPos.y - 64 / 2,
                  left: glowPos.x - 64 / 2,
                }}
              />

              {/* Text + Icon */}
              <span className="relative flex items-center gap-2 z-10 select-none">
                {icon && (
                  <motion.span
                    whileHover={{
                      scale: 1.2,
                      rotate: label === "GitHub" ? [0, 15, -15, 0] : 0,
                      y: label === "LinkedIn" ? [0, -5, 0] : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    {icon}
                  </motion.span>
                )}
                {label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right: Photo with gradient patch */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        {/* gradient blob */}
        <div
          className="
            absolute z-0 
            h-96 w-96
            rounded-full 
            blur-[90px] opacity-90
            bg-gradient-to-br from-[#41118e] to-[#d2c17c]
            scale-x-125
            translate-x-6 -translate-y-4
          "
        />
        {/* your photo */}
        <Image
          src="/me.png"
          alt="Rajdeep Banerjee portrait"
          width={420}
          height={420}
          priority
          className="
            relative z-10
            rounded-2xl
            object-cover
          "
        />
      </motion.div>
    </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5
                        transition-transform duration-300 ease-out
                        hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
            >             
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-black/40 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              {p.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="text-sm underline underline-offset-4 opacity-90 group-hover:opacity-100">
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, idx, li) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-semibold">
                  {job.role} —{" "}
                  <span className="font-normal text-neutral-300">{job.company}</span>
                </h3>
                <span className="text-sm text-neutral-400">{job.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>


      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} Rajdeep Banerjee • Robotics · AI · Autonomous Systems
        </div>
      </footer>
    </main>
  );
}
