import type { CSSProperties } from "react";

export default function HomePage() {
  return (
    <main style={styles.page}>
      <div style={styles.bgGlowA} />
      <div style={styles.bgGlowB} />

      <section style={styles.heroWrap}>
        <div style={styles.badge}>IRON SOUL SOLUTIONS</div>
        <h1 style={styles.heroTitle}>
          Modern website overhaul
          <br />
          for local businesses
        </h1>
        <p style={styles.heroText}>
          We turn weak, outdated websites into modern, conversion-focused
          websites that look better, build trust faster, and help turn more
          visitors into leads.
        </p>

        <div style={styles.ctaRow}>
          <a href="#preview" style={styles.primaryBtn}>
            Request a free preview of what your site could look like
          </a>
          <a href="#pricing" style={styles.secondaryBtn}>
            View packages &amp; pricing
          </a>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>WHY BUSINESSES HIRE US</div>
        <div style={styles.grid3}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Outdated design kills trust</h3>
            <p style={styles.cardText}>
              If the website feels old, cluttered, or confusing, visitors assume
              the business is too.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Weak messaging loses leads</h3>
            <p style={styles.cardText}>
              A vague headline and unclear offer make people leave before they
              ever contact you.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              No conversion flow means wasted traffic
            </h3>
            <p style={styles.cardText}>
              More traffic does not help if the website does not guide people
              toward action.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>WHAT WE DO</div>
        <div style={styles.grid2}>
          <div style={styles.featureCard}>
            <h2 style={styles.featureTitle}>Website Overhaul</h2>
            <p style={styles.cardText}>
              We redesign weak business websites into cleaner, more modern, more
              trustworthy experiences that feel premium and current.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h2 style={styles.featureTitle}>Conversion Optimization</h2>
            <p style={styles.cardText}>
              We improve messaging, offer clarity, CTA placement, and page flow
              so more visitors become actual leads.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" style={styles.section}>
        <div style={styles.sectionIntro}>PACKAGES &amp; PRICING</div>
        <div style={styles.grid2}>
          <div style={styles.priceCard}>
            <div style={styles.priceLabel}>ENTRY OFFER</div>
            <h3 style={styles.priceTitle}>Homepage Overhaul</h3>
            <div style={styles.price}>Starting at $500</div>
            <ul style={styles.list}>
              <li>Modern homepage structure</li>
              <li>Stronger headline and offer</li>
              <li>Clearer CTA flow</li>
              <li>Conversion-focused rewrite</li>
              <li>Preview-led sales process</li>
            </ul>
          </div>

          <div style={styles.priceCardFeatured}>
            <div style={styles.priceLabel}>PREMIUM OFFER</div>
            <h3 style={styles.priceTitle}>Full Website Overhaul</h3>
            <div style={styles.price}>Starting at $2,500+</div>
            <ul style={styles.list}>
              <li>Multi-page website overhaul</li>
              <li>Stronger positioning and messaging</li>
              <li>Improved conversion flow</li>
              <li>Modern layout and structure</li>
              <li>Done-for-you transformation</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>OUR PROCESS</div>
        <div style={styles.grid4}>
          <div style={styles.stepCard}>
            <div style={styles.stepNum}>01</div>
            <h3 style={styles.cardTitle}>Audit</h3>
            <p style={styles.cardText}>
              We review your current site, messaging, CTA flow, and trust
              signals.
            </p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNum}>02</div>
            <h3 style={styles.cardTitle}>Preview</h3>
            <p style={styles.cardText}>
              You get a clear preview of how your homepage or site can be
              improved.
            </p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNum}>03</div>
            <h3 style={styles.cardTitle}>Rebuild</h3>
            <p style={styles.cardText}>
              We rewrite the offer, sharpen structure, and modernize the layout.
            </p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNum}>04</div>
            <h3 style={styles.cardTitle}>Convert</h3>
            <p style={styles.cardText}>
              Your updated website is designed to build trust and turn visitors
              into leads.
            </p>
          </div>
        </div>
      </section>

      <section id="preview" style={styles.previewSection}>
        <div style={styles.previewBox}>
          <div style={styles.sectionIntro}>FREE PREVIEW OFFER</div>
          <h2 style={styles.previewTitle}>
            See what your site could look like before committing
          </h2>
          <p style={styles.previewText}>
            We offer a free preview concept for qualified local businesses so
            you can see the difference a stronger homepage and clearer offer can
            make.
          </p>
          <a href="mailto:hello@ironsoulsolutions.com" style={styles.primaryBtn}>
            Request my free preview
          </a>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top, rgba(245,158,11,0.14), transparent 30%), linear-gradient(180deg, #09090b 0%, #111827 100%)",
    padding: "40px 20px 80px",
  },
  bgGlowA: {
    position: "absolute",
    top: -120,
    left: -100,
    width: 340,
    height: 340,
    borderRadius: "50%",
    background: "rgba(245, 158, 11, 0.16)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  bgGlowB: {
    position: "absolute",
    right: -120,
    top: 260,
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "rgba(59, 130, 246, 0.12)",
    filter: "blur(95px)",
    pointerEvents: "none",
  },
  heroWrap: {
    position: "relative",
    maxWidth: 1120,
    margin: "0 auto",
    padding: "72px 24px",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 28,
    background: "rgba(17,24,39,0.66)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(245, 158, 11, 0.16)",
    border: "1px solid rgba(245, 158, 11, 0.35)",
    color: "#fcd34d",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  heroTitle: {
    margin: "24px 0 16px",
    fontSize: "clamp(2.5rem, 7vw, 5rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
  },
  heroText: {
    maxWidth: 760,
    fontSize: "1.125rem",
    lineHeight: 1.7,
    color: "#d4d4d8",
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 28,
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 22px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
    color: "#09090b",
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 10px 35px rgba(234, 88, 12, 0.35)",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 22px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.03)",
    color: "#fafafa",
    border: "1px solid rgba(255,255,255,0.12)",
    textDecoration: "none",
    fontWeight: 700,
  },
  section: {
    position: "relative",
    maxWidth: 1120,
    margin: "28px auto 0",
    padding: "24px 0",
  },
  sectionIntro: {
    color: "#f59e0b",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
  },
  card: {
    borderRadius: 24,
    background: "rgba(17,24,39,0.78)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 24,
  },
  featureCard: {
    borderRadius: 24,
    background: "linear-gradient(180deg, rgba(17,24,39,0.92), rgba(17,24,39,0.72))",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 28,
  },
  cardTitle: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.25,
  },
  featureTitle: {
    margin: "0 0 10px",
    fontSize: 28,
    lineHeight: 1.2,
  },
  cardText: {
    margin: "12px 0 0",
    color: "#d4d4d8",
    lineHeight: 1.7,
    fontSize: 16,
  },
  priceCard: {
    borderRadius: 24,
    background: "rgba(17,24,39,0.78)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 28,
  },
  priceCardFeatured: {
    borderRadius: 24,
    background: "linear-gradient(180deg, rgba(245,158,11,0.14), rgba(17,24,39,0.88))",
    border: "1px solid rgba(245,158,11,0.34)",
    padding: 28,
    boxShadow: "0 18px 50px rgba(245,158,11,0.12)",
  },
  priceLabel: {
    color: "#fcd34d",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  priceTitle: {
    margin: "14px 0 10px",
    fontSize: 28,
  },
  price: {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 16,
  },
  list: {
    margin: 0,
    paddingLeft: 20,
    color: "#e4e4e7",
    lineHeight: 1.9,
  },
  stepCard: {
    borderRadius: 24,
    background: "rgba(17,24,39,0.78)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 24,
  },
  stepNum: {
    width: 44,
    height: 44,
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(245,158,11,0.16)",
    color: "#fcd34d",
    fontWeight: 800,
    marginBottom: 16,
  },
  previewSection: {
    maxWidth: 1120,
    margin: "32px auto 0",
    paddingTop: 12,
  },
  previewBox: {
    borderRadius: 28,
    background: "linear-gradient(180deg, rgba(245,158,11,0.18), rgba(17,24,39,0.92))",
    border: "1px solid rgba(245,158,11,0.3)",
    padding: "36px 24px",
    textAlign: "center",
  },
  previewTitle: {
    margin: "0 0 14px",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    lineHeight: 1.08,
  },
  previewText: {
    maxWidth: 760,
    margin: "0 auto 24px",
    color: "#f4f4f5",
    lineHeight: 1.7,
    fontSize: 17,
  },
};
