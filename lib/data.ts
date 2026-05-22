export const profile = {
  name: "Sohum Kashyap",
  tagline: "cs + math @ purdue · ai/ml researcher · systems builder",
  location: "West Lafayette, IN",
  email: "kashya41@purdue.edu",
  phone: "+1 (331) 588-6373",
  links: {
    github: "https://github.com/S-K-23",
    linkedin: "https://www.linkedin.com/in/sohumkashyap/",
    orcid: "https://orcid.org/0009-0006-4854-1019",
  },
} as const;

export const manifesto = {
  paragraphs: [
    "I build systems where the math is the product — pipelines that turn rough scientific intuition into something a machine can compute, train, and ship.",
    "My work lives at the intersection of biomedical AI, large-scale ML, and the unglamorous infrastructure that holds it together: containers, schedulers, vector stores, and the occasional smart contract.",
  ],
  pullQuote:
    "I'm drawn to the parts of a problem where a careful model and a careful system are the same thing.",
};

export const stats = [
  { label: "Research Labs", value: "3", caption: "Argonne · UPenn · Purdue" },
  { label: "Publications", value: "3", caption: "SC'25 · AAAI'25 · PSURC" },
  { label: "Languages Shipped", value: "8+", caption: "Py · C · Rust · TS · Swift" },
  { label: "Years Researching", value: "3+", caption: "since 2023 · HPC + ML" },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  role: string;
  authors: string;
  contribution: string;
};

export const publications: Publication[] = [
  {
    title:
      "An AI Agentic Framework for Understanding Low-Dose Radiation Effects on Human Lung Epithelial Cells",
    venue: "SC'25 — Intl. Conference for High Performance Computing",
    year: "2025",
    role: "Co-author",
    authors: "Claybon, Kashyap, Conery, Rodriguez, Li, Wu, Nandi, Madduri",
    contribution:
      "Co-built an Ollama-driven agentic framework, in Docker, that orchestrates LLM agents to reason over low-dose radiation gene-expression data.",
  },
  {
    title:
      "Assessing a Knowledge Graph Framework for Combating Hallucinations in Large Language Models",
    venue: "Argonne National Laboratory",
    year: "2024",
    role: "Sole Author",
    authors: "Sohum Kashyap",
    contribution:
      "Designed a knowledge-graph-assisted biomedical LLM pipeline (LangChain, Neo4j, PyTorch) that materially reduces hallucinations in disease-related generation.",
  },
  {
    title:
      "Evaluating Tradeoffs Between Robustness, Fairness, and Model Integrity Through Controlled Tool Perturbations",
    venue: "Purdue Spring Undergraduate Research Conference",
    year: "2026",
    role: "Co-author · Presentation with Distinction",
    authors: "Patel, Chelliboyina, Kashyap, Ghodsi",
    contribution:
      "Quantified the fairness-robustness frontier of the Landseer ML pipeline under controlled adversarial perturbations on HPC clusters.",
  },
];

export type Experience = {
  org: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    org: "Purdue University · Landseer ML Pipeline",
    role: "Undergraduate Researcher",
    location: "West Lafayette, IN",
    start: "Jan 2026",
    end: "Present",
    bullets: [
      "Built a fairness-enhancing tool for the Landseer ML pipeline; +30% in-training fairness.",
      "Evaluated adversarial attacks/defenses on HPC SLURM clusters; new PyTorch modules cut successful attack rate.",
      "Abstract earned 'Presentation with Distinction' at Purdue Spring Undergraduate Research Conference.",
    ],
    stack: ["Python", "PyTorch", "Pandas", "NumPy", "Docker", "Apptainer", "SLURM"],
  },
  {
    org: "Purdue University · Kihara Lab",
    role: "Undergraduate Researcher",
    location: "West Lafayette, IN",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Developing a novel foundation model for RNA structure prediction with the Kihara Lab.",
      "Prototype improves prediction of RNA secondary structure using SHAPE reactivity data.",
      "Runs on Linux HPC clusters via SLURM; reproducible builds with Docker / Biopython.",
    ],
    stack: ["Python", "Biopython", "PyTorch", "SLURM", "Docker", "Bash"],
  },
  {
    org: "Argonne National Laboratory",
    role: "Research Assistant",
    location: "Lemont, IL",
    start: "Oct 2023",
    end: "Aug 2025",
    bullets: [
      "Built an Ollama-based agentic framework (Docker) to study low-dose radiation effects — presented at SC'25.",
      "Applied a transformer model with in-silico perturbation to identify transitional genes; +25–40% consistency on sparse data vs. classical statistical baselines.",
      "Developed a knowledge-graph-assisted biomedical LLM pipeline (LangChain · Neo4j · PyTorch) to reduce hallucinations.",
    ],
    stack: ["Transformers", "LangChain", "ScanPy", "PyTorch", "R", "Python", "HPC", "SLURM"],
  },
  {
    org: "University of Pennsylvania",
    role: "Researcher",
    location: "Philadelphia, PA (Remote)",
    start: "May 2024",
    end: "Aug 2024",
    bullets: [
      "Designed a knowledge-graph-based retrieval framework for biomedical LLMs.",
      "Improved Faithfulness by up to 60% and Context Recall by up to 36%.",
      "Co-authored joint biomedical LLM paper with UIUC; presented at AAAI 2025.",
    ],
    stack: ["GraphRAG", "LLM", "Python", "LangChain", "Neo4j", "HPC"],
  },
  {
    org: "Stealth Startup (NDA)",
    role: "AI + Backend Developer",
    location: "Bay Area (Remote)",
    start: "Nov 2022",
    end: "Aug 2024",
    bullets: [
      "Designed and deployed an LSTM on Google Cloud Run with Pub/Sub for real-time inference under 500 ms.",
      "Built the MVP architecture on GCP (Docker · Cloud Run) on production-grade infrastructure.",
      "Helped secure $35K in pre-seed funding and early investor traction.",
    ],
    stack: ["Python", "TensorFlow", "GCP", "Cloud Run", "Pub/Sub", "Docker"],
  },
];

export const education = [
  {
    school: "Purdue University",
    degree: "B.S. Computer Science & Mathematics/Statistics (Double Major)",
    detail: "Linear Programming · Multivariate Calculus · Elementary Linear Algebra · OOP · C",
    start: "Aug 2025",
    end: "May 2029",
    location: "West Lafayette, IN",
  },
  {
    school: "Illinois Mathematics and Science Academy",
    degree: "High School Diploma",
    detail: "Machine Learning · OOP (Java) · Computational Science · Linux/UNIX",
    start: "Aug 2022",
    end: "May 2025",
    location: "Aurora, IL",
  },
];

export type ProjectCategory =
  | "Blockchain"
  | "AI/ML"
  | "Systems"
  | "Quant"
  | "iOS"
  | "Web";

export type Project = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  featured?: boolean;
  category: ProjectCategory;
  metric?: string;
  year: number;
};

export const categoryOrder: ProjectCategory[] = [
  "Blockchain",
  "AI/ML",
  "Systems",
  "Quant",
  "Web",
  "iOS",
];

export const projects: Project[] = [
  {
    name: "Zoth-Guard",
    slug: "zoth-guard",
    tagline: "DeFi upgrade-key hardening, validated against a real $8.4M exploit.",
    description:
      "A Solidity base contract using forward-secure HMAC authentication, EIP-1153 transient storage, and a hash chain to block compromised-key upgrade attacks. On a forked Ethereum mainnet at the Zoth exploit block, the protected version rejects the exact attacker transaction that drained the real vault.",
    stack: ["Solidity", "Foundry", "HMAC-SHA256", "EIP-1153", "Python"],
    href: "https://github.com/S-K-23/Zoth-Guard",
    featured: true,
    category: "Blockchain",
    metric: "Blocks $8.4M exploit",
    year: 2026,
  },
  {
    name: "GPT-in-C",
    slug: "gpt-c",
    tagline: "Transformer language model, from scratch in C.",
    description:
      "A from-scratch GPT implementation in pure C — character tokenizer, model definition, training loop, and test suite. No frameworks, no autograd library; written for systems-level intuition of how a transformer actually moves bytes.",
    stack: ["C", "Tokenization", "Backprop", "Make"],
    href: "https://github.com/S-K-23/gpt",
    featured: true,
    category: "Systems",
    metric: "0 dependencies",
    year: 2026,
  },
  {
    name: "FantasyMarket",
    slug: "fantasymarket",
    tagline: "On-chain fantasy league for prediction markets. ETH Denver '26.",
    description:
      "A Solana fantasy platform where users draft Polymarket markets in a snake draft, trade mid-season, and earn skill-based points. Prize vaults are PDA-backed on-chain — zero house rake, 100% payouts.",
    stack: ["Rust", "Anchor", "Solana", "Next.js", "TypeScript", "PostgreSQL", "Polymarket API"],
    href: "https://github.com/S-K-23/FantasyMarket",
    featured: true,
    category: "Blockchain",
    metric: "ETH Denver hackathon",
    year: 2025,
  },
  {
    name: "REALestate.ai",
    slug: "realestate-ai",
    tagline: "Tinder-meets-Zillow: swipe-based real-estate discovery.",
    description:
      "A real-estate platform that fuses a map interface with gesture-based swipe discovery, advanced filtering, and a hybrid recommender (location-priority + vector similarity + graph collaborative filtering).",
    stack: ["Vite", "React", "TypeScript", "Tailwind", "Supabase", "Python"],
    href: "https://github.com/S-K-23/REALestate.ai",
    category: "Web",
    metric: "Hybrid recommender",
    year: 2025,
  },
  {
    name: "QuantA",
    slug: "quanta",
    tagline: "Policy-constrained, agentic quantitative research platform.",
    description:
      "Autonomous agents that generate, backtest, and validate algorithmic trading strategies under strict risk constraints, with cloud auth, storage, and orchestration baked in for multi-user collaboration.",
    stack: ["Python", "FastAPI", "Supabase", "Clerk", "Railway", "Docker"],
    href: "https://github.com/S-K-23/QuantA",
    category: "Quant",
    metric: "Multi-agent + risk policy",
    year: 2025,
  },
  {
    name: "ReceiptScannerOCR",
    slug: "receipt-ocr",
    tagline: "Native iOS + FastAPI: snap a receipt, get structured JSON.",
    description:
      "A SwiftUI app and FastAPI backend that work in tandem to capture, upload, and OCR receipts using Tesseract — returning structured line-item data over REST.",
    stack: ["Swift", "SwiftUI", "FastAPI", "Tesseract", "Pillow"],
    href: "https://github.com/S-K-23/ReciptScannerOCR",
    category: "iOS",
    year: 2025,
  },
  {
    name: "MeanVarianceOptim",
    slug: "mvo",
    tagline: "Markowitz MVO portfolio; +4% over S&P across 8 months.",
    description:
      "A mean-variance-optimization study on a fixed asset basket. Live-tested over 8 months and outperformed the S&P 500 by ~4%.",
    stack: ["Python", "NumPy", "Pandas", "Jupyter"],
    href: "https://github.com/S-K-23/MeanVarianceOptim",
    category: "Quant",
    metric: "+4% vs S&P · 8 mo",
    year: 2025,
  },
  {
    name: "CaLOWrie",
    slug: "calowrie",
    tagline: "Minimalist, lightweight iOS calorie tracker.",
    description:
      "A pared-down Swift app that strips calorie tracking down to the gesture: log, glance, move on. No social, no streaks, no noise.",
    stack: ["Swift", "SwiftUI", "Xcode"],
    href: "https://github.com/S-K-23/CaLOWrie",
    category: "iOS",
    year: 2025,
  },
  {
    name: "fair_fairness_benchmark",
    slug: "fair-fairness-bench",
    tagline: "Fork & extensions to a fairness benchmark for ML pipelines.",
    description:
      "Fork of a fairness benchmark with custom extensions developed alongside Landseer research at Purdue.",
    stack: ["Python", "PyTorch"],
    href: "https://github.com/S-K-23/fair_fairness_benchmark_fork",
    category: "AI/ML",
    year: 2026,
  },
  {
    name: "p2pPay",
    slug: "p2p-pay",
    tagline: "Peer-to-peer payment prototype.",
    description: "A JavaScript prototype exploring peer-to-peer payment flows.",
    stack: ["JavaScript"],
    href: "https://github.com/S-K-23/p2pPay",
    category: "Web",
    year: 2025,
  },
  {
    name: "simple-proxy",
    slug: "simple-proxy",
    tagline: "Minimal TypeScript HTTP proxy.",
    description: "A small, no-frills HTTP proxy written in TypeScript.",
    stack: ["TypeScript", "Node"],
    href: "https://github.com/S-K-23/simple-proxy",
    category: "Systems",
    year: 2025,
  },
  {
    name: "DGE_EX1",
    slug: "dge-ex1",
    tagline: "Differential Gene Expression analysis.",
    description:
      "A notebook applying differential gene expression analysis to a bulk RNA-seq dataset.",
    stack: ["Python", "Jupyter", "ScanPy"],
    href: "https://github.com/S-K-23/DGE_EX1",
    category: "AI/ML",
    year: 2025,
  },
  {
    name: "BostonHousingRegression",
    slug: "boston-housing",
    tagline: "Classic regression study on the Boston Housing dataset.",
    description:
      "An end-to-end notebook walking through feature engineering and regression baselines for the Boston Housing dataset.",
    stack: ["Python", "Jupyter", "scikit-learn"],
    href: "https://github.com/S-K-23/BostonHousingRegression",
    category: "AI/ML",
    year: 2025,
  },
  {
    name: "sinGAN",
    slug: "sin-gan",
    tagline: "Tiny GAN that learns to draw sine waves.",
    description:
      "A pedagogical GAN that learns to generate sine waves — a clean toy problem for studying training dynamics.",
    stack: ["Python", "Jupyter", "PyTorch"],
    href: "https://github.com/S-K-23/sinGAN",
    category: "AI/ML",
    year: 2025,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { label: "Python", level: 5 },
      { label: "C / C++", level: 4 },
      { label: "Java", level: 4 },
      { label: "TypeScript", level: 4 },
      { label: "Rust", level: 3 },
      { label: "Solidity", level: 3 },
      { label: "Swift", level: 3 },
      { label: "C#", level: 2 },
    ],
  },
  {
    title: "ML & Systems",
    items: [
      { label: "PyTorch", level: 5 },
      { label: "TensorFlow", level: 4 },
      { label: "LangChain · RAG", level: 4 },
      { label: "Transformers / LLMs", level: 5 },
      { label: "Neo4j · GraphRAG", level: 4 },
      { label: "ScanPy · Biopython", level: 3 },
      { label: "Anchor · Foundry", level: 3 },
    ],
  },
  {
    title: "Cloud & Infra",
    items: [
      { label: "GCP · Cloud Run · Pub/Sub", level: 4 },
      { label: "AWS", level: 3 },
      { label: "Docker · Apptainer", level: 5 },
      { label: "SLURM · HPC", level: 4 },
      { label: "Supabase · Postgres", level: 4 },
      { label: "Linux", level: 5 },
    ],
  },
] as const;

export const navSections = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
