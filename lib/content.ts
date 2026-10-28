/** Every word on the site. Sourced from the CV so dates and titles stay honest. */

export const person = {
  name: "Matthew Beechey",
  shortName: "Matt",
  prefix: "Dr",
  location: "Loughborough, UK",
  email: "mattbeechey@gmail.com",
  site: "mattbeechey.com",
  github: "https://github.com/Beechey",
  linkedin: "https://www.linkedin.com/in/matthew-beechey-09091994",
  cv: "/Dr Matthew Beechey Industry - CV.pdf",
  roleLine: "Machine learning engineer, researcher and product manager",
  standfirst:
    "I build machine learning systems that have to survive contact with the real world — multi-agent AI for transport authorities, graph neural networks for beyond-5G networks, and embedded sensor suites on public buses.",
  bio: [
    "My doctorate applied evidence theory to machine learning for network security: how a classifier can express what it does not know, and what that admission is worth. It produced two journal papers — one on defending models against adversarial attack, one on selecting features by their epistemic uncertainty.",
    "Since then I have spent as much time shipping as researching. I have designed PCBs and written firmware for sensors that ride around on buses, owned a product end to end with government stakeholders, and now lead the implementation of a multi-agent analysis platform for local authorities.",
    "The thread running through all of it is the same question the PhD started with: how do you make a model's output something a person can actually act on, and defend afterwards.",
  ],
}

export const nav = [
  { label: "Aptiq", hash: "#aptiq" },
  { label: "Work", hash: "#work" },
  { label: "Papers", hash: "#papers" },
  { label: "Career", hash: "#career" },
  { label: "Toolkit", hash: "#toolkit" },
  { label: "Contact", hash: "#contact" },
]

/* ────────────────────────────────────────────────────────────────────────── */

/** The current post gets a case study of its own rather than a grid tile. */
export const currentWork = {
  org: "TransHumanity",
  product: "Aptiq",
  role: "Lead AI Engineer",
  since: "2025",
  href: "https://transhumanity.ai",
  standfirst:
    "Leading the implementation of Aptiq — a decision-intelligence platform that lets transport authorities and construction programmes ask questions of their own operational data in plain language, and then check the answer.",
  body: [
    "The hard part was never getting a model to produce a plausible sentence. It was making the sentence defensible. An authority cannot take a number into a committee if nobody can say which rows produced it.",
    "So the platform is built the other way round from most AI products. Underneath sits an ontology the customer defines — the assets, incidents, inspections and movements their world is actually made of — over append-only datasets where every load is an immutable, dated snapshot. Agents do not free-associate over raw tables; they resolve a question against that model and emit a structured query.",
    "That query is the receipt. Every figure in an answer can be opened to reveal the entity, the column, the statistic, the snapshot date and the SQL that produced it — which you can read, re-run, or take apart in the query builder. The model does not get the last word.",
  ],
  contributions: [
    {
      title: "Multi-agent architecture",
      body: "Specialist agents for planning, retrieval, geospatial reasoning and synthesis, decomposing questions into steps that can be inspected individually.",
    },
    {
      title: "Semantic layer",
      body: "The ontology and structured query engine the agents reason over — dimensions, measures, filters and joins that compile to readable SQL.",
    },
    {
      title: "Provenance",
      body: "End-to-end traceability from a figure in a sentence back to the snapshot and query behind it, so answers survive scrutiny.",
    },
    {
      title: "Evaluation",
      body: "An eval harness scoring agents against curated question sets before changes ship, so quality is measured rather than assumed.",
    },
  ],
  stack: [
    "Python",
    "LangGraph",
    "FastAPI",
    "PostgreSQL",
    "Apache Iceberg",
    "DuckDB",
    "React",
    "TypeScript",
  ],
}

export type Project = {
  figure: string
  title: string
  year: string
  blurb: string
  detail: string
  image: string
  tags: readonly string[]
  href?: string
  hrefLabel?: string
}

export const projects: Project[] = [
  {
    figure: "Fig. 3",
    title: "Traffic Insight",
    year: "2025",
    blurb: "Aerial computer vision for junction usage.",
    detail:
      "A traffic-aware vision system that detects and tracks how vehicles actually use a junction. Fine-tuned YOLO11 for aerial imagery, where vehicles are small, dense and rotationally arbitrary — the case off-the-shelf weights handle worst.",
    image: "/traffic_insight.png",
    tags: ["PyTorch", "OpenCV", "Computer vision", "Transport"],
    href: "https://github.com/Beechey/traffic_insight",
    hrefLabel: "Repository",
  },
  {
    figure: "Fig. 4",
    title: "BusMONITOR",
    year: "2022—2024",
    blurb: "An embedded sensor suite for public transport.",
    detail:
      "Built from nothing: schematic capture, PCB design, C firmware on STM32, force-resistive seat-occupancy sensing, MQTT over cellular, a time-series backend and forecasting on top. Deployed on public transport vehicles to measure and predict passenger comfort.",
    image: "/busmonitor-post.png",
    tags: ["STM32", "C", "PCB design", "MQTT", "Django", "PyTorch"],
    href: "https://www.linkedin.com/pulse/data-driven-comfort-busmonitors-role-redefining-public-transportation-znpue",
    hrefLabel: "Write-up",
  },
  {
    figure: "Fig. 5",
    title: "NN-DS",
    year: "2022",
    blurb: "Defending classifiers with epistemic uncertainty.",
    detail:
      "A defence against adversarial machine learning attacks built on evidential classification. Rather than hardening the decision boundary, the model is given a way to say it is uncertain — which turns out to catch adversarial inputs that a confident classifier waves through.",
    image: "/nnds.png",
    tags: ["PyTorch", "Adversarial ML", "Evidence theory", "Classification"],
    href: "https://www.sciencedirect.com/science/article/pii/S1566253522002342",
    hrefLabel: "Information Fusion",
  },
  {
    figure: "Fig. 6",
    title: "LR-DS",
    year: "2021",
    blurb: "Feature selection by what the model doesn't know.",
    detail:
      "A feature selection technique for binary classifiers that ranks features by the epistemic uncertainty they resolve rather than the accuracy they add. Selects smaller subsets that converge faster, with no loss in classification performance.",
    image: "/lrds.png",
    tags: ["PyTorch", "Feature selection", "Uncertainty", "Network security"],
    href: "https://www.sciencedirect.com/science/article/pii/S095070512100383X",
    hrefLabel: "Knowledge-Based Systems",
  },
]

/* ────────────────────────────────────────────────────────────────────────── */

export type Paper = {
  title: string
  authors: string
  venue: string
  detail: string
  year: string
  href: string
  abstract: string
}

export const papers: Paper[] = [
  {
    title: "Evidential classification for defending against adversarial attacks on network traffic",
    authors: "M. Beechey, S. Lambotharan, K. G. Kyriakopoulos",
    venue: "Information Fusion",
    detail: "Vol. 92, pp. 115—126",
    year: "2022",
    href: "https://www.sciencedirect.com/science/article/pii/S1566253522002342",
    abstract:
      "Machine learning classifiers are brittle under adversarial perturbation. Evidential classification lowers the error rate on perturbed instances while preserving performance on genuine malicious network traffic.",
  },
  {
    title: "Evidential classification and feature selection for cyber-threat hunting",
    authors: "M. Beechey, K. G. Kyriakopoulos, S. Lambotharan",
    venue: "Knowledge-Based Systems",
    detail: "Vol. 226, 107120",
    year: "2021",
    href: "https://www.sciencedirect.com/science/article/pii/S095070512100383X",
    abstract:
      "Evidence theory exposes how much each feature's uncertainty contributes to a classification decision, letting an analyst rank features from most to least ambiguous without domain expertise in cyber threats.",
  },
]

/* ────────────────────────────────────────────────────────────────────────── */

export type Post = {
  role: string
  org: string
  from: string
  to: string
  kind: "industry" | "academia"
  lines: readonly string[]
}

export const career: Post[] = [
  {
    role: "Lead AI Engineer",
    org: "TransHumanity",
    from: "2025",
    to: "Present",
    kind: "industry",
    lines: [
      "Lead the implementation of Aptiq, a multi-agent decision-intelligence platform for transport authorities and construction programmes.",
      "Own the agent architecture, the ontology and structured query engine they reason over, and the provenance chain that makes every figure auditable.",
      "Built the evaluation harness that scores agent quality against curated question sets before changes ship.",
    ],
  },
  {
    role: "Machine Learning Researcher",
    org: "Loughborough University",
    from: "Jun 2024",
    to: "2025",
    kind: "academia",
    lines: [
      "Led the technical side of a graph neural network research project for beyond-5G networking.",
      "Built a GNN that predicts latency across communication networks accurately enough to route segments on its output.",
      "Developed a GNN for access-point user association, raising resource efficiency to defer hardware spend under user saturation.",
    ],
  },
  {
    role: "Technical Product Owner",
    org: "Vectare Ltd",
    from: "Apr 2022",
    to: "Apr 2024",
    kind: "industry",
    lines: [
      "Owned development of IoT sensor suites for public transport vehicles, from ideation to deployment.",
      "Designed a model predicting dynamic private-hire vehicle costs, removing the human from the loop.",
      "Schematic capture, PCB hardware design, C firmware, two-way comms, time-series database design and forecasting.",
      "Worked directly with industry and government stakeholders; ran marketing and project reporting.",
    ],
  },
  {
    role: "Doctoral Researcher",
    org: "Loughborough University",
    from: "Jan 2019",
    to: "Dec 2022",
    kind: "academia",
    lines: [
      "Developed classification models for network security grounded in evidence theory.",
      "Devised evidential defences against adversarial attacks that sharply reduced misclassification.",
      "Invented feature-selection methods leveraging uncertainty, selecting optimal subsets on both accuracy and time to converge.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Loughborough University",
    from: "Jan 2018",
    to: "Dec 2018",
    kind: "academia",
    lines: [
      "Benchmarked micro-clusters of embedded compute against high-power servers for rural web hosting and caching.",
      "Formalised experimental results for conference publication.",
    ],
  },
]

export const education = [
  {
    award: "PhD",
    field: "Evidence Theory Based Machine Learning Approaches for Network Security",
    school: "Loughborough University",
    years: "2019—2022",
    grade: "",
  },
  {
    award: "MSc",
    field: "Internet Computing and Network Security",
    school: "Loughborough University",
    years: "2017—2018",
    grade: "Distinction",
  },
  {
    award: "BSc",
    field: "Computer Science",
    school: "De Montfort University",
    years: "2013—2016",
    grade: "First Class Honours",
  },
]

/* ────────────────────────────────────────────────────────────────────────── */

export const toolkit = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "C", "SQL", "Java", "PHP"],
  },
  {
    group: "Machine learning",
    items: ["PyTorch", "Torch Geometric", "scikit-learn", "Pandas", "NumPy", "SciPy"],
  },
  {
    group: "Backend & web",
    items: ["Django", "FastAPI", "React", "Next.js", "PostgreSQL", "Redis"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "AWS S3", "AWS EC2", "SageMaker", "Grafana", "Git"],
  },
  {
    group: "Embedded",
    items: ["STM32 ARM Cortex-M", "UART", "I2C", "SPI", "ADC", "MQTT", "GNSS", "Cellular"],
  },
  {
    group: "Hardware & product",
    items: ["KiCad", "Altium Designer", "Fusion 360", "Stakeholder engagement", "Horizon scanning"],
  },
]
