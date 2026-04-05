import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { industries, globalStats, services, uniquePoints } from '../types/industry';
import { Star, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function IndustryDemoSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const industryData = industries.find(i => i.id === activeIndustry.id) || industries[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Selector pills animation
      const pills = selectorRef.current?.querySelectorAll('.industry-pill') || [];
      gsap.fromTo(
        pills,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.4,
          scrollTrigger: {
            trigger: selectorRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Preview parallax
      gsap.fromTo(
        previewRef.current,
        { y: 30 },
        {
          y: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: previewRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Features cards
      const cards = featuresRef.current?.querySelectorAll('.feature-card') || [];
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleIndustryChange = (industry: typeof industries[0]) => {
    // Crossfade animation
    const preview = previewRef.current;
    if (preview) {
      gsap.to(preview, {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          setActiveIndustry(industry);
          gsap.to(preview, { opacity: 1, duration: 0.15 });
        },
      });
    } else {
      setActiveIndustry(industry);
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" ref={sectionRef} className="relative bg-dark-secondary py-20 lg:py-32">
      {/* Heading */}
      <div ref={headingRef} className="px-6 lg:px-[6vw] mb-10">
        <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold text-foreground leading-tight mb-4">
          See your industry <span className="text-gradient">come to life.</span>
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
          Pick a category to preview how your new site will look and feel. Every industry has unique features designed to convert visitors into customers.
        </p>
      </div>

      {/* Industry Selector */}
      <div ref={selectorRef} className="px-6 lg:px-[6vw] mb-12">
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleIndustryChange(industry)}
              className={`industry-pill px-4 lg:px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                activeIndustry.id === industry.id
                  ? 'bg-lavender text-dark font-semibold'
                  : 'bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground border border-white/10'
              }`}
            >
              <span className="mr-2">{industry.icon}</span>
              {industry.name}
            </button>
          ))}
        </div>
      </div>

      {/* Demo Preview Area */}
      <div ref={previewRef} className="px-6 lg:px-[6vw] mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mock Browser */}
          <div className="mock-browser">
            <div className="mock-browser-bar">
              <div className="flex gap-2">
                <div className="mock-browser-dot mock-browser-dot-red" />
                <div className="mock-browser-dot mock-browser-dot-yellow" />
                <div className="mock-browser-dot mock-browser-dot-green" />
              </div>
              <div className="mock-browser-url">
                www.{industryData.id.replace('-', '')}-demo.com
              </div>
            </div>
            <div
              className="p-6 lg:p-8 min-h-[400px]"
              style={{ background: industryData.theme.secondary }}
            >
              {/* Mock Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{industryData.icon}</span>
                  <span
                    className="font-display font-bold text-lg"
                    style={{ color: industryData.theme.primary }}
                  >
                    {industryData.name}
                  </span>
                </div>
                <button
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: industryData.theme.primary,
                    color: '#fff',
                  }}
                >
                  {industryData.ctaText}
                </button>
              </div>

              {/* Mock Hero */}
              <div className="text-center mb-8">
                <h3
                  className="font-display text-2xl lg:text-3xl font-bold mb-3"
                  style={{ color: '#fff' }}
                >
                  {industryData.tagline}
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  {industryData.overview.slice(0, 80)}...
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    className="px-5 py-2.5 rounded-full text-sm font-medium"
                    style={{
                      background: industryData.theme.primary,
                      color: '#fff',
                    }}
                  >
                    {industryData.ctaText}
                  </button>
                  <button
                    className="px-5 py-2.5 rounded-full text-sm font-medium border"
                    style={{
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Mock Services */}
              <div className="grid grid-cols-4 gap-3">
                {industryData.demoServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="text-center p-3 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <div className="text-2xl mb-2">
                      {industryData.socialPosts[idx]}
                    </div>
                    <div className="text-white/70 text-xs">{service}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] text-foreground/60 uppercase mb-4">
                Must-Have Features
              </h3>
              <div className="space-y-3">
                {industryData.mustHaveFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${industryData.theme.primary}20` }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Intelligence */}
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] text-foreground/60 uppercase mb-4">
                Business Impact
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {industryData.businessIntelligence.map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-xl bg-white/5"
                  >
                    <div
                      className="text-2xl lg:text-3xl font-display font-bold mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-foreground text-xs font-medium mb-1">
                      {stat.title}
                    </div>
                    <div className="text-muted-foreground text-[10px]">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div ref={featuresRef} className="px-6 lg:px-[6vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card glass-card rounded-xl p-6">
            <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center mb-4">
              <Calendar className="text-lavender" size={24} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Online Booking
            </h3>
            <p className="text-muted-foreground text-sm">
              24/7 appointment scheduling that fills your calendar automatically.
            </p>
          </div>

          <div className="feature-card glass-card rounded-xl p-6">
            <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center mb-4">
              <Star className="text-lavender" size={24} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Review Integration
            </h3>
            <p className="text-muted-foreground text-sm">
              Showcase Google reviews directly on your site to build trust instantly.
            </p>
          </div>

          <div className="feature-card glass-card rounded-xl p-6">
            <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center mb-4">
              <TrendingUp className="text-lavender" size={24} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Local SEO
            </h3>
            <p className="text-muted-foreground text-sm">
              Rank #1 when customers search for your service in your area.
            </p>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="px-6 lg:px-[6vw] mt-16">
        <div className="glass-card rounded-xl p-8">
          <h3 className="font-mono text-xs tracking-[0.2em] text-foreground/60 uppercase mb-6 text-center">
            Why Every Business Needs a Website
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-lavender mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground text-sm mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-xs">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 lg:px-[6vw] mt-16">
        <h3 className="font-display text-2xl font-bold text-foreground mb-6">
          Everything Your Business Needs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl">{service.icon}</div>
              <div>
                <h4 className="text-foreground font-medium mb-1">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Me Unique */}
      <div className="px-6 lg:px-[6vw] mt-16">
        <h3 className="font-display text-2xl font-bold text-foreground mb-6">
          What Makes Me Different
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {uniquePoints.map((point, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/10"
              style={{ background: point.color }}
            >
              <div className="text-2xl mb-3">{point.icon}</div>
              <h4 className="text-foreground font-medium mb-2">
                {point.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 lg:px-[6vw] mt-16 text-center">
        <button
          onClick={scrollToContact}
          className="cta-primary inline-flex items-center gap-2"
        >
          Start Your Project
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
