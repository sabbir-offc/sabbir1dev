"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
  Sparkles,
} from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactFormUltra() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);

  const endpoint = useMemo(
    () => (FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null),
    []
  );
  const honeypotId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const msgLimit = 1200;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameValid = name.trim().length > 1;
  const msgValid = message.trim().length > 10;
  const canSubmit =
    nameValid && emailValid && msgValid && state !== "submitting";

  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [message]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!endpoint) {
      setState("error");
      setError("Missing Formspree ID.");
      return;
    }
    if (!canSubmit) return;

    setState("submitting");
    try {
      const gotcha =
        (document.getElementById(honeypotId) as HTMLInputElement | null)
          ?.value ?? "";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          budget,
          timeline,
          subject: subject || "New portfolio contact",
          message,
          _subject: subject || "New portfolio contact",
          _gotcha: gotcha,
          _data: { page: "/contact", ts: Date.now() },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.errors?.length) {
        const msg =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.errors?.map((e: any) => e.message).join(", ") ||
          `Request failed with ${res.status}`;
        throw new Error(msg);
      }

      setState("success");
      formRef.current?.reset();
      setName("");
      setEmail("");
      setCompany("");
      setBudget("");
      setTimeline("");
      setSubject("");
      setMessage("");
      setConsent(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="relative">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--primary)/0.15)_0deg,transparent_120deg,transparent_240deg,hsl(var(--primary)/0.15)_360deg)] blur-2xl"
      />
      <div className="relative rounded-2xl border bg-gradient-to-br from-background to-background/60 p-5 md:p-6">
        {/* header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Project brief</h2>
            <p className="text-sm text-muted-foreground">
              Share goals, scope, and links. I’ll follow up with a concrete plan
              and timeline.
            </p>
          </div>
          <Sparkles className="h-5 w-5 opacity-60" />
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
          {/* row 1 */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Floating
              id="name"
              label="Name"
              required
              invalid={!nameValid && name.length > 0}
            >
              <input
                id="name"
                autoComplete="name"
                className="control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Floating>

            <Floating
              id="email"
              label="Email"
              required
              invalid={!emailValid && email.length > 0}
            >
              <input
                id="email"
                type="email"
                placeholder=" "
                className="control peer"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Floating>
          </div>

          {/* row 2 */}
          <div className="grid gap-5 sm:grid-cols-3">
            <Floating id="company" label="Company">
              <input
                id="company"
                placeholder=" "
                className="control peer"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Floating>
            <Floating id="budget" label="Budget">
              <select
                id="budget"
                className="control peer"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value=""></option>
                <option value="under-2k">Under $2k</option>
                <option value="2k-5k">$2k–$5k</option>
                <option value="5k-10k">$5k–$10k</option>
                <option value="10k-plus">$10k+</option>
              </select>
            </Floating>
            <Floating id="timeline" label="Timeline">
              <select
                id="timeline"
                className="control peer"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
              >
                <option value=""></option>
                <option value="asap">ASAP</option>
                <option value="2-4w">2–4 weeks</option>
                <option value="1-3m">1–3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </Floating>
          </div>

          {/* subject */}
          <Floating id="subject" label="Subject">
            <input
              id="subject"
              placeholder=" "
              className="control peer"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Floating>

          {/* message */}
          <div className="space-y-2">
            <Floating
              id="message"
              label="Message"
              required
              invalid={!msgValid && message.length > 0}
            >
              <textarea
                id="message"
                ref={messageRef}
                placeholder=" "
                className="control peer min-h-[140px] resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, msgLimit))}
              />
            </Floating>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                You can email me about this inquiry.
              </label>
              <span className="inline-flex items-center gap-1">
                <Info className="h-4 w-4" /> {message.length}/{msgLimit}
              </span>
            </div>
          </div>

          {/* honeypot */}
          <input
            id={honeypotId}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* submit */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={!canSubmit}
              aria-disabled={!canSubmit}
              className={[
                "relative inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-white transition",
                "bg-gradient-to-r from-primary to-purple-600 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95",
                "disabled:opacity-60 disabled:cursor-not-allowed",
              ].join(" ")}
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : state === "success" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Sent — thank you!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>

            {state === "error" && (
              <span className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" />{" "}
                {error ?? "Failed to send. Try again."}
              </span>
            )}
          </div>

          {/* success note */}
          {state === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-xl border bg-background p-4 text-sm text-muted-foreground"
            >
              I’ve received your message. If you don’t see a reply within 24
              hours, email me directly at{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:itmanager@nexbitltd.com"
              >
                itmanager@nexbitltd.com
              </a>
              .
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}

/** Floating label wrapper */
function Floating({
  id,
  label,
  required,
  invalid,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  invalid?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={["group relative", invalid ? "invalid" : ""].join(" ")}>
      {/* Input/Select/Textarea */}
      {children}

      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute -top-2 left-3",
          "rounded-full bg-background px-2 text-xs font-medium",
          "text-muted-foreground transition-colors",
          "group-focus-within:text-primary",
          "group-[.invalid]:text-red-600",
        ].join(" ")}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    </div>
  );
}
