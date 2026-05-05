"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

type OffenceCategory = "all" | "adulteration" | "public-safety" | "financial-crimes" | "environment";

interface OffenceEntry {
  id: string;
  ref: string;
  refSource: string;
  statusLabel: string;
  status: "critical" | "statutory";
  section: string;
  title: string;
  penalties: { tier: string; description: string }[];
  ctaLabel: string;
  category: OffenceCategory[];
}

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const OFFENCES: OffenceEntry[] = [
  {
    id: "sec-27a",
    ref: "P.C. § 402",
    refSource: "CRITICAL WARNING",
    status: "critical",
    statusLabel: "Critical Warning",
    section: "SEC. 27(a) - Adulterated Manufacture",
    title: "Adulterated Manufacture",
    penalties: [
      { tier: "First Conviction", description: "Life imprisonment eligible; ₹10L minimum fine" },
      { tier: "Subsequent Conviction", description: "Death penalty eligible for psychotropic substances" },
    ],
    ctaLabel: "View Full Statute",
    category: ["all", "adulteration"],
  },
  {
    id: "sec-28",
    ref: "D.C.A. § 18",
    refSource: "STATUTORY RULE",
    status: "statutory",
    statusLabel: "Statutory Rule",
    section: "SEC. 28 - Labeling Violation",
    title: "Labeling Violation",
    penalties: [
      { tier: "First Violation", description: "₹20,000 fine with 1-year custody" },
      { tier: "Repeated Violation", description: "₹5L penalty plus license revocation" },
    ],
    ctaLabel: "View Full Statute",
    category: ["all", "adulteration"],
  },
  {
    id: "sec-14c",
    ref: "F.S.A. § 54",
    refSource: "STATUTORY RULE",
    status: "statutory",
    statusLabel: "Statutory Rule",
    section: "SEC. 14(c) - Food Adulteration",
    title: "Food Adulteration",
    penalties: [
      { tier: "First Conviction", description: "Imprisonment up to 6 months and/or Fine" },
      { tier: "Subsequent Conviction", description: "Imprisonment up to 2 years and Mandatory Fine" },
    ],
    ctaLabel: "View Full Statute",
    category: ["all", "adulteration", "public-safety"],
  },
  {
    id: "sec-22",
    ref: "N.D.P.S. § 22",
    refSource: "CRITICAL WARNING",
    status: "critical",
    statusLabel: "Critical Warning",
    section: "SEC. 22 - Psychotropic Substances",
    title: "Psychotropic Substances",
    penalties: [
      { tier: "Commercial Quantity", description: "Rigorous imprisonment 10–20 years, ₹1L–₹2L fine" },
      { tier: "Repeat Offence", description: "Death penalty or life imprisonment" },
    ],
    ctaLabel: "View Full Statute",
    category: ["all", "public-safety"],
  },
];

const FILTERS: { id: OffenceCategory; label: string }[] = [
  { id: "all", label: "All Offences" },
  { id: "adulteration", label: "Adulteration" },
  { id: "public-safety", label: "Public Safety" },
  { id: "financial-crimes", label: "Financial Crimes" },
  { id: "environment", label: "Environment" },
];

const NAV_LINKS = ["TOPIC MAP", "ROLE GUIDES", "PENALTY", "FAQ"];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function TopNavDesktop({
  onSearch,
}: {
  onSearch?: () => void;
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
                className={`text-[12px] font-semibold tracking-wider ${
                  link === "PENALTY" ? "text-[#1B365D] border-b-2 border-[#1B365D] pb-0.5" : "text-[#44474e] hover:text-[#1B365D]"
                } transition-colors`}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onSearch}
            className="p-2 hover:bg-slate-50 rounded-full transition-colors"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-[#1B365D] text-[20px]">search</span>
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-full" aria-label="Notifications">
            <span className="material-symbols-outlined text-[#1B365D] text-[20px]">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#1B365D] text-white flex items-center justify-center text-[12px] font-bold">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}

function DisclaimerBanner() {
  return (
    <div className="w-full bg-[#ffdad6] border-b border-[#ba1a1a]/20 py-2.5 px-8">
      <div className="max-w-[1280px] mx-auto flex items-center gap-2">
        <span className="material-symbols-outlined text-[#ba1a1a] text-[16px]">warning</span>
        <p className="text-[11px] font-medium text-[#ba1a1a]">
          The information provided in this Penalty Matrix is for academic reference and preliminary research only. Consult actual statutory texts for enforcement.
        </p>
      </div>
    </div>
  );
}

function ExpertAdvisoryBanner() {
  return (
    <div className="bg-[#1B365D] text-white px-8 py-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#aec7f7] mb-0.5">Expert Advisory</p>
          <p className="text-[14px] text-white">Navigating Section 144 amendments for the 2024 fiscal year</p>
        </div>
        <button className="text-[12px] font-semibold text-[#90efef] flex items-center gap-1 hover:underline">
          Read Legislative Brief
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

function OffenceCardDesktop({ offence }: { offence: OffenceEntry }) {
  const isCritical = offence.status === "critical";
  return (
    <div className={`bg-white border rounded-lg p-6 shadow-sm ${isCritical ? "border-[#ba1a1a]/30" : "border-slate-200"}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
              isCritical ? "bg-[#ba1a1a] text-white" : "bg-[#1B365D] text-white"
            }`}>
              {offence.statusLabel}
            </span>
            <span className="text-[11px] font-bold text-[#44474e]">REF: {offence.ref}</span>
          </div>
          <h3 className="font-semibold text-[18px] text-[#1B365D]">{offence.section}</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        {offence.penalties.map((p) => (
          <div key={p.tier} className="bg-slate-50 rounded-lg p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">{p.tier}</p>
            <p className="text-[14px] text-[#44474e]">{p.description}</p>
          </div>
        ))}
      </div>

      <button className="text-[#1B365D] font-semibold text-[13px] flex items-center gap-1 hover:underline">
        <span className="material-symbols-outlined text-[18px]">download</span>
        {offence.ctaLabel}
        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
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
            <p className="text-[13px] text-[#aec7f7]">Comprehensive mapping of statutory consequences and enforcement rules.</p>
          </div>
          {[
            { heading: "RESOURCES", links: ["Digital Statute Books", "Case Law Database", "Amendment Trackers", "Legal API Docs"] },
            { heading: "QUICK LINKS", links: ["Penalty Matrix Guide", "Role-Based Access", "Expert Consultation", "Global Support"] },
            { heading: "LEGAL", links: ["Privacy Policy", "Terms of Service", "Usage Disclaimer", "License Agreement"] },
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
          <p className="text-[12px] text-[#aec7f7]">© 2024 JuriScript Institutional. All rights reserved.</p>
          <button className="flex items-center gap-2 text-[12px] text-[#90efef] hover:underline">
            <span className="material-symbols-outlined text-[16px]">download</span>
            EXPORT PDF
          </button>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function PenaltyMatrixDesktop() {
  const [activeCategory, setActiveCategory] = useState<OffenceCategory>("all");

  const filtered = OFFENCES.filter((o) => o.category.includes(activeCategory));

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNavDesktop />
      <DisclaimerBanner />
      <ExpertAdvisoryBanner />

      <main className="max-w-[1280px] mx-auto px-8 py-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#44474e] mb-2">
              OFFENCE CATEGORIES
            </p>
            <h1 className="font-bold text-[36px] leading-[1.2] tracking-[-0.01em] text-[#1B365D]">
              Penalty Matrix
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-[13px] font-semibold text-[#44474e] hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              ADVANCED FILTERS
            </button>
            <button className="flex items-center gap-2 bg-[#1B365D] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#1B365D]/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span>
              EXPORT PDF
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveCategory(f.id)}
              className={`px-4 py-2 rounded-full text-[12px] font-semibold border transition-colors ${
                activeCategory === f.id
                  ? "bg-[#1B365D] text-white border-[#1B365D]"
                  : "bg-white text-[#44474e] border-slate-200 hover:bg-slate-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Offence cards grid */}
        <div className="grid grid-cols-2 gap-6">
          {filtered.map((offence) => (
            <OffenceCardDesktop key={offence.id} offence={offence} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
