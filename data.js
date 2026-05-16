/**
 * SYRG Labs Website — content data
 *
 * Edit this file to update the site. Everything here is plain JavaScript;
 * add, remove, or reorder entries however you like. GitHub Pages serves the
 * repository root directly from the main branch.
 */

window.SYRG_DATA = {

  // ─── PAPERS ────────────────────────────────────────────────────────────────
  // Each paper needs:
  //   - id    — unique string used to mark a paper as selected
  //   - title — paper title
  //   - tag   — sector. Accepts either a single string ("physics") or an
  //             array (["physics", "social"]) for papers that belong to
  //             multiple topics. The paper will appear under each tab listed.
  //             Allowed values: "social" | "physics" | "bio" | "reports"
  //             ("reports" is for writeups / long-form reports — same
  //              schema as papers, just shows under the Reports tab.)
  //   - desc  — one-line description shown under the title
  //   - paper — URL to the paper (arXiv, OpenReview, SSRN, DOI, etc.) or null
  //   - code  — URL to the GitHub repo or null
  //
  // Order this array most-recent-first. The Home page's "Recent" section is
  // the first four entries; sector sections on /research preserve this order.
papers: [
    { id: "tsb", tag: "bio", title: "The Second Brain: Diffusion Models for Realistic Human Microbiome Generation", desc: "A deep generative model using hyperbolic taxonomic embeddings to match high-dimensional microbiome sparsity.", paper: "https://doi.org/10.64898/2026.05.07.723523 ", code: "https://github.com/SYRG-Labs/the-second-brain" },
    { id: "pi-lno", tag: "social", title: "PI-LNO: Physics-Informed Surrogates for Heterogeneous-Agent Models", desc: "A physics-informed neural operator surrogate for economic PDE systems achieving 7,000x+ speedups.", paper: "logos/PI_LNO-2.pdf", code: "https://github.com/SYRG-Labs/pi-lno"},
    { id: "msat", tag: "physics", title: "When Attention Beats Fourier: Multi-Scale Transformers for PDE Solving on Irregular Domains", desc: "Introduces Multi-Scale Attention Transformers (MSAT) to eliminate spectral truncation bias in irregular domains.", paper: "https://arxiv.org/abs/2605.08318",},
    { id: "aim4d", tag: "social", title: "Democratic Factor Betas, Network Contagion, and Early Warning: A Five-Stage Econometric Framework for Forecasting Democratic Decline", desc: "An asset pricing framework for regime dynamics that identifies digital control as a primary predictor of autocratization.", paper: "https://papers.ssrn.com/abstract=6750658", code: "https://github.com/SYRG-Labs/AIM4D"},
    { id: "coordination-deficit", tag: "reports", title: "The Coordination Deficit: Ecological Baselines and Behavioral Mechanisms for Cooperative LLM Agent Systems", desc: "Identifies performance drops in multi-agent populations and uses behavioral priors to close the coordination gap.", paper: "logos/coordination-defecit.pdf" },
    { id: "amazeval", tag: "reports", title: "AmazEval: A Conservation-Aware Benchmark for Bioacoustic Species Recognition in Threatened Amazonian Fauna", desc: "A conservation-focused benchmark using IUCN-weighted metrics to evaluate bioacoustic species recognition.", paper: "logos/icmlbirdnoises.pdf" },
    { id: "birdnet-hengduan", tag: "reports", title: "Silent Failure and Structured Miscalibration: An OOD Audit of BirdNET on Hengduan Mountains Endemics", desc: "An OOD audit revealing systematic miscalibration of BirdNET on high-altitude endemic bird species.", paper: "logos/birdnetsichuan_icmlsub-6.pdf" },
    { id: "evidence-gated-memory", tag: "reports", title: "Same-Evidence Reader-Budget Gating for Token-Efficient Agent Memory", desc: "A deterministic risk-based gate for RAG systems that reduces token usage by 37% via adaptive evidence selection.", paper: "logos/evidence_gated_agent_memory-4.pdf" },
    { id: "gender-pay", tag: "social", title: "Causal Mechanisms of the Gender Pay Gap", desc: "Uses Neural Structural Causal Models to decompose wage penalties into direct and mediated pathways.", paper: "https://papers.ssrn.com/abstract=6746019" },
    { id: "pi-jepa",          tag: "physics", title: "PI-JEPA: Label-Free Surrogate Pretraining for Coupled Multiphysics Simulation via Operator-Split Latent Prediction", desc: "Operator-split latent prediction for label-free pretraining of multiphysics simulation surrogates.", paper: "https://arxiv.org/abs/2604.01349", code: "https://github.com/SYRG-Labs/PI-JEPA", notebook: "https://molab.marimo.io/github/brandonsinha-cs/pi-jepa-marimo/blob/main/notebook.py/wasm?mode=read&show-code=false" },
    { id: "prompt-analytic",  tag: "social",  title: "The Prompt is the Analytic Choice: Specification Curve Analysis for LLM-Based Social Science", desc: "Specification curve analysis showing how prompt choice shapes LLM-based social science findings.", paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6592118", code: "https://github.com/SYRG-Labs/psca" },
    { id: "real-estate",      tag: "social",  title: "Causal Disentanglement of Location and Semantic Signals in Real Estate Valuation", desc: "Causal disentanglement of location-driven and semantic signals in real estate valuation.", paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6572259", code: "https://github.com/SYRG-Labs/causal-real-estate" },
    { id: "beam-plasma",      tag: "physics", title: "Beam-Plasma Collective Oscillations in Intense Charged-Particle Beams: Dielectric Response Theory, Langmuir Wave Dispersion, and Unsupervised Detection via Prometheus", desc: "Applies the Prometheus framework to beam-plasma systems via dielectric response theory and Langmuir wave dispersion.", paper: "https://arxiv.org/abs/2603.10457", code: "https://github.com/SYRG-Labs/prometheus-beam" },
    { id: "moltbook",         tag: "social",  title: "Benchmarking Emergent Coordination in Large-Scale LLM Populations: An Evaluation Framework on the MoltBook Archive", desc: "Evaluation framework for emergent coordination in large-scale LLM populations using the MoltBook archive.", paper: "https://arxiv.org/abs/2603.03555", code: "https://github.com/SYRG-Labs/molt-dynamics" },
    { id: "geodesic-search",  tag: "social",  title: "Geodesic Semantic Search: Cartographic Navigation of Citation Graphs with Learned Local Riemannian Maps", desc: "Cartographic navigation of citation graphs via learned local Riemannian maps for semantic search.", paper: "https://arxiv.org/abs/2602.23665", code: "https://github.com/SYRG-Labs/geodesic-search" },
    { id: "llm-measurement",  tag: "social",  title: "Large Language Models as Calibrated Measurement Instruments for Behavioral Parameters", desc: "Treating LLMs as calibrated measurement instruments for estimating behavioral parameters.", paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6668018", code: "https://github.com/SYRG-Labs/agents-as-actors" },
    { id: "fomc",              tag: "social",  title: "Beyond Words: Predicting Market Volatility from Multimodal Central Bank Communication", desc: "Multimodal models predicting market volatility from central bank communication.", paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5977534", code: "https://github.com/SYRG-Labs/FOMC-Research" },
    { id: "prom-quantum",     tag: "physics", title: "From Classical to Quantum: Extending Prometheus for Unsupervised Discovery of Phase Transitions in Three Dimensions and Quantum Systems", desc: "Extends Prometheus to 3D and quantum spin systems, including infinite-randomness fixed-point detection.", paper: "https://arxiv.org/abs/2602.14928", code: "https://github.com/SYRG-Labs/prometheus" },
    { id: "prometheus-2d",    tag: "physics", title: "Prometheus: Unsupervised Discovery of Phase Transitions and Order Parameters in the 2D Ising Model Using Variational Autoencoders", desc: "Physics-informed VAE for 2D Ising phase transitions with 99.7% critical-temperature accuracy.", paper: "https://ojs.aaai.org/index.php/AAAI/article/view/42300", code: "https://github.com/SYRG-Labs/prometheus/tree/prometheus-2D" },
  ],

  // ─── SELECTED PUBLICATIONS ─────────────────────────────────────────────────
  // Paper ids highlighted in the "Selected Publications" section of /research.
  // Ordering of this array determines display order.
  selected: ["tsb", "pi-jepa", "llm-measurement", "prometheus-2d"],

  // ─── LEADERSHIP / MAIN TEAM ────────────────────────────────────────────────
  // Shown at the top of the Team page. Members listed here are also auto-hidden
  // from the per-lab "Researchers" sections so they don't appear twice.
  leadership: [
    { name: "Brandon Sinha",    role: "Co-founder · Lead Researcher",          linkedin: "https://www.linkedin.com/in/brandon-sinha-0b335a284/" },
    { name: "Wilson Yalageri", role: "Co-founder · Physics Research Director", linkedin: "https://www.linkedin.com/in/wilson-yalageri-061186337/" },
    { name: "Pairie Koh",     role: "Economics Research Director",            linkedin: "https://www.linkedin.com/in/pairie-koh-687369279/" },
    { name: "River Walser",   role: "Biology Research Director",              linkedin: "https://www.linkedin.com/in/river-walser-b32ab1307/" },
  ],

  // ─── TEAM ──────────────────────────────────────────────────────────────────
  // Shown on the Team page below Main Team, grouped by lab. Each member has:
  //   - name, role, affiliation
  // If `affiliation` is "Sinha-Yalageri Research Group" (the default home), it's
  // hidden from the displayed line. Set it to anything else to show it.
  team: [
    {
      lab: "Management Sciences",
      members: [
        { name: "Peter Li",              role: "Technical Director",  affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/anqipeterli/" },
        { name: "Kundana Kommini",       role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/kundana-kommini-0b90b8289/" },
        { name: "Jacob Crainic",         role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/jacob-crainic-2b2b64372/" },
        { name: "Jiayi Fu",              role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/jiayi-fu-722796378/" },
        { name: "Maximilian Rutkowski",  role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group" },
        { name: "Mihir Tekal",           role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group" },
        { name: "Eric Lee",              role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/ericlee128/" },
        { name: "Benjamin Pellegrini",   role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/ben-pellegrini-43b520359/" },
        { name: "Felipe Quintero Ochoa", role: "Senior Researcher",   affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/felipe-q-2903b0382/" },
        { name: "Kylah Kao",             role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/kylahk/" },
        { name: "Lucas Wang",            role: "Researcher",          affiliation: "Sinha-Yalageri Research Group" },
        { name: "Michael Iofin",         role: "Researcher",          affiliation: "Sinha-Yalageri Research Group" },
        { name: "Caden Wang",            role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/cadenwang07/" },
        { name: "Sarah Razack",          role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/sarah-razack-b63983284/" },
        { name: "Kevin Zhou",            role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/k-zh0u/" },
        { name: "Jack Rodriguez",        role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/jack-rodriguez-866549374/" },
        { name: "Danny Kim",             role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/danny-kim-079627334/" },
        { name: "Lev Kung",              role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/lev-kung-2540212a9/" },
        { name: "Owen Lee",              role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/lev-kung-2540212a9/" },
        { name: "Sanvi Tummala",         role: "Researcher",          affiliation: "Sinha-Yalageri Research Group" },
        { name: "Huanran Yu",            role: "Researcher",          affiliation: "Sinha-Yalageri Research Group", linkedin: "https://www.linkedin.com/in/henry-yu-0a650a285/" },
      ],
    },
    {
      lab: "Physics",
      members: [
      ],
    },
    {
      lab: "Biology",
      members: [
      ],
    },
    {
      lab: "IMSS",
      members: [
      ],
    },
  ],

  // ─── RESEARCH PARTNERS ─────────────────────────────────────────────────────
  // Shown at the top of the Partners page.
  // - `url` makes the card clickable (omit or set null for no link).
  // - `logo` is optional — if missing, the name renders as a typographic wordmark.
  researchPartners: [
    // { name: "xOrbita",        role: "Research partner", logo: "logos/xorbita.png",        url: "https://xorbita.com/" },
    { name: "Dualverse AI", role: "Research partner", logo: "logos/dualverse.png",       url: "https://dualverse.ai/"},
    { name: "AIYGO",          role: "Research partner", logo: "logos/aiygo.png",          url: "https://aiygo.org/" },
    { name: "Throne Science", role: "Research partner", logo: "logos/throne.jpg", url: "https://www.thronescience.com/" },
  ],

  // ─── ACADEMIC COLLABORATORS ────────────────────────────────────────────────
  // Free-text line shown on the Partners page below sponsors.
  academicCollaborators: [
    "Stanford Free Systems Lab",
    "MIT CSAIL",
    "Georgia Tech",
    "Columbia Water Center",
    "Duke Nicholas School of the Environment",
    "MIT Sloan",
  ],

  // ─── SPONSORS ──────────────────────────────────────────────────────────────
  // Shown by tier on the Partners page.
  // - Set a tier to `null` to leave it empty (renders as "—").
  // - For a logo image, use `{ logo: "logos/...", alt: "Name", url?: "..." }`.
  // - For a typographic wordmark, use `{ name: "...", url?: "..." }`.
  sponsors: {
    platinum: { name: "Mundane Co." },
    gold:     null,
    silver:   null,
    bronze:   { logo: "logos/jane-street.png", alt: "Jane Street", url: "https://www.janestreet.com/" },
  },

  // ─── NOTEBOOKS ─────────────────────────────────────────────────────────────
  // Interactive notebooks shown on the Models & Data page. Each gets its own
  // sub-page accessible via #models/<id> with the embed rendered in an iframe.
  notebooks: [
    {
      id:    "pi-jepa",
      title: "PI-JEPA: Label-Free Surrogate Pretraining for Coupled Multiphysics Simulation",
      desc:  "Interactive marimo notebook walking through the operator-split latent prediction architecture.",
      url:   "https://molab.marimo.io/notebooks/nb_WJyYeaxsGsPgyWJUNH1GdY/app",
    },
  ],

  // ─── NEWS ──────────────────────────────────────────────────────────────────
  // Shown on the News page. Order is display order (most recent first).
  // Each entry: date, title, body, tag.
  // Tag is one of: "announcement" | "press" | "spotlight".
  news: [
    {
      date:  "May 2026",
      title: "SYRG on Advancing SDGs at the United Nations",
      tag:   "press",
      image: "logos/news/un.jpg", // Ensure you have a relevant UN logo at this path
      noBg:  true,
      body:  "SYRG's Pairie Koh presented an intervention at the UN Science, Technology, and Innovation (STI) Forum, advocating for the development of open-access research powered by machine learning. We detailed how grounding autonomous scientific discovery in open-source frameworks can accelerate the achievement of the UN's Sustainable Development Goals (SDGs), bridging the gap between advanced AI and global equity. (Statement available at https://sdgs.un.org/statements/sinha-yalageri-research-group-61490, presentation video available at https://webtv.un.org/en/asset/k1q/k1qqh82p85).",
    },
    {
      date:  "May 2026",
      title: "SSRN Blog Mention",
      tag:   "press",
      image: "logos/news/ssrn_1.webp",
      noBg:  true,
      body:  "SYRG was mentioned again in the SSRN blog 'The Latest Research on Central Banks' (available at https://blog.ssrn.com/2026/05/04/the-latest-research-on-central-banks-2/).",
    },
    {
      date:  "May 2026",
      title: "Scientific Discovery with Dualverse AI",
      tag:   "announcement",
      image: "logos/news/dualverse.png",
      noBg:  true,
       body:  "SYRG is partnering with Dualverse AI, a research lab founded by Stephen Chung (Cambridge) and Wenyu Du (HKU), to extend their STATION framework with physical constraints and reinforcement learning. By grounding open-world multi-agent discovery in physically consistent dynamics, we aim to push autonomous scientific reasoning beyond benchmarks in mathematics and machine learning toward problems governed by real-world physics.",
    },
    {
      date:  "April 2026",
      title: "Quantitative Rigor with Jane Street",
      tag:   "announcement",
      image: "logos/jane-street.png",
      noBg:  true,
      body:  "We are proud to welcome Jane Street as a Bronze Sponsor. As a firm deeply rooted in technology and mathematical rigorousness, Jane Street's support is invaluable as we continue to refine our quantitative models and research within computational economics.",
    },
    {
      date:  "April 2026",
      title: "The Future of Work with Mundane Co.",
      tag:   "announcement",
      image: "logos/news/mundane.webp",
      body:  "A huge thank you to Mundane Co. for becoming a Platinum Sponsor. Founded by Harry Bryars and Keith Fearon, Mundane is pioneering the future of AI Coworkers; their support directly enables our continued research into the next generation of productivity.",
    },
    {
      date:  "March 2026",
      title: "SSRN Blog Mention",
      tag:   "press",
      image: "logos/news/ssrn_banks.webp",
      noBg:  true,
      body:  "Our research into 'communication risk' was featured in the SSRN blog 'The Latest Research on Central Banks' (available at https://blog.ssrn.com/2026/03/10/the-latest-research-on-central-banks/).",
    },
    {
      date:  "March 2026",
      title: "Global Research Synergy with AIYGO",
      tag:   "announcement",
      image: "logos/news/aiygo.png",
      noBg:  true,
      body:  "We have teamed up with the AI Youth Global Organization (AIYGO) to pursue interdisciplinary research in the field of scientific discovery. This partnership leverages SYRG's technical expertise alongside AIYGO's global community to explore how emerging AI frameworks can be applied to solve complex problems across various scientific domains.",
    },
    {
      date:  "January 2026",
      title: 'Simulating the "Second Brain" with Throne Science',
      tag:   "announcement",
      image: "logos/news/throne.jpg",
      body:  "SYRG is partnering with Throne Science, co-founded by John Capodilupo (former co-founder of WHOOP), to advance generative modeling of the human microbiome. By integrating our research on sparsity-preserving diffusion models and hyperbolic embeddings with Throne's diagnostic platform, we are building high-fidelity simulations to better understand the complex taxonomic relationships that drive personalized health.",
    },
  ],

  // ─── CONTACT ───────────────────────────────────────────────────────────────
  // Order in this object determines display order in the sidebar.
  contact: {
    github:    "https://github.com/SYRG-Labs",
    linkedin:  "https://www.linkedin.com/company/syrg-labs",
    youtube:   "https://www.youtube.com/@syrg-labs",
    instagram: "https://www.instagram.com/syrg.labs/",
  },
};
