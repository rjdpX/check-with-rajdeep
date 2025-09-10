export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "ZF Group",
    role: "Senior / Machine Learning Engineer",
    period: "Oct 2022 – Jul 2025",
    bullets: [
      "Built CV and safety-critical ML for autonomous transport systems: traffic light recognition, driver distraction detection.",
      "Developed document intelligence stack for certificate classification using LLMs + OCR (LayoutLM, Azure AI Doc Intelligence, PaddleOCR, PyMuPDF, Docling, LlamaParse, PDFMiner).",
      "Owned benchmarking across frameworks to improve accuracy/latency; integrated pipelines with automotive-grade testing.",
    ],
  },
  {
    company: "Accenture",
    role: "Application Development Analyst / Associate Software Engineer",
    period: "Sep 2020 – Dec 2021",
    bullets: [
      "Delivered ETL/data workflows (SAP BODS) and analytics (QlikView, Tableau, PowerBI, Informatica) across multi-project environments.",
      "Earned Fast-Track promotion for technical excellence and cross-team delivery.",
    ],
  },
  {
    company: "Worcester Polytechnic Institute (WPI)",
    role: "M.S. Robotics (in progress)",
    period: "2025 – 2027",
    bullets: [
      "Focus: Robotics, Computer Vision, Applied AI/LLMs for autonomous systems.",
      "Projects: perception pipelines, simulation, and deployment-ready ML.",
    ],
  },
];
