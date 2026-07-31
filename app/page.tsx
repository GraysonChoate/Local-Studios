import type { Metadata } from "next";
import ScrollFx from "./scroll-fx";
import { Arrow, Footer, Header } from "./site-chrome";
import { DiscoDoodle, SparkleDoodle, WaveformOverlay } from "./doodles";

export const metadata: Metadata = {
  title: "Local Studios | Movement Meets Community",
  description:
    "A St. Petersburg Lagree studio built around strength, connection, and community.",
};

export default function Home() {
  return (
    <main>
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/local-hero-loop-poster.jpg"
            aria-hidden="true"
          >
            <source src="/local-hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow">Lagree in St. Petersburg</p>
          <h1 id="hero-title">
            where movement
            <span>meets community.</span>
          </h1>
          <p className="hero-copy">
            Build strength in a room that knows your name.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/buy">
              First 3 classes for $55 <Arrow />
            </a>
            <a className="text-link" href="/first-timers">
              Your first class <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="essence">
        <img
          className="essence-media"
          src="/local-shake.webp"
          alt="Two members mid-set on the Megaformers at Local Studios"
        />
        <div className="essence-wash" aria-hidden="true" />
        <div className="essence-inner">
          <p className="eyebrow" data-reveal>
            The Local feeling
          </p>
          <h2
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            The shake
            <span>is shared.</span>
          </h2>
          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Slow movement. Deep work. A community beside you.
          </p>
          <a
            className="line-link"
            href="/about"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            Our story <Arrow />
          </a>
        </div>
      </section>

      <section className="portal-grid" aria-label="Explore Local Studios">
        <a className="portal portal-first" href="/first-timers" data-reveal>
          <img
            src="/local-arrival.webp"
            alt="A Local Studios member arriving at the studio"
          />
          <span className="portal-wash" />
          <span className="portal-copy">
            <small>New to Local</small>
            <strong>Your first class</strong>
            <Arrow />
          </span>
        </a>
        <a
          className="portal portal-events"
          href="/events"
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          <img src="/local-together.webp" alt="Friends at Local Studios" />
          <span className="portal-wash" />
          <span className="portal-copy">
            <small>Beyond class</small>
            <strong>Life at Local</strong>
            <Arrow />
          </span>
        </a>
      </section>

      <section className="playlist mat mat-linen" aria-labelledby="playlist-title">
        <div className="playlist-copy" data-reveal>
          <p className="eyebrow">Set to the room</p>
          <h2 id="playlist-title">
            Guess the playlist
            <span>instructor edition.</span>
          </h2>
          <p>
            The music running the room right now, straight from the
            instructors who pick it.
          </p>
        </div>
        <a
          className="playlist-card"
          href="https://open.spotify.com/user/31ogjncpv62m3254scfygxhztebi"
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <WaveformOverlay className="playlist-wave" />
          <span className="playlist-scrub" aria-hidden="true">
            <span />
          </span>
          <SparkleDoodle className="doodle doodle-tl" />
          <DiscoDoodle className="doodle doodle-br" />
          <span className="playlist-card-inner">
            <span className="badge-pill">Now playing</span>
            <strong>Local Studio on Spotify</strong>
            <span className="script-note">what the room sounds like</span>
            <span className="playlist-cta">
              Listen <Arrow />
            </span>
          </span>
        </a>
      </section>

      <section className="final-cta">
        <video
          className="final-cta-media"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/local-logo-tide-poster.webp"
          aria-hidden="true"
        >
          <source src="/local-logo-tide.mp4" type="video/mp4" />
        </video>
        <div className="final-cta-wash" aria-hidden="true" />
        <h2 data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          Meet us on the Megaformer.
        </h2>
        <div
          className="final-actions"
          data-reveal
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          <a className="button button-dark" href="/schedule">
            View the schedule <Arrow />
          </a>
          <a className="text-link" href="/buy">
            Buy classes <Arrow />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
