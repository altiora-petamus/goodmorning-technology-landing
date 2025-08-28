"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Gauge,
  Shield,
  Handshake,
  Laptop,
  Wrench,
  LineChart,
  CheckCircle2,
  Rocket,
  Megaphone,
  Search,
  Paintbrush,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// -----------------------------------------------------------------------------
// Good Morning Technology — Landing Page (no dark mode, no purple gradients)
// -----------------------------------------------------------------------------

const brand = {
  name: "good morning technology",
  domain: "goodmorningtechnology.com",
  email: "hello@goodmorningtechnology.com",
  phone: "(555) 010-2025",
  gradient: "bg-gradient-to-r from-sky-400 to-emerald-400",
  textGradient: "bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.33, 0.66, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join("|")]);
  return active;
}

// Utility
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className={cx("mb-2 text-sm font-semibold tracking-wider uppercase", brand.textGradient)}>{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

// -----------------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------------
function Services() {
  const services = [
    {
      icon: Laptop,
      title: "Custom Web Development",
      description: "Beautiful, responsive websites built with modern technology that loads fast and converts visitors into customers.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds that keep visitors engaged and improve your search engine rankings.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and hosted on reliable platforms with 99.9% uptime guarantee.",
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Optimized for search engines from day one to help your business get found by potential customers.",
    },
    {
      icon: Paintbrush,
      title: "Custom Design",
      description: "Unique designs tailored to your brand that stand out from the competition and reflect your values.",
    },
    {
      icon: Handshake,
      title: "Ongoing Support",
      description: "Continued maintenance and updates to keep your website running smoothly and securely.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Services"
            title="Everything you need for a successful online presence"
            subtitle="From design to deployment, we handle every aspect of your website development with attention to detail and focus on results."
          />
        </motion.div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className={cx("w-12 h-12 rounded-lg flex items-center justify-center mb-4", brand.gradient)}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Pricing
// -----------------------------------------------------------------------------
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses and personal brands",
      features: [
        "5-page custom website",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "30 days of support",
        "Google Analytics setup",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$4,500",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "10-page custom website",
        "Advanced animations",
        "E-commerce integration",
        "Blog/CMS setup",
        "Advanced SEO optimization",
        "60 days of support",
        "Performance optimization",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large businesses with complex needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "API integrations",
        "Advanced security",
        "Multi-language support",
        "90 days of support",
        "Training & documentation",
        "Priority support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            subtitle="Choose the plan that fits your needs. All plans include hosting setup and basic maintenance."
          />
        </motion.div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <Badge className={cx("absolute -top-3 left-1/2 -translate-x-1/2 z-10", brand.gradient)}>
                  Most Popular
                </Badge>
              )}
              <Card className={cx("h-full", plan.popular ? "border-2 border-sky-200 shadow-lg" : "border border-slate-200")}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cx("w-full mt-6 transition-all duration-200", plan.popular ? cx(brand.gradient, "hover:opacity-90") : "bg-slate-900 hover:bg-slate-800")}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Work/Portfolio
// -----------------------------------------------------------------------------
function Work() {
  const projects = [
    {
      title: "Green Valley Restaurant",
      category: "Restaurant",
      description: "Modern restaurant website with online reservations and menu showcase",
      image: "/api/placeholder/600/400",
    },
    {
      title: "TechStart Solutions",
      category: "Technology",
      description: "Corporate website for a growing tech startup with service pages",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Bloom Flowers",
      category: "E-commerce",
      description: "Beautiful flower shop with online ordering and delivery tracking",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section id="work" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Our Work"
            title="Recent projects"
            subtitle="Take a look at some of the websites we've created for our clients."
          />
        </motion.div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <Laptop className="h-12 w-12 text-slate-400" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Process
// -----------------------------------------------------------------------------
function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business, goals, and target audience to create a strategic plan.",
    },
    {
      number: "02",
      title: "Design & Mockups",
      description: "Our designers create beautiful mockups that capture your brand and engage your audience.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your website using modern technology, ensuring it's fast, secure, and responsive.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We launch your site and provide ongoing support to ensure everything runs smoothly.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Process"
            title="How we work"
            subtitle="Our proven process ensures your project is delivered on time and exceeds expectations."
          />
        </motion.div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={cx("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6", brand.gradient)}>
                <span className="text-xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites take 2-4 weeks from start to finish, depending on the complexity and features required. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide hosting and domain setup?",
      answer: "Yes, we can help you with hosting and domain setup. We work with reliable hosting providers and can manage the technical setup for you.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built to be fully responsive and work perfectly on all devices, from phones to desktops.",
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes, we can build your website with a content management system (CMS) that allows you to easily update content, add blog posts, and make changes.",
    },
    {
      question: "What's included in the support?",
      answer: "Our support includes bug fixes, security updates, and help with any questions you have about managing your website. Extended support packages are also available.",
    },
    {
      question: "Do you offer SEO services?",
      answer: "All our websites include basic SEO optimization. We also offer advanced SEO services to help improve your search engine rankings and drive more traffic to your site.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Got questions? We've got answers. If you don't see your question here, feel free to reach out."
          />
        </motion.div>
        <div className="mt-16 space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Contact
// -----------------------------------------------------------------------------
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Contact"
            title="Ready to start your project?"
            subtitle="Get in touch and let's discuss how we can help bring your vision to life."
          />
        </motion.div>
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-600" />
                <a href={`mailto:${brand.email}`} className="text-slate-600 hover:text-slate-900">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-600" />
                <a href={`tel:${brand.phone}`} className="text-slate-600 hover:text-slate-900">
                  {brand.phone}
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 mb-3">What to expect:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Free consultation call
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Detailed project proposal
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">First name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Last name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Company (optional)</label>
                  <Input placeholder="Acme Inc" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>
                <Button className={cx("w-full", brand.gradient)}>
                  Send message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">
              <span className={brand.textGradient}>good morning</span> technology
            </h3>
            <p className="text-slate-400">
              Creating fresh, modern websites that help businesses grow and succeed online.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ongoing Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{brand.email}</li>
              <li>{brand.phone}</li>
              <li>Available Monday-Friday</li>
              <li>9 AM - 6 PM EST</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; 2024 {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------------------------------------------------------
// Nav (reverted to include contact + quote)
// -----------------------------------------------------------------------------
function Nav({ sections }) {
  const active = useActiveSection(sections);
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <a href="#home" className="font-semibold text-slate-900 text-lg">
          <span className={brand.textGradient}>good morning</span> technology
        </a>
        <nav className="ml-auto hidden md:flex items-center gap-2">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={cx(
                "px-3 py-2 text-sm rounded-full transition",
                active === id ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
              )}
            >
              {id}
            </a>
          ))}
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          <Button variant="secondary" className="hidden sm:inline-flex" asChild>
            <a href={`mailto:${brand.email}?subject=Project%20inquiry%20—%20${encodeURIComponent(brand.name)}`}>Contact</a>
          </Button>
          <Button className={brand.gradient} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get a quote <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Hero (kept same)
// -----------------------------------------------------------------------------
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className={cx("absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full blur-3xl", brand.gradient)} />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900">
            Fresh websites for a new day
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-lg text-slate-600">
            {brand.name} creates bright, fast websites designed to attract customers and grow your business.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className={brand.gradient} size="lg" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
              See pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#work">View work</a>
            </Button>
          </motion.div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1"><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /> <span>Happy clients</span></div>
            <div className="hidden sm:block">•</div>
            <div>Launch in <b>7–21 days</b></div>
          </div>
        </div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="aspect-[16/10] rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white">
            <div className={cx("h-8 w-full", brand.gradient)} />
            <div className="p-6 grid gap-4">
              <div className="h-8 w-3/5 rounded-md bg-slate-100" />
              <div className="h-4 w-4/5 rounded-md bg-slate-100" />
              <div className="h-4 w-3/5 rounded-md bg-slate-100" />
              <div className="mt-2 grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-24 rounded-xl bg-slate-100" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function GoodMorningTechnologyLanding() {
  const sections = ["home", "services", "pricing", "work", "process", "faq", "contact"];
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Nav sections={sections} />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Work />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
