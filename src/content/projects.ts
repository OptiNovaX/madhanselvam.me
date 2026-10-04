// PLACEHOLDER content: titles come from the original repo list; descriptions, stacks and
// links are still to be written. Set `description` and the card stops rendering as a placeholder.
export type Project = { slug: string; title: string; category: string; description: string; stack: string[]; href?: string; featured?: boolean };

export const projects: Project[] = [
  { slug: "data-engineering-copilot", title: "Data Engineering Copilot", category: "Applied AI", description: "", stack: ["Python", "LLMs", "RAG"], featured: true },
  { slug: "spark-performance-lab", title: "Spark Performance Lab", category: "Data Platforms", description: "", stack: ["Spark", "PySpark", "Databricks"], featured: true },
  { slug: "modern-lakehouse-patterns", title: "Modern Lakehouse Patterns", category: "Data Platforms", description: "", stack: ["Delta Lake", "Unity Catalog", "dbt"], featured: true },
  { slug: "project-placeholder-4", title: "Project title", category: "Category", description: "", stack: [] },
  { slug: "project-placeholder-5", title: "Project title", category: "Category", description: "", stack: [] },
  { slug: "project-placeholder-6", title: "Project title", category: "Category", description: "", stack: [] }
];
