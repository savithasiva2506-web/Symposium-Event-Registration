import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoStrip from "./components/InfoStrip";
import Navbar from "./components/Navbar";
import RegistrationSection from "./components/RegistrationSection";
import RulesSection from "./components/RulesSection";
import VenueSection from "./components/VenueSection";

export default function App() {
  return (
    <>
      <a
        href="#events"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to events
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <InfoStrip />
        <EventsSection />
        <AboutSection />
        <RegistrationSection />
        <RulesSection />
        <VenueSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
