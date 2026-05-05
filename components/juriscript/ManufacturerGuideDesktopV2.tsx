"use client";

// Screen 12: "Manufacturer Guide - Desktop" (screenId d37b9fd2cc5f4ba3bf229ba837b6d65b)
// Desktop with footer + cited legislation + compliance resources

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface RequirementCard {
  id: string;
  ref: string;
  icon: string;
  title: string;
  description: string;
  priorityLevel: "critical" | "high";
}

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const REQUIREMENTS: RequirementCard[] = [
  {
    id: "mfg-license",
    ref: "Section 144",
    icon: "precision_manufacturing",
    title: "Manufacturing License",
    description:
      "Valid until December 2025 under current jurisdiction.",
    priorityLevel: "critical",
  },
  {
    id: "gmp",
    ref: "Schedule M",
    icon: "verified_user",
    title: "GMP Compliance",
    description: "Good Manufacturing Practice verification.",
    priorityLevel: "critical",
  },
  {
    id: "lab-records",
    ref: "Lab-Ref-4",
    icon: "lab_profile",
    title: "Laboratory Records",
    description: "Chain of custody for chemical assays.",
    priorityLevel: "high",
  },
  {
    id: "bmr",
    ref: "BMR-Track",
    icon: "inventory_2",
    title: "Batch Manufacturing Records",
    description:
      "Traceability from starting materials to final distribution batches.",
    priorityLevel: "high",
  },
];

const NAV_LINKS = ["TOPIC MAP", "ROLE GUIDES", "PENALTY", "FAQ"];

const FOOTER_COMPLIANCE_LINKS = [
  "Privacy Policy",
  "Terms of Engagement",
  "Institutional Disclaimer",
  "Access Control",
];

const FOOTER_LEGAL_LINKS = [
  "Reporting Portal",
  "Licensing Bureau",
  "Audit Archive",
  "Standard 144 Documentation",
];

const FOOTER_SUPPORT_LINKS = [
  "General Counsel FAQ",
  "Regulatory Updates",
  "Dispute Resolution",
  "Liability Policy",
];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function TopNavDesktop() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="font-black text-[#1B365D] tracking-tighter text-xl">JuriScript</span>
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className={`text-[12px] font-semibold tracking-wider transition-colors ${
                  link === "ROLE GUIDES"
                    ? "text-[#1B365D] border-b-2 border-[#1B365D] pb-0.5"
                    : "text-[#44474e] hover:text-[#1B365D]"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-slate-50 rounded-full" aria-label="Search">
            <span className="material-symbols-outlined text-[#1B365D] text-[20px]">search</span>
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-full" aria-label="Back">
            <span className="material-symbols-outlined text-[#1B365D] text-[20px]">arrow_back</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function RequirementRow({ card }: { card: RequirementCard }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
      <div className="w-11 h-11 rounded-full bg-[#008080]/10 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-[#008080] text-[22px]">{card.icon}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-[#44474e] uppercase tracking-wider">{card.ref}</span>
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
            card.priorityLevel === "critical"
              ? "bg-[#ba1a1a]/10 text-[#ba1a1a]"
              : "bg-[#008080]/10 text-[#008080]"
          }`}>
            {card.priorityLevel === "critical" ? "Critical Priority" : "High Priority"}
          </span>
        </div>
        <h3 className="font-semibold text-[16px] text-[#1B365D]">{card.title}</h3>
        <p className="text-[13px] text-[#44474e] mt-1">{card.description}</p>
      </div>
      <button className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#1B365D] flex items-center gap-1 hover:underline">
        VIEW RULE
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      </button>
    </div>
  );
}

function DecisionTreeSidebar() {
  return (
    <div className="bg-[#1B365D] rounded-2xl p-6 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="font-bold text-[20px] text-white mb-1">Decision Trees</h3>
        <p className="text-[13px] text-[#87a0cd] mb-5">Interactive workflows for real-time regulatory actions.</p>
        {[
          { icon: "refresh", title: "Recalibration Protocol", sub: "Diagnostic flow for equipment deviation." },
          { icon: "coronavirus", title: "Contamination Assessment", sub: "Legal determination tree for batch recall scenarios." },
        ].map((flow) => (
          <div
            key={flow.title}
            className="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center gap-3 mb-3 cursor-pointer hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[#008080] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              {flow.icon}
            </span>
            <div className="flex-1">
              <p className="text-white font-semibold text-[13px]">{flow.title}</p>
              <p className="text-[#87a0cd] text-[11px] mt-0.5">{flow.sub}</p>
            </div>
            <span className="material-symbols-outlined text-[#008080] text-[16px]">chevron_right</span>
          </div>
        ))}
        <button className="w-full mt-2 bg-[#008080] text-white py-3 rounded-lg font-bold text-[13px] hover:bg-[#006666] transition-colors">
          Launch Full Tool
        </button>
      </div>
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#008080]/10 rounded-full blur-2xl -mr-14 -mt-14" />
    </div>
  );
}

function CitedLegislationBlock() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mt-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-[#1B365D] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
        <h3 className="font-bold text-[18px] text-[#1B365D]">Cited Legislation</h3>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#44474e] mb-1">Rule 4.2-A — Compliance Act 1998</p>
        <p className="text-[13px] text-[#44474e] leading-relaxed italic">
          &quot;Any manufacturer failing to maintain synchronized laboratory records for a period exceeding seven solar days shall be subject to immediate administrative suspension of site license 11-B...&quot;
        </p>
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
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#008080] text-[14px]">lock</span>
              <span className="text-[11px] text-[#aec7f7]">Encrypted Connection Active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#008080] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
              <span className="text-[11px] text-[#aec7f7]">Confidential Regulatory Environment</span>
            </div>
            <p className="text-[11px] text-[#87a0cd] mt-3">© 2024 JuriScript Institutional Systems. All rights reserved.</p>
          </div>
          {[
            { heading: "Compliance Resources", links: FOOTER_COMPLIANCE_LINKS },
            { heading: "Legal Support", links: FOOTER_LEGAL_LINKS },
            { heading: "Legal Links", links: FOOTER_SUPPORT_LINKS },
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
      </div>
    </footer>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function ManufacturerGuideDesktopV2() {
  const [activeReqTab] = useState("all");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNavDesktop />

      <main className="max-w-[1280px] mx-auto px-8 py-10">
        {/* Page header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#008080] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              Active Role: Manufacturer
            </span>
          </div>
          <h1 className="font-bold text-[36px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
            Manufacturer Compliance Guide
          </h1>
          <p className="text-[15px] text-[#44474e] max-w-2xl">
            Standard Operating Procedures — A definitive regulatory framework for pharmaceutical manufacturing. All protocols must adhere to the Drug and Cosmetics Act provisions to ensure high-grade production quality and statutory safety standards.
          </p>
          <p className="text-[13px] text-[#ba1a1a] font-medium mt-3">
            Non-compliance may result in immediate suspension of license under Rule 85.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_320px] gap-8">
          {/* Main content */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-[24px] text-[#1B365D] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#008080] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Critical Requirements
              </h2>
              <button className="text-[12px] font-bold uppercase tracking-wider text-[#1B365D] flex items-center gap-1 hover:underline">
                VIEW ALL REQUIREMENTS
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            <div className="space-y-4">
              {REQUIREMENTS.map((card) => (
                <RequirementRow key={card.id} card={card} />
              ))}
            </div>
            <CitedLegislationBlock />
          </div>

          {/* Sidebar */}
          <div>
            <DecisionTreeSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
