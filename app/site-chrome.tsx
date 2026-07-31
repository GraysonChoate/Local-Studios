export const liveSite = "https://www.localstudios.co";

export const navItems: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Schedule", "/schedule"],
  ["Buy", "/buy"],
  ["Events", "/events"],
  ["First Timers", "/first-timers"],
  ["FAQ", "/faq"],
];

export const socials: [string, string][] = [
  ["Instagram", "https://www.instagram.com/local__studios"],
  ["TikTok", "https://www.tiktok.com/@local__studios"],
  ["Spotify", "https://open.spotify.com/user/31ogjncpv62m3254scfygxhztebi"],
  [
    "Facebook",
    "https://www.facebook.com/profile.php?id=61580283005296&sk=photos",
  ],
];

export function isExternal(href: string) {
  return href.startsWith("http");
}

export function externalProps(href: string) {
  return isExternal(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

export function Arrow() {
  return (
    <span className="arrow-badge" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
        <path
          d="M4 12L12 4M12 4H5.5M12 4V10.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Header({ variant }: { variant?: "light" }) {
  const light = variant === "light";
  return (
    <header className={`site-header${light ? " site-header-light" : ""}`}>
      <a className="brand" href="/" aria-label="Local Studios home">
        <img
          src={light ? "/local-logo-sky.webp" : "/local-logo-midnight.webp"}
          alt="Local Studios"
        />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} {...externalProps(href)}>
            {label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href="/schedule"
      >
        Book a class <Arrow />
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} {...externalProps(href)}>
              {label}
            </a>
          ))}
          <a className="mobile-book" href="/schedule">
            Book a class <Arrow />
          </a>
        </nav>
      </details>
    </header>
  );
}

export function Footer({ referral }: { referral?: boolean }) {
  return (
    <>
      {referral && (
      <section className="referral-band">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/local-beach-friendship-poster.webp"
          aria-hidden="true"
        >
          <source src="/local-beach-friendship.mp4" type="video/mp4" />
        </video>
        <div className="referral-wash" aria-hidden="true" />
        <div className="referral-copy">
          <span className="badge-pill referral-badge">Member perk</span>
          <p className="referral-amount">
            <strong>$50 off</strong>
            <span>your next month</span>
          </p>
          <p className="script-note">bring a friend, it&apos;s better</p>
          <a
            className="button button-coral"
            href={`${liveSite}/my-account`}
            {...externalProps(liveSite)}
          >
            Refer a friend <Arrow />
          </a>
        </div>
      </section>
      )}

      <footer className="mat mat-sand">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" aria-label="Local Studios home">
              <img src="/local-logo-midnight.webp" alt="Local Studios" />
            </a>
            <p>Where movement meets community.</p>
            <a
              className="footer-address"
              href="https://maps.google.com/?q=900+Central+Avenue+Unit+15B+St.+Petersburg+FL+33705"
              target="_blank"
              rel="noopener noreferrer"
            >
              900 Central Ave, Unit 15B
              <br />
              St. Petersburg, FL 33705
            </a>
            <p className="footer-note">
              Parking-lot side of the 900 Central building, next door to
              The Burg Nutrition. Free street parking on Central and both
              sides of MLK, plus ten validated spaces in our lot.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <p>Move</p>
              <a href="/schedule">Schedule</a>
              <a href="/buy">Buy</a>
              <a href="/first-timers">First Timers</a>
              <a href={`${liveSite}/my-account`} {...externalProps(liveSite)}>
                Login
              </a>
            </div>
            <div>
              <p>Connect</p>
              <a href="/events">Events</a>
              <a href="/faq">FAQ</a>
              <a href={`${liveSite}/contact`} {...externalProps(liveSite)}>
                Contact
              </a>
              <a
                href="https://www.instagram.com/local__studios/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <p>Start here</p>
              <a href="/about">Our story</a>
              <a href={`${liveSite}/sign-up`} {...externalProps(liveSite)}>
                Become a Local
              </a>
              <a href="/buy">3 classes for $55</a>
              <a
                href="https://apps.apple.com/us/app/local-studios/id6755199591"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the app
              </a>
            </div>
          </div>
        </div>

        <div className="footer-social">
          {socials.map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <span>Local Studios, St. Petersburg — est. 2025</span>
          <div>
            <a href={`${liveSite}/privacy-policy`} {...externalProps(liveSite)}>
              Privacy
            </a>
            <a
              href={`${liveSite}/terms-conditions`}
              {...externalProps(liveSite)}
            >
              Terms
            </a>
            <a
              href={`${liveSite}/website-accessibility`}
              {...externalProps(liveSite)}
            >
              Accessibility
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
