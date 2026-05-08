import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "RainSure",
    template: "%s | " + "RainSure",
  },
  description: "Parametric climate insurance on Stellar.",
  applicationName: "RainSure",
  openGraph: {
    title: "RainSure",
    description: "Parametric climate insurance on Stellar.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RainSure",
    description: "Parametric climate insurance on Stellar.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

const nav = [
  ["Policies", "/policies"],
  ["Pools", "/pools"],
  ["Triggers", "/triggers"],
  ["Partners", "/partners"],
  ["Roadmap", "/roadmap"],
  ["Docs", "/docs"],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link href="/" className="brand brand-with-logo">
              <Image
                src="/icon.svg"
                alt=""
                width={38}
                height={38}
                className="nav-logo"
                unoptimized
              />
              <span className="brand-text">RainSure</span>
            </Link>
            <nav className="links">
              {nav.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

// Contribution check by davidk at 2025-04-04T16:46:12

// Contribution check by susan-w at 2025-07-01T01:24:58

// Contribution check by elizabethsmith at 2025-09-26T10:03:43

// Contribution check by jennifer-h at 2025-12-22T18:42:29

// Contribution check by kulayddon at 2026-03-20T03:21:14

// Contribution check by patricia-m at 2026-06-15T11:59:59

// Contribution by Mercy017 — 2025-03-06

// Contribution by joelpeace48-cell — 2025-07-27

// Contribution by Mercy017 — 2025-12-16

// Contribution by joelpeace48-cell — 2026-05-08
