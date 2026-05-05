"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface RoleCard {
  id: string;
  icon: string;
  title: string;
  requirements: string[];
  ctaLabel: string;
}

type NavItem = { icon: string; label: string; id: string };

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const ROLES: RoleCard[] = [
  {
    id: "manufacturer",
    icon: "factory",
    title: "Manufacturer",
    requirements: [
      "License Requirements (Form 25)",
      "GMP Compliance Standards",
      "Record Keeping & Batch History",
    ],
    ctaLabel: "Explore Mandates",
  },
  {
    id: "importer",
    icon: "sailing",
    title: "Importer",
    requirements: [
      "Import Registration Certificates",
      "Customs Clearance Protocols",
      "Post-Importation Testing",
    ],
    ctaLabel: "Import Regulations",
  },
  {
    id: "retailer",
    icon: "medication",
    title: "Retailer / Chemist",
    requirements: [
      "Schedule H1 Restrictions",
      "Storage & Temperature Control",
      "Prescription Auditing Logs",
    ],
    ctaLabel: "Pharmacy Standards",
  },
];

const NAV_LINKS = ["Topic Map", "Role Guides", "Penalty Matrix", "FAQ"];

const BOTTOM_NAV: NavItem[] = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "account_tree", label: "Map", id: "topic-map" },
  { icon: "assignment_ind", label: "Roles", id: "role-guides" },
  { icon: "gavel", label: "Penalty", id: "penalty" },
];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function DisclaimerBanner() {
  return (
    <div className="w-full bg-[#ffdad6] border-b border-[#ba1a1a]/20 py-2 px-8">
      <div className="max-w-[1280px] mx-auto flex items-center gap-2">
        <span className="material-symbols-outlined text-[#ba1a1a] text-[16px]">warning</span>
        <p className="text-[11px] font-medium text-[#ba1a1a]">
          Mandatory Disclaimer: This platform provides legal information and transcription assistance only. It does not constitute legal advice.
        </p>
      </div>
    </div>
  );
}

function TopNavDesktop({
  activeLink,
  onSelectLink,
}: {
  activeLink: string;
  onSelectLink: (l: string) => void;
}) {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="font-black text-[#1B365D] tracking-tighter text-xl">JuriScript</span>
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => onSelectLink(link)}
                className={`text-[13px] font-semibold transition-colors ${
                  activeLink === link
                    ? "text-[#1B365D] border-b-2 border-[#1B365D] pb-0.5"
                    : "text-[#44474e] hover:text-[#1B365D]"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
        <button className="p-2 hover:bg-slate-50 rounded-full" aria-label="Search">
          <span className="material-symbols-outlined text-[#1B365D] text-[20px]">search</span>
        </button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#1B365D] text-white py-16 px-8">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#aec7f7] mb-3">Legal Intelligence</p>
        <h1 className="font-black text-[52px] leading-[1.1] tracking-[-0.02em] mb-4">
          JuriScript
          <span className="block text-[#90efef]">Law. Simplified.</span>
        </h1>
        <p className="text-[16px] text-[#aec7f7] max-w-2xl mb-8 leading-relaxed">
          Navigate the intricate landscape of the Drugs and Cosmetics Act. Access verified legal transcripts, penalty frameworks, and role-specific compliance mandates with high-fidelity precision.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex-1 max-w-lg bg-white/10 border border-white/20 rounded-lg px-4 py-3 flex items-center gap-3">
            <span className="material-symbols-outlined text-white/40 text-[20px]">search</span>
            <span className="text-white/40 text-[15px]">Search Clause</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleCardItem({ role }: { role: RoleCard }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-[#1B365D]/10 flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-[#1B365D] text-[26px]">{role.icon}</span>
      </div>
      <h3 className="font-bold text-[20px] text-[#1B365D] mb-3">{role.title}</h3>
      <ul className="space-y-2 mb-5">
        {role.requirements.map((req) => (
          <li key={req} className="flex items-start gap-2">
            <span
              className="material-symbols-outlined text-[#008080] text-[16px] shrink-0 mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-[14px] text-[#44474e]">{req}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-[#1B365D] text-white rounded-lg font-bold text-[13px] hover:bg-[#152a4a] transition-colors flex items-center justify-center gap-2">
        {role.ctaLabel}
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </button>
    </div>
  );
}

function PenaltyMatrixSection() {
  return (
    <div className="bg-[#1B365D]/5 border border-[#1B365D]/20 rounded-2xl p-8">
      <div className="flex items-start justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#1B365D] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
            <h2 className="font-bold text-[26px] text-[#1B365D]">Penalty Matrix</h2>
          </div>
          <p className="text-[14px] text-[#44474e] mb-2">Risk assessment for statutory non-compliance.</p>
          <p className="text-[13px] text-[#44474e] leading-relaxed">
            Our comprehensive matrix analyzes Chapter IV, Section 27 and 33-I of the Act to provide immediate risk levels for misbranded, spurious, or adulterated products. Stay ahead of enforcement actions with precise legislative mapping.
          </p>
        </div>
        <button className="ml-8 bg-[#1B365D] text-white px-6 py-3 rounded-lg font-bold text-[14px] hover:bg-[#152a4a] transition-colors whitespace-nowrap flex items-center gap-2">
          View Full Matrix
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

function LegalSpotlightSection() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <h2 className="font-bold text-[22px] text-[#1B365D] mb-5">Legal Spotlight</h2>
      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined text-[#1B365D] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
        <div>
          <p className="text-[15px] text-[#44474e] italic leading-relaxed mb-3">
            Section 18: Prohibition of manufacture and sale of certain drugs and cosmetics. No person shall himself or by any other person on his behalf manufacture for sale or for distribution, or sell, or stock or exhibit or offer for sale...
          </p>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#1B365D]">
            Ref: Drugs & Cosmetics Act, 1940
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white pt-12 pb-6 mt-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-black text-xl tracking-tighter block mb-3">JuriScript</span>
            <p className="text-[12px] text-[#aec7f7]">Version 1.0.4 - Enterprise Edition</p>
            <p className="text-[12px] text-[#87a0cd] mt-2">
              All legal transcripts are processed through verified government gazettes. JuriScript is an independent regulatory tool and is not affiliated with the CDSCO or MoHFW.
            </p>
          </div>
          {[
            { heading: "Resources", links: ["Official CDSCO Portal", "India Code (Legislative)", "Drug Rules 1945"] },
            { heading: "Platform", links: ["API Documentation", "Accessibility", "User Feedback"] },
            { heading: "Trust & Legal", links: ["Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aec7f7] mb-3">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-white/70 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
          <p className="text-[12px] text-[#aec7f7]">© 2024 JuriScript Legal Tech. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[12px] text-white/60 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[12px] text-white/60 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function JurisScriptDashboardDesktop() {
  const [activeLink, setActiveLink] = useState("Topic Map");
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <DisclaimerBanner />
      <TopNavDesktop activeLink={activeLink} onSelectLink={setActiveLink} />
      <HeroSection />

      <main className="max-w-[1280px] mx-auto px-8 py-12">
        {/* Role cards */}
        <div className="mb-10">
          <h2 className="font-bold text-[28px] text-[#1B365D] mb-6">Select Your Role</h2>
          <div className="grid grid-cols-3 gap-6">
            {ROLES.map((role) => (
              <RoleCardItem key={role.id} role={role} />
            ))}
          </div>
        </div>

        {/* Penalty matrix */}
        <div className="mb-8">
          <PenaltyMatrixSection />
        </div>

        {/* Legal spotlight */}
        <LegalSpotlightSection />
      </main>

      <Footer />

      {/* Bottom nav (mobile) */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center bg-white border-t border-slate-200 h-16 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] lg:hidden">
        {BOTTOM_NAV.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex flex-col items-center justify-center flex-1 transition-colors ${
                isActive ? "text-[#1B365D]" : "text-slate-400"
              }`}
            >
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                {item.icon}
              </span>
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
