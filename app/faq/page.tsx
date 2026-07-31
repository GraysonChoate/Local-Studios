import type { Metadata } from "next";
import ScrollFx from "../scroll-fx";
import { Arrow, Footer, Header, externalProps, liveSite } from "../site-chrome";

export const metadata: Metadata = {
  title: "FAQ | Local Studios",
  description:
    "Parking, grip socks, arrival times, and policies at Local Studios in St. Petersburg.",
};

const groups = [
  {
    heading: "Getting here",
    items: [
      {
        q: "Where are you located?",
        a: [
          "900 Central Ave, Unit 15B, St. Petersburg, FL 33705.",
          "Look for the parking-lot side of the 900 Central Avenue building — next door to The Burg Nutrition, facing the side of 930 Central Flats.",
        ],
      },
      {
        q: "Is there parking?",
        a: [
          "Yes. Free two-hour street parking along Central Ave and both sides of MLK.",
          "We also have ten free spaces in our lot — first come, first served, validated by our front desk. Apple Maps and Google Maps will lead you straight to the lot.",
        ],
      },
      {
        q: "What do I need for class?",
        a: [
          "Workout clothing, water, and grip socks. Grip socks are required, and sold in studio if you forget.",
          "Newcomers, please arrive fifteen minutes early for an overview of the machine before class.",
        ],
      },
    ],
  },
  {
    heading: "The method",
    items: [
      {
        q: "What is the Lagree Method?",
        a: [
          "A low-impact, high-intensity workout performed on the Megaformer. It combines strength training, endurance, cardio, balance, and flexibility into one efficient class.",
          "Every movement is done slowly and with control, which maximizes muscle engagement while protecting your joints.",
        ],
      },
      {
        q: "Is Lagree beginner friendly?",
        a: [
          "Yes. Lagree adapts to every fitness level, from beginners to seasoned athletes. Instructors provide modifications and progressions so you can work at your own pace.",
          "You do not need any prior experience to start.",
        ],
      },
      {
        q: "Is Lagree considered Pilates?",
        a: [
          "No. The two share some similarities, but they are distinct methods.",
          "Pilates emphasizes controlled, precise movements for core strength and flexibility, often on a reformer. Lagree runs on a Megaformer and folds strength, endurance, and cardio into one low-impact, high-intensity class.",
        ],
      },
      {
        q: "Is Lagree safe for pregnancy?",
        a: [
          "Since Lagree is low impact, it can be a safe way to stay strong through pregnancy. If you already know the method and are medically cleared for high-intensity training, our team can provide a pre- and postnatal guide with modifications.",
          "We do not recommend beginning Lagree for the very first time while pregnant. Please check with your doctor before changing your routine.",
        ],
      },
    ],
  },
  {
    heading: "Policies",
    items: [
      {
        q: "What is your late arrival policy?",
        a: [
          "First timers: late entry is not permitted. New clients need a machine overview and an introduction to the method, so please arrive fifteen minutes early for setup.",
          "Members and returning clients: we allow a five-minute grace period. After that, doors close and late cancel fees may apply — it keeps classes safe, focused, and free of disruption.",
        ],
      },
      {
        q: "What is your late cancel and no-show policy?",
        a: [
          "We ask that cancellations be made at least twelve hours in advance. A loss of credit and $15 fee applies to late cancels; a loss of credit and $20 fee applies to no-shows.",
          "Emergencies and illness happen — fees may be waived with timely notification.",
        ],
      },
    ],
  },
];

export default function Faq() {
  return (
    <main>
      <ScrollFx />
      <div className="tension-line" aria-hidden="true">
        <span />
      </div>
      <Header />

      <section className="doorway-band">
        <img
          src="/local-doorway.webp"
          alt="Members leaving Local Studios through the front door on Central Avenue"
        />
        <div className="doorway-copy">
          <p className="eyebrow">Good to know</p>
          <h1>
            Everything you&apos;d ask
            <span>at the front desk.</span>
          </h1>
          <p className="script-note">
            900 Central Ave, parking-lot side
          </p>
          <p>
            Parking, grip socks, arrival times, and the fine print — all
            in one place.
          </p>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section
          className={`faq-group${gi % 2 === 1 ? " tint" : ""} mat mat-limewash`}
          key={group.heading}
        >
          <div className="faq-inner">
            <h2 data-reveal>{group.heading}</h2>
            <div className="faq-list">
              {group.items.map((item, i) => (
                <details
                  className="faq-item"
                  key={item.q}
                  data-reveal
                  style={
                    { "--reveal-delay": `${i * 70}ms` } as React.CSSProperties
                  }
                >
                  <summary>
                    <span>{item.q}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="rule-cta mat mat-linen">
        <div className="rule-inner">
          <div className="horizon" aria-hidden="true" />
          <h2 data-reveal>
            Anything we missed, the front desk will answer.
          </h2>
          <div className="horizon" aria-hidden="true" />
          <div
            className="sky-actions"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <a className="button button-dark" href={`${liveSite}/contact`} {...externalProps(liveSite)}>
              Ask us anything <Arrow />
            </a>
            <a className="text-link" href="/schedule">
              See class times <Arrow />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
