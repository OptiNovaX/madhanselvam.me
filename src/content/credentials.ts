export type Credential = { year: string; title: string; issuer: string; meta?: string; href?: string; logo?: string };

export const certifications: Credential[] = [
  { year: "2024", title: "Databricks Certified Data Engineer Associate", issuer: "Databricks", href: "https://credentials.databricks.com/d02ed077-3e36-440c-b1ea-8db617bf7872", logo: "/logos/databricks.svg" },
  { year: "2023", title: "Databricks Certified Associate Developer for Apache Spark 3.0", issuer: "Databricks", href: "https://credentials.databricks.com/a997c0b0-3aab-40ba-b22d-a70d68f2a733", logo: "/logos/databricks.svg" },
  { year: "", title: "Databricks Platform Architect", issuer: "Databricks", href: "https://credentials.databricks.com/ac632b98-9982-4e90-9e5c-218f22d79a3a", logo: "/logos/databricks.svg" },
  { year: "", title: "Databricks Generative AI Fundamentals", issuer: "Databricks", href: "https://credentials.databricks.com/96e6a7b3-ba5c-4ae1-9382-bccd77004927", logo: "/logos/databricks.svg" },
  { year: "", title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", meta: "DY5FD2-6E0D4D", href: "https://learn.microsoft.com/en-us/users/madhanselvam-4316/credentials/9ae3eefb488fc30d", logo: "/logos/microsoft.png" },
  { year: "2017", title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", meta: "AWS-ASA-36358", href: "https://www.credly.com/badges/35b2298e-80b9-4723-a98f-71a1673fe75b", logo: "/logos/amazonaws.png" },
  { year: "2017", title: "Cloudera Certified Spark & Hadoop Developer (CCA 175)", issuer: "Cloudera", meta: "100-014-573", href: "https://www.cloudera.com/services-and-support/training/certification.html", logo: "/logos/cloudera.svg" },
  { year: "2015", title: "Cloudera Certified Developer for Apache Hadoop (CCDH)", issuer: "Cloudera", meta: "100-014-573", href: "https://www.cloudera.com/services-and-support/training/certification.html", logo: "/logos/cloudera.svg" },
  { year: "2014", title: "Informatica Certified Professional: PowerCenter Data Integration Developer Specialist", issuer: "Informatica", meta: "041-000240", href: "https://now.informatica.com/Certified-Professional-Program.html", logo: "/logos/informatica.png" },
  { year: "2008", title: "Teradata Certified Professional — V2R5", issuer: "Teradata", href: "https://www.teradata.com/university", logo: "/logos/teradata.svg" },
  { year: "2007", title: "IBM Certified Professional — DB2 UDB", issuer: "IBM", href: "https://www.ibm.com/training/", logo: "/logos/ibm.svg" }
];
