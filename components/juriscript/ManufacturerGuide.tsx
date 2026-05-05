"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface RequirementCard {
  id: string;
  number: string;
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
}

// ------------------------------------------------------------
// Data (sourced from Stitch HTML only — no invented content)
// ------------------------------------------------------------

const REQUIREMENTS: RequirementCard[] = [
  {
    id: "manufacturing-license",
    number: "01",
    icon: "verified_user",
    title: "Manufacturing License",
    description:
      "Validated authorization from the Central Licensing Authority is mandatory before commencement.",
    priority: "critical",
    ctaLabel: "Update Status",
  },
  {
    id: "gmp-compliance",
    number: "02",
    icon: "fact_check",
    title: "GMP Compliance",
    description:
      "Adherence to Good Manufacturing Practices (GMP) ensures consistent quality control.",
    priority: "critical",
    ctaLabel: "Review SOP",
  },
  {
    id: "laboratory-records",
    number: "03",
    icon: "biotech",
    title: "Laboratory Records",
    description:
      "Detailed testing data and analytical reports must be preserved for five fiscal years.",
    priority: "high",
    ctaLabel: "Access Vault",
  },
];

const DECISION_FLOWS: DecisionFlow[] = [
  {
    icon: "refresh",
    title: "Recalibration Protocol",
    subtitle: "Diagnostic flow for equipment deviation.",
  },
  {
    icon: "coronavirus",
    title: "Contamination Assessment",
    subtitle: "Steps for environmental breach in sterile zones.",
  },
];

type NavItem = {
  icon: string;
  label: string;
  id: string;
};

const NAV_ITEMS: NavItem[] = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "account_tree", label: "Topic Map", id: "topic-map" },
  { icon: "assignment_ind", label: "Role Guides", id: "role-guides" },
  { icon: "gavel", label: "Penalty", id: "penalty" },
];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function AlertBanner() {
  return (
    <div className="w-full bg-[#ba1a1a] py-2.5 px-[20px] flex items-start justify-center text-white sticky top-0 z-[60]">
      <span
        className="material-symbols-outlined mr-2 text-[18px] shrink-0 mt-0.5"
        aria-hidden="true"
      >
        warning
      </span>
      <p className="font-semibold text-[10px] uppercase tracking-wider leading-tight">
        Non-compliance may result in immediate suspension of operating licenses.
      </p>
    </div>
  );
}

function TopNav() {
  return (
    <header className="sticky top-[38px] w-full z-50 flex items-center justify-between px-[20px] h-14 bg-white border-b border-slate-200">
      <div className="flex items-center gap-3">
        <span className="font-black text-[#1B365D] tracking-tighter text-lg">
          JuriScript
        </span>
        <div className="h-4 w-[1px] bg-slate-200" />
        <div className="bg-[#008080]/10 text-[#008080] px-2 py-0.5 rounded-full font-semibold text-[9px] uppercase tracking-tighter border border-[#008080]/20">
          System Active
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="p-2 active:bg-slate-50 rounded-full transition-colors"
          aria-label="Search"
        >
          <span className="material-symbols-outlined text-[#1B365D] text-[20px]">
            search
          </span>
        </button>
        <button
          className="p-2 active:bg-slate-50 rounded-full transition-colors"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-[#1B365D] text-[20px]">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}

function PriorityBadge({ priority }: { priority: "critical" | "high" }) {
  if (priority === "critical") {
    return (
      <span className="text-[#ba1a1a] font-semibold text-[10px] uppercase tracking-wider bg-[#ba1a1a]/10 px-2 py-1 rounded">
        Critical Priority
      </span>
    );
  }
  return (
    <span className="text-[#008080] font-semibold text-[10px] uppercase tracking-wider bg-[#008080]/10 px-2 py-1 rounded">
      High Priority
    </span>
  );
}

function RequirementCardItem({ card }: { card: RequirementCard }) {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded active:scale-[0.98] transition-all shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div className="w-10 h-10 rounded-full bg-[#008080]/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#008080] text-2xl">
            {card.icon}
          </span>
        </div>
        <span className="text-slate-200 font-bold text-lg">{card.number}</span>
      </div>
      <h3 className="font-semibold text-[18px] leading-[1.3] text-[#1B365D] mb-2">
        {card.title}
      </h3>
      <p className="text-[15px] leading-[1.5] font-normal text-[#44474e] mb-5">
        {card.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <PriorityBadge priority={card.priority} />
        <button className="text-[#1B365D] font-bold text-[11px] flex items-center">
          {card.ctaLabel}
          <span className="material-symbols-outlined text-sm ml-1">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

function CriticalRequirementsSection() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-[24px] leading-[1.3] text-[#1B365D] flex items-center gap-2">
          Critical Requirements
          <span className="w-1.5 h-1.5 rounded-full bg-[#008080]" />
        </h2>
      </div>
      <div className="space-y-4">
        {REQUIREMENTS.map((card) => (
          <RequirementCardItem key={card.id} card={card} />
        ))}
      </div>
      <button className="w-full mt-6 py-4 bg-slate-100 text-[#1B365D] font-bold text-[11px] uppercase tracking-widest rounded active:bg-slate-200 transition-colors">
        View Full Checklist
      </button>
    </section>
  );
}

function DecisionFlowItem({ flow }: { flow: DecisionFlow }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg flex items-center gap-4 active:bg-white/20 transition-all">
      <span
        className="material-symbols-outlined text-[#008080] text-2xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {flow.icon}
      </span>
      <div className="flex-1">
        <h4 className="text-white font-bold text-base leading-tight">
          {flow.title}
        </h4>
        <p className="text-[#87a0cd]/70 text-xs mt-1">{flow.subtitle}</p>
      </div>
      <span className="material-symbols-outlined text-[#008080]">
        chevron_right
      </span>
    </div>
  );
}

function DecisionTreesSection() {
  return (
    <section className="bg-[#1B365D] p-6 rounded-xl relative overflow-hidden mb-6">
      <div className="relative z-10">
        <h2 className="font-semibold text-[24px] leading-[1.3] text-white mb-2">
          Decision Trees
        </h2>
        <p className="text-[15px] leading-[1.5] text-[#87a0cd]/80 text-sm mb-6">
          Interactive workflows for real-time regulatory actions.
        </p>
        <div className="space-y-3">
          {DECISION_FLOWS.map((flow) => (
            <DecisionFlowItem key={flow.title} flow={flow} />
          ))}
        </div>
        <button className="w-full mt-6 bg-[#008080] text-white py-3.5 rounded font-bold transition-transform active:scale-95 shadow-lg">
          Launch Full Tool Suite
        </button>
      </div>
      {/* Decorative background texture */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#008080]/10 rounded-full blur-2xl -mr-16 -mt-16" />
    </section>
  );
}

function BottomNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
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
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
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

export default function ManufacturerGuide() {
  const [activeNav, setActiveNav] = useState<string>("role-guides");

  return (
    <div className="text-[#1a1b1e]">
      {/* Alert banner */}
      <AlertBanner />

      {/* Top nav */}
      <TopNav />

      <div className="flex flex-col min-h-screen">
        <main className="flex-1 px-[20px] pt-6 pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
          {/* Page header */}
          <div className="mb-8 border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-[#008080] text-white px-2 py-1 rounded font-semibold text-[10px]">
                ROLE: MANUFACTURER
              </span>
              <span className="text-slate-400 font-semibold text-[10px]">
                SOP-2024-MFG
              </span>
            </div>
            <h1 className="font-bold text-[28px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
              Manufacturer Compliance Guide
            </h1>
            <p className="text-[18px] leading-[1.5] font-medium text-[#44474e] italic">
              &quot;A definitive regulatory framework for ensuring high-standard
              manufacturing through rigorous documentation.&quot;
            </p>
          </div>

          {/* Sections */}
          <CriticalRequirementsSection />
          <DecisionTreesSection />
        </main>
      </div>

      {/* Bottom nav */}
      <BottomNav activeId={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
