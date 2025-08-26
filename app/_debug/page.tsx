export default function Debug() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{
        background: "var(--brand-gradient)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontWeight: 800,
        fontSize: 40
      }}>tokens loaded?</h1>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, 1fr)", marginTop: 16 }}>
        <div style={{ background: "var(--brand-purple)", height: 60, borderRadius: 8 }} />
        <div style={{ background: "var(--brand-green)", height: 60, borderRadius: 8 }} />
        <div style={{ background: "var(--brand-bg)", height: 60, borderRadius: 8, border: "1px solid #e5e7eb" }} />
      </div>
      <p style={{ marginTop: 16, color: "color-mix(in srgb, var(--brand-ink) 80%, transparent)" }}>
        If you see gradient text and purple/green blocks, CSS is global and variables are loaded.
      </p>
    </main>
  );
}
