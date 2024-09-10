import React, { useState } from "react"

const Popup = () => {
  const [isEnabled, setIsEnabled] = useState(true)

  const toggleExtension = () => {
    setIsEnabled(!isEnabled)
    // Logic to enable/disable the extension can be implemented here
  }

  return (
    <div
      style={{
        padding: "16px",
        width: "450px",
        height: "auto",
        border: "2px solid #e5e7eb", // Tailwind's border-2
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-lg
        borderRadius: "8px", // Tailwind's rounded-lg
        display: "flex",
        flexDirection: "column",
        gap: "16px" // Tailwind's space-y-4
      }}>
      {/* Extension Header */}
      <header style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          YouTube AI Summaries
        </h1>
        <p style={{ color: "#6b7280", fontSize: "1.25rem" }}>
          Your smart assistant for video summaries, transcripts, and chat.
        </p>
      </header>

      {/* Enable/Disable Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 0"
        }}>
        <span style={{ fontSize: "1.125rem", fontWeight: "600" }}>
          Extension Status
        </span>
        <button
          onClick={toggleExtension}
          style={{
            width: "48px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px", // Full rounded for the toggle button
            padding: "4px",
            backgroundColor: isEnabled ? "#22c55e" : "#d1d5db", // Green when enabled, gray when disabled
            transition: "background-color 0.3s"
          }}>
          <div
            style={{
              backgroundColor: "white",
              width: "16px",
              height: "16px",
              borderRadius: "9999px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
              transform: isEnabled ? "translateX(24px)" : "translateX(0)",
              transition: "transform 0.3s"
            }}></div>
        </button>
      </div>

      {/* Guidance Section */}
      <section>
        <h2 style={{ fontSize: "1.125rem", fontWeight: "600" }}>How to Use</h2>
        <ul style={{ paddingLeft: "20px", color: "#4b5563" }}>
          <li>Click the extension icon to summarize YouTube videos.</li>
          <li>Use the AI chat for deeper insights or ask questions.</li>
          <li>View video transcripts for easy navigation.</li>
        </ul>
      </section>

      {/* Links to Settings and Feedback */}
      <div style={{ display: "flex", gap: "8px" }}>
        <a
          href="#"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
            textDecoration: "none",
            flex: 1,
            transition: "background-color 0.3s"
          }}>
          Go to Settings
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/your-extension-id"
          style={{
            display: "block",
            textAlign: "center",
            color: "#6b7280",
            textDecoration: "underline",
            flex: 1,
            transition: "color 0.3s"
          }}>
          Rate Us
        </a>
      </div>

      {/* Extension Version */}
      <footer
        style={{ textAlign: "center", fontSize: "0.875rem", color: "#9ca3af" }}>
        <p>Version 0.0.1</p>
      </footer>
    </div>
  )
}

export default Popup
