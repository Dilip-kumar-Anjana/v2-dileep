import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCards = [
  {
    title: 'React & Next.js',
    description: 'Modern frameworks for fast, scalable applications.',
    icon: '⚛️',
  },
  {
    title: 'Performance',
    description: 'Optimized loading, caching, and delivery.',
    icon: '⚡',
  },
  {
    title: 'Accessibility',
    description: 'WCAG compliant, inclusive design for all users.',
    icon: '♿',
  },
];

export default function TechSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const cardsRowRef = useRef<HTMLDivElement>(null);

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
        cardsRowRef.current,
        { y: '50vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.08
      );

      const cards = cardsRowRef.current?.children ? Array.from(cardsRowRef.current.children) : [];
      scrollTl.fromTo(
        cards,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        [line1Ref.current, line2Ref.current],
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cardsRowRef.current,
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
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
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt="Downtown city lights"
          className="w-full h-full object-cover bg-city-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col px-6 lg:px-[6vw]">
        {/* Headline - Top */}
        <div className="pt-[12vh]">
          <div className="space-y-0">
            <div
              ref={line1Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black text-foreground leading-[0.95] tracking-tight will-transform text-shadow"
            >
              MODERN
            </div>
            <div
              ref={line2Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight will-transform text-gradient text-shadow"
            >
              TECHNOLOGY
            </div>
          </div>
        </div>

        {/* Cards Row - Bottom */}
        <div className="flex-1 flex items-end pb-[10vh]">
          <div
            ref={cardsRowRef}
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {techCards.map((card, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 flex items-start gap-5 will-transform card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
