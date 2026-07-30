import type { Metadata } from "next";

const liveSite = "https://www.localstudios.co";

export const metadata: Metadata = {
  title: "Local Studios | Movement Meets Community",
  description:
    "A St. Petersburg Lagree studio where full-body movement, real strength, and genuine community meet.",
};

const navItems = [
  ["About", "/about"],
  ["Schedule", "/schedule"],
  ["Buy", "/buy"],
  ["Events", "/events"],
  ["First Timers", "/first-timers"],
  ["FAQ", "/faq"],
];

const methodPoints = [
  {
    number: "01",
    title: "Slow movement",
    copy: "Controlled time under tension makes every second count.",
  },
  {
    number: "02",
    title: "Deep work",
    copy: "Low impact. High intensity. Full-body strength in 50 minutes.",
  },
  {
    number: "03",
    title: "All-class support",
    copy: "Clear coaching, thoughtful modifications, and a room behind you.",
  },
];

const firstClassSteps = [
  ["15 min", "Arrive early"],
  ["Check in", "Meet your coach"],
  ["Grip socks", "Get set"],
  ["Megaformer", "Learn the machine"],
  ["50 min", "Move together"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href={`${liveSite}/`} aria-label="Local Studios home">
        <img src="/local-logo-midnight.webp" alt="Local Studios" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, path]) => (
          <a key={path} href={`${liveSite}${path}`}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={`${liveSite}/schedule`}>
        Book a class <Arrow />
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, path]) => (
            <a key={path} href={`${liveSite}${path}`}>
              {label}
            </a>
          ))}
          <a className="mobile-book" href={`${liveSite}/schedule`}>
            Book a class <Arrow />
          </a>
        </nav>
      </details>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/local-community-hero.webp"
          >
            <source src="/local-community-motion.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Lagree in St. Petersburg</p>
          <h1 id="hero-title">
            where movement
            <span>meets community.</span>
          </h1>
          <p className="hero-copy">
            Strength feels different when you build it together. Meet us on the
            Megaformer for 50 minutes of full-body work and a room that knows
            your name.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={`${liveSite}/buy`}>
              First 3 classes for $55 <Arrow />
            </a>
            <a className="text-link" href={`${liveSite}/first-timers`}>
              New here? Start with us <Arrow />
            </a>
          </div>
        </div>
        <a className="hero-scroll" href="#the-work">
          <span>Scroll to move</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <div className="ticker" aria-label="50 minute full body workout">
        <div>
          <span>50 minute</span>
          <i />
          <span>full body</span>
          <i />
          <span>low impact</span>
          <i />
          <span>high intensity</span>
          <i />
          <span>50 minute</span>
          <i />
          <span>full body</span>
          <i />
          <span>low impact</span>
          <i />
          <span>high intensity</span>
          <i />
        </div>
      </div>

      <section className="promise" id="the-work">
        <div className="section-intro">
          <p className="eyebrow">The Local feeling</p>
          <p className="section-count">01 — The work</p>
        </div>
        <div className="promise-grid">
          <h2>
            The shake
            <span>is shared.</span>
          </h2>
          <div className="promise-copy">
            <p>
              Local is more than a place to move. It&apos;s a place to belong.
              The work is precise, challenging, and deeply personal. The energy
              around it is unmistakably collective.
            </p>
            <a className="line-link" href={`${liveSite}/about`}>
              Our story <Arrow />
            </a>
          </div>
        </div>

        <div className="method-grid">
          {methodPoints.map((point) => (
            <article key={point.number} className="method-point">
              <span>{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="community-scene" aria-label="The Local community">
        <div className="community-pin">
          <p className="eyebrow">A room that moves with you</p>
          <h2>Come for the workout. Stay for the people.</h2>
          <a className="button button-light" href={`${liveSite}/events`}>
            See what&apos;s happening <Arrow />
          </a>
        </div>
      </section>

      <section className="first-class">
        <div className="section-intro">
          <p className="eyebrow">Your first class, made simple</p>
          <p className="section-count">02 — Your arrival</p>
        </div>
        <div className="first-class-heading">
          <h2>You&apos;re new for about five minutes.</h2>
          <p>
            We&apos;ll show you the machine, learn your name, and coach the
            whole room. No prior Lagree experience required.
          </p>
        </div>
        <ol className="timeline">
          {firstClassSteps.map(([time, label], index) => (
            <li key={label}>
              <span className="timeline-index">0{index + 1}</span>
              <strong>{time}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ol>
        <div className="first-class-actions">
          <a className="button button-sky" href={`${liveSite}/first-timers`}>
            Plan your first class <Arrow />
          </a>
          <p>Grip socks required. We&apos;ve got you from there.</p>
        </div>
      </section>

      <section className="social-proof">
        <div className="social-copy">
          <p className="eyebrow">Built on Central Avenue</p>
          <h2>
            The class ends.
            <span>The connection doesn&apos;t.</span>
          </h2>
          <p>
            Local is St. Pete&apos;s movement studio and its meeting place.
            Walk clubs become weekend plans. Partner pop-ups introduce new
            favorites. The person shaking beside you becomes the person you
            text next time.
          </p>
        </div>
        <div className="social-tiles" aria-label="Community experiences">
          <a href={`${liveSite}/events`} className="social-tile tile-walk">
            <span>Meet your people</span>
            <Arrow />
          </a>
          <a href={`${liveSite}/events`} className="social-tile tile-popups">
            <span>Walk through the door</span>
            <Arrow />
          </a>
          <a href={`${liveSite}/events`} className="social-tile tile-nights">
            <span>Move through St. Pete</span>
            <Arrow />
          </a>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Your Local is waiting</p>
        <h2>Meet us on the Megaformer.</h2>
        <div>
          <a className="button button-dark" href={`${liveSite}/schedule`}>
            View the schedule <Arrow />
          </a>
          <a className="line-link" href={`${liveSite}/buy`}>
            Buy classes <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/local-logo-sky.webp" alt="Local Studios" />
          <p>Where movement meets community.</p>
        </div>
        <div className="footer-links">
          <div>
            <p>Move</p>
            <a href={`${liveSite}/schedule`}>Schedule</a>
            <a href={`${liveSite}/buy`}>Buy</a>
            <a href={`${liveSite}/first-timers`}>First Timers</a>
            <a href={`${liveSite}/my-account`}>Login</a>
          </div>
          <div>
            <p>Connect</p>
            <a href={`${liveSite}/events`}>Events</a>
            <a href={`${liveSite}/contact`}>Contact</a>
            <a href="https://www.instagram.com/localstudios.co/">Instagram</a>
            <a href={`${liveSite}/sign-up`}>Become a Local</a>
          </div>
          <div>
            <p>Visit</p>
            <a href="https://maps.google.com/?q=900+Central+Avenue+Unit+15B+St.+Petersburg+FL+33705">
              900 Central Avenue, Unit 15B
              <br />
              St. Petersburg, FL 33705
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Local Studios</span>
          <div>
            <a href={`${liveSite}/privacy-policy`}>Privacy</a>
            <a href={`${liveSite}/terms-conditions`}>Terms</a>
            <a href={`${liveSite}/website-accessibility`}>Accessibility</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
