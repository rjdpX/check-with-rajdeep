import Link from "next/link";

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
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
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
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="rounded-xl px-5 py-2.5 bg-white text-black font-medium shadow hover:shadow-lg"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/YOUR_GITHUB"
            className="rounded-xl px-5 py-2.5 border border-white/30 hover:border-white/60"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            className="rounded-xl px-5 py-2.5 border border-white/30 hover:border-white/60"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5"
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
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <ul className="space-y-4 text-neutral-300">
          <li>
            <b>Worcester Polytechnic Institute (WPI)</b> — MS in Robotics (2025–2027)
          </li>
          <li>
            <b>ZF Group</b> — Senior / Machine Learning Engineer (2022–2025): CV for autonomy, driver distraction detection; LLM+OCR document intelligence.
          </li>
          <li>
            <b>Accenture</b> — Application Dev Analyst / Associate Software Engineer (2020–2021): ETL, automation; <i>Fast-Track promotion</i>.
          </li>
        </ul>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} Rajdeep Banerjee • Robotics · AI · Autonomous Systems
        </div>
      </footer>
    </main>
  );
}
