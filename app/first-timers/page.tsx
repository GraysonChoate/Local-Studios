import type { Metadata } from "next";
import ScrollFx from "../scroll-fx";
import { Arrow, Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "First Timers | Local Studios",
  description:
    "Your first Lagree class at Local Studios in St. Petersburg — what to bring, when to arrive, what to expect.",
};

const steps = [
  {
    label: "Before",
    accent: "sky",
    title: "Arrive fifteen minutes early",
    body: "Enough time to meet the front desk, get set up, and walk through the Megaformer before anyone touches a spring.",
  },
  {
    label: "Bring",
    accent: "coral",
    title: "Grip socks and water",
    body: "Grip socks are required and sold in studio if you forget. Workout clothes you can move slowly in.",
  },
  {
    label: "During",
    accent: "clay",
    title: "Fifty minutes, coached throughout",
    body: "Slow, controlled work with modifications offered the whole way. You set the pace; the shake shows up on its own.",
  },
];

const testimonials = [
  {
    quote:
      "The class was challenging in the best way. I appreciated the modifications, clear setup help, and calm welcome before we started.",
    name: "New Local client",
  },
  {
    quote:
      "Amazing class. My legs were still shaking. The studio feels beautiful and modern, and the instructor offered gentle adjustments throughout.",
    name: "Alexandra",
  },
  {
    quote:
      "The toughest class I have ever been to, but so amazing. Everyone was friendly and it was definitely beginner friendly.",
    name: "First-time visitor",
  },
  {
    quote:
      "Such a warm and welcoming space that feels inviting to all levels. I felt supported, challenged, and already ready to come back.",
    name: "Jenna",
  },
];

export default function FirstTimers() {
  return (
    <main>
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>
      <Header />

      <section className="page-hero mat mat-limewash palm-shadow">
        <p className="eyebrow">First time at Local</p>
        <h1>
          Your first class,
          <span>made simple.</span>
        </h1>
        <p className="lead">
          Low-impact, high-intensity, and built to meet you where you are.
          No experience needed — just show up early.
        </p>
        <div className="hero-inline-actions">
          <a className="button button-dark" href="/buy">
            First 3 classes for $55 <Arrow />
          </a>
        </div>
      </section>

      <section className="room-band">
        <img
          src="/local-class.webp"
          alt="A Lagree class mid-set on the Megaformers at Local Studios"
        />
        <div className="room-copy" data-reveal>
          <p className="eyebrow">The room</p>
          <h2>
            A full room.
            <span>One class at a time.</span>
          </h2>
          <p>
            This is what you&apos;re walking into — everyone moving
            together, coached the whole way through.
          </p>
        </div>
      </section>

      <section className="step-band mat mat-linen">
        <div className="step-grid">
          {steps.map((step, i) => (
            <article
              className={`step-card step-${step.accent}`}
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <p className="eyebrow">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section tint mat mat-sand palm-shadow palm-shadow-right">
        <p className="eyebrow" data-reveal>
          What Lagree is
        </p>
        <p
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          Strength, endurance, balance, and flexibility on the Megaformer —
          performed slowly, with control, on constant time under tension.
          It protects your joints and still finds your limit. It is
          challenging, and it is designed for beginners.
        </p>
      </section>

      <section className="quote-band mat mat-sand">
        <div className="quote-head" data-reveal>
          <p className="eyebrow">Member words</p>
          <p className="rating">
            <strong>4.9 / 5</strong> · 38 public ratings
          </p>
        </div>
        <div className="quote-grid">
          {testimonials.map((t, i) => (
            <figure
              className="quote-card"
              key={t.quote}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <blockquote>{t.quote}</blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="sky-band"
        style={{ backgroundImage: "url(/sky-water.webp)" }}
      >
        <p className="eyebrow" data-reveal>
          Ready when you are
        </p>
        <h2 data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
          Everyone here
          <span>had a first class too.</span>
        </h2>
        <div
          className="sky-actions"
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
        >
          <a className="button button-dark" href="/schedule">
            Book your first class <Arrow />
          </a>
          <a className="text-link" href="/faq">
            Read the FAQ <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
