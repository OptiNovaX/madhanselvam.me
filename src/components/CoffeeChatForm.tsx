"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/content/profile";

const topics = ["Data platform architecture", "Lakehouse & cloud modernization", "Applied AI / GenAI", "Hiring or advisory", "Something else"];

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

// Requests are emailed via FormSubmit (https://formsubmit.co) — no backend needed on this static site.
export default function CoffeeChatForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return;
    setStatus({ state: "sending" });
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.bookingEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Coffee chat request — ${data.name}`,
          _template: "table",
          _captcha: "false"
        })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Request failed");
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: "Something went wrong sending your request. Please try again, or reach me on LinkedIn." });
    }
  }

  if (status.state === "sent") {
    return <div className="chat-done" role="status">
      <strong>Request sent — thank you!</strong>
      <p>I&apos;ll reply by email within a couple of days to confirm a time.</p>
    </div>;
  }

  return <form className="chat-form" onSubmit={onSubmit}>
    <div className="chat-row">
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
    </div>
    <div className="chat-row">
      <label>Company / role (optional)<input name="company" autoComplete="organization" /></label>
      <label>Topic<select name="topic" defaultValue={topics[0]}>{topics.map((t) => <option key={t}>{t}</option>)}</select></label>
    </div>
    <label>Preferred days &amp; times (with time zone)<input name="availability" required placeholder="e.g. Tue or Thu afternoon, CT" /></label>
    <label>What would you like to talk about?<textarea name="message" rows={4} required /></label>
    <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="chat-honey" aria-hidden="true" />
    <div className="chat-actions">
      <button className="btn btn-primary" type="submit" disabled={status.state === "sending"}>{status.state === "sending" ? "Sending…" : <>Request a coffee chat <span>→</span></>}</button>
      <span>30 minutes · video call · free</span>
    </div>
    {status.state === "error" && <p className="chat-error" role="alert">{status.message}</p>}
  </form>;
}
