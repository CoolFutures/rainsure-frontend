import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ExpectedPages } from "@/components/expected-pages";

export default function HomePage() {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-orbs" aria-hidden />
        <div className="landing-hero-inner">
          <BrandLogo className="landing-logo" aria-label="RainSure logo" />
          <span className="tag">Climate risk · Parametric payouts · Stellar</span>
          <h1 className="hero-headline">Recover faster when the climate hits.</h1>
          <p
            className="landing-lead"
            dangerouslySetInnerHTML={{ __html: "RainSure pairs <strong>index-linked triggers</strong> with pooled capital on Soroban\u2014so smallholders and MSMEs get objective payouts without waiting through opaque claims desks." }}
          />
          <div className="landing-cta-row">
            <Link href="/roadmap" className="cta">Pilot roadmap</Link>
            <Link href="/policies" className="cta-secondary">Policy concepts</Link>
          </div>
          <ul className="landing-stats">
            <li>Policy templates</li>
            <li>Capital pools with guardrails</li>
            <li>Oracle-ready payouts</li>
          </ul>
        </div>
      </section>

      <section className="landing-pillars">
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>◆</div>
          <h3>Policy factory</h3>
          <p>Products tuned to crop, region, and season.</p>
        </article>
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>◇</div>
          <h3>Risk pools</h3>
          <p>Liquidity rules your partners can audit.</p>
        </article>
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>○</div>
          <h3>Payout engine</h3>
          <p>Deterministic releases when triggers fire.</p>
        </article>
      </section>

      <p className="landing-trust">Designed for insurers, MFIs, and climate programs that need transparent rails.</p>

      <ExpectedPages />
    </>
  );
}

// Contribution check by charles-l at 2025-04-10T17:21:59

// Contribution check by barbara-d at 2025-07-07T02:00:44

// Contribution check by davidk at 2025-10-02T10:39:30

// Contribution check by susan-w at 2025-12-28T19:18:15

// Contribution check by elizabethsmith at 2026-03-26T03:57:01

// patch: 2026-06-06T04:03:31.764700

// patch: 2026-06-07T11:49:24.705876

// patch: 2026-06-26T00:31:45.882340

// patch: 2026-06-28T00:10:35.294104
