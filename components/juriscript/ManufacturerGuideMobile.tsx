"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface RequirementCard {
  id: string;
  priority: "01" | "02" | "03" | "04";
  statusLabel: string;
  icon: string;
  title: string;
  description: string;
  priorityLevel: "critical" | "high";
}

interface DecisionFlow {
  icon: string;
  title: string;
  subtitle: string;
}

type NavItem = { icon: string; label: string; id: string };

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const REQUIREMENTS: RequirementCard[] = [
  {
    id: "mfg-license",
    priority: "01",
    statusLabel: "ACTIVE",
    icon: "description",
    title: "Manufacturing License",
    description: "Mandatory Form 25/28 registration under Rule 44. Must be renewed triennially.",
    priorityLevel: "critical",
  },
  {
    id: "gmp",
    priority: "02",
    statusLabel: "GMP",
    icon: "verified",
    title: "GMP Compliance",
    description: "Schedule M adherence for Good Manufacturing Practices in facility design.",
    priorityLevel: "critical",
  },
  {
    id: "lab-records",
    priority: "03",
    statusLabel: "RECORDS",
    icon: "biotech",
    title: "Laboratory Records",
    description: "Continuous analytical monitoring of raw materials and finished products.",
    priorityLevel: "high",
  },
  {
    id: "bmr",
    priority: "04",
    statusLabel: "CRITICAL",
    icon: "inventory",
    title: "Batch Manufacturing Records",
    description: "Traceable logs for every production cycle (BMR) maintained for 5 years.",
    priorityLevel: "high",
  },
];

const DECISION_FLOWS: DecisionFlow[] = [
  {
    icon: "warning",
    title: "Incident Response Flow",
    subtitle: "Step-by-step protocol for manufacturing incidents.",
  },
  {
    icon: "autorenew",
    title: "Licensing Renewal Path",
    subtitle: "Renewal checklist and timeline management.",
  },
  {
    icon: "block",
    title: "Batch Rejection Protocol",
    subtitle: "Procedures for failed batch disposition.",
  },
];

const NAV_ITEMS: NavItem[] = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "account_tree", label: "Topic Map", id: "topic-map" },
  { icon: "assignment_ind", label: "Role Guides", id: "role-guides" },
  { icon: "gavel", label: "Penalty", id: "penalty" },
];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function TopNav() {
  return (
    <header className="sticky top-0 w-full z-50 flex items-center justify-between px-5 h-14 bg-white border-b border-slate-200">
      <div className="flex items-center gap-2">
        <button className="p-1.5 active:bg-slate-50 rounded-full" aria-label="Back">
          <span className="material-symbols-outlined text-[#1B365D] text-[20px]">arrow_back</span>
        </button>
        <span className="font-black text-[#1B365D] tracking-tighter text-lg">JuriScript</span>
      </div>
      <button className="p-2 active:bg-slate-50 rounded-full" aria-label="Search">
        <span className="material-symbols-outlined text-[#1B365D] text-[20px]">search</span>
      </button>
    </header>
  );
}

function PriorityBadge({ level }: { level: "critical" | "high" }) {
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
        level === "critical"
          ? "bg-[#ba1a1a]/10 text-[#ba1a1a]"
          : "bg-[#008080]/10 text-[#008080]"
      }`}
    >
      {level === "critical" ? "Critical Priority" : "High Priority"}
    </span>
  );
}

function RequirementCardItem({ card }: { card: RequirementCard }) {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded shadow-sm active:scale-[0.98] transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-full bg-[#008080]/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#008080] text-[22px]">{card.icon}</span>
        </div>
        <span className="text-slate-200 font-bold text-lg">{card.priority}</span>
      </div>
      <div className="mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#44474e]">{card.statusLabel}</span>
      </div>
      <h3 className="font-semibold text-[17px] text-[#1B365D] mb-2">{card.title}</h3>
      <p className="text-[14px] text-[#44474e] leading-relaxed mb-4">{card.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <PriorityBadge level={card.priorityLevel} />
        <button className="text-[#1B365D] font-bold text-[11px] flex items-center gap-0.5">
          View
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

function CitationQuoteBlock() {
  return (
    <div className="bg-slate-50 border-l-4 border-[#1B365D] p-4 rounded-r-lg my-6">
      <span className="material-symbols-outlined text-[#1B365D] text-[24px] mb-2 block">format_quote</span>
      <p className="text-[14px] text-[#44474e] italic leading-relaxed">
        &quot;Failure to maintain Laboratory Records as per Rule 112 results in immediate suspension of license under the compliance framework.&quot;
      </p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-[#1B365D] mt-3">
        SECTION 144(B) CITATION
      </p>
    </div>
  );
}

function DecisionTreesSection() {
  return (
    <section className="bg-[#1B365D] rounded-xl p-6 relative overflow-hidden mb-6">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[#008080] text-[20px]">account_tree</span>
          <h2 className="font-semibold text-[22px] text-white">Decision Trees</h2>
        </div>
        <p className="text-[13px] text-[#87a0cd]/80 mb-5">
          Interactive workflows for real-time regulatory actions.
        </p>
        <div className="space-y-3">
          {DECISION_FLOWS.map((flow) => (
            <div
              key={flow.title}
              className="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-white/20 transition-colors"
            >
              <span
                className="material-symbols-outlined text-[#008080] text-[22px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {flow.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-[14px]">{flow.title}</p>
                <p className="text-[#87a0cd] text-[11px] mt-0.5">{flow.subtitle}</p>
              </div>
              <span className="material-symbols-outlined text-[#008080] text-[18px]">chevron_right</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#008080]/10 rounded-full blur-2xl -mr-16 -mt-16" />
    </section>
  );
}

function DisclaimerNote() {
  return (
    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <span className="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">warning</span>
      <p className="text-[12px] text-amber-700">
        This guide is for informational purposes only. Consult legal counsel for specific regulatory filings.
      </p>
    </div>
  );
}

function BottomNav({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center bg-white border-t border-slate-200 h-16 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]">
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex flex-col items-center justify-center flex-1 transition-colors ${
              isActive ? "text-[#1B365D] font-bold" : "text-slate-400"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function ManufacturerGuideMobile() {
  const [activeNav, setActiveNav] = useState<string>("role-guides");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNav />

      <main className="px-5 pt-6 pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        {/* Header */}
        <div className="mb-2">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#008080] mb-1">
            REGULATORY COMPLIANCE
          </p>
          <h1 className="font-bold text-[28px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
            Manufacturer Compliance Guide
          </h1>
          <p className="text-[14px] text-[#44474e] leading-relaxed">
            Standard Operating Procedure (SOP) for heavy-scale manufacturing units. This guide outlines the mandatory legal frameworks for industrial operations, licensing, and record-keeping protocols as mandated by Section 42-A.
          </p>
        </div>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0AZ33rhv2AeXnoUgFehPe58scQMdwaITHnJJXsSbP49U8OpYQbwriXj44DxuQ_3vDBynHfF9DViHc5baraz-hxTmzPvd-GfIj08mU9Kb0OWQA1WzWxJGUH1Ae98Af7VbCpmID_EkTLBVnO8jB-kiwm_blDwcnXpm1R-i7PAJyzP-5ivstSiDkrsRsrA5Yn8tYJHjH7SoG9giyBNfeBX3AQPWg"
          alt="compliance diagram"
          className="w-full rounded-lg border border-slate-200 my-5"
        />

        {/* Requirements section */}
        <div className="mb-6">
          <h2 className="font-semibold text-[22px] text-[#1B365D] mb-4">Critical Requirements</h2>
          <div className="space-y-4">
            {REQUIREMENTS.map((card) => (
              <RequirementCardItem key={card.id} card={card} />
            ))}
          </div>
        </div>

        <CitationQuoteBlock />
        <DecisionTreesSection />
        <DisclaimerNote />
      </main>

      <BottomNav activeId={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
