import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const visionCards = [
  {
    title: 'Strategy',
    description: 'Data-driven decisions for growth.',
    icon: '🎯',
  },
  {
    title: 'Product Design',
    description: 'User-centered solutions that scale.',
    icon: '🎨',
  },
  {
    title: 'Engineering',
    description: 'Robust code that performs.',
    icon: '💻',
  },
];

export default function FutureSection() {
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
        { y: '-40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        line2Ref.current,
        { y: '-40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
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
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.02, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        [line1Ref.current, line2Ref.current],
        { scale: 1, opacity: 1 },
        { scale: 1.08, opacity: 0, ease: 'power2.in' },
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
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="City skyline at night"
          className="w-full h-full object-cover bg-city-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-dark/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col px-6 lg:px-[6vw]">
        {/* Headline - Centered */}
        <div className="pt-[18vh] text-center">
          <div className="space-y-0">
            <div
              ref={line1Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black text-foreground leading-[0.95] tracking-tight will-transform text-shadow"
            >
              SHAPING
            </div>
            <div
              ref={line2Ref}
              className="font-display text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight will-transform text-gradient text-shadow"
            >
              THE FUTURE
            </div>
          </div>
        </div>

        {/* Cards Row - Bottom */}
        <div className="flex-1 flex items-end pb-[10vh]">
          <div
            ref={cardsRowRef}
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {visionCards.map((card, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center will-transform card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-lavender/20 flex items-center justify-center text-3xl mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
