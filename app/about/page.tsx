import type { Metadata } from "next";
import ScrollFx from "../scroll-fx";
import { Arrow, Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "About | Local Studios",
  description:
    "Local Studios is a Lagree studio in downtown St. Petersburg, built around strength, connection, and community.",
};

export default function About() {
  return (
    <main className="living-page">
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>

      <div className="living-bg" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/local-stpete-poster.webp"
        >
          <source src="/local-stpete.mp4" type="video/mp4" />
        </video>
        <div className="living-wash" />
      </div>

      <div className="living-content">
        <Header />

        <section className="page-hero glass">
          <p className="eyebrow">Our story</p>
          <h1>
            Downtown St. Pete didn&apos;t have this.
            <span>So we built it.</span>
          </h1>
          <p className="lead">
            It started on a Megaformer somewhere else — the kind of class
            where strangers end up cheering each other through the last
            set.
          </p>
        </section>

        <section className="page-section glass" data-reveal>
          <p className="eyebrow">The idea</p>
          <p>
            The Lagree Method was already proven in studios across the
            country: low-impact, high-intensity, and full of people
            pushing each other through it. Downtown St. Petersburg
            didn&apos;t have that. So Local was founded — a studio built
            on the same method, rooted in the same idea, where neighbors
            move, sweat, and grow stronger together.
          </p>
        </section>

        <section className="page-section glass tint" data-reveal>
          <p className="eyebrow">The method</p>
          <p>
            Controlled work on the Megaformer, built on time under tension
            instead of momentum. Full-body, low-impact, fifty minutes —
            and by the end of it, you&apos;re shaking.
          </p>
        </section>

        <section className="page-section glass" data-reveal>
          <p className="eyebrow">The room</p>
          <p>
            We still believe the shake is better shared. That&apos;s true
            before class, after class, and at everything in between.
          </p>
        </section>

        <section className="page-section glass closing">
          <p className="eyebrow" data-reveal>
            St. Petersburg, Florida
          </p>
          <h2
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            Come feel it
            <span>for yourself.</span>
          </h2>
          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Nine hundred Central Avenue. Come see what we built.
          </p>
          <div
            className="sky-actions"
            data-reveal
            style={{ "--reveal-delay": "230ms" } as React.CSSProperties}
          >
            <a className="button button-dark" href="/schedule">
              View the schedule <Arrow />
            </a>
            <a className="text-link" href="/first-timers">
              New to Lagree <Arrow />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
