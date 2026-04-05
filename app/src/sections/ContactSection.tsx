import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Clock, Send, Github, Linkedin, Dribbble, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const formFields = formRef.current?.querySelectorAll('.form-field') || [];
      gsap.fromTo(
        formFields,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.4,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', budget: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="relative bg-dark py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(185,139,255,0.08)_0%,_transparent_50%)]" />

      <div className="relative px-6 lg:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div ref={leftColRef} className="lg:col-span-2">
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold text-foreground leading-tight mb-6">
              Let&apos;s build something{' '}
              <span className="text-gradient">great together.</span>
            </h2>

            <p className="text-muted-foreground text-base mb-10">
              Ready to transform your online presence? I&apos;ll help you create a website that converts visitors into loyal customers.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center">
                  <Mail className="text-lavender" size={18} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <a
                    href="mailto:work.dileepanjana@gmail.com"
                    className="text-foreground hover:text-lavender transition-colors"
                  >
                    work.dileepanjana@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center">
                  <Phone className="text-lavender" size={18} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <a
                    href="tel:+918824694705"
                    className="text-foreground hover:text-lavender transition-colors"
                  >
                    +91 88246 94705
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center">
                  <MapPin className="text-lavender" size={18} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                    Location
                  </div>
                  <div className="text-foreground">India • Remote Worldwide</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center">
                  <Clock className="text-lavender" size={18} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                    Availability
                  </div>
                  <div className="text-foreground">Booking 2–3 weeks ahead</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider mb-3">
                Connect
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-lavender/20 transition-colors group"
                >
                  <Github size={18} className="text-muted-foreground group-hover:text-lavender transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-lavender/20 transition-colors group"
                >
                  <Linkedin size={18} className="text-muted-foreground group-hover:text-lavender transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-lavender/20 transition-colors group"
                >
                  <Dribbble size={18} className="text-muted-foreground group-hover:text-lavender transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 lg:p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-lavender/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-lavender" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="form-field">
                      <label className="block text-muted-foreground text-xs uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="form-field">
                      <label className="block text-muted-foreground text-xs uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-field mb-5">
                    <label className="block text-muted-foreground text-xs uppercase tracking-wider mb-2">
                      Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under-5k">Under ₹5,000</option>
                      <option value="5k-15k">₹5,000 – ₹15,000</option>
                      <option value="15k-30k">₹15,000 – ₹30,000</option>
                      <option value="30k+">₹30,000+</option>
                    </select>
                  </div>

                  <div className="form-field mb-6">
                    <label className="block text-muted-foreground text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative px-6 lg:px-[6vw] mt-20 pt-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm tracking-wider text-foreground">
            DILIP <span className="text-lavender">KUMAR ANJANA</span>
          </div>
          <div className="text-muted-foreground text-sm">
            © 2025 All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#work" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#services" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#industries" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Industries
            </a>
            <a href="#contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
