import { useEffect, useState } from 'react';

interface Project {
    id: number;
    number: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    link: string;
    image?: string;
}

import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import bio from '../assets/images/bio.png';

const Home = ({ isDark }: any) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    console.log(isDark)

    const projects: Project[] = [
        {
            id: 1,
            number: "01 — Mentorship Platform",
            title: "Betamind",
            category: "EdTech",
            description: "Mentorship and growth platform for structured learning and digital skills development. Built full-stack architecture and core platform features.",
            tags: ["React", "Django", "EdTech", "Full-Stack"],
            link: "https://betaminds.online/",
            image: image1,
        },
        {
            id: 2,
            number: "02 — Identity & Verification",
            title: "CredentialPath",
            category: "SaaS",
            description: "Digital credential verification and identity validation platform with secure credential workflows and identity management systems.",
            tags: ["Python(Django)", "React", "TypeScript", "Security", "SaaS"],
            link: "https://credentialpath.io/",
            image: image2,
        },
        {
            id: 3,
            number: "03 — Design System",
            title: "Beta UI",
            category: "Design System",
            description: "Reusable UI system and modern frontend component library. A scalable design system built for rapid, consistent product development.",
            tags: ["React", "TypeScript", "Design System"],
            link: "https://betaui.vercel.app/",
            image: image3,
        },
        {
            id: 4,
            number: "04 — Marketplace",
            title: "Creve Africa",
            category: "Marketplace",
            description: "Freelance ecosystem connecting vetted artisans and professionals with clients. Built talent-client matching system and booking architecture.",
            tags: ["Next.js", "Marketplace", "Africa"],
            link: "https://creve.vercel.app/",
            image: image4,
        },
        {
            id: 5,
            number: "05 — Web3",
            title: "KubotAI",
            category: "Blockchain",
            description: "Kubotai is a revolutionary platform that connects users with opportunities to earn real rewards. We believe everyone should have access to simple ways to earn money online.",
            tags: ["Web3", "Blockchain", "React"],
            link: "https://kubotai.org/",
            image: image5,
        },
        {
            id: 6,
            number: "06 — Educational Platform",
            title: "Wintrice",
            category: "EdTech",
            description: "Wintrice unifies financial education, real-world investing, and financial planning into one system—built for schools, students, and the modern workforce.",
            tags: ["React", "Performance"],
            link: "https://wintrice.com/",
            image: image6,
        },
        // {
        //     id: 7,
        //     number: "07 — FinTech",
        //     title: "SmartChange",
        //     category: "FinTech",
        //     description: "Modern web platform with scalable UI architecture. Built responsive frontend interfaces with clean UX principles and optimised performance.",
        //     tags: ["Next.js", "FinTech", "Tailwind CSS"],
        //     link: "https://smartchangeweb.vercel.app/",
        //     image: image7,
        // },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#060606] text-[#F5F3EE] font-sans overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

                * { box-sizing: border-box; margin: 0; padding: 0; }
                html { scroll-behavior: smooth; }
                body { font-family: 'DM Sans', sans-serif; }

                .font-display { font-family: 'Syne', sans-serif; }
                .font-mono-custom { font-family: 'DM Mono', monospace; }

                .grid-bg {
                    position: fixed; inset: 0; z-index: 0; pointer-events: none;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%);
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeLeft {
                    from { opacity: 0; transform: translateX(20px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes expandLine {
                    0%, 100% { transform: scaleX(1); opacity: 0.4; }
                    50%      { transform: scaleX(1.4); opacity: 0.8; }
                }

                .anim-fade-up-1 { opacity: 0; animation: fadeUp 0.6s 0.2s forwards; }
                .anim-fade-up-2 { opacity: 0; animation: fadeUp 0.7s 0.35s forwards; }
                .anim-fade-up-3 { opacity: 0; animation: fadeUp 0.6s 0.5s forwards; }
                .anim-fade-up-4 { opacity: 0; animation: fadeUp 0.6s 0.6s forwards; }
                .anim-fade-up-5 { opacity: 0; animation: fadeUp 0.6s 0.75s forwards; }
                .anim-fade-up-6 { opacity: 0; animation: fadeUp 0.5s 1.2s forwards; }
                .anim-fade-left { opacity: 0; animation: fadeLeft 0.8s 0.5s forwards; }
                .scroll-line-anim { animation: expandLine 2s 1.5s infinite; }

                .reveal {
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.65s ease, transform 0.65s ease;
                }
                .reveal.visible { opacity: 1; transform: translateY(0); }
                .reveal-delay-1 { transition-delay: 0.1s; }
                .reveal-delay-2 { transition-delay: 0.2s; }
                .reveal-delay-3 { transition-delay: 0.3s; }

                .project-card:hover .project-arrow { opacity: 1 !important; transform: translate(0,0) !important; }
                .project-card:hover .project-img  { transform: scale(1.05); }
                .project-card:hover .project-title-text { color: #E8870A !important; }
            `}</style>

            <div className="grid-bg" aria-hidden="true" />

            {/* ── NAV ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[rgba(6,6,6,0.85)] backdrop-blur-xl border-b border-white/[0.07]">
                <a href="#hero" className="font-display font-bold text-[1.1rem] tracking-tight text-[#F5F3EE] no-underline">
                    bright<span className="text-[#E8870A]">.</span>dev
                </a>

                <ul className="hidden md:flex gap-8 list-none">
                    {['About', 'Experience', 'Projects', 'Contact'].map(item => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="font-mono-custom text-[0.75rem] text-[#888580] no-underline tracking-widest uppercase transition-colors hover:text-[#F5F3EE]"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="mailto:brightchibuzorphilip@gmail.com"
                    className="hidden md:inline-flex font-mono-custom text-[0.7rem] font-medium text-[#E8870A] tracking-widest uppercase border border-[rgba(232,135,10,0.35)] px-4 py-2 rounded-[3px] transition-all no-underline hover:bg-[#E8870A] hover:text-black"
                >
                    Hire Me
                </a>

                <button
                    className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
                    aria-label="Open menu"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="block w-6 h-[1.5px] bg-[#F5F3EE]" />
                    <span className="block w-6 h-[1.5px] bg-[#F5F3EE]" />
                    <span className="block w-6 h-[1.5px] bg-[#F5F3EE]" />
                </button>
            </nav>

            {/* ── MOBILE MENU ── */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-[rgba(6,6,6,0.98)] z-[99] flex flex-col items-center justify-center gap-10 backdrop-blur-xl">
                    <button
                        className="absolute top-5 right-6 bg-transparent border-none text-[#888580] cursor-pointer text-2xl leading-none"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        ✕
                    </button>
                    {['About', 'Experience', 'Projects', 'Contact'].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-display text-[2rem] font-bold text-[#F5F3EE] no-underline tracking-tight transition-colors hover:text-[#E8870A]"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="mailto:brightchibuzorphilip@gmail.com"
                        className="font-display text-[2rem] font-bold text-[#E8870A] no-underline"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Hire Me →
                    </a>
                </div>
            )}

            {/* ── HERO ── */}
            <section id="hero" className="relative z-[1] min-h-screen flex items-center pt-24 pb-16">
                <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

                    {/* Left */}
                    <div className="max-w-[640px]">
                        <div className="inline-flex items-center gap-2 font-mono-custom text-[0.72rem] text-[#E8870A] tracking-[0.12em] uppercase mb-6 anim-fade-up-1">
                            <span className="block w-7 h-px bg-[#E8870A]" />
                            Full-Stack Developer & Product Builder
                        </div>

                        <h1 className="font-display font-extrabold leading-[0.99] tracking-[-0.04em] text-[#F5F3EE] text-[clamp(2.5rem,6vw,5rem)] anim-fade-up-2">
                            Bright<br />Chibuzor<br />
                            <span className="text-[#E8870A]">Philip.</span>
                        </h1>

                        <p className="font-mono-custom text-[0.88rem] text-[#888580] mt-5 mb-7 tracking-[0.06em] anim-fade-up-3">
                            <span className="text-[rgba(245,243,238,0.7)]">4+ yrs · Port Harcourt, Nigeria</span>
                            &nbsp;·&nbsp; React · Next.js · Django · Web3
                        </p>

                        <p className="text-[1.05rem] text-[rgba(245,243,238,0.65)] leading-[1.75] max-w-[520px] mb-10 anim-fade-up-4">
                            I build scalable web and mobile applications that solve real problems — across fintech,
                            education, blockchain, and startup ecosystems. Founder of{' '}
                            <strong className="text-[#F5F3EE] font-medium">Betamind</strong>.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center anim-fade-up-5">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-[#E8870A] text-black font-semibold text-[0.88rem] px-7 py-3 rounded no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,135,10,0.35)]"
                            >
                                View My Work ↓
                            </a>
                            <a
                                href="mailto:brightchibuzorphilip@gmail.com"
                                className="inline-flex items-center gap-2 text-[#F5F3EE] text-[0.88rem] px-7 py-3 rounded no-underline border border-white/[0.12] transition-all hover:border-white/30 hover:bg-white/5"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Right — image block */}
                    <div className="relative anim-fade-left order-first lg:order-last mx-auto w-full max-w-[320px] lg:max-w-none">
                        <div className="relative w-full  rounded-md overflow-hidden bg-[#0a0a0a] border-2 border-white/[0.02]">
                            <img src={bio} alt="Profile" className='w-full h-full' />
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-px mt-6 border border-white/[0.04] rounded-md overflow-hidden bg-white/[0.05]">
                            {[
                                { num: '4+', label: 'Years Exp.' },
                                { num: '10+', label: 'Projects' },
                                { num: '3', label: 'Tech Stacks' },
                                { num: '1', label: 'Startup Founded' },
                            ].map(s => (
                                <div key={s.label} className="bg-[#090909] p-4 text-center">
                                    <span className="font-display font-extrabold text-[1.6rem] text-[#E8870A] tracking-tight block">{s.num}</span>
                                    <span className="font-mono-custom text-[0.65rem] text-[#888580] tracking-widest uppercase block mt-0.5">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="absolute bottom-10 left-6 md:left-10 lg:left-[calc((100vw-72rem)/2+3rem)] flex items-center gap-2.5 font-mono-custom text-[0.68rem] text-[#555250] tracking-widest uppercase anim-fade-up-6" aria-hidden="true">
                        <div className="w-10 h-px bg-[#555250] scroll-line-anim" />
                        Scroll to explore
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about" className="relative z-[1] py-24 bg-[#0e0e0e]">
                <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-14 reveal">
                        <span className="font-mono-custom text-[0.7rem] text-[#E8870A] tracking-[0.15em]">01</span>
                        <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.03em] text-[#F5F3EE]">About Me</h2>
                        <div className="flex-1 h-px bg-white/[0.07] ml-4" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div className="reveal">
                            <p className="text-[1.05rem] text-[rgba(245,243,238,0.7)] leading-[1.8] mb-5">
                                I'm a <strong className="text-[#F5F3EE] font-medium">Full-Stack Software Developer</strong> with
                                4+ years of experience building production-grade digital products for startups, fintechs,
                                and Web3 ecosystems.
                            </p>
                            <p className="text-[1.05rem] text-[rgba(245,243,238,0.7)] leading-[1.8] mb-5">
                                I founded <strong className="text-[#F5F3EE] font-medium">Betamind</strong> in 2025 — a
                                mentorship and learning platform designed for digital growth and community-driven education.
                            </p>
                            <p className="text-[1.05rem] text-[rgba(245,243,238,0.7)] leading-[1.8]">
                                I care deeply about <strong className="text-[#F5F3EE] font-medium">developer experience</strong>,
                                clean architecture, and shipping things that actually work at scale.
                            </p>
                            <div className="flex flex-col gap-2.5 mt-7">
                                {[
                                    { href: 'https://brightcode.vercel.app/', label: 'brightcode.vercel.app' },
                                    { href: 'https://github.com/brightphi210', label: 'github.com/brightphi210' },
                                    { href: 'https://www.linkedin.com/in/chibuzor-philip12/', label: 'LinkedIn Profile' },
                                ].map(link => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 font-mono-custom text-[0.78rem] text-[#E8870A] no-underline transition-all hover:gap-3.5 before:content-['↗'] before:text-[0.9rem]"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-6 reveal reveal-delay-1">
                            {[
                                { label: 'Frontend', tags: ['React JS', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
                                { label: 'Backend', tags: ['Python', 'Django', 'REST APIs'] },
                                { label: 'Mobile & Data', tags: ['React Native', 'TanStack Query', 'API Integration'] },
                                { label: 'Blockchain / Web3', tags: ['Web3 Interfaces', 'dApps'] },
                                { label: 'Tools', tags: ['Git', 'GitHub', 'CI/CD', 'Figma'] },
                            ].map(group => (
                                <div key={group.label}>
                                    <p className="font-mono-custom text-[0.68rem] text-[#888580] tracking-[0.12em] uppercase mb-2.5">{group.label}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="font-mono-custom text-[0.76rem] text-[rgba(245,243,238,0.8)] bg-[#161616] border border-white/[0.07] px-3.5 py-1.5 rounded-[3px] transition-all hover:border-[#E8870A] hover:text-[#E8870A] cursor-default"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="relative z-[1] py-24">
                <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-14 reveal">
                        <span className="font-mono-custom text-[0.7rem] text-[#E8870A] tracking-[0.15em]">02</span>
                        <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.03em] text-[#F5F3EE]">Experience</h2>
                        <div className="flex-1 h-px bg-white/[0.07] ml-4" />
                    </div>

                    <div className="flex flex-col">
                        {[
                            {
                                period: '2025 — Present',
                                company: 'Betamind',
                                location: 'Port Harcourt, NG · Remote',
                                role: 'Founder & Full-Stack Developer',
                                desc: 'Founded and lead development of Betamind — a mentorship and digital learning platform built for structured skills growth and community-driven education.',
                                bullets: [
                                    'Designed and built the full platform architecture (frontend + backend systems)',
                                    'Developed scalable UI components and reusable frontend design systems',
                                    'Built core features: mentorship booking, learning interaction, user engagement',
                                    'Led product direction, technical decisions, and UI/UX system design',
                                    'Managed continuous product iteration based on user feedback',
                                ],
                                delay: '',
                            },
                            {
                                period: '2021 — Present',
                                company: 'Freelance & Startups',
                                location: 'Remote · Nigeria',
                                role: 'Frontend / Full-Stack Developer',
                                desc: 'Built production-ready web and mobile applications across fintech, education, Web3, and digital services for startups and independent clients.',
                                bullets: [
                                    'Built scalable applications using React, Next.js, Django, and React Native',
                                    'Integrated REST APIs, authentication, and third-party services (payments, Web3)',
                                    'Translated UI/UX designs into responsive, production-grade interfaces',
                                    'Collaborated with cross-functional teams to deliver end-to-end features',
                                    'Improved performance using modular architecture and clean code practices',
                                ],
                                delay: 'reveal-delay-1',
                            },
                            {
                                period: 'Education',
                                company: 'NIIT Institute',
                                location: 'Nigeria',
                                role: 'Computer Software Engineering',
                                desc: 'Studied software engineering fundamentals, building a foundation in computer science, algorithms, and software development principles.',
                                bullets: [],
                                delay: 'reveal-delay-2',
                            },
                        ].map((exp) => (
                            <div
                                key={exp.company}
                                className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-10 border-b border-white/[0.07] last:border-0 reveal ${exp.delay}`}
                            >
                                <div className="md:pr-4">
                                    <span className="font-mono-custom text-[0.72rem] text-[#E8870A] tracking-[0.08em] block mb-1">{exp.period}</span>
                                    <div className="font-display font-semibold text-[0.95rem] text-[#F5F3EE] mb-1">{exp.company}</div>
                                    <div className="font-mono-custom text-[0.68rem] text-[#555250] tracking-[0.06em]">{exp.location}</div>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-[1.2rem] md:text-[1.25rem] text-[#F5F3EE] tracking-[-0.02em] mb-4">{exp.role}</div>
                                    <p className="text-[0.95rem] text-[rgba(245,243,238,0.6)] leading-[1.75] mb-4">{exp.desc}</p>
                                    {exp.bullets.length > 0 && (
                                        <ul className="flex flex-col gap-2 list-none">
                                            {exp.bullets.map((b, bi) => (
                                                <li key={bi} className="text-[0.9rem] text-[rgba(245,243,238,0.6)] pl-5 relative leading-[1.6]">
                                                    <span className="absolute left-0 text-[#E8870A] text-[0.8rem]">—</span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" className="relative z-[1] py-24 bg-[#0e0e0e]">
                <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-14 reveal">
                        <span className="font-mono-custom text-[0.7rem] text-[#E8870A] tracking-[0.15em]">03</span>
                        <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.03em] text-[#F5F3EE]">Selected Work</h2>
                        <div className="flex-1 h-px bg-white/[0.07] ml-4" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07] rounded-md overflow-hidden">
                        {projects.map((project, index) => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`project-card bg-[#060606] flex flex-col no-underline relative overflow-hidden rounded-md transition-colors hover:bg-[#161616] reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}
                            >
                                <div className="w-full h-48 overflow-hidden bg-[#0e0e0e]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img w-full h-full object-cover transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-7 flex-1 flex flex-col">
                                    <span className="font-mono-custom text-[0.65rem] text-[#555250] tracking-[0.12em] mb-5 block">{project.number}</span>
                                    <div className="project-title-text font-display font-bold text-[1.2rem] text-[#F5F3EE] tracking-[-0.02em] mb-2.5 transition-colors">{project.title}</div>
                                    <p className="text-[0.88rem] text-[rgba(245,243,238,0.5)] leading-[1.65] mb-5 flex-1">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="font-mono-custom text-[0.65rem] text-[#888580] bg-[#0e0e0e] px-2.5 py-1 rounded-[2px] tracking-[0.06em]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <span className="project-arrow inline-flex items-center gap-1.5 font-mono-custom text-[0.72rem] text-[#E8870A] opacity-50 -translate-x-1 translate-y-0 transition-all duration-200 tracking-[0.08em] no-underline px-7 pb-6">
                                    Visit Live ↗
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="relative z-[1] py-24 text-center">
                <div className="max-w-2xl mx-auto px-6 md:px-10">
                    <div className="flex items-baseline justify-center gap-6 mb-10 reveal">
                        <span className="font-mono-custom text-[0.7rem] text-[#E8870A] tracking-[0.15em]">04</span>
                        <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.03em] text-[#F5F3EE]">Contact</h2>
                    </div>

                    <h3 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.04em] leading-[1.05] text-[#F5F3EE] mb-6 reveal">
                        Let's build something<br />
                        <span className="text-[#E8870A]">great together.</span>
                    </h3>

                    <p className="text-[1rem] text-[rgba(245,243,238,0.55)] leading-[1.75] mb-10 reveal reveal-delay-1">
                        Open to full-time roles, freelance projects, and startup collaborations. If you have an
                        interesting problem to solve, let's talk.
                    </p>

                    <a
                        href="mailto:brightchibuzorphilip@gmail.com"
                        className="inline-flex items-center gap-2.5 font-mono-custom text-[1rem] text-[#F5F3EE] no-underline border-b border-white/20 pb-1 mb-12 transition-all hover:text-[#E8870A] hover:border-[#E8870A] reveal reveal-delay-2"
                    >
                        brightchibuzorphilip@gmail.com
                    </a>

                    <div className="flex items-center justify-center gap-6 flex-wrap reveal reveal-delay-3">
                        {[
                            { href: 'https://github.com/brightphi210', label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/chibuzor-philip12/', label: 'LinkedIn' },
                            { href: 'https://brightcode.vercel.app/', label: 'Portfolio' },
                            { href: 'https://betaminds.online/', label: 'Betamind' },
                        ].map((s, i, arr) => (
                            <div key={s.href} className="flex items-center gap-6">
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-mono-custom text-[0.72rem] text-[#888580] no-underline tracking-widest uppercase transition-colors hover:text-[#F5F3EE] flex items-center gap-1.5"
                                >
                                    {s.label}
                                </a>
                                {i < arr.length - 1 && <div className="w-[3px] h-[3px] rounded-full bg-[#555250]" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="relative z-[1] px-6 md:px-10 py-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
                <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono-custom text-[0.7rem] text-[#555250] tracking-[0.06em]">
                        © 2025 <span className="text-[#E8870A]">Bright Chibuzor Philip</span>. All rights reserved.
                    </p>
                    <p className="font-mono-custom text-[0.7rem] text-[#555250] tracking-[0.06em]">
                        Built with <span className="text-[#E8870A]">♥</span> · Port Harcourt, Nigeria
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;