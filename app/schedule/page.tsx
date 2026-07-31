import type { Metadata } from "next";
import ScrollFx from "../scroll-fx";
import { Arrow, Footer, Header } from "../site-chrome";
import MarianaEmbed from "../mariana-embed";
import { SparkleDoodle } from "../doodles";

export const metadata: Metadata = {
  title: "Schedule | Local Studios",
  description:
    "Book a Lagree class at Local Studios in downtown St. Petersburg.",
};

export default function Schedule() {
  return (
    <main>
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>
      <Header />

      <section className="page-hero mat mat-limewash palm-shadow">
        <SparkleDoodle className="doodle doodle-hero-l" />
        <p className="eyebrow">Book a class</p>
        <h1>
          Find your class.
          <span>Bring grip socks.</span>
        </h1>
        <p className="lead">
          Fifty minutes on the Megaformer, seven days a week on Central
          Avenue.
        </p>
      </section>

      <section className="schedule-strip">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/local-carriage-poster.webp"
          aria-hidden="true"
        >
          <source src="/local-carriage.mp4" type="video/mp4" />
        </video>
        <div className="strip-copy" data-reveal>
          <span className="badge-pill">Before you book</span>
          <h2>
            Plans change.
            <span>We get it.</span>
          </h2>
          <p className="script-note">twelve hours, no charge</p>
          <p>
            Cancel at least twelve hours out and the credit goes straight
            back to your account. Inside that window a fee applies —
            though illness and emergencies are always worth a call.
          </p>
          <a className="text-link" href="/faq">
            Read the policies <Arrow />
          </a>
        </div>
      </section>

      <section className="embed-section">
        <MarianaEmbed route="/schedule/daily" />
      </section>

      <Footer />
    </main>
  );
}
