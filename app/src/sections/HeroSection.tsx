import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoPanelRef = useRef<HTMLDivElement>(null);
  const darkPanelRef = useRef<HTMLDivElement>(null);
  const dilipRef = useRef<HTMLDivElement>(null);
  const kumarRef = useRef<HTMLDivElement>(null);
  const anjanaRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const microRef = useRef<HTMLDivElement>(null);

  // Load animation (auto-play on mount)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial states
      gsap.set(photoPanelRef.current, { x: '-60vw', opacity: 0 });
      gsap.set(darkPanelRef.current, { x: '40vw', opacity: 0 });
      gsap.set([dilipRef.current, kumarRef.current, anjanaRef.current], { x: '18vw', opacity: 0 });
      gsap.set(subheadRef.current, { y: 24, opacity: 0 });
      gsap.set(ctaRef.current, { y: 24, opacity: 0 });
      gsap.set(microRef.current, { opacity: 0 });

      // Animation sequence
      tl.to(photoPanelRef.current, { x: 0, opacity: 1, duration: 0.9 })
        .to(darkPanelRef.current, { x: 0, opacity: 1, duration: 0.8 }, '-=0.7')
        .to(dilipRef.current, { x: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .to(kumarRef.current, { x: 0, opacity: 1, duration: 0.7 }, '-=0.58')
        .to(anjanaRef.current, { x: 0, opacity: 1, duration: 0.7 }, '-=0.58')
        .to(subheadRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .to(microRef.current, { opacity: 1, duration: 0.5 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.to(photoPanelRef.current, { x: 0, scale: 1, opacity: 1, duration: 0.3 });
            gsap.to(darkPanelRef.current, { x: 0, opacity: 1, duration: 0.3 });
            gsap.to([dilipRef.current, kumarRef.current, anjanaRef.current], { y: 0, opacity: 1, duration: 0.3 });
            gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.3 });
            gsap.to(ctaRef.current, { y: 0, opacity: 1, duration: 0.3 });
          },
        },
      });

      // ENTRANCE (0-30%): Hold at settle state (load animation already done)
      // Just subtle parallax on photo
      scrollTl.fromTo(
        photoPanelRef.current,
        { y: 0 },
        { y: '-1.5vh', ease: 'none' },
        0
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        photoPanelRef.current,
        { x: 0, scale: 1, opacity: 1 },
        { x: '-35vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        darkPanelRef.current,
        { x: 0, opacity: 1 },
        { x: '25vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        dilipRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        kumarRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        anjanaRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(
        [subheadRef.current, ctaRef.current],
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="section-pinned bg-dark handmade-bg">
      {/* Background texture */}
      <div className="absolute inset-0 hero-grid-overlay opacity-35" />

      {/* Left Photo Panel */}
      <div
        ref={photoPanelRef}
        className="absolute left-0 top-0 w-full lg:w-[52vw] h-full will-transform"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_28%,_rgba(255,195,122,0.45)_0%,_rgba(255,195,122,0)_42%),linear-gradient(145deg,_rgba(12,25,34,0.82)_0%,_rgba(14,42,61,0.65)_45%,_rgba(11,20,27,0.95)_100%)]" />
        {/* Gradient overlay on right edge */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark to-transparent" />
      </div>

      {/* Right Dark Panel */}
      <div
        ref={darkPanelRef}
        className="absolute right-0 top-0 w-full lg:w-[48vw] h-full bg-dark/80 lg:bg-dark will-transform"
      >
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,_rgba(255,138,61,0.09)_0%,_transparent_50%)]" />
      </div>

      {/* Content - Right Panel */}
      <div className="absolute right-0 top-0 w-full lg:w-[48vw] h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16">
        <div className="w-fit mb-6 rounded-full border border-lavender/40 bg-lavender/10 px-3 py-1.5">
          <span className="font-mono text-[10px] tracking-[0.18em] text-lavender uppercase">Independent Designer • Since 2020</span>
        </div>

        {/* Headline */}
        <div className="space-y-0">
          <div
            ref={dilipRef}
            className="font-display text-[clamp(48px,8vw,120px)] font-black text-foreground leading-[0.9] tracking-tight will-transform"
          >
            DILIP
          </div>
          <div
            ref={kumarRef}
            className="font-display text-[clamp(48px,8vw,120px)] font-black text-foreground leading-[0.9] tracking-tight will-transform"
          >
            KUMAR
          </div>
          <div
            ref={anjanaRef}
            className="font-display text-[clamp(48px,8vw,120px)] font-black leading-[0.9] tracking-tight will-transform text-gradient"
          >
            ANJANA
          </div>
        </div>

        {/* Subheadline */}
        <div
          ref={subheadRef}
          className="mt-8 lg:mt-12 max-w-full lg:max-w-[30vw] will-transform"
        >
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            I design and build focused websites for founders and local businesses: clear messaging, fast load times, and layouts people actually remember.
          </p>
        </div>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={scrollToWork}
          className="mt-6 lg:mt-8 cta-primary inline-flex items-center gap-2 w-fit will-transform"
        >
          See Selected Work
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Micro label - left edge */}
      <div
        ref={microRef}
        className="absolute left-[2vw] top-1/2 -translate-y-1/2 will-transform"
      >
        <span
          className="font-mono text-[10px] lg:text-xs tracking-[0.2em] text-muted-foreground/60 uppercase"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Dilip Kumar Anjana • Made in India
        </span>
      </div>
    </section>
  );
}
