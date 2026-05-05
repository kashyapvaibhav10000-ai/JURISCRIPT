"use client";

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
  priority: "critical" | "high";
  ctaLabel: string;
}

interface DecisionFlow {
  icon: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
}

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const REQUIREMENTS: RequirementCard[] = [
  {
    id: "mfg-license",
    ref: "Section 144",
    icon: "badge",
    title: "Manufacturing License",
    description:
      "Verification of Form 25 and 28 validity. Ensure all active ingredients and dosage forms are explicitly listed in the license schedule.",
    priority: "critical",
    ctaLabel: "VIEW RULE",
  },
  {
    id: "gmp",
    ref: "Schedule M",
    icon: "fact_check",
    title: "GMP Compliance",
    description:
      "Good Manufacturing Practices audit trail. Premises, waste disposal, and health monitoring documentation for all technical staff.",
    priority: "critical",
    ctaLabel: "VIEW RULE",
  },
  {
    id: "lab-records",
    ref: "Lab-Ref-4",
    icon: "biotech",
    title: "Laboratory Records",
    description:
      "Analytical reports of raw materials and finished products. Master formula records and stability data maintenance requirements.",
    priority: "high",
    ctaLabel: "VIEW RULE",
  },
  {
    id: "bmr",
    ref: "BMR-Track",
    icon: "inventory_2",
    title: "Batch Manufacturing Records",
    description:
      "Chronological logging of manufacturing steps. Traceability from starting materials to final distribution batches.",
    priority: "high",
    ctaLabel: "VIEW RULE",
  },
];

const DECISION_FLOWS: DecisionFlow[] = [
  {
    icon: "refresh",
    title: "Recalibration Protocol",
    subtitle: "Step-by-step logic for equipment failure responses.",
    ctaLabel: "Start Protocol",
  },
  {
    icon: "coronavirus",
    title: "Contamination Assessment",
    subtitle: "Legal determination tree for batch recall scenarios.",
    ctaLabel: "Run Assessment",
  },
];

const NAV_LINKS = ["TOPIC MAP", "ROLE GUIDES", "PENALTY", "FAQ"];

const BOTTOM_NAV = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "account_tree", label: "Topic Map", id: "topic-map" },
  { icon: "assignment_ind", label: "Role Guides", id: "role-guides" },
  { icon: "gavel", label: "Penalty", id: "penalty" },
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
        </div>
      </div>
    </header>
  );
}

function PriorityBadge({ priority }: { priority: "critical" | "high" }) {
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded ${
        priority === "critical"
          ? "bg-[#ba1a1a]/10 text-[#ba1a1a]"
          : "bg-[#008080]/10 text-[#008080]"
      }`}
    >
      {priority === "critical" ? "Critical Priority" : "High Priority"}
    </span>
  );
}

function RequirementCardItem({ card }: { card: RequirementCard }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#008080]/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#008080] text-[22px]">{card.icon}</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-[#44474e] uppercase tracking-wider">{card.ref}</p>
            <h3 className="font-semibold text-[16px] text-[#1B365D]">{card.title}</h3>
          </div>
        </div>
        <PriorityBadge priority={card.priority} />
      </div>
      <p className="text-[14px] text-[#44474e] leading-relaxed mb-5">{card.description}</p>
      <button className="text-[#1B365D] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 hover:underline">
        {card.ctaLabel}
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </button>
    </div>
  );
}

function SidebarInfo() {
  return (
    <aside className="space-y-6">
      {/* Active role badge */}
      <div className="bg-[#1B365D] text-white rounded-lg p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aec7f7] mb-1">Active Role</p>
        <p className="font-bold text-lg">Manufacturer</p>
        <p className="text-[11px] text-[#87a0cd] mt-1">SOP-2024-MFG</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#008080]" />
          <span className="text-[11px] text-[#90efef]">System Active</span>
        </div>
      </div>

      {/* Non-compliance warning */}
      <div className="bg-[#ffdad6] border border-[#ba1a1a]/20 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-[#ba1a1a] text-[18px] shrink-0 mt-0.5">warning</span>
          <p className="text-[13px] text-[#ba1a1a] font-medium leading-snug">
            Non-compliance may result in immediate suspension of license under Rule 85.
          </p>
        </div>
      </div>

      {/* Decision Trees */}
      <div className="bg-[#1B365D] rounded-xl p-5">
        <h3 className="font-semibold text-[18px] text-white mb-1">Decision Trees</h3>
        <p className="text-[13px] text-[#87a0cd] mb-4">Interactive workflows for real-time regulatory actions.</p>
        <div className="space-y-3">
          {DECISION_FLOWS.map((flow) => (
            <div
              key={flow.title}
              className="bg-white/10 border border-white/20 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-white/20 transition-colors"
            >
              <span
                className="material-symbols-outlined text-[#008080] text-[22px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {flow.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-[13px] truncate">{flow.title}</p>
                <p className="text-[#87a0cd] text-[11px]">{flow.subtitle}</p>
              </div>
              <span className="material-symbols-outlined text-[#008080] text-[18px]">chevron_right</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-[#008080] text-white py-3 rounded-lg font-bold text-[13px] hover:bg-[#006666] transition-colors">
          Launch Full Tool
        </button>
      </div>
    </aside>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function ManufacturerGuideDesktop() {
  const [activeNav, setActiveNav] = useState<string>("role-guides");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNavDesktop />

      <main className="max-w-[1280px] mx-auto px-8 py-10">
        {/* Page header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#008080] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              Role: Manufacturer
            </span>
            <span className="text-[11px] font-semibold text-slate-400">SOP-2024-MFG</span>
          </div>
          <h1 className="font-bold text-[36px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
            Manufacturer Compliance Guide
          </h1>
          <p className="text-[16px] text-[#44474e] max-w-2xl">
            Standard Operating Procedures — A definitive regulatory framework for pharmaceutical manufacturing. All protocols must adhere to the Drug and Cosmetics Act provisions.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_320px] gap-8">
          {/* Main content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#008080] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <h2 className="font-semibold text-[24px] text-[#1B365D]">Critical Requirements</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {REQUIREMENTS.map((card) => (
                <RequirementCardItem key={card.id} card={card} />
              ))}
            </div>
            <button className="mt-6 w-full py-3.5 bg-slate-100 text-[#1B365D] font-bold text-[11px] uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-colors">
              VIEW ALL REQUIREMENTS
            </button>
          </div>

          {/* Sidebar */}
          <SidebarInfo />
        </div>
      </main>

      {/* Bottom nav */}
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
