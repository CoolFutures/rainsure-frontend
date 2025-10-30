export function ExpectedPages() {
  return (
    <section className="section site-map" id="site-map">
      <span className="tag">Site map</span>
      <h2>Expected pages (delivery backlog)</h2>
      <p style={{ color: "var(--muted)", maxWidth: 720 }}>
        This table is the contract between product and engineering. Routes marked scaffold ship as
        placeholders; planned routes are tracked for sprint planning.
      </p>
      <div style={{ overflowX: "auto", marginTop: 16 }}>
        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Purpose</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key="/"><td><code>/</code></td><td>Landing + site map</td><td>Scaffold</td></tr>
            <tr key="/policies"><td><code>/policies</code></td><td>Crop and region policy catalog</td><td>Planned</td></tr>
            <tr key="/pools"><td><code>/pools</code></td><td>Liquidity and solvency monitoring</td><td>Planned</td></tr>
            <tr key="/triggers"><td><code>/triggers</code></td><td>Index and oracle integration</td><td>Planned</td></tr>
            <tr key="/partners"><td><code>/partners</code></td><td>Insurers and MFI integrations</td><td>Planned</td></tr>
            <tr key="/roadmap"><td><code>/roadmap</code></td><td>Pilot corridors</td><td>Scaffold</td></tr>
            <tr key="/docs"><td><code>/docs</code></td><td>Actuarial and ops manuals</td><td>Scaffold</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Contribution check by elizabethsmith at 2025-05-04T19:45:05

// Contribution check by jennifer-h at 2025-07-31T04:23:51

// Contribution check by kulayddon at 2025-10-26T13:02:36

// Contribution check by patricia-m at 2026-01-21T21:41:21

// Contribution check by thomas-g at 2026-04-19T06:20:07

// Contribution by codemagician1949 — 2025-06-09

// Contribution by anuoluwaponiorimi — 2025-10-30
