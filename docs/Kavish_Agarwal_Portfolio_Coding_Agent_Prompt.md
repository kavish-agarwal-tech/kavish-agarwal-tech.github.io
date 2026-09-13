# Coding Agent Prompt — Personal Engineering Leadership Portfolio

## Objective

Build a production-quality personal portfolio website for **Kavish Agarwal**, a senior technology leader, enterprise architect, principal engineer, and engineering multiplier with 25+ years of experience.

The site should communicate four things very quickly:

1. Kavish can design and modernize complex technology platforms.
2. He combines deep hands-on technical capability with senior-level architecture and organizational leadership.
3. Although much of his career has been shaped by payments, fraud, and risk, his primary strengths are **transferable across domains**:
   - distributed systems
   - platform architecture
   - legacy modernization
   - real-time decisioning
   - cloud architecture
   - AI / agentic systems
   - engineering transformation
   - architecture governance
   - team scaling and technical leadership
4. He remains hands-on and continues to build independent technical POCs and architecture experiments.

The desired impression is:

> **Senior technology leader who can go deep technically, shape platform strategy, and multiply the effectiveness of other engineers and teams.**

Do not make the site feel like a traditional resume converted into HTML.

It should feel like a **technology leadership portfolio**.

---

# Source of Truth

Use the supplied public portfolio content document as the primary source:

**`Kavish_Agarwal_Public_Portfolio_Content_v1.1.docx`**

Do not invent professional accomplishments, metrics, company details, customer names, internal platform names, architecture details, or outcomes that are not supported by the source.

Some professional material has deliberately been sanitized for public consumption. Preserve that level of abstraction.

Do **not** attempt to restore, infer, or expose:

- confidential employer information
- internal product names
- customer/client names
- internal architecture diagrams
- transaction volumes
- proprietary implementation details
- sensitive scale figures
- unreleased initiatives
- confidential organizational information

The portfolio should communicate architectural thinking without exposing internal employer information.

Do not extensively rewrite approved portfolio content on your own. You may shorten copy for UI readability, but preserve meaning and flag any significant content rewrite for review.

---

# Public GitHub

GitHub profile:

**https://github.com/kagarwaltech-sys**

The site should link to selected repositories, but GitHub should act as **supporting evidence**, not dominate the site.

Feature these projects prominently under **Engineering Labs**:

## 1. Decisioning Platform

Repository:

`kagarwaltech-sys/decisioning-platform`

Position it as an independent architecture lab exploring a modern generalized decisioning platform.

Themes demonstrated:

- Go
- tenant-scoped policy execution
- rule compilation
- immutable execution plans
- atomic activation
- deterministic decisioning
- traceability
- three-valued logic
- fact/provider abstractions
- control-plane / execution-plane separation
- rule lifecycle
- architecture experimentation

This is an independent POC, not production employer code.

## 2. Payment Platform POC

Repository:

`kagarwaltech-sys/payment-platform-poc`

Related work may include:

- `payment-platform-mcp`
- `payment-platform-agent`

Themes demonstrated:

- payment state machines
- idempotency
- PostgreSQL
- processor abstraction
- ledger concepts
- Stripe / Adyen adapters
- Go
- API design
- MCP
- controlled agent interaction
- separation of authority between system, tools, and agent

Emphasize the architectural principle:

**The payment API remains authoritative for payment state.**

The agent does not bypass the system of record.

## 3. Governed AI Workflows

Repository:

`kagarwaltech-sys/purchase-request-copilot`

Includes experimentation around:

- controlled agentic workflows
- LangGraph
- deterministic policies
- human-in-the-loop
- workflow state
- auditability
- access control
- approval gates
- constrained MCP capabilities
- treating model output as untrusted
- verified state vs generated prose

Position this as experimentation in **enterprise-safe agentic architecture**, rather than a generic LLM demo.

---

# Hard Hosting Requirement: GitHub Pages

The generated site **must be fully hostable on GitHub Pages with no paid services and no server-side runtime**.

Requirements:

- Use **Astro static output**.
- The final production artifact must be plain static files:
  - HTML
  - CSS
  - JavaScript
  - images/assets
- Do not require:
  - Node.js at runtime
  - server-side rendering
  - databases
  - API servers
  - serverless functions
  - edge functions
  - paid hosting
  - proprietary deployment platforms
- All routes must work correctly when deployed under GitHub Pages.
- Configure Astro appropriately for GitHub Pages deployment.
- Support both:
  - user site deployment such as `https://kavish-agarwal-tech.github.io`
  - project-site deployment under a repository subpath if needed
- Avoid absolute asset paths that break under repository subpaths.
- Use Astro's `base` and `site` configuration correctly.
- Generate a static sitemap.
- Ensure internal links work after static deployment.
- Ensure downloadable resume/assets are copied into the final static build.
- Do not depend on client-side routing for basic navigation.
- The site must remain usable even with JavaScript disabled, except for optional enhancements.

Hosting cost should remain **$0**, excluding an optional future custom domain.

---

# Technology Stack

Prefer:

**Astro**

Use:

- Astro
- TypeScript
- Markdown or MDX for long-form case studies
- minimal client-side JavaScript
- CSS or scoped Astro styles
- Astro content collections where useful

Avoid unnecessary dependencies.

The website should work as a fully static site.

---

# Design Direction

## Overall aesthetic

The visual direction is:

**clean, minimal, restrained, architectural, confident**

The site should resemble the personal site of a distinguished engineer, enterprise architect, or senior technology executive — not a startup landing page.

Avoid visual clutter.

Avoid trendy effects that will date quickly.

Avoid excessive animation.

Avoid:

- large decorative gradients
- glassmorphism
- flashy 3D graphics
- oversized typography that consumes an entire viewport
- skill percentage bars
- animated counters
- carousels
- generic stock photography
- generic AI-generated futuristic city imagery
- huge logo clouds
- excessive badges

## Visual hierarchy

Use generous whitespace.

Use strong typography.

Use a restrained neutral palette.

One subtle accent color is acceptable.

Typography should create most of the visual hierarchy.

Prefer something like:

- dark charcoal text
- off-white or very light gray background
- subtle borders
- muted secondary text
- restrained accent for links, small tags, or emphasis

Support both desktop and mobile elegantly.

Dark mode is optional. Do not prioritize it over readability and simplicity.

---

# Navigation

Navigation should remain extremely simple.

Desktop navigation:

**Home | Work | Engineering Labs | Leadership | About | Resume**

Include small icon links for:

- GitHub
- LinkedIn

Mobile navigation should collapse cleanly.

Do not create more than approximately six primary navigation items.

Navigation should make it possible to understand the entire site architecture immediately.

---

# Homepage

The homepage should answer within approximately 10 seconds:

- Who is Kavish?
- What type of problems does he solve?
- What makes him different?
- Where can I see evidence?

## Hero

Primary identity:

**Kavish Agarwal**

Suggested headline:

> **Technology Leader · Enterprise Architect · Engineering Multiplier**

Do not make payments or fraud the headline identity.

Supporting statement:

> I lead the design and transformation of complex technology platforms—from legacy modernization and distributed systems to real-time decisioning, cloud, and AI. My career has been shaped in payments and risk, but my core strength is broader: translating ambiguous business problems into scalable platforms, reusable architecture, and teams that can execute independently.

Below it, add two or three understated CTAs:

- **View Selected Work**
- **Explore Engineering Labs**
- **Download Resume**

Optional small supporting line:

> Austin, Texas · 25+ years in technology · Enterprise platforms, distributed systems, cloud and AI

Do not turn this into a giant banner.

---

# Homepage Section: What I Do

Use 4 concise capability cards or blocks.

## Platform Architecture

Designing scalable, reusable platforms rather than one-off solutions.

Topics:

- distributed systems
- domain architecture
- real-time processing
- APIs
- event-driven systems
- reusable platform capabilities

## Modernization

Moving critical systems forward without destabilizing the business.

Topics:

- legacy modernization
- incremental decomposition
- coexistence strategies
- migration
- reliability
- operational readiness

## Decisioning & Intelligence

Combining rules, data, models, and orchestration into explainable decision systems.

Topics:

- real-time decisioning
- business rules
- ML integration
- policy execution
- orchestration
- explainability

## Engineering Leadership

Scaling architecture through people, patterns, governance, and technical leadership.

Topics:

- mentoring
- architecture reviews
- team enablement
- engineering practices
- governance
- AI-enabled engineering

Keep the text concise.

---

# Homepage Section: Selected Work

Show approximately 4 featured case studies.

Each should have:

- short title
- 1–2 sentence problem statement
- 3–5 capability tags
- "Read case study" link

Recommended cases:

## Modernizing a Mission-Critical Risk Platform

Focus:

- modernization
- high availability
- incremental migration
- distributed architecture
- product partnership
- large-scale organizational execution

## Building a Reusable Decisioning Platform

Focus:

- platform thinking
- orchestration
- business rules
- ML integration
- reusable capabilities
- multi-team adoption

## Real-Time Decisioning for Account-to-Account Payments

Focus:

- low latency
- highly available distributed systems
- regional deployment
- global architecture
- third-party scoring integration
- production excellence

Do not make this page primarily about one API or one vendor integration.

The story should reflect platform evolution and end-to-end architectural leadership.

## Scaling Architecture Through People

Focus:

- distributed engineering teams
- mentoring
- technical leadership
- architecture governance
- ADRs
- inner sourcing
- creating independent technical leaders

This is a very important differentiator.

---

# Case Study Template

Every case study should follow approximately the same information architecture.

Do not write them as resume bullet lists.

Use storytelling.

## Context

Explain the business or engineering challenge without exposing confidential details.

## Challenge

What made the problem difficult?

Possible dimensions:

- scale
- reliability
- legacy architecture
- organizational complexity
- migration risk
- latency
- global deployment
- reuse
- governance

## My Role

Be precise.

Use language such as:

- led
- co-designed
- primary designer
- implementation lead
- technical lead
- architecture advisor
- implementation partner
- influenced

Do not imply sole ownership where the work was collaborative.

## Approach

Explain important architectural choices.

## Key Decisions & Tradeoffs

This section is important.

The portfolio should demonstrate **how Kavish thinks**, not just what was delivered.

Explain tradeoffs such as:

- incremental modernization vs rewrite
- reuse vs duplication
- shared vs dedicated infrastructure
- control plane vs execution plane
- migration safety vs architectural purity
- latency vs flexibility
- generalized platform vs use-case-specific implementation

## Impact

Use public-safe language.

Avoid confidential metrics unless explicitly supplied in the public portfolio source.

## Leadership / Multiplier Effect

Where appropriate, explain how the work:

- enabled other teams
- created reusable patterns
- improved engineering maturity
- trained new teams
- developed technical leaders
- reduced dependence on individual experts

## Lessons

Include 1–3 thoughtful architectural or leadership observations.

Avoid generic motivational statements.

---

# Leadership Section

Create a dedicated page or major section titled:

# Engineering Multiplier

This is a central part of the personal brand.

Core idea:

> The highest level of technical leadership is not measured only by what one person can build, but by how much stronger the surrounding organization becomes.

Explain how this philosophy appears through:

- mentoring engineers
- developing future technical leaders
- helping new teams become independent
- architecture office hours
- design reviews
- teaching unfamiliar systems
- reusable reference patterns
- ADRs
- governance
- inner sourcing
- technical coaching
- creating frameworks rather than solving every problem personally

Important nuance:

Kavish is still willing to go hands-on when necessary.

The leadership model is not:

**"I stopped coding because I became senior."**

It is:

**"I know when personal implementation is the highest-leverage action and when enabling others produces greater impact."**

This distinction should be visible in the narrative.

---

# Architecture Principles

Create a concise section containing approximately 6–8 principles.

Possible themes:

- Design platforms, not isolated features.
- Modernize incrementally when business continuity matters.
- Separate control planes from execution planes.
- Make architecture observable.
- Design failure behavior before happy paths.
- Build reuse at the correct abstraction boundary.
- Treat architecture governance as enablement, not bureaucracy.
- Optimize for organizational scalability as well as system scalability.
- Human oversight should remain explicit in high-impact AI workflows.

Each principle should include a short paragraph.

Avoid writing an academic manifesto.

---

# Engineering Labs

Create a dedicated section/page titled:

# Engineering Labs

Opening copy should explain that these are:

- independent projects
- learning experiments
- architecture explorations
- built outside employer systems
- designed to test ideas hands-on

Suggested introductory sentence:

> Production experience teaches me which problems matter. Engineering labs give me a place to reconsider how I would solve those problems with today's tools and architectural patterns.

For each featured lab include:

- project title
- concise problem statement
- architecture themes
- what was explored
- what was learned
- technologies
- GitHub link

Where practical, show a simple architecture diagram.

Do not reproduce the entire README.

The portfolio provides context; GitHub provides implementation detail.

---

# Agentic AI Positioning

Include a concise point-of-view section.

Avoid hype.

Core message:

Agentic systems should be designed as governed enterprise systems, not autonomous chatbots.

Important ideas:

- deterministic workflow boundaries
- explicit tool permissions
- identity and authorization
- human approval for high-impact actions
- observable state
- auditability
- idempotency
- policy enforcement
- trusted system state
- treating LLM output as untrusted
- clear failure modes
- evaluation

Frame AI as another distributed-system architecture problem with probabilistic components.

---

# Advisory & Consulting

Include a restrained section on the homepage and Contact/About area indicating that Kavish is open to **selective advisory and consulting opportunities**.

The tone should be senior, thoughtful, and consultative — not sales-oriented.

Suggested homepage copy:

> **Advisory & Consulting**  
> I’m open to selective advisory and consulting opportunities where I can help organizations solve complex technology problems, shape platform strategy, modernize critical systems, and apply AI responsibly. I’m especially interested in situations where hands-on technical depth, architecture leadership, and cross-team alignment can create disproportionate impact.

Suggested focus areas:

- Enterprise and platform architecture
- Technology modernization strategy
- Distributed systems and reliability
- Real-time decisioning and rules/ML integration
- Payments and risk architecture
- Agentic AI and applied AI architecture
- Architecture governance
- Engineering transformation
- Technical leadership and team scaling

Suggested CTA:

**Discuss an Advisory Opportunity**

Keep this section visually understated. It should reinforce the broader leadership brand, not make the site look like a freelance marketplace profile.

Also add to Contact:

> For advisory, consulting, speaking, or leadership opportunities, feel free to reach out through LinkedIn or email.

---

# About Page

The About page should be personal but professional.

Do not repeat the resume.

Explain the career arc:

**Engineer → domain SME → technical lead → platform architect → enterprise technology leader**

Themes:

- curiosity
- learning unfamiliar systems deeply
- making difficult systems understandable
- solving ambiguity
- translating strategy into architecture
- staying hands-on
- mentoring others
- creating reusable systems
- scaling through teams

Include the concept:

> Technical depth creates credibility. Multiplying others creates scale.

Avoid excessive self-promotion.

Tone should be thoughtful and grounded.

---

# Career Snapshot

Use a lightweight timeline.

Include:

## Visa

Senior technical leadership, enterprise architecture, payments, decisioning, platform modernization, cloud and engineering transformation.

## PayPal

Decision-platform modernization, rules technology, predictive scoring integration and technology strategy.

## Earlier Career

Cognizant, Wipro, GE Capital, Virtusa.

Do not duplicate every resume bullet.

Link to the resume for full chronology.

---

# Credentials

Create a concise section.

Include supported education, professional education, certification, and patent information from the provided content.

Keep this secondary to architecture and impact.

---

# Resume

Include a visible **Download Resume** action.

Use the public version of the resume.

Do not embed a large PDF viewer.

A simple download button is preferable.

---

# Contact

Contact section should include:

- LinkedIn
- GitHub
- email

Do not expose unnecessary personal information.

For advisory, consulting, speaking, or leadership opportunities, provide a simple contact path via LinkedIn or email.

---

# Footer

Minimal footer.

Example:

**Kavish Agarwal**

Technology Leader · Enterprise Architect · Engineering Multiplier

GitHub | LinkedIn

Optionally:

> Built as a static site and hosted on GitHub Pages.

Keep it understated.

---

# Content Tone

Writing must be:

- confident
- concise
- thoughtful
- technically credible
- senior
- conversational but professional

Avoid:

- buzzword-heavy marketing prose
- "visionary"
- "rockstar"
- "guru"
- "ninja"
- exaggerated claims
- generic leadership clichés
- excessively frequent "I"
- inflated superlatives

Prefer statements that demonstrate evidence.

---

# Page Density

Do not create long walls of text.

Long case studies should use:

- section headings
- short paragraphs
- pull quotes sparingly
- small decision/tradeoff blocks
- simple diagrams
- bullet lists where they improve scanning

Desktop text width should remain comfortable for reading.

Aim for roughly **65–80 characters per line** for long-form content.

---

# Architecture Diagrams

Where diagrams improve comprehension, use simple diagrams created with:

- SVG
- HTML/CSS
- Mermaid only if rendered statically and reliably

Do not use proprietary employer diagrams.

Examples should be generic abstractions.

For example:

```text
Control Plane
     |
     v
Artifact / Policy Distribution
     |
     v
Execution Plane
     |
     +--> Data / Facts
     |
     +--> Rules / Models
     |
     v
Decision
```

Visual language should remain minimal.

---

# Accessibility

Meet good WCAG practices.

Ensure:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- focus states
- sufficient contrast
- descriptive link text
- accessible navigation
- alt text where images convey information
- responsive font sizes
- no interaction dependent only on hover
- `prefers-reduced-motion` respected if any animation exists

Target Lighthouse accessibility score near 100.

---

# Performance

The site should be extremely lightweight.

Target:

- Lighthouse Performance: 95+
- minimal JS
- static rendering
- optimized fonts
- optimized SVG/images
- lazy loading where appropriate
- no large runtime framework

---

# SEO

Implement:

- page titles
- descriptions
- Open Graph metadata
- canonical URLs
- sitemap
- robots.txt
- structured data where useful
- social sharing metadata

Suggested homepage title:

**Kavish Agarwal | Technology Leader, Enterprise Architect & Engineering Multiplier**

Suggested meta description:

**Technology leader and enterprise architect focused on distributed systems, platform modernization, real-time decisioning, cloud architecture, AI and engineering leadership.**

Do not over-optimize for fraud/risk keywords.

Those domains should appear in content, but the overall positioning should remain transferable.

---

# Site Structure

Suggested structure:

```text
/
├── /
├── /work
│   ├── /platform-modernization
│   ├── /decisioning-platform
│   ├── /real-time-payments
│   └── /engineering-multiplier
│
├── /labs
│   ├── /decisioning-platform
│   ├── /payment-platform
│   └── /governed-ai
│
├── /leadership
├── /principles
├── /about
└── /resume
```

Avoid excessive nesting.

---

# Astro Project Structure

Prefer something like:

```text
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── CapabilityCard.astro
│   ├── CaseStudyCard.astro
│   ├── LabCard.astro
│   ├── SectionHeading.astro
│   └── ArchitectureDiagram.astro
│
├── content/
│   ├── work/
│   └── labs/
│
├── layouts/
│   ├── BaseLayout.astro
│   └── CaseStudyLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── work/
│   ├── labs/
│   ├── leadership.astro
│   ├── principles.astro
│   ├── about.astro
│   └── resume.astro
│
└── styles/
    └── global.css
```

Use Astro content collections if useful.

---

# GitHub Pages Deployment

The repository must include a working GitHub Actions deployment workflow.

Expected files:

```text
.github/
└── workflows/
    └── deploy.yml
```

Use the official GitHub Pages deployment flow where possible.

The workflow should:

1. check out the repository
2. install the required Node version
3. install dependencies with the lockfile
4. build the Astro static site
5. upload the generated `dist/` directory
6. deploy the artifact to GitHub Pages

Deployment must run automatically on pushes to `main`.

The README must explain:

- how to run locally
- how to build locally
- how to enable GitHub Pages in repository settings
- how to deploy from GitHub Actions
- how to use the default `github.io` URL
- how to add a custom domain later
- how to update content
- how to add another case study or Engineering Lab

The site should require **zero infrastructure cost** beyond an optional future custom domain.

---

# Future Extensibility

Design the site so future additions are easy:

- additional case studies
- technical articles
- LinkedIn writing
- architecture notes
- conference talks
- patents
- new Engineering Labs

Do not build a CMS yet.

Markdown/MDX in Git should remain the content management mechanism.

---

# Content Safety Rule

Before publishing any professional case study, verify that the language is derived from the provided **public portfolio document**, not the internal engineering career portfolio.

If uncertain whether a detail is safe:

**omit or generalize it.**

Never expose internal information simply because it makes the case study sound stronger.

---

# Desired Final Result

The finished site should feel like:

> **A senior architect inviting another senior technologist into how he thinks.**

It should not feel like:

> **A candidate trying to fit every keyword from his resume onto a website.**

A recruiter should be able to scan the site quickly.

An engineering leader should be able to go deeper.

A CTO, Distinguished Engineer, or hiring manager should come away understanding both Kavish's **technical depth** and his ability to **scale organizations through people, platforms, and architecture**.

---

# Implementation Process

Do the work in this order:

1. Inspect all supplied source content.
2. Create the site information architecture.
3. Build global design tokens and typography.
4. Implement homepage.
5. Implement reusable case-study templates.
6. Add professional case studies.
7. Add Engineering Labs.
8. Add Leadership, Principles, About and Resume pages.
9. Add Advisory & Consulting section and contact CTA.
10. Add responsive behavior.
11. Add accessibility and SEO metadata.
12. Configure GitHub Pages deployment.
13. Run production build.
14. Fix all build errors.
15. Review all routes.
16. Run Lighthouse or equivalent checks where possible.
17. Ensure no confidential/internal material has been accidentally introduced.
18. Provide a concise README explaining how to maintain the site.

Do not stop at scaffolding. Produce a complete, navigable first version of the portfolio.

---

# Final Acceptance Criteria

Do not consider the project complete until:

- `npm install` succeeds
- `npm run build` succeeds
- the site produces a complete `dist/` directory
- all primary routes are static and accessible
- all internal links work
- images and downloadable assets resolve correctly
- GitHub Actions deployment configuration is present
- the site does not require a backend
- the site can be hosted directly on GitHub Pages
- the repository contains clear setup and deployment documentation
- the site works under both a root user-site URL and a repository subpath deployment
- no confidential employer details are exposed
- the Advisory & Consulting section is present and understated
