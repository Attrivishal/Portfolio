import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitch() {
  const [isPurple, setIsPurple] = useState(false);

  const toggleTheme = () => {
    setIsPurple(!isPurple);
  };

  useEffect(() => {
    if (isPurple) {
      document.documentElement.classList.add("theme-purple");
    } else {
      document.documentElement.classList.remove("theme-purple");
    }
  }, [isPurple]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      style={{
        position: "fixed",
        right: "2rem",
        bottom: "8rem",
        zIndex: 1000,
      }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: isPurple ? "var(--purple-500)" : "var(--cyan-500)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          boxShadow: isPurple ? "0 0 20px rgba(139, 92, 246, 0.5)" : "0 0 20px rgba(6, 182, 212, 0.5)",
          color: "#0A0A0A",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isPurple ? "purple" : "cyan"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isPurple ? "🌩️" : "⚡"}
          </motion.span>
        </AnimatePresence>
        
        {/* Glow Ring */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: -4,
            border: `2px solid ${isPurple ? "#A78BFA" : "#22D3EE"}`,
            borderRadius: "50%",
            pointerEvents: "none"
          }}
        />
      </motion.button>
      
      {/* Tooltip */}
      <div style={{
        position: "absolute",
        right: "70px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(10px)",
        padding: "4px 12px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: isPurple ? "#A78BFA" : "#22D3EE",
        fontSize: "0.75rem",
        fontWeight: "600",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        fontFamily: "JetBrains Mono, monospace"
      }}>
        SWITCH AURA
      </div>
    </motion.div>
  );
}
