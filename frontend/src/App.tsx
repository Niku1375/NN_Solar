import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Vision } from "./components/Vision";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { SolarCalculator } from "./components/SolarCalculator";
import { PMSuryaGhar } from "./components/PMSuryaGhar";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { MotivationalQuotes } from "./components/MotivationalQuotes";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppChatButton } from "./components/WhatsAppChatButton";
import { Toaster } from "@/components/ui/sonner";

import { trackPageView } from "./lib/analytics";

export default function App() {
  const location = useLocation();

  // SPA PAGE TRACKING (SAFE VERSION)
  useEffect(() => {
    const timeout = setTimeout(() => {
      trackPageView(location.pathname);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // OTHER APP LOGIC (RUN ONCE)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.01ms"
      );
    }

    const criticalImages = [
      "/assets/generated/solar-hero-banner.dim_1200x600.jpg",
      "/assets/generated/nn-enterprises-logo-transparent.dim_200x200.png",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;

      if (!document.querySelector(`link[href="${src}"]`)) {
        document.head.appendChild(link);
      }
    });

    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === "navigation") {
              const navEntry = entry as PerformanceNavigationTiming;
              console.log(
                "Page Load Time:",
                navEntry.loadEventEnd - navEntry.fetchStart,
                "ms"
              );
            }
          }
        });

        observer.observe({ entryTypes: ["navigation"] });
      } catch (e) {
        // ignore silently
      }
    }

    if ("serviceWorker" in navigator && import.meta.env.PROD) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Partners />
        <Services />
        <SolarCalculator />
        <PMSuryaGhar />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <MotivationalQuotes />
        <Contact />
      </main>
      <Footer />
      <WhatsAppChatButton />
      <Toaster />
    </div>
  );
}
