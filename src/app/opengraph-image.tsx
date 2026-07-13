import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Darey Olowo — Frontend & Web3 Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 15% 10%, rgba(59,130,246,0.28), transparent 60%), radial-gradient(900px 500px at 85% 90%, rgba(139,92,246,0.28), transparent 60%), #0a0b12",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Darey Olowo
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.2,
            }}
          >
            Frontend & Web3 Developer
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 900,
              lineHeight: 1.4,
              marginTop: 8,
            }}
          >
            Building production web apps and on-chain products across Solana,
            Stellar, Celo and Base.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            <span>React</span>
            <span>·</span>
            <span>Next.js</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Solidity</span>
            <span>·</span>
            <span>Cairo</span>
          </div>
          <div>dareyolowo.vercel.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
