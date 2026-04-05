import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processCards = [
  {
    title: 'Discovery',
    description: 'Understand the problem, the user, and the context.',
    image: '🔍',
    color: 'from-lavender/20 to-lavender/5',
  },
  {
    title: 'Design',
    description: 'Wireframes to polished UI, built for clarity.',
    image: '✨',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    title: 'Deliver',
    description: 'Clean code, fast loads, and easy handoff.',
    image: '🚀',
    color: 'from-green-500/20 to-green-500/5',
  },
];

export default function InnovationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.children ? Array.from(cardsRef.current.children) : [];
      
      scrollTl.fromTo(
        cards[0],
        { x: '50vw', y: '-20vh', opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        cards[1],
        { x: '50vw', y: '10vh', opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        cards[2],
        { x: '50vw', y: '30vh', opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: 'none' },
        0.15
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
        cards,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1 },
        { scale: 1.08, ease: 'power2.in' },
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
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
          alt="City aerial view"
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
              INNOVATIVE
            </div>
            <div
              ref={line2Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight will-transform text-gradient text-shadow"
            >
              DESIGN
            </div>
          </div>
        </div>

        {/* Right - Stacked Cards */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-[4vw] pb-10 lg:pb-0">
          <div ref={cardsRef} className="space-y-4 lg:space-y-5">
            {processCards.map((card, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl p-5 lg:p-6 flex items-center gap-5 will-transform card-hover bg-gradient-to-br ${card.color}`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
                  {card.image}
                </div>
                <div>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-1">
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
