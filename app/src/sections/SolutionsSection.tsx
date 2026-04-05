import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileCode, Box, Puzzle, Sparkles, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  { icon: FileCode, title: 'Landing Pages' },
  { icon: Box, title: 'Design Systems' },
  { icon: Puzzle, title: 'Component Libraries' },
  { icon: Sparkles, title: 'Motion & Micro-interactions' },
  { icon: BarChart3, title: 'Analytics & SEO' },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        line1Ref.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        line2Ref.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        listRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.08
      );

      const items = listRef.current?.querySelectorAll('.service-item') || [];
      scrollTl.fromTo(
        items,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.015, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 0, opacity: 1 },
        { y: '-14vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        listRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1 },
        { scale: 1.06, ease: 'power2.in' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-pinned">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1600&q=80"
          alt="City traffic at night"
          className="w-full h-full object-cover bg-city-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row">
        {/* Left - Headline */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-[6vw] pt-20 lg:pt-0">
          <div className="space-y-0">
            <div
              ref={line1Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black text-foreground leading-[0.95] tracking-tight will-transform text-shadow"
            >
              SMART
            </div>
            <div
              ref={line2Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight will-transform text-gradient text-shadow"
            >
              SOLUTIONS
            </div>
          </div>
        </div>

        {/* Right - Services List */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-[4vw] pb-10 lg:pb-0">
          <div
            ref={listRef}
            className="glass-card rounded-xl p-6 will-transform"
          >
            <h3 className="font-mono text-xs tracking-[0.2em] text-foreground/60 uppercase mb-6">
              Services Offered
            </h3>
            <div className="space-y-4">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="service-item flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center flex-shrink-0 group-hover:bg-lavender/30 transition-colors">
                    <service.icon size={18} className="text-lavender" />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-lavender transition-colors">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
