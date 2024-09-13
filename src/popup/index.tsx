import giftIcon from "data-base64:../../assets/gift.png"
import logoIcon from "data-base64:../../assets/icon.webp"

const Popup = () => {
  return (
    <div
      style={{
        padding: "5px 16px",
        width: "300px",
        height: "auto",
        border: "2px solid #e5e7eb",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column"
      }}>
      {/* Extension Header */}
      <header style={{ textAlign: "start" }}>
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          <img
            src={logoIcon}
            alt="Extension Logo"
            style={{ width: "48px", height: "48px", borderRadius: "8px" }}
          />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            YouTube Watchly
          </h1>
        </div>

        <p style={{ fontSize: "1rem", marginTop: "2px" }}>
          The smartest, fastest way to digest videos with instant summaries,
          insightful transcripts packed with chat feature.
        </p>
      </header>

      {/* Subscription statement */}
      <div style={{}}>
        <span style={{ fontSize: "1rem" }}>
          Your subscription is currently inactive. Subscribe to unlock all
          features and get the best out of YouTube Watchly.
        </span>
      </div>

      {/* freemium */}
      <div style={{ marginTop: "14px", display: "flex", gap: "4px" }}>
        <img src={giftIcon} alt="" style={{ width: "25px", height: "25px" }} />
        <span style={{ fontSize: "0.75rem" }}>
          You get up to 3 free summaries per day, with 2 chats per summary.
        </span>
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "8px"
        }}>
        <a
          href="https://f417-105-163-2-9.ngrok-free.app" // Add your subscription link here
          target="_blank"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
            textDecoration: "none",
            flex: 1
          }}>
          Subscribe to Pro
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
            textDecoration: "none",
            flex: 1
          }}>
          Open Youtube to get started
        </a>
      </div>

      {/* Extension Version */}
      <footer
        style={{
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#9ca3af",
          marginTop: "4px"
        }}>
        <p>IgniteDev • Version 1.0.0 • 2024</p>
      </footer>
    </div>
  )
}

export default Popup
