"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    title: "Roomly",
    tag: "Live",
    tagColor: "bg-emerald-500",
    description:
      "Multi-role student accommodation platform for Nigerian universities. Students find rooms, caretakers list properties, admins manage everything — with Paystack payments, booking flows, and wallet system built in.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "Prisma",
      "Supabase",
      "Paystack",
    ],
    link: "https://github.com/Aura-pix/roomly",
    accent: "emerald",
  },
  {
    title: "Flash Loan Arbitrage Bot",
    tag: "Deployed",
    tagColor: "bg-blue-500",
    description:
      "On-chain arbitrage system using Balancer V2 flash loans. Off-chain price scanner detects profitable spreads between Uniswap V2 and SushiSwap, then executes zero-capital trades via Solidity smart contract.",
    stack: ["Solidity", "ethers.js", "Hardhat", "Balancer V2", "Uniswap V2"],
    link: "https://github.com/Aura-pix",
    accent: "blue",
  },
  {
    title: "Python GUI Suite",
    tag: "Completed",
    tagColor: "bg-zinc-500",
    description:
      "Collection of PyQt6 desktop applications — Digital Clock, Stopwatch, Weather App with live API data, and QR Code Generator. Built while mastering Python fundamentals.",
    stack: ["Python", "PyQt6", "REST APIs"],
    link: "https://github.com/Aura-pix/python-gui-projects",
    accent: "zinc",
  },
  {
    title: "Portfolio Website",
    tag: "This Site",
    tagColor: "bg-emerald-700",
    description:
      "You're looking at it. Built with Next.js, TypeScript, and Tailwind CSS as both a dev portfolio and a learning project to get comfortable with the stack used in Roomly.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Aura-pix/my-portfolio",
    accent: "emerald",
  },
];

const SKILLS = {
  "Blockchain & Web3": [
    "Solidity",
    "ethers.js",
    "Hardhat",
    "Balancer V2",
    "Uniswap V2",
    "Flash Loans",
    "Smart Contracts",
    "MetaMask",
    "Remix IDE",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Prisma ORM",
    "Supabase",
    "PostgreSQL",
    "JWT Auth",
    "Paystack",
    "REST APIs",
  ],
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  "Tools & Trading": [
    "Git",
    "GitHub",
    "PM2",
    "DeFi Protocols",
    "Crypto Trading",
    "On-chain Analysis",
  ],
};

export default function Home() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-white font-mono selection:bg-emerald-500 selection:text-black">
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid bg */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full z-0" />

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur border-b border-white/5"
            : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase">
            0xAurora<span className="text-white">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  active === link
                    ? "text-emerald-400"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/Aura-pix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border border-emerald-500/40 text-emerald-400 px-4 py-2 hover:bg-emerald-500/10 transition-colors tracking-widest uppercase"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-20">
        <div className="mb-4">
          <span className="text-xs text-emerald-400 tracking-[0.3em] uppercase border border-emerald-500/30 px-3 py-1">
            Available for collab
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
          <span className="text-white">Building</span>
          <br />
          <span className="text-emerald-400">Onchain.</span>
          <br />
          <span className="text-zinc-600">Always.</span>
        </h1>
        <p className="max-w-lg text-zinc-400 text-lg leading-relaxed mb-10">
          CS student, Web3 developer, and DeFi trader. I build real products —
          from student housing platforms to flash loan arbitrage systems on
          Ethereum mainnet.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-emerald-500 text-black px-8 py-3 font-bold tracking-widest uppercase text-sm hover:bg-emerald-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/10 text-white px-8 py-3 font-bold tracking-widest uppercase text-sm hover:border-white/30 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 mt-20 border-t border-white/5 pt-10">
          {[
            { val: "2", label: "Live Projects" },
            { val: "ETH", label: "Mainnet Deployed" },
            { val: "NG", label: "Based in Nigeria" },
            { val: "∞", label: "Learning Mindset" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-3xl font-black text-emerald-400">{val}</div>
              <div className="text-xs text-zinc-600 tracking-widest uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 max-w-5xl mx-auto px-6 py-32"
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase">
            01
          </span>
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-white font-black text-2xl tracking-tight">
            About
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m Bright — a CS student at FUT Minna, Nigeria, and an
              aspiring Web3 founder. I started with HTML/CSS and Python, got
              pulled into the trustless nature of blockchain, and never looked
              back.
            </p>
            <p>
              Right now I&apos;m building{" "}
              <span className="text-emerald-400">Roomly</span> — a student
              accommodation platform for Nigerian universities — while
              simultaneously running a{" "}
              <span className="text-emerald-400">flash loan arbitrage bot</span>{" "}
              on Ethereum mainnet using Balancer V2.
            </p>
            <p>
              I&apos;m not just a builder. I&apos;m a DeFi trader who
              understands AMM mechanics, liquidity pools, and on-chain market
              dynamics from the inside. That edge shapes how I build.
            </p>
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-emerald-500 text-black px-6 py-3 font-bold tracking-widest uppercase text-sm hover:bg-emerald-400 transition-colors mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Download Resume
            </a>
          </div>
          <div className="space-y-4">
            {[
              { label: "Currently Building", val: "Roomly + Arbitrage Bot" },
              { label: "Learning", val: "Next.js · TypeScript · Solidity" },
              { label: "University", val: "FUT Minna — Computer Science" },
              { label: "Stack", val: "Node · Prisma · Supabase · ethers.js" },
              { label: "Interests", val: "DeFi · Web3 · Trading · SaaS" },
            ].map(({ label, val }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-4 gap-1"
              >
                <span className="text-xs text-zinc-600 tracking-widest uppercase shrink-0">
                  {label}
                </span>
                <span className="text-sm text-white font-medium sm:text-right">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative z-10 max-w-5xl mx-auto px-6 py-32"
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase">
            02
          </span>
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-white font-black text-2xl tracking-tight">
            Projects
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/5 p-6 hover:border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/[0.03] block"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs px-2 py-1 ${p.tagColor} text-white tracking-widest uppercase font-bold`}
                >
                  {p.tag}
                </span>
                <span className="text-zinc-700 group-hover:text-emerald-400 transition-colors text-xl">
                  ↗
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-zinc-600 border border-white/5 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative z-10 max-w-5xl mx-auto px-6 py-32"
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase">
            03
          </span>
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-white font-black text-2xl tracking-tight">
            Skills
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs text-emerald-400 tracking-[0.3em] uppercase mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-400 border border-white/5 px-3 py-1.5 hover:border-emerald-500/30 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 max-w-5xl mx-auto px-6 py-32"
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase">
            04
          </span>
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-white font-black text-2xl tracking-tight">
            Contact
          </span>
        </div>
        <div className="border border-white/5 p-12 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            Let&apos;s Build Together
          </h2>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            Open to collabs, internships, freelance, or just talking about DeFi
            and building products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:brghtjasper@email.com"
              className="bg-emerald-500 text-black px-8 py-3 font-bold tracking-widest uppercase text-sm hover:bg-emerald-400 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://x.com/brightjasp"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 text-white px-8 py-3 font-bold tracking-widest uppercase text-sm hover:border-white/30 transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://github.com/Aura-pix"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 text-white px-8 py-3 font-bold tracking-widest uppercase text-sm hover:border-white/30 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="text-zinc-700 text-xs tracking-widest uppercase">
          © 2026 0xAurora
        </span>
        <span className="text-zinc-700 text-xs tracking-widest uppercase">
          Built with Next.js
        </span>
      </footer>
    </main>
  );
}
