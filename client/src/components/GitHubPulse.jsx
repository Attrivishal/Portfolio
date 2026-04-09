import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GitHubPulse() {
  const [data, setData] = useState({
    lastCommit: "...",
    repo: "...",
    stars: "0",
    loading: true
  });

  useEffect(() => {
    // Simulated GitHub API fetch (can be swapped for real fetch)
    const fetchGithub = async () => {
      try {
        // Public API: replace 'Attrivishal' with actual username if different
        const response = await fetch("https://api.github.com/users/Attrivishal/events/public");
        const events = await response.json();
        
        const pushEvent = events.find(e => e.type === "PushEvent");
        if (pushEvent) {
          setData({
            lastCommit: pushEvent.payload.commits[0].message,
            repo: pushEvent.repo.name.split("/")[1],
            stars: Math.floor(Math.random() * 10) + 5, // Mocked stars for flavor
            loading: false
          });
        }
      } catch (err) {
        // Fallback for rate limits or errors
        setData({
          lastCommit: "Refactored bento grid layout",
          repo: "portfolio-pro",
          stars: "12",
          loading: false
        });
      }
    };

    fetchGithub();
  }, []);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          padding: "4px 10px",
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          borderRadius: "6px",
          fontSize: "0.65rem",
          color: "#4ADE80",
          fontFamily: "JetBrains Mono, monospace",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}>
          <motion.span 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 6, height: 6, background: "#22C55E", borderRadius: "50%" }}
          />
          LIVE_PULSE
        </div>
        <div style={{ fontSize: "1.2rem" }}>🐙</div>
      </div>

      <AnimatePresence mode="wait">
        {data.loading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ color: "#64748B", fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace" }}
          >
            Fetching telemetry...
          </motion.div>
        ) : (
          <motion.div 
            key="loaded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <div style={{ fontSize: "0.7rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Latest Commit</div>
            <div style={{ 
              fontSize: "0.95rem", 
              fontWeight: 600, 
              color: "var(--cyan-400)",
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}>
              "{data.lastCommit}"
            </div>
            <div style={{ 
              fontSize: "0.75rem", 
              color: "#64748B", 
              fontFamily: "JetBrains Mono, monospace",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <span>repo: {data.repo}</span>
              <span style={{ color: "#FBBF24" }}>★ {data.stars}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ 
        height: "2px", 
        width: "100%", 
        background: "rgba(34, 197, 94, 0.1)",
        borderRadius: 1,
        overflow: "hidden"
      }}>
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ height: "100%", width: "30%", background: "#22C55E", boxShadow: "0 0 10px #22C55E" }}
        />
      </div>
    </div>
  );
}
