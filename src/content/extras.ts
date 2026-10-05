// PLACEHOLDER sections mirrored from the reference layout. Fill an array and its
// section renders real cards; leave it empty and the section shows a placeholder.
export type Book = { title: string; author: string; quote: string };
export type Publication = { title: string; venue: string; year: string; href?: string; summary?: string };
export type Post = { title: string; date: string; href: string; summary: string };

export const books: Book[] = [];
export const publications: Publication[] = [];
export const posts: Post[] = [];

// "Beyond work" on /about — the after-hours AI lab. Each entry is a public repo under profile.github.
export const lab = {
  intro: "After hours I run a personal R&D lab on where data engineering is heading — agents, copilots and open Lakehouse patterns — and publish what I learn as open blueprints.",
  repos: [
    { name: "claude-data-engineering-skills", note: "Claude skills for ETL, schema inference, SQL generation and pipeline debugging" },
    { name: "data-engineering-copilot", note: "AI-assisted workspace for PySpark, Airflow, dbt and data quality" },
    { name: "modern-lakehouse-patterns", note: "Medallion, Delta and Iceberg, streaming and governance patterns" },
    { name: "spark-performance-lab", note: "Query plans, AQE, Delta tuning and cluster-sizing benchmarks" },
    { name: "data-platforms-blueprints", note: "Terraform, Kubernetes, CI/CD and observability for data platforms" }
  ],
  learning: "Harvard Business School leadership & strategy (2022–2024) · Databricks Platform Architect, GenAI and Azure (2026)"
};
