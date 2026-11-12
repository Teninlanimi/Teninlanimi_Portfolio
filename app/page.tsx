import Image from "next/image";

const LINKS = {
  github: "https://github.com/Teninlanimi",
  linkedin: "https://www.linkedin.com/in/teninlanimi-faith-olajide-6b6b60236/",
  email: "mailto:oteninlanimi@gmail.com",
  paper: "https://teninlanimi.github.io/flyrank-internship-ml/",
  resume: "/resume.pdf",
};

const stats = [
  { value: "0.83", label: "Precision@20 on clients the model never saw" },
  { value: "95.6%", label: "fake news accuracy, with a published stress test" },
  { value: "6", label: "end-to-end ML projects on GitHub" },
  { value: "1", label: "published research paper" },
];

type Project = {
  title: string;
  kind: string;
  blurb: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  repo: string;
  accent: "pink" | "teal" | "gold";
};

const projects: Project[] = [
  {
    title: "Fake News Detector",
    kind: "NLP · Web app",
    blurb:
      "Word and character TF-IDF with a calibrated Linear SVC, served in a Flask app that returns a verdict and a confidence score. Every push retrains the model and must pass a 94% accuracy gate in CI.",
    metrics: [
      { value: "95.6%", label: "test accuracy" },
      { value: "48.8%", label: "on unseen LIAR statements" },
    ],
    tags: ["scikit-learn", "NLP", "Flask", "GitHub Actions"],
    repo: "https://github.com/Teninlanimi/Fake-News-",
    accent: "pink",
  },
  {
    title: "Dangote Refinery IPO: ROI Model",
    kind: "Finance · Scenario model",
    blurb:
      "Projects returns on the ₦525 public offer using Dangote Cement and Dangote Sugar FY2025 results as bull and bear benchmarks, with a Flask dashboard of live sliders for margin, P/E, growth and naira depreciation.",
    metrics: [
      { value: "+55%", label: "weighted 3-year ROI (₦)" },
      { value: "13.4×", label: "implied P/E vs cement's 13.5×" },
    ],
    tags: ["Python", "Financial modelling", "Flask"],
    repo: "https://github.com/Teninlanimi/Dangote-Refinery-ROI-Predictor",
    accent: "gold",
  },
  {
    title: "Academic Outcome Prediction",
    kind: "Classification · Streamlit",
    blurb:
      "Predicts whether a student will graduate, drop out or still be enrolled, from 4,424 university records. A Streamlit app shows the prediction and the probability of each outcome for advisers.",
    metrics: [
      { value: "0.74", label: "hold-out accuracy" },
      { value: "0.67", label: "dropout recall" },
    ],
    tags: ["Random Forest", "scikit-learn", "Streamlit"],
    repo: "https://github.com/Teninlanimi/academic-outcome-prediction",
    accent: "teal",
  },
  {
    title: "Introvert vs Extrovert",
    kind: "Classification · Streamlit",
    blurb:
      "Predicts personality type from seven social habits with CatBoost, using class weights to handle a 74/26 imbalance and stratified 5-fold cross-validation, plus a Streamlit app.",
    metrics: [
      { value: "96.9%", label: "cross-validated accuracy" },
      { value: "0.94", label: "introvert recall" },
    ],
    tags: ["CatBoost", "Imbalanced data", "Streamlit"],
    repo: "https://github.com/Teninlanimi/introvert-extrovert",
    accent: "pink",
  },
  {
    title: "Stock Price Predictor",
    kind: "Forecasting · Time series",
    blurb:
      "Next-day price forecasts from real Yahoo Finance data, with lag, momentum and volatility features and a leakage-free chronological split. None of the three models beat 'tomorrow = today', and the README says so.",
    metrics: [
      { value: "534", label: "unseen test days" },
      { value: "Naive", label: "baseline wins, reported honestly" },
    ],
    tags: ["Time series", "scikit-learn", "yfinance"],
    repo: "https://github.com/Teninlanimi/stock-price-predictor",
    accent: "teal",
  },
];

const experience = [
  {
    role: "Machine Learning Engineer Intern",
    org: "FlyRank AI",
    dates: "Jun – Oct 2026",
    points: [
      "Built ranking models to prioritise declining web content for refresh, evaluated with Precision@K.",
      "Validated on held-out clients and audited features for leakage; wrote up the results as a research paper.",
    ],
  },
  {
    role: "Data Operations Assistant",
    org: "WellCrest Therapy",
    dates: "Jan – Jun 2026",
    points: ["Maintained structured client, scheduling and billing records; automated recurring email workflows."],
  },
  {
    role: "Data Science Intern",
    org: "NOTZERO Innovation Hub",
    dates: "Jan – Dec 2025",
    points: ["Built and evaluated classification and prediction models; turned findings into reports for non-technical teams."],
  },
  {
    role: "Data Support Intern",
    org: "Nigerian Institute for Social and Economic Research",
    dates: "Jan – Jul 2023",
    points: ["Cleaned and maintained survey, interview and laboratory research datasets."],
  },
];

const skills = [
  { group: "Languages & data", items: ["Python", "SQL", "Pandas", "NumPy"] },
  { group: "Machine learning", items: ["scikit-learn", "CatBoost", "XGBoost", "NLP (TF-IDF)", "Ranking"] },
  { group: "Evaluation", items: ["Precision@K", "Grouped cross-validation", "Leakage audits", "Baselines"] },
  { group: "Shipping", items: ["Flask", "Streamlit", "GitHub Actions", "Quarto", "Git"] },
];

const accentText = { pink: "text-pink", teal: "text-teal", gold: "text-gold" };
const accentBar = { pink: "bg-pink", teal: "bg-teal", gold: "bg-gold" };

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-teal">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Teninlanimi<span className="text-pink">.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#research" className="hover:text-foreground">Research</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
          <a
            href={LINKS.resume}
            className="rounded-full border border-pink/60 px-4 py-1.5 text-sm font-medium text-pink transition hover:bg-pink hover:text-background"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-pink/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 -left-40 h-[380px] w-[380px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 pb-16 md:grid-cols-[1.4fr_1fr] md:pt-28">
          <div>
            <p className="font-mono text-sm text-teal">Machine learning engineer</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
              I build ML models that <span className="text-pink">hold up</span> on real data.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m Teninlanimi Faith Olajide. I work on ranking, NLP and forecasting in Python, and I care most about
              the part that decides whether a model survives: leakage checks, honest baselines and validation on data it
              has never seen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-pink px-6 py-3 font-medium text-background transition hover:brightness-110"
              >
                View my projects
              </a>
              <a
                href={LINKS.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 font-medium transition hover:border-teal hover:text-teal"
              >
                Read my research
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-56 sm:w-72">
            <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-br from-pink to-teal opacity-70 blur-[2px]" />
            <Image
              src="/avatar.webp"
              alt="Illustrated avatar of Teninlanimi"
              width={480}
              height={480}
              priority
              className="relative rounded-[2rem] border border-border"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="relative mx-auto max-w-6xl px-5 pb-20">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface p-5 sm:p-6">
                <dt className="font-display text-3xl font-bold text-foreground sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <SectionTitle eyebrow="01 · Featured research" title="Content refresh prioritisation at FlyRank" />
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="font-mono text-xs tracking-wider text-muted uppercase">Research paper · Aug 2026</p>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Machine Learning for Content Refresh Prioritization
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Which pages should an SEO team review first? I ranked 30,000 pages by how likely they were to be
                declining, compared Logistic Regression, Decision Tree and Random Forest against a rule-based baseline,
                and evaluated every model on clients it never saw in training.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                An early row-level split gave a flattering 0.90. I reported the stricter client-grouped result instead,
                because that is the number a new client would actually get.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={LINKS.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-background transition hover:brightness-110"
                >
                  Read the paper
                </a>
                <a
                  href="https://github.com/Teninlanimi/flyrank-internship-ml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-teal hover:text-teal"
                >
                  View the code
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface-2 p-6">
              <p className="text-sm text-muted">Mean Precision@20 across 5 held-out client groups</p>
              <div className="mt-5 space-y-4">
                {[
                  { name: "Logistic Regression", v: 0.83, best: true },
                  { name: "Random Forest", v: 0.76 },
                  { name: "Decision Tree", v: 0.47 },
                  { name: "Rule-based baseline", v: 0.43 },
                ].map((m) => (
                  <div key={m.name}>
                    <div className="flex justify-between text-sm">
                      <span className={m.best ? "font-medium text-foreground" : "text-muted"}>{m.name}</span>
                      <span className={`font-mono ${m.best ? "text-teal" : "text-muted"}`}>{m.v.toFixed(2)}</span>
                    </div>
                    <div className="mt-1.5 h-2.5 rounded-full bg-border">
                      <div
                        className={`h-2.5 rounded-full ${m.best ? "bg-teal" : "bg-muted/50"}`}
                        style={{ width: `${m.v * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted">
                Logistic Regression was also the most stable (±0.05 across clients). 54% of pages were declining, so the
                baseline scored below a random queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <SectionTitle eyebrow="02 · Projects" title="Things I've built" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-muted/40"
            >
              <div className={`absolute top-0 left-0 h-1 w-full ${accentBar[p.accent]} opacity-70`} />
              <p className={`font-mono text-xs ${accentText[p.accent]}`}>{p.kind}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-surface-2 px-4 py-3">
                    <div className="font-display text-xl font-bold">{m.value}</div>
                    <div className="text-xs text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition group-hover:decoration-pink"
                >
                  Code →
                </a>
              </div>
            </article>
          ))}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-center rounded-2xl border border-dashed border-border p-6 transition hover:border-pink"
          >
            <p className="font-mono text-xs text-muted">More work</p>
            <h3 className="mt-2 font-display text-xl font-bold">
              Bank marketing, Titanic Spaceship, supermarket sales and more on GitHub{" "}
              <span className="text-pink transition group-hover:translate-x-1">→</span>
            </h3>
            <p className="mt-3 text-sm text-muted">Every project has its code, data notes and an honest README.</p>
          </a>
        </div>
      </section>

      {/* Experience + skills */}
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <SectionTitle eyebrow="03 · Experience" title="Where I've worked" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative border-l border-border">
            {experience.map((e) => (
              <li key={e.role} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full border-2 border-pink bg-background" />
                <p className="font-mono text-xs text-muted">{e.dates}</p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  {e.role} <span className="font-sans font-normal text-muted">· {e.org}</span>
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold">Skills</h3>
              <div className="mt-4 space-y-4">
                {skills.map((s) => (
                  <div key={s.group}>
                    <p className="text-xs tracking-wider text-muted uppercase">{s.group}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.items.map((i) => (
                        <span key={i} className="rounded-md bg-surface-2 px-2.5 py-1 text-sm">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold">Education</h3>
              <p className="mt-3 text-sm">BSc Computer Science</p>
              <p className="text-sm text-muted">Babcock University · 2020 – 2024</p>
              <h3 className="mt-6 font-display text-lg font-bold">Certifications</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                <li>Anthropic AI Training: 20 certificates</li>
                <li>AI Fundamentals, IBM</li>
                <li>Certified Data Scientist, NOTZERO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-pink/20 blur-3xl" />
          <p className="relative font-mono text-sm text-teal">04 · Contact</p>
          <h2 className="relative mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something that works.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            I&apos;m open to machine learning and data science roles, internships and research collaborations.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={LINKS.email} className="rounded-full bg-pink px-6 py-3 font-medium text-background transition hover:brightness-110">
              Email me
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 font-medium transition hover:border-teal hover:text-teal"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 font-medium transition hover:border-teal hover:text-teal"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 pt-4 pb-12 text-sm text-muted">
        © 2026 Teninlanimi Faith Olajide · Built with Next.js and Tailwind CSS
      </footer>
    </div>
  );
}
