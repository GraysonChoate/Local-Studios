import type { Metadata } from "next";
import ScrollFx from "../scroll-fx";
import { Arrow, Footer, Header } from "../site-chrome";
import MarianaEmbed from "../mariana-embed";
import { BowDoodle, SparkleDoodle } from "../doodles";

export const metadata: Metadata = {
  title: "Buy | Local Studios",
  description:
    "Intro offers, memberships, and class packs at Local Studios in St. Petersburg.",
};

const perks = [
  {
    label: "Intro",
    title: "3 classes, $55",
    body: "Enough to learn the machine and feel the method before you commit to anything.",
    accent: "sky",
  },
  {
    label: "Membership",
    title: "A guest pass, every month",
    body: "Plus ten percent off retail and an early booking window on the schedule.",
    accent: "clay",
  },
  {
    label: "Perks",
    title: "Ten percent off retail",
    body: "Grip socks, water bottles, and anything on the shelf when you are a member.",
    accent: "coral",
  },
];

export default function Buy() {
  return (
    <main>
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>
      <Header />

      <section className="page-hero mat mat-limewash palm-shadow">
        <SparkleDoodle className="doodle doodle-hero-l" />
        <p className="eyebrow">Memberships &amp; packs</p>
        <h1>
          Start with three.
          <span>Stay for the room.</span>
        </h1>
        <p className="lead">
          No contracts, no pressure — just pick the way you want to move.
        </p>
      </section>

      <section className="offer-band">
        <img
          src="/local-friends.webp"
          alt="Two Local Studios members after class"
        />
        <div className="offer-copy" data-reveal>
          <span className="badge-pill">New here</span>
          <h2>
            Your first three
            <span>are fifty-five.</span>
          </h2>
          <p className="script-note">no contracts, cancel anytime</p>
          <p>
            Three guided classes so you can learn the Megaformer, feel the
            method, and decide how Local fits your week.
          </p>
          <a className="button button-dark" href="#pricing">
            See all options <Arrow />
          </a>
        </div>
      </section>

      <section className="perk-band mat mat-linen">
        <BowDoodle className="doodle doodle-br" />
        <div className="perk-grid">
          {perks.map((p, i) => (
            <article
              className={`perk-card perk-${p.accent}`}
              key={p.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="badge-pill">{p.label}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="embed-section" id="pricing">
        <MarianaEmbed route="/buy" />
      </section>

      <Footer referral />
    </main>
  );
}
