import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import CraftSection from './sections/CraftSection';
import ExperienceSection from './sections/ExperienceSection';
import InnovationSection from './sections/InnovationSection';
import CreativeSection from './sections/CreativeSection';
import TechSection from './sections/TechSection';
import SolutionsSection from './sections/SolutionsSection';
import FutureSection from './sections/FutureSection';
import IndustryDemoSection from './sections/IndustryDemoSection';
import ContactSection from './sections/ContactSection';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-dark">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative">
        {/* Section 1: Hero - z-10 */}
        <div className="relative z-10">
          <HeroSection />
        </div>
        
        {/* Section 2: Crafting Digital - z-20 */}
        <div className="relative z-20">
          <CraftSection />
        </div>
        
        {/* Section 3: Designing Experiences - z-30 */}
        <div className="relative z-30">
          <ExperienceSection />
        </div>
        
        {/* Section 4: Innovative Design - z-40 */}
        <div className="relative z-40">
          <InnovationSection />
        </div>
        
        {/* Section 5: Creative Solutions - z-50 */}
        <div className="relative z-50">
          <CreativeSection />
        </div>
        
        {/* Section 6: Modern Technology - z-[60] */}
        <div className="relative z-[60]">
          <TechSection />
        </div>
        
        {/* Section 7: Smart Solutions - z-[70] */}
        <div className="relative z-[70]">
          <SolutionsSection />
        </div>
        
        {/* Section 8: Shaping the Future - z-[80] */}
        <div className="relative z-[80]">
          <FutureSection />
        </div>
        
        {/* Section 9: Industry Demos - z-[90] */}
        <div className="relative z-[90]">
          <IndustryDemoSection />
        </div>
        
        {/* Section 10: Contact - z-[100] */}
        <div className="relative z-[100]">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
