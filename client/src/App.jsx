import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from './pages/About'
import MernRoom from "./pages/MernRoom";
import CloudRoom from "./pages/CloudRoom";
import TerminalPage from './pages/TerminalPage'
import Contact from "./pages/Contact";
import GridBackground from "./components/GridBackground";
import PageTransition from "./components/PageTransition";
import StarBackground from "./components/StarBackground";
import RefreshingBackground from "./components/RefreshingBackground";
  
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/mern-room"
          element={
            <PageTransition>
              <MernRoom />
            </PageTransition>
          }
        />
        <Route
          path="/terminal"
          element={
            <PageTransition>
              <TerminalPage />
            </PageTransition>
          }
        />
        <Route
          path="/cloud-room"
          element={
            <PageTransition>
              <CloudRoom />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />   
      <StarBackground />
      <RefreshingBackground />
      <GridBackground />
      <Cursor />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(17,24,39,0.95)",
            color: "#F8FAFC",
            border: "1px solid rgba(6,182,212,0.3)",
            backdropFilter: "blur(20px)",
            borderRadius: "12px",
            fontFamily: "Inter, sans-serif",
          },
          success: { iconTheme: { primary: "#22D3EE", secondary: "#0A0A0A" } },
          error: { iconTheme: { primary: "#F472B6", secondary: "#0A0A0A" } },
        }}
      />
    </Router>
  );
}
