import { useLayoutEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const resumeUrl = 'https://drive.google.com/file/d/11lzs5G49MsUfqQVAvAxWuaPsLWbV-LC_/view?usp=sharing'
const linkedinUrl = 'https://www.linkedin.com/in/shivam-patel-s1530'
const githubUrl = 'https://github.com/ShivamPatel145'

const projects = [
  {
    title: 'LexOS',
    category: 'Legal Practice Management',
    description: 'A full-stack platform built for modern law firms. Combines a polished, client-facing marketing website with a fully authenticated internal dashboard covering the complete operational lifecycle — from client intake and case management to billing and AI-assisted document drafting.',
    stack: 'Next.js 16 · TypeScript · Supabase · Gemini AI · Tailwind',
    live: 'https://lex-os-pi.vercel.app',
    repo: 'https://github.com/ShivamPatel145/LexOS',
    wide: true,
    accent: 'secondary-accent'
  },
  {
    title: 'LinkedIn Cover Letter Generator',
    category: 'Chrome Extension',
    description: 'A powerful browser extension that generates highly personalized cover letters for LinkedIn job applications using AI. Features robust profile data management and real-time generation directly atop LinkedIn job pages.',
    stack: 'React · Tailwind CSS · Chrome API · Gemini',
    repo: 'https://github.com/ShivamPatel145/AI-Chrome-Extension',
    wide: false,
    accent: 'primary-accent'
  },
  {
    title: 'Enterprise Auth Platform',
    category: 'Security Architecture',
    description: 'A production-ready, enterprise-grade authentication platform featuring secure user registration, OTP-based email verification, JWT token management, CSRF protection, Redis caching, and role-based access control.',
    stack: 'React · Node.js · Express · MongoDB · Redis',
    repo: 'https://github.com/ShivamPatel145/Full-Stack-Authentication',
    wide: false,
    accent: 'tertiary-accent'
  },
  {
    title: 'Go AI Engine (Web)',
    category: 'Artificial Intelligence',
    description: 'A modern, responsive Go (Weiqi/Baduk) game mapped in the browser with an AI opponent powered by Minimax and Alpha-Beta pruning algorithms. Features distinct search depths and local stats analytics.',
    stack: 'Vanilla JS · HTML5 Canvas · Game Logic',
    repo: 'https://github.com/ShivamPatel145/Go-Game',
    wide: false,
    accent: 'secondary-accent'
  },
  {
    title: 'AI Background Remover',
    category: 'Full-Stack SaaS',
    description: 'A professional web application that uses ClipDrop AI technology to automatically remove backgrounds from images. Built with structured user authentication via Clerk and a scalable credit-based payment system mapped to Razorpay.',
    stack: 'React · Express · Clerk · Razorpay · ClipDrop',
    live: 'https://ai-saas-background-remover.vercel.app',
    repo: 'https://github.com/ShivamPatel145/AI-Background-Remover',
    wide: false,
    accent: 'primary-accent'
  },
]

const skills = [
  'Next.js 14/15 App Router', 'React', 'TypeScript', 'Node.js', 'Express',
  'PostgreSQL', 'Supabase', 'MongoDB', 'Redis',
  'Gemini AI SDK', 'Chrome Extensions API', 'Tailwind CSS', 'Radix UI',
  'Docker', 'Vercel', 'Vitest', 'GSAP', 'Framer Motion',
]

const valueProps = [
  {
    num: '01',
    title: 'Scalable Architecture',
    detail: 'I engineer systems prioritizing long-term maintainability, optimized backend performance, and rigorous security standards over temporary shortcuts.',
    accent: 'text-primary'
  },
  {
    num: '02',
    title: 'AI Integration Strategy',
    detail: 'I specialize in seamlessly integrating advanced LLMs (like Google Gemini) into existing platforms to automate complex user workflows and generate massive value.',
    accent: 'text-secondary'
  },
  {
    num: '03',
    title: 'Transparent Execution',
    detail: 'I ensure crystal clear technical handoffs, proactive progress updates, and exceptionally reliable execution to foster total trust with stakeholders.',
    accent: 'text-tertiary'
  },
]

const marqueeItems = [
  'Scalable Web Platforms',
  'AI-Powered Workflows',
  'Secure Authentication Systems',
  'Cloud-Native Architecture',
  'Performance Optimization',
  'API & Microservices Design',
  'Enterprise Dashboard Development',
  'End-to-End Product Delivery',
]

const capabilities = [
  {
    title: 'Cloud Infrastructure',
    detail: 'Actively learning AWS and Google Cloud, while building practical projects with Docker and serverless patterns.',
    accent: 'primary'
  },
  {
    title: 'AI & LLM Integration',
    detail: 'Deeply exploring LLM workflows, RAG fundamentals, vector databases, and hands-on Gemini API integrations.',
    accent: 'secondary'
  },
  {
    title: 'Distributed Systems',
    detail: 'Strengthening distributed system skills through microservices practice, Redis caching, and PostgreSQL-backed architectures.',
    accent: 'tertiary'
  },
  {
    title: 'Enterprise Full-Stack',
    detail: 'Next.js App Router, React 19, Tailwind, and strict TypeScript.',
    accent: 'primary'
  },
]

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.84v2.05h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-7.58c0-1.81-.03-4.14-2.53-4.14-2.53 0-2.92 1.98-2.92 4.01V23h-4V8Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.64 1.6.24 2.78.12 3.07.75.81 1.2 1.85 1.2 3.1 0 4.42-2.68 5.4-5.24 5.69.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56a11.54 11.54 0 0 0 7.84-10.95C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  )
}

export default function App() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // General fade up reveals
      gsap.utils.toArray('.gsap-fade').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      // Project staggered entrance
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        }
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-bg text-text selection:bg-primary selection:text-black font-sans relative overflow-x-hidden" ref={rootRef}>
      
      {/* Animated Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div className="bg-orb bg-orb-1" animate={{ x: [0, 60, -40, 0], y: [0, -60, 40, 0] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="bg-orb bg-orb-2" animate={{ x: [0, -80, 50, 0], y: [0, 60, -80, 0] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="bg-orb bg-orb-3" animate={{ x: [0, 40, -60, 0], y: [0, 80, -40, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
      </div>

      {/* Navigation */}
      <div className="nav-wrapper">
        <header className="nav-inner">
          <div className="nav-brand">
            <span className="nav-brand-mark">S.</span>
            <span className="nav-brand-name">Shivam Patel</span>
          </div>
          <nav className="nav-links flex text-[0.65rem] sm:text-[0.78rem]">
            <a href="#work" className="nav-link">Work</a>
            <a href="#about" className="nav-link">Profile</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="nav-actions">
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="nav-social-link" aria-label="LinkedIn profile">
              <LinkedInIcon width="15" height="15" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="nav-social-link" aria-label="GitHub profile">
              <GitHubIcon width="15" height="15" />
            </a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="nav-resume-btn hidden md:block">
              View Resume
            </a>
          </div>
        </header>
      </div>

      <main className="page">
        {/* Hero Section */}
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-shell"
          >
            <div className="hero-text-side flex flex-col justify-center w-full">
              <div className="hero-eyebrow">
                Software Engineer · Full-Stack &amp; AI Systems
              </div>

              <h1 className="hero-headline">
                Building reliable products for growing teams.
              </h1>

              <p className="hero-desc">
                I design and deliver secure, scalable web platforms with a strong focus on performance, maintainability, and practical AI integration.
              </p>

              <div className="hero-actions">
                <a href="#work" className="btn-y2k-primary w-full sm:w-auto text-center justify-center">
                  View Projects
                </a>
                <a href="#contact" className="btn-y2k-secondary w-full sm:w-auto text-center justify-center">
                  Contact Me
                </a>
              </div>

              <div className="hero-meta flex-wrap gap-4">
                <span>Based in India</span>
                <span>Open to Remote Roles</span>
                <span>Available for Freelance</span>
              </div>
            </div>

            <div className="hero-image-side flex justify-center md:justify-end relative w-full pt-6 md:pt-0">
              <div className="hero-portrait-wrap relative group flex items-end">
                {/* Ambient glow behind the portrait */}
                <div className="absolute top-10 left-0 right-0 bottom-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-700"></div>
                
                {/* Profile Floating Image with Bottom Fade */}
                <img 
                  src="/profile.png" 
                  alt="Shivam Patel - Professional Portrait" 
                  className="w-full h-auto object-contain object-bottom relative z-10 filter contrast-[1.05] drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ 
                    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        <hr className="gradient-divider" />

        {/* About / Profile Section */}
        <section className="section" id="about">
          <div className="container">
            <div className="gsap-fade section-header">
              <div className="section-eyebrow">Developer Identity</div>
              <h2 className="section-title">PROFESSIONAL PROFILE</h2>
            </div>
            <div className="gsap-fade flex flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
              
              <div className="profile-copy">
                <h3 className="profile-heading">
                  I engineer scalable digital architectures with a rigorous focus on <span className="text-primary">performance, security, and continuous AI evolution.</span>
                </h3>
                <div className="profile-body">
                  <p>
                    My technical journey is defined by comprehensive end-to-end execution. I have built everything from legal practice management platforms to automated background-removal SaaS products with real-world backend and serverless workflows.
                  </p>
                  <p>
                    I am especially eager to keep learning and building in <strong className="text-white font-medium">AI and LLM systems</strong>, while steadily deepening my <strong className="text-white font-medium">cloud and microservices expertise</strong> across AWS and GCP.
                  </p>
                </div>
              </div>

              <aside className="profile-panel-wrap">
                <div className="profile-panel">
                  <div className="profile-panel-edge" aria-hidden="true"></div>

                  <h4 className="profile-panel-title">
                    <span className="profile-panel-dot" aria-hidden="true"></span>
                    Core Capabilities
                  </h4>

                  <div className="profile-capability-list">
                    {capabilities.map((item) => (
                      <article key={item.title} className="capability-item">
                        <span className={`capability-marker capability-marker-${item.accent}`} aria-hidden="true"></span>
                        <div>
                          <h5>{item.title}</h5>
                          <p>{item.detail}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
              
            </div>
          </div>
        </section>

        {/* <hr className="gradient-divider" /> */}

        {/* Ticker marquee between sections */}
        <div className="ticker-wrap">
          <div className="ticker-track">
            <div className="ticker-content">
              {marqueeItems.map((item) => (
                <span key={`left-${item}`} className="ticker-item">{item}</span>
              ))}
            </div>
            <div className="ticker-content">
              {marqueeItems.map((item) => (
                <span key={`right-${item}`} className="ticker-item">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="section" id="work">
          <div className="container">
            <div className="gsap-fade section-header">
              <div className="section-eyebrow">Select Installations</div>
              <h2 className="section-title text-secondary">TECHNICAL SHOWCASE</h2>
              <p className="section-desc">
                A curated selection of high-impact platforms engineered across legal operations, robust authentication architectures, and sophisticated AI-powered toolsets.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((p, i) => (
                <article key={i} className={`project-card ${p.accent} ${p.wide ? 'wide' : ''}`}>
                  <div>
                    <span className="project-tag">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <div className="card-footer">
                    <span className="stack-label">{p.stack}</span>
                    <div className="card-links">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="icon-btn" aria-label={`Launch ${p.title}`}>
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                      <a href={p.repo} target="_blank" rel="noreferrer" className="icon-btn" aria-label={`View source for ${p.title}`}>
                        <GitBranch size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <hr className="gradient-divider" />

        {/* Skills Section */}
        <section className="section" id="skills">
          <div className="container">
            <div className="gsap-fade section-header">
              <div className="section-eyebrow">Technology Matrix</div>
              <h2 className="section-title text-tertiary">CORE EXPERTISE</h2>
              <p className="section-desc">
                Leveraging a modernized engineering stack designed for maximum scalability, impeccable security compliance, and exceptional user experience.
              </p>
              <div className="skills-row">
                {skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="gradient-divider" />

        {/* Methodology Section */}
        <section className="section" id="approach">
          <div className="container">
            <div className="gsap-fade section-header">
              <div className="section-eyebrow">Operational Framework</div>
              <h2 className="section-title text-primary">METHODOLOGY</h2>
            </div>
            <div className="value-grid gsap-fade">
              {valueProps.map((item, i) => (
                <div key={i} className="value-card">
                  <div className={`value-num ${item.accent}`}>{item.num}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="gradient-divider" />

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="gsap-fade contact-container">
              <h2 className="contact-headline">
                READY TO <span className="chrome-text">COLLABORATE?</span>
              </h2>
              <a href="mailto:shivampatel.web.dev@gmail.com" className="contact-email">
                SHIVAMPATEL.WEB.DEV@GMAIL.COM
              </a>
              <div className="contact-actions">
                <a href="mailto:shivampatel.web.dev@gmail.com" className="btn-y2k-primary">
                  Draft Transmission
                </a>
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-y2k-secondary">
                  Review Credentials
                </a>
              </div>
              <div className="contact-socials">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn profile">
                  <LinkedInIcon width="16" height="16" />
                  <span>LinkedIn</span>
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="GitHub profile">
                  <GitHubIcon width="16" height="16" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} SHIVAM PATEL INC.</span>
      </footer>
    </div>
  )
}