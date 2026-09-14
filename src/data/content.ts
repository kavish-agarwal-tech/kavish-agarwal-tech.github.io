export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  context: string;
  challenge: string;
  role: string;
  approach: string;
  decisions: string[];
  impact: string;
  multiplier: string;
  lessons: string[];
  diagram?: "modernization" | "decisioning" | "a2a" | "governance";
};

export type Lab = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  themes: string[];
  explored: string;
  learned: string;
  technologies: string[];
  repo: string;
  diagram?: "decisioning" | "payments" | "governed";
};

export type CareerChapter = {
  number: string;
  company: string;
  title: string;
  summary: string;
  highlights?: string[];
  emphasis?: "light" | "strong";
};

export const capabilities = [
  {
    number: "01",
    title: "Platform Architecture",
    description: "Designing scalable, reusable platforms rather than one-off solutions.",
    topics: "Distributed systems · real-time processing · APIs · events · reusable capabilities",
  },
  {
    number: "02",
    title: "Modernization",
    description: "Moving critical systems forward without destabilizing the business.",
    topics: "Legacy evolution · incremental decomposition · coexistence · migration · reliability",
  },
  {
    number: "03",
    title: "Decisioning & Intelligence",
    description: "Combining rules, data, models, and orchestration into explainable decision systems.",
    topics: "Real-time decisioning · rules · ML integration · policy execution · explainability",
  },
  {
    number: "04",
    title: "Engineering Leadership",
    description: "Scaling architecture through people, patterns, governance, and technical leadership.",
    topics: "Mentoring · design reviews · enablement · governance · AI-enabled engineering",
  },
];

export const work: CaseStudy[] = [
  {
    slug: "platform-modernization",
    eyebrow: "Case study 01",
    title: "Modernizing a Mission-Critical Global Risk Platform",
    summary: "Evolving a mature risk-management application through staged modernization while protecting continuity for a global user base.",
    tags: ["Modernization", "Migration", "High availability", "Team enablement"],
    context: "A mature global risk-management application had accumulated significant technology debt across its Java application stack, user experience, deployment model, and operating environment. It served a large, globally distributed user base and could not be replaced through a high-risk big-bang rewrite.",
    challenge: "The difficult part was not choosing a new framework. It was improving the platform while preserving proven behavior, coordinating several specialist groups, and giving teams a safe path to move users and capabilities in controlled waves.",
    role: "I served as a technical lead for the modernization, working across product, architecture, infrastructure, security, database, release engineering, and multiple distributed development teams. I also stepped into implementation directly for several high-risk technical areas.",
    approach: "We evolved the system toward independently deployable services while preserving proven business logic and data where that reduced migration risk. The work combined a new user experience, pragmatic service decomposition, shared libraries for critical logic, new infrastructure, observability, failover design, and a phased coexistence model between legacy and modernized experiences.",
    decisions: [
      "Avoid rewriting everything: retain data structures that remained fit for purpose and preserve behavior that users depended on.",
      "Extract shared business logic instead of duplicating it across new services.",
      "Migrate users in controlled waves, making availability part of product experience rather than an infrastructure afterthought.",
    ],
    impact: "The program created a modernized platform that could be rolled out progressively while maintaining continuity for global users and reducing migration and operational risk.",
    multiplier: "I helped distributed teams learn an unfamiliar domain, reviewed designs, taught undocumented business behavior discovered through code and debugging, and created enough technical structure for teams in multiple locations to deliver independently.",
    lessons: ["Modernization is a sequence of risk decisions, not a single technology decision.", "The safest path forward often keeps a useful part of the past alive long enough to make the next change reversible."],
    diagram: "modernization",
  },
  {
    slug: "decisioning-platform",
    eyebrow: "Case study 02",
    title: "From One-Off Services to a Reusable Decisioning Platform",
    summary: "Turning repeated fraud and risk capabilities into shared decisioning foundations without overfitting to the first use case.",
    tags: ["Platform thinking", "Orchestration", "Rules", "ML integration", "Reuse"],
    context: "Multiple fraud and risk use cases needed high-volume decisioning, yet each new product could easily become its own vertical stack with duplicated orchestration, rule execution, enrichment, and deployment logic.",
    challenge: "The platform needed to create leverage without becoming a central bottleneck. It had to support different workloads and product needs while keeping the abstraction boundary honest and the security model clear.",
    role: "I was one of the core technical leaders shaping the platform direction. I personally designed and implemented reusable orchestration and aggregation foundations and influenced rule management, artifact delivery, multi-tenant security, deployment models, and product onboarding.",
    approach: "The architecture separated common decisioning capabilities from domain-specific logic. Reusable execution patterns supported real-time, event-driven, and offline flows, while product teams could supply their own facts, rules, models, and workflow needs.",
    decisions: [
      "Resist overfitting the platform to the first or loudest use case.",
      "Treat product-specific requirements as input to a generalized capability model.",
      "Validate abstractions against multiple workloads before turning them into shared platform behavior.",
    ],
    impact: "The platform foundation became reusable across multiple fraud, risk, authentication, and payment scenarios rather than remaining a single-product implementation.",
    multiplier: "I worked as both platform architect and adoption partner: helping teams map domain requirements to reusable capabilities, explaining tradeoffs, reviewing designs, and enabling new teams to contribute without fragmenting the platform.",
    lessons: ["Generalization is earned by comparing real workloads, not by designing the most abstract first version.", "Platform adoption is an architecture responsibility as much as an API responsibility."],
    diagram: "decisioning",
  },
  {
    slug: "real-time-payments",
    eyebrow: "Case study 03",
    title: "Building and Operating Real-Time A2A Risk Decisioning",
    summary: "Taking a real-time account-to-account risk capability from early service conception through production evolution and global deployment patterns.",
    tags: ["Real-time payments", "Low latency", "Reliability", "Cloud engineering"],
    context: "Real-time account-to-account payments require fraud and risk decisions within tight latency budgets while supporting regional deployment, data-boundary requirements, production reliability, and multiple scoring approaches.",
    challenge: "Latency, availability, deployment boundaries, cost, and operational ownership all shaped the architecture. Optimizing one service in isolation would not solve the behavior of the whole request path.",
    role: "I helped take the capability from early service conception through production evolution, leading architecture across scoring integration, reusable APIs, deployment patterns, performance engineering, and production readiness. I later served in an interim senior engineering leadership capacity across the broader A2A organization.",
    approach: "The platform evolved around a clear separation between reusable decisioning services and region-sensitive execution. We integrated multiple scoring approaches behind consistent service contracts, designed for low latency and failover, and treated observability and operational ownership as first-class architecture concerns.",
    decisions: [
      "Tune the entire request path: runtime, connections, cache access, pod sizing, networking, and infrastructure hops.",
      "Use right-sizing, autoscaling, infrastructure automation, and newer compute/cache options to address cloud cost.",
      "Keep scoring approaches behind consistent contracts so the platform can evolve without changing every product integration.",
    ],
    impact: "The result was a production-grade real-time risk capability that could support global payment use cases while continuing to evolve through reusable platform foundations.",
    multiplier: "I guided multiple distributed teams and managers, aligned product, data science, platform, security, operations, and architecture stakeholders, and remained hands-on in critical design and production issues.",
    lessons: ["Production excellence belongs in the architecture conversation from the start.", "The most useful performance work follows the user request across boundaries rather than stopping at a service boundary."],
    diagram: "a2a",
  },
  {
    slug: "engineering-multiplier",
    eyebrow: "Case study 04",
    title: "Architecture Governance That Helps Teams Move Faster",
    summary: "Making design reasoning visible and reusable through lightweight decision records, open reviews, office hours, and inner sourcing.",
    tags: ["ADRs", "Inner sourcing", "Design reviews", "Platform adoption"],
    context: "As shared platforms grow, the risk shifts from not enough reuse to uncontrolled reuse: teams can introduce product-specific behavior into shared components, create conflicting patterns, or depend on undocumented architectural assumptions.",
    challenge: "Governance had to improve consistency without becoming a review gate that slowed down the teams it was meant to support.",
    role: "I helped establish architecture decision practices, recurring design reviews, open office hours, reusable patterns, and inner-sourcing guardrails across a large engineering community.",
    approach: "We used lightweight but structured decision records: define the problem, functional and non-functional requirements, compare viable options, document tradeoffs, select a recommendation, and, where useful, back it with a reference implementation or proof of concept.",
    decisions: [
      "Treat governance as enablement, not bureaucracy.",
      "Make design reasoning visible, reusable, and teachable while keeping teams accountable for decisions.",
      "Keep reviews open enough for incomplete ideas so learning happens before a design is final.",
    ],
    impact: "Teams gained a clearer way to make and communicate architecture decisions, contribute to shared platforms, and reuse solutions across security, deployment, artifact delivery, and platform integration concerns.",
    multiplier: "Reviews and office hours were deliberately open. Engineers could bring incomplete ideas, learn from peers, and gradually take ownership of architectural decisions rather than relying on a small number of senior people.",
    lessons: ["A decision record is useful when it teaches the next engineer how to make a similar decision.", "The best governance increases the number of people able to make sound decisions without escalation."],
    diagram: "governance",
  },
  {
    slug: "technology-strategy",
    eyebrow: "Case study 05",
    title: "Technology Evaluation, Strategic Realignment, and Early ML Integration",
    summary: "Using evidence and product alignment to change a modernization direction, then connecting predictive scoring to executable decision flows.",
    tags: ["Technology strategy", "Product alignment", "Rules", "Data science"],
    context: "I joined PayPal as a rules-engine subject-matter expert to help modernize an established risk and fraud decisioning environment. An initial modernization direction was driven heavily by technology selection before product stakeholders had been engaged deeply enough.",
    challenge: "The work required technical adaptability: building the proposed implementation well enough to evaluate it, then being willing to change course when product review exposed gaps relative to the existing operating model.",
    role: "I built and demonstrated an implementation using the selected rules technology. When product review showed it was not the right fit, I supported the decision to stop that direction, rapidly learned the modern version of the incumbent platform, and helped evolve the solution around the better fit.",
    approach: "The experience reinforced a principle that has shaped my later work: technology strategy must start with business workflows, user needs, operating constraints, and migration reality—not tool preference. I subsequently partnered closely with data science to lead an early risk-scoring implementation that translated predictive model logic into executable decision flows.",
    decisions: ["Separate advocacy for an idea from attachment to a particular implementation.", "Use evidence from product workflows and operating reality to decide whether a technology direction should continue."],
    impact: "The platform evolved on a stronger foundation, and the scoring work became an early bridge between business rules, predictive models, and real-time decisioning.",
    multiplier: "I brought deep domain expertise where it was useful, then adapted quickly when the organization needed a different answer. That experience shaped how I coach teams to separate a good technical argument from commitment to a tool.",
    lessons: ["Changing direction is a technical leadership skill when the evidence changes.", "Product alignment is part of architecture quality, not a step after architecture."],
  },
];

export const labs: Lab[] = [
  {
    slug: "decisioning-platform",
    number: "LAB 01",
    title: "Decisioning Platform",
    summary: "A Go prototype of a tenant-scoped policy decision platform exploring compile, activate, and evaluate as explicit lifecycle stages.",
    themes: ["Immutable execution plans", "Three-valued logic", "Provider-backed facts", "Traceability", "Control plane / execution plane"],
    explored: "The lab tests deterministic decisions, traces, rollback, a lightweight authoring model, rule lifecycle, and atomic activation. It is an independent architecture experiment built with synthetic data, not employer code.",
    learned: "It creates a compact place to revisit a domain I know deeply and explore how an execution-first decisioning foundation might be designed with today's tools and boundaries.",
    technologies: ["Go", "Policy execution", "Rule compilation", "Multi-tenancy"],
    repo: "https://github.com/kavish-agarwal-tech/decisioning-platform",
    diagram: "decisioning",
  },
  {
    slug: "payment-platform",
    number: "LAB 02",
    title: "Payment Platform POC + MCP + Agent",
    summary: "A Go-based payment platform experiment with payment state management, idempotent writes, processor adapters, and approval-gated agent interaction.",
    themes: ["State machines", "Idempotency", "Ledger journals", "Processor abstraction", "Authority boundaries"],
    explored: "The experiment combines a payment API with PostgreSQL-backed concepts, refunds, Stripe and Adyen adapter shapes, MCP tools, and a controlled agent. Related repositories include payment-platform-mcp and payment-platform-agent.",
    learned: "The payment API remains authoritative for payment state. MCP and the agent operate through controlled interfaces rather than bypassing the domain service or system of record.",
    technologies: ["Go", "PostgreSQL", "MCP", "Stripe / Adyen adapter concepts"],
    repo: "https://github.com/kavish-agarwal-tech/payment-platform-poc",
    diagram: "payments",
  },
  {
    slug: "governed-ai",
    number: "LAB 03",
    title: "Governed AI Workflows",
    summary: "Controlled purchase-request and incident-triage experiments that treat enterprise AI as a governed workflow system.",
    themes: ["Human-in-the-loop", "Deterministic policy", "Auditability", "Access control", "Verified state"],
    explored: "The portfolio POC covers a controlled purchase workflow and a LangGraph-based incident triage flow. It uses explicit workflow state, approval gates, constrained MCP capabilities, runbooks, and observable transitions.",
    learned: "Enterprise AI needs workflow, policy, observability, and human control—not just model calls. Model prose remains untrusted until it is grounded in verified state and allowed actions.",
    technologies: ["LangGraph", "MCP", "Workflow state", "Policy gates"],
    repo: "https://github.com/kavish-agarwal-tech/purchase-request-copilot",
    diagram: "governed",
  },
];

export const principles = [
  ["Prefer evolution over unnecessary rewrites.", "Modernization succeeds when architecture reduces migration risk and preserves proven behavior where appropriate."],
  ["Generalize only after understanding real use cases.", "A reusable platform should be validated against multiple domains, not designed around an abstract notion of reuse."],
  ["Architecture includes operations.", "Availability, observability, failover, support, performance, and cost are architectural concerns—not post-design implementation details."],
  ["Make tradeoffs explicit.", "Structured decision records help teams understand why a choice was made and when that choice should be revisited."],
  ["Separate authority from orchestration.", "Especially in AI-enabled systems, agents can coordinate work without owning authoritative business state or bypassing controls."],
  ["Design failure behavior before happy paths.", "Systems become more trustworthy when the architecture makes degraded modes, retries, approvals, and escalation paths explicit."],
  ["Senior technical leadership should create more leaders.", "The best architecture practice increases the number of people capable of making good technical decisions."],
];

export const career = [
  { company: "Visa", period: "2015–Present", title: "Chief Software Engineer / Senior Technical Leadership", details: "Enterprise platform architecture across payments, fraud, risk, authentication, real-time decisioning, and cloud modernization. Technical leadership of multi-year modernization programs and reusable decisioning foundations. Global team leadership across North America, India, and Europe, including interim senior-director responsibilities. Architecture governance, inner sourcing, design reviews, operational excellence, and AI-enabled engineering practices." },
  { company: "PayPal", period: "2011–2015", title: "Member Technical Staff", details: "Rules and decisioning-platform modernization across fraud and risk use cases. Technology evaluation and strategic realignment from an initial rules-engine direction to a more appropriate platform path. Early integration of predictive risk scoring into rules-based decisioning in partnership with data science." },
  { company: "Earlier career", period: "Before 2011", title: "Cognizant · Wipro · GE Capital Services · Virtusa", details: "Principal Consultant and Technical Consultant roles established the rules-engine, enterprise application, and consulting foundations that later evolved into platform architecture and technical leadership." },
];

export const resumeCareer = [
  { company: "Visa", period: "2015–Present", title: "Chief Software Engineer / Senior Technical Leadership", details: "Enterprise platform architecture across payments, fraud, risk, authentication, real-time decisioning, and cloud modernization. Led and influenced multi-year modernization programs, reusable decisioning foundations, real-time A2A risk capabilities, architecture governance, operational excellence, and AI-enabled engineering practices. Worked across globally distributed teams and served in interim senior engineering leadership capacity." },
  { company: "PayPal", period: "2011–2015", title: "Member of Technical Staff", details: "Rules and decisioning-platform modernization across fraud and risk. Evaluated and helped realign an initial technology direction when product needs indicated a different path, then helped evolve the IBM ODM-based platform. Partnered with data science on an early predictive risk-scoring implementation integrated into executable decision flows." },
  { company: "Cognizant Technology Solutions", period: "2008–2011", title: "Principal Consultant / Solution Architect", details: "Led architecture and solution delivery across utilities, insurance, mortgage servicing, healthcare, and data-services domains. Worked on enterprise modernization, rules and BPM platforms, data-ingestion architectures, client advisory, proof-of-concepts, and pre-sales." },
  { company: "Wipro Technologies", period: "2004–2008", title: "Technical Architect / Technical Lead / Project Manager", details: "Progressed through technical leadership, project management, and architecture roles across healthcare, pharmacy, retail, and enterprise applications. Served as business-rules architect on Medicare claims modernization, built expertise in FICO Blaze Advisor, mentored engineers, and worked onsite with client architecture teams." },
  { company: "GE Capital Services", period: "2003–2004", title: "Technical Lead / Pega Architect", details: "Applied PegaRULES Process Commander to enterprise process automation and helped translate platform capabilities into production business solutions. Provided architecture guidance and team mentoring." },
  { company: "Virtusa", period: "2001–2003", title: "Senior Software Engineer", details: "Built enterprise Java applications and worked on modernization of PegaRULES Process Commander, including a rules-expression parser/compiler. This was an early foundation for platform thinking, business-rules architecture, and reusable product-oriented design." },
  { company: "StreamSoft", period: "1999–2001", title: "Software Engineer", details: "Built web-based travel-reservation capabilities across airline, hotel, and car-booking workflows using early Java enterprise technologies, with early client-facing experience in the UK." },
];

export const resumeFocusAreas = [
  { title: "Payments, Decisioning & Risk", details: "Payments, real-time decisioning, fraud, risk, and A2A capabilities." },
  { title: "Enterprise & Platform Architecture", details: "Reusable platforms, distributed systems, and cross-domain architecture." },
  { title: "Modernization & Cloud Transformation", details: "Legacy evolution, cloud architecture, migration, and resilience." },
  { title: "Leadership & Organizational Scale", details: "Technical leadership, mentoring, governance, and team enablement." },
  { title: "AI & Engineering Transformation", details: "Applied AI, agentic workflows, and AI-enabled engineering practices." },
];

export const earlyCareer: CareerChapter[] = [
  {
    number: "01",
    company: "Cognizant",
    title: "Cross-domain architecture and solution leadership",
    summary: "Broadened from rules specialist to cross-domain enterprise architect across insurance, financial services, and healthcare. This phase combined modernization architecture, early data-platform work, client influence, distributed delivery, and pre-sale solution leadership.",
    highlights: [
      "Cross-domain architecture across insurance, financial services, and healthcare.",
      "Modernization architecture at Florida Power and Light.",
      "Early data-platform architecture at Dun and Bradstreet.",
      "Pre-sale solution leadership.",
    ],
    emphasis: "strong",
  },
  {
    number: "02",
    company: "Wipro",
    title: "Technical leadership, people management, and rules architecture",
    summary: "Expanded from technical delivery into people management and rules architecture. On a Medicare claims modernization program, worked with FICO Blaze Advisor for rules-driven claim validation and decisioning. A configuration-driven core supported different state requirements through rules and configuration, and later work extended to onsite, client-facing architecture in a regulated pharmacy-claims environment.",
    highlights: [
      "Technical leadership, mentoring, and people management.",
      "Rules-driven Medicare claims modernization using FICO Blaze Advisor.",
      "Configuration-driven, multi-state platform thinking.",
      "Client-facing architecture in regulated pharmacy systems.",
    ],
    emphasis: "strong",
  },
  {
    number: "03",
    company: "GE Capital",
    title: "Enterprise process automation",
    summary: "Applied a rules and workflow platform to enterprise process automation, reinforcing the connection between platform capability and business-process outcomes.",
    emphasis: "light",
  },
  {
    number: "04",
    company: "Virtusa",
    title: "From application work to platform thinking",
    summary: "Contributed to PegaRULES Process Commander modernization, including expression-language parser/compiler work. This was an early shift from standalone applications toward reusable platform capabilities and productization thinking.",
    emphasis: "light",
  },
  {
    number: "05",
    company: "StreamSoft India",
    title: "Early application engineering",
    summary: "Built transactional application capabilities and gained early client exposure, establishing a foundation in integration-heavy enterprise software and adapting quickly to unfamiliar domains.",
    emphasis: "light",
  },
];

export const careerProgression = [
  "Application engineering",
  "Domain expertise",
  "Configuration-driven platforms",
  "Cross-domain architecture",
  "Platform & technology leadership",
];

export const credentials = [
  "B.E., Electronics & Communications — Government Engineering College, Bhopal, India",
  "MIT xPro — Applied Generative AI for Digital Transformation",
  "MIT xPRO — Designing and Building AI Products and Services",
  "Stanford — Advanced Cyber Security Certificate",
  "UT Austin Executive Education — Advocacy, Influence & Power",
  "TOGAF Certified",
  "AWS Certified Cloud Practitioner",
  "Pega PRPC Certified System Architect",
  "Named inventor on U.S. Patent 11,880,845 related to real-time payment decisioning",
];

export const contact = {
  email: "kagarwal.tech@gmail.com",
  github: "https://github.com/kavish-agarwal-tech",
  linkedin: "https://linkedin.com/in/agarwalkavish",
};
