import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Code, Layers, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { icon: Palette, label: 'UI Design' },
  { icon: Code, label: 'Frontend' },
  { icon: Layers, label: 'Prototyping' },
  { icon: TrendingUp, label: 'SEO' },
];

export default function CreativeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
        [line1Ref.current, line2Ref.current],
        { y: '60vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        gridRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      const tiles = gridRef.current?.querySelectorAll('.capability-tile') || [];
      scrollTl.fromTo(
        tiles,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.02, ease: 'none' },
        0.1
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        gridRef.current,
        { y: 0, opacity: 1 },
        { y: '-14vh', opacity: 0, ease: 'power2.in' },
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
    <section ref={sectionRef} className="section-pinned">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&q=80"
          alt="City highway at night"
          className="w-full h-full object-cover bg-city-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Headline - Bottom left */}
        <div className="flex-1 flex flex-col justify-end pb-[30vh] px-6 lg:px-[6vw]">
          <div className="space-y-0">
            <div
              ref={line1Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black text-foreground leading-[0.95] tracking-tight will-transform text-shadow"
            >
              CREATIVE
            </div>
            <div
              ref={line2Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight will-transform text-gradient text-shadow"
            >
              SOLUTIONS
            </div>
          </div>
        </div>

        {/* UI Grid - Top right */}
        <div
          ref={gridRef}
          className="absolute right-6 lg:right-[6vw] top-[12vh] will-transform"
        >
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="capability-tile w-[130px] lg:w-[160px] aspect-square glass-card rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <cap.icon size={28} className="text-lavender" />
                <span className="font-mono text-xs tracking-wider text-foreground/80 uppercase">
                  {cap.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
