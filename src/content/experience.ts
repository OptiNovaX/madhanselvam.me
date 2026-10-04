// Source: Madhan_PDE resume (Sep 2025). Keep this file in sync with the resume, not the other way round.
export type Role = {
  id: string;
  years: string;
  employer: string;
  location: string;
  logo: string | string[];
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  chapters?: { name: string; years: string; highlights: string[] }[];
};

export const roles: Role[] = [
  {
    id: "pepsico",
    years: "Mar 2025 — Present",
    employer: "PepsiCo",
    location: "Plano, TX",
    logo: "/logos/pepsico.png",
    role: "Principal Engineer — Data & AI",
    summary: "Principal architect setting technical direction across engineering, governance, product, BI and business stakeholders — translating business objectives into scalable technical solutions across enterprise marketing, integrated business planning and demand planning.",
    highlights: [
      "Led end-to-end architecture for A&M Hub, PepsiCo's enterprise marketing/advertising data platform — unifying 50+ heterogeneous sources into governed Gold-layer data products across 20 Anchor Markets.",
      "Designed medallion pipeline architecture (ingestion → Bronze/Silver/Gold) with harmonized enterprise data models, and set architectural guardrails and reusable integration patterns adopted enterprise-wide.",
      "Built the trusted data foundation behind executive dashboards (Media Scorecards, Performance Reviews), with Gold data products architected for AI-generated insights and conversational analytics.",
      "Delivered data and integration architecture for PBNA's Integrated Business Planning — connecting driver-based forecasting (PFE), Enterprise Data Foundation, demand planning and Mosaic/TPM — and rolled it out across PBNA, PBUS and CAN markets.",
      "Drove data reliability governance (reconciliation, lineage, quality, observability) so enterprise planning decisions rest on trusted, production-grade data.",
      "Architected and implemented a \"Sustain Agent\" — an AI agent that automates data-issue identification, root cause analysis and solutioning, using custom skills/tools on MCP servers and RAG for contextual knowledge retrieval.",
      "Led the integration of PepsiCo's Forecasting Engine (PFE) into SodaStream's demand planning — connecting Oracle EBS, NetSuite, TM1 and Snowflake, with a daily/weekly forecast round-trip into TM1."
    ],
    stack: ["Azure Databricks", "PySpark", "Medallion Lakehouse", "Snowflake", "Unity Catalog", "AI Agents", "MCP", "RAG", "Oracle EBS", "NetSuite", "TM1", "Power BI"]
  },
  {
    id: "state-street",
    years: "Jun 2024 — Mar 2025",
    employer: "State Street",
    location: "Boston, MA",
    logo: "/logos/statestreet.png",
    role: "Principal Consultant — AML Sanctions",
    summary: "Led the modernization of an anti-money-laundering and sanctions platform from an on-prem Hadoop data lake to a governed AWS Databricks Lakehouse.",
    highlights: [
      "Architected the migration from on-prem CDH/HBase to AWS Databricks, aligned with compliance and business goals.",
      "Defined the target Medallion Lakehouse architecture and its standards for modelling, governance and security.",
      "Built Kafka + Databricks ingestion frameworks for high-throughput real-time and batch processing.",
      "Delta tuning (OPTIMIZE, Z-ORDER, VACUUM, Liquid Clustering, AQE) delivered 70% faster performance and 40% lower storage cost.",
      "Shipped data-quality, audit and reconciliation frameworks with automated alerting and operational dashboards.",
      "Authored a 1-year migration roadmap, ran POCs and architecture reviews, and mentored teams through Databricks adoption."
    ],
    stack: ["AWS", "Databricks", "Delta Lake", "Delta Live Tables", "Kafka", "MWAA (Airflow)", "PySpark", "EMR", "Jenkins"]
  },
  {
    id: "nike-em",
    years: "Aug 2018 — Jun 2024",
    employer: "Nike",
    location: "Beaverton, OR",
    logo: "/logos/nike.svg",
    role: "Engineering Manager",
    summary: "Led data platform teams across two of Nike's largest analytics domains — global commerce and consumer (member) analytics.",
    highlights: [],
    chapters: [
      {
        name: "Commerce Foundation",
        years: "Mar 2022 — Jun 2024",
        highlights: [
          "Built enterprise data architecture and data products for Nike's global commerce ecosystem, serving 5,000+ users.",
          "Established a single source of truth for financial and operational metrics — reporting accuracy up 25%, duplication down 50%.",
          "Delivered executive and external-reporting KPIs giving visibility into a $53B revenue stream.",
          "Platform optimization delivered $4M+ in cloud savings and a 30% reduction in operating cost.",
          "Enabled partner data integration (Dick's, Lazada, JD Sports) for Connected Marketplace — $75M projected revenue growth."
        ]
      },
      {
        name: "Consumer Analytics",
        years: "Aug 2018 — Mar 2022",
        highlights: [
          "Designed member data platforms integrating 30+ sources and 10+ PB of data for 350M+ Nike members.",
          "Consolidated trillions of records into unified single-member views.",
          "Delivered Acquisition, Engagement, Retention and Revenue KPIs that optimized $2B in marketing spend (+20% campaign effectiveness).",
          "At-risk-member data products drove a 400% increase in email subscriptions and 10% better reactivation.",
          "Built NLP pipelines over customer feedback, and GDPR/DPA governance and privacy frameworks."
        ]
      }
    ],
    stack: ["AWS", "Snowflake", "Databricks", "Spark", "Airflow", "Data Governance", "NLP"]
  },
  {
    id: "nike-de",
    years: "Jan 2014 — Aug 2018",
    employer: "Nike",
    location: "Beaverton, OR",
    logo: "/logos/nike.svg",
    role: "Lead Data Engineer / Sr. Data Engineer — Consumer Analytics",
    summary: "Hands-on engineering of Nike's batch and streaming data platform during the move from Hadoop to Spark and the cloud.",
    highlights: [
      "Built batch and real-time pipelines with Spark, PySpark, Structured Streaming, Hive and Kafka/Kinesis.",
      "Shipped real-time streaming applications and dashboards on Kinesis, Kafka, ELK and DynamoDB.",
      "Migrated legacy Pig/Hive workloads to PySpark and Airflow.",
      "Built ARIMA-based data-quality and anomaly-detection frameworks.",
      "Established governance (Okera, Ranger, lineage, auditing) and led early POCs for Databricks and Delta Lake."
    ],
    stack: ["Hadoop", "Spark", "Hive", "Presto", "Kafka", "Kinesis", "EMR", "DynamoDB", "Okera", "Ranger"]
  },
  {
    id: "early-career",
    years: "May 2004 — Dec 2013",
    employer: "Aroghia · TCS · Cognizant · Sukraa",
    location: "California · India · USA",
    logo: ["/logos/aroghia.svg", "/logos/tcs.svg", "/logos/cognizant.png", "/logos/sukraa.png"],
    role: "Lead ETL Developer · Senior Consultant · Programmer Analyst · Software Engineer",
    summary: "A decade of ETL, data integration, data warehousing and Mainframe engineering for banking and healthcare.",
    highlights: [
      "Aroghia (2013) — Lead ETL Developer at Sutter Health: Informatica workflows loading provider data into a Data Vault on SQL Server.",
      "Tata Consultancy Services (2006–2013) — Senior Consultant: Mainframe and Informatica integration for Union Bank, Citi and Bank of America.",
      "Cognizant (2005–2006) — Programmer Analyst: ETL and reporting for healthcare clients including Anthem Wellpoint.",
      "Sukraa Software Solutions (2004–2005) — Software Engineer: built a society information system for State Bank of India."
    ],
    stack: ["Informatica", "Mainframe", "COBOL", "JCL", "DB2", "Teradata", "SQL Server"]
  }
];

export const impact = [
  { value: "20+", label: "years building enterprise data, AI and cloud platforms" },
  { value: "10+ PB", label: "of member data integrated from 30+ sources at Nike" },
  { value: "350M+", label: "Nike members served by platforms I designed" },
  { value: "$4M+", label: "cloud cost savings from platform optimization" },
  { value: "80→99%", label: "reconciliation accuracy across PepsiCo systems" }
];

// "Insights" — the recurring patterns across the career, each grounded in resume outcomes.
export const insights = [
  {
    title: "Modernization without disruption",
    body: "Every era of the stack, migrated live: Mainframe → Informatica → Hadoop → Spark → cloud Lakehouse. The constant is moving production platforms forward without stopping the business.",
    proof: "IBP integrations matured into enterprise capabilities across PBNA, PBUS and CAN at PepsiCo; CDH/HBase → AWS Databricks at State Street; Pig/Hive → PySpark at Nike."
  },
  {
    title: "Trust in the numbers",
    body: "Platforms only matter if leaders believe the figures. Reconciliation, quality gates and a single source of truth come first.",
    proof: "80% → 99% reconciliation accuracy at PepsiCo; +25% reporting accuracy and −50% duplication at Nike Commerce."
  },
  {
    title: "Cost is an architecture decision",
    body: "Performance tuning and storage design are treated as first-class engineering, not afterthoughts.",
    proof: "$4M+ savings at Nike; 70% faster and 40% cheaper storage at State Street; −30% batch runtime at PepsiCo."
  },
  {
    title: "Data that moves the business",
    body: "Data products are measured by the decisions they change — forecasting, marketing spend, partner revenue.",
    proof: "$2B marketing spend optimized, $53B revenue visibility and $75M projected partner growth at Nike."
  },
  {
    title: "AI-ready platforms, AI-assisted teams",
    body: "Building the governed foundations ML and GenAI need, and using AI to make engineering teams faster.",
    proof: "PepsiCo's \"Sustain Agent\" — MCP tools + RAG automating data-issue root cause analysis; A&M Hub Gold products built for AI-generated insights; 35% faster development with GitHub Copilot."
  },
  {
    title: "Governance by design",
    body: "Privacy and access control built into the platform, across regulated retail, finance and healthcare data.",
    proof: "GDPR / CCPA / DPA / HIPAA compliance; Okera, Ranger and Unity Catalog governance programs."
  }
];

export const education: { degree: string; school: string; years: string; href?: string }[] = [
  // PLACEHOLDER: add the institution name for the B.E. degree.
  { degree: "Bachelor's Degree in Engineering — Information Technology", school: "", years: "2004" },
  { degree: "Specialization in Leadership and Management", school: "Harvard Business School Online", years: "", href: "https://online.hbs.edu/verify-certificate?dvid=6PCMSXA8" }
];
