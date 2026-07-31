import type { Metadata } from "next";
import ScrollFx from "../scroll-fx";
import { Arrow, Footer, Header, externalProps, liveSite } from "../site-chrome";
import { BowDoodle, EnvelopeDoodle, SparkleDoodle } from "../doodles";

export const metadata: Metadata = {
  title: "Events | Local Studios",
  description:
    "Community nights, collabs, and private group classes at Local Studios in St. Petersburg.",
};

const pastEvents = [
  {
    name: "sculpt. sip. shop.",
    kind: "Morning market",
    detail: "A Lagree class, then coffee and local vendors in the studio.",
    accent: "sky",
  },
  {
    name: "local on the mat",
    kind: "Galentine's × Peach Pump",
    detail: "Mat class in the evening, flowers and friends after.",
    accent: "blush",
  },
  {
    name: "local before the Mezzo",
    kind: "Local on the Mat series",
    detail: "Lagree-inspired mat class, then shop the Mezzo Market.",
    accent: "clay",
  },
  {
    name: "house warming",
    kind: "Opening day",
    detail: "A first look at our space in St. Petersburg.",
    accent: "sky",
  },
];

const privateOptions = [
  { label: "Non-peak hours", price: "$260", detail: "Private class of 8" },
  { label: "Peak hours", price: "$300", detail: "Private class of 8" },
];

export default function Events() {
  return (
    <main>
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>
      <Header variant="light" />

      <section className="hero-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/local-toast-poster.webp"
        >
          <source src="/local-toast.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-wash" aria-hidden="true" />
        <div className="hero-video-copy">
          <p className="eyebrow">Beyond class</p>
          <h1>
            It never really stops
            <span>at fifty minutes.</span>
          </h1>
          <p className="lead">
            Markets, collabs, Galentine&apos;s, opening nights — the room
            gets used for more than the Megaformer.
          </p>
        </div>
      </section>

      <section className="events-band">
        <div className="events-head" data-reveal>
          <p className="eyebrow">Previously at Local</p>
          <h2>a few of our favorites</h2>
        </div>
        <div className="events-grid">
          {pastEvents.map((ev, i) => (
            <article
              className={`event-card accent-${ev.accent}`}
              key={ev.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="badge-pill">{ev.kind}</span>
              <h3>{ev.name}</h3>
              <p>{ev.detail}</p>
            </article>
          ))}
        </div>
        <p className="events-foot" data-reveal>
          Dates change every season — Instagram is where the next one gets
          announced first.
        </p>
      </section>

      <section className="private-band mat mat-linen">
        <SparkleDoodle className="doodle doodle-tl" />
        <div className="private-inner">
          <div className="private-copy" data-reveal>
            <p className="eyebrow">Private group class</p>
            <h2>
              Book the whole room.
              <span>Bring everyone.</span>
            </h2>
            <p>
              Birthdays, bachelorettes, team outings — eight machines,
              fifty minutes, just your people.
            </p>
            <a className="button button-dark" href="/buy">
              Book a private class <Arrow />
            </a>
          </div>

          <div className="private-rates">
            {privateOptions.map((opt, i) => (
              <div
                className="rate-card"
                key={opt.label}
                data-reveal
                style={
                  { "--reveal-delay": `${i * 100}ms` } as React.CSSProperties
                }
              >
                <p className="eyebrow">{opt.label}</p>
                <p className="rate-price">{opt.price}</p>
                <p className="rate-detail">{opt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="whats-next mat mat-sand">
        <EnvelopeDoodle className="doodle doodle-next-l" />
        <BowDoodle className="doodle doodle-next-r" />
        <div className="whats-next-inner">
          <p className="eyebrow" data-reveal>
            What&apos;s next
          </p>
          <h2
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            The calendar lives
            <span>on Instagram.</span>
          </h2>
          <div
            className="section-actions"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <a
              className="button button-sky"
              href="https://www.instagram.com/local__studios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow @local__studios <Arrow />
            </a>
            <a
              className="text-link"
              href={`${liveSite}/sign-up`}
              {...externalProps(liveSite)}
            >
              Join the list <Arrow />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
