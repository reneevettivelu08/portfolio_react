const projects = [
  {
    id: 1,
    title: "Odd Bunch ",
    description: "A grocery price comparison tool that helps Canadians find the lowest prices across major retailers — because paying full price for a sad pepper is a choice.",
    skills: ["React", "Node.js", "Express", "Claude AI"],
    featured: true,
    type: "Full-Stack", 
    github: [
      { label: "Frontend", url: "https://github.com/reneevettivelu08/groceryComp_react" },
      { label: "Backend", url: "https://github.com/reneevettivelu08/groceryComp_expres" }
    ],
    link: "https://grocerycomp-oddbunch.netlify.app/",
    image: null,
    caseStudy: `
      Problem:
      Grocery prices in Canada vary significantly across retailers like Loblaws, Sobeys, Metro, and Walmart — but there's no easy way for shoppers to compare prices in one place. Inflation has made this comparison more important than ever, yet most people still drive to multiple stores or rely on flyers.

      What I Delivered:
      The Odd Bunch is a web app that aggregates grocery prices across major Canadian retailers and lets users search for items, compare unit prices, and identify the best deal at a glance. The name is a nod to the "ugly produce" movement — finding value in things others overlook.

      Key Themes:
      Consumer advocacy through transparency. Making data accessible without overwhelming the user. Building something genuinely useful with limited data sources.

      Tools & Technologies:
      React for the frontend UI, Node.js and Express for the backend API layer, and Claude AI (Anthropic) as a development collaborator — used for code generation, debugging, and architectural decisions throughout the build.

      What I Knew:
      React component architecture, REST API design, JavaScript/ES6+.

      What I Learned:
      Working with AI as a development tool — prompting effectively, knowing when to trust generated code, and maintaining code quality in an AI-assisted workflow. Also deepened my understanding of web scraping ethics and data normalization across inconsistent sources.

      Next Steps:
      Add user accounts for saved shopping lists, build a price history chart per item, add flyer integration, and eventually a weekly "best basket" recommendation based on a user's typical grocery list.
    `
  },
  {
    id: 2,
    title: "BMO Mortgage Pre-Qualification",
    description: "Streamlined digital mortgage pre-approval experience for one of Canada's largest banks — reducing drop-off and improving conversion across the application funnel.",
    skills: ["Product Management", "UX Research", "Agile", "A/B Testing"],
    featured: false,
    type: "Product",
     github: [],
    link: "https://www.bmo.com/banking/cep/landing",
    image: null,
    caseStudy: `
      Problem:
      BMO's existing mortgage pre-approval flow was lengthy, form-heavy, and optimized for internal processes rather than the applicant's experience. Users were dropping off mid-funnel, particularly at the document upload and income verification steps — creating lost leads and increased call centre volume.

      What I Delivered:
      As the product lead on this initiative, I drove the redesign of the digital pre-approval experience from discovery through to launch. This included stakeholder alignment across compliance, risk, and digital teams, user research synthesis, and overseeing delivery in an agile environment.

      Key Themes:
      Reducing friction in high-stakes financial decisions. Balancing regulatory compliance with a consumer-first experience. Building trust digitally in a product category where trust is everything.

      Tools & Technologies:
      Figma for prototyping and design collaboration, Jira for sprint management, Salesforce for CRM integration context, A/B testing frameworks for iterative rollout, and analytics tools for funnel analysis and drop-off tracking.

      What I Knew:
      Financial product domain knowledge, stakeholder management in a large enterprise, agile delivery.

      What I Learned:
      How to navigate compliance-heavy environments without sacrificing UX quality. The importance of early risk and legal involvement — bringing them in as collaborators rather than gatekeepers. How to use data to make the business case for simplification.

      Note:
      My role on this project was product management and strategy — I did not write the code. The focus here is on product thinking, cross-functional leadership, and measurable business outcomes.

      Next Steps:
      The natural evolution is a fully personalized pre-approval experience that pre-populates data from existing banking relationships and uses decisioning models to give applicants real-time indicative rates.
    `
  },
  {
    id: 3,
    title: "CANSIMPLAN",
    description: "A decision governance platform connecting AI-powered urban planning outputs with financial and lending risk — helping cities make development decisions that are economically stable, equitable, and accountable.",
    skills: ["React", "Node.js", "Express", "AI/ML", "PostgreSQL", "Dashboard Design"],
    featured: true,
    type: "Full-Stack",
    github: [
      { label: "Frontend", url: "https://github.com/reneevettivelu08/BrainStation-CANSIMPLAN-FrontEnd" },
      { label: "Backend", url: "https://github.com/reneevettivelu08/BrainStation-CANSIMPLAN-BackEnd" }
    ],
    demo: "https://cansimplan.dev",
    image: null,
    caseStudy: `
      Problem:
      Urban planning decisions — zoning approvals, development proposals, infrastructure investments — are often made in silos, disconnected from downstream financial and lending risk. AI tools are increasingly being used to model urban futures, but their outputs lack a structured governance layer that ties recommendations to real-world accountability and stakeholder sign-off.

      What I Delivered:
      CANSIMPLAN is a decision governance dashboard that sits between AI-generated urban planning simulations and the human experts who act on them. Incoming development proposals are ingested into the platform, scored by an AI model across dimensions like economic viability, equity impact, and lending risk, and then routed through a structured review and approval workflow. Expert stakeholders — planners, lenders, risk analysts — can annotate, challenge, approve, or escalate at each stage.

      Key Themes:
      Human-in-the-loop AI governance. Making AI outputs legible and actionable for non-technical domain experts. Creating accountability trails for high-stakes civic decisions. The intersection of urban planning, public finance, and responsible AI deployment.

      Tools & Technologies:
      React for the dashboard frontend, Node.js and Express for the backend API and workflow engine, PostgreSQL for proposal and decision data, and a custom AI scoring model for proposal evaluation. Dashboard design focused on data density without cognitive overload.

      What I Knew:
      Full-stack web development, dashboard UX patterns, REST API architecture, database design.

      What I Learned:
      How to design for domain experts — planners and risk analysts have very different mental models than typical software users, and the UI had to respect their expertise rather than oversimplify it. Also learned a significant amount about urban planning policy, lending risk frameworks, and what "equitable development" actually means in practice.

      Next Steps:
      Integrate with municipal GIS systems for spatial proposal context, build a longitudinal tracking layer to measure the actual outcomes of approved decisions, and explore a public-facing transparency portal so communities can see how development decisions were made and by whom.
    `
  }
];

export default projects;