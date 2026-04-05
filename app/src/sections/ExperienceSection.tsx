import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectHighlights = [
  { title: 'E-Commerce Platform', desc: 'Modern shopping experience', thumb: '🛒' },
  { title: 'SaaS Dashboard', desc: 'Analytics & reporting', thumb: '📊' },
  { title: 'Restaurant Booking', desc: 'Table reservation system', thumb: '🍽️' },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelItemsRef = useRef<HTMLDivElement>(null);

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
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        line2Ref.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        panelRef.current,
        { x: '-40vw', rotate: -2, opacity: 0 },
        { x: 0, rotate: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        panelItemsRef.current?.children ? Array.from(panelItemsRef.current.children) : [],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        bodyRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.08
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        [line1Ref.current, line2Ref.current],
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        panelRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, x: 0 },
        { scale: 1.06, x: '-3vw', ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bodyRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
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
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&q=80"
          alt="City bridge at night"
          className="w-full h-full object-cover bg-city-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-dark/80 via-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        {/* Top-left paragraph */}
        <div
          ref={bodyRef}
          className="absolute left-6 lg:left-[6vw] top-[14vh] max-w-[30vw] will-transform"
        >
          <p className="text-foreground/70 text-sm lg:text-base leading-relaxed">
            From first impression to final click—every interaction is intentional. I craft experiences that guide users naturally toward action.
          </p>
        </div>

        {/* Headline - Right side */}
        <div className="absolute right-6 lg:right-[6vw] top-[18vh] text-right">
          <div
            ref={line1Ref}
            className="font-display text-[clamp(44px,7vw,100px)] font-black text-foreground leading-[0.95] tracking-tight will-transform text-shadow"
          >
            DESIGNING
          </div>
          <div
            ref={line2Ref}
            className="font-display text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tight will-transform text-gradient text-shadow"
          >
            EXPERIENCES
          </div>
        </div>

        {/* Floating UI Panel - Left center */}
        <div
          ref={panelRef}
          className="absolute left-6 lg:left-[6vw] top-[44vh] w-[90vw] lg:w-[34vw] glass-card rounded-xl p-5 lg:p-6 will-transform"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono text-sm tracking-wider text-foreground/80 uppercase">
              Project Highlights
            </h3>
            <span className="text-lavender text-xs">3 Projects</span>
          </div>

          <div ref={panelItemsRef} className="space-y-3">
            {projectHighlights.map((project, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center text-xl">
                  {project.thumb}
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground text-sm font-medium group-hover:text-lavender transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{project.desc}</p>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-lavender transition-colors" />
              </div>
            ))}
          </div>

          <button className="mt-4 w-full py-2.5 text-center text-lavender text-sm font-medium hover:bg-lavender/10 rounded-lg transition-colors">
            Open case study
          </button>
        </div>
      </div>
    </section>
  );
}
