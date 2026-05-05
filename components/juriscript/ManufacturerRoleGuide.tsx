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
  priorityLevel: "critical" | "high";
  ctaLabel: string;
  updatedAgo: string;
}

interface DecisionFlow {
  icon: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
}

interface CitedLegislation {
  ref: string;
  title: string;
  description: string;
}

interface ComplianceRole {
  title: string;
  status: "active" | "pending" | "repealed";
}

type NavItem = { icon: string; label: string; id: string };

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const COMPLIANCE_ROLES: ComplianceRole[] = [
  { title: "Chief Manufacturing Officer", status: "active" },
  { title: "Quality Assurance Manager", status: "active" },
  { title: "Lab Technical Director", status: "pending" },
  { title: "Supply Chain Compliance", status: "active" },
  { title: "Legal Counsel (Pharma)", status: "repealed" },
];

const REQUIREMENTS: RequirementCard[] = [
  {
    id: "mfg-license",
    ref: "Section 144",
    icon: "precision_manufacturing",
    title: "Manufacturing License",
    description: "Valid until December 2025 under current jurisdiction.",
    priorityLevel: "critical",
    ctaLabel: "EXECUTE PROTOCOL",
    updatedAgo: "Updated 2h ago",
  },
  {
    id: "gmp",
    ref: "Schedule M",
    icon: "verified_user",
    title: "GMP Compliance",
    description: "Good Manufacturing Practice verification.",
    priorityLevel: "critical",
    ctaLabel: "EXECUTE PROTOCOL",
    updatedAgo: "Updated 1d ago",
  },
  {
    id: "lab-records",
    ref: "Lab-Ref-4",
    icon: "biotech",
    title: "Laboratory Records",
    description: "Chain of custody for chemical assays.",
    priorityLevel: "high",
    ctaLabel: "EXECUTE PROTOCOL",
    updatedAgo: "Updated 15m ago",
  },
  {
    id: "bmr",
    ref: "BMR-Track",
    icon: "inventory_2",
    title: "Batch Manufacturing Records",
    description: "Traceability from starting materials to final distribution batches.",
    priorityLevel: "high",
    ctaLabel: "EXECUTE PROTOCOL",
    updatedAgo: "Updated 2h ago",
  },
];

const DECISION_FLOWS: DecisionFlow[] = [
  {
    icon: "refresh",
    title: "Recalibration Protocol",
    subtitle: "Diagnostic flow for equipment deviation.",
    ctaLabel: "EXECUTE PROTOCOL",
  },
  {
    icon: "coronavirus",
    title: "Contamination Assessment",
    subtitle: "Steps for environmental breach in sterile zones.",
    ctaLabel: "BEGIN ASSESSMENT",
  },
];

const CITED_LEGISLATION: CitedLegislation[] = [
  {
    ref: "Rule 4.2-A",
    title: "Compliance Act 1998",
    description:
      "Any manufacturer failing to maintain synchronized laboratory records for a period exceeding seven solar days shall be subject to immediate administrative suspension of site license 11-B...",
  },
  {
    ref: "Section 402",
    title: "Penalties",
    description: "Regulatory penalties applicable under Section 402 for non-compliance.",
  },
  {
    ref: "Section 144",
    title: "Facility Upgrades",
    description: "Requirements for facility designation and mandatory upgrades.",
  },
];

const NAV_ITEMS: NavItem[] = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "account_tree", label: "Topic Map", id: "topic-map" },
  { icon: "assignment_ind", label: "Role Guides", id: "role-guides" },
  { icon: "gavel", label: "Penalty", id: "penalty" },
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function statusColor(status: ComplianceRole["status"]): string {
  switch (status) {
    case "active":
      return "bg-[#008080] text-white";
    case "pending":
      return "bg-amber-100 text-amber-800 border border-amber-300";
    case "repealed":
      return "bg-[#ba1a1a]/10 text-[#ba1a1a] border border-[#ba1a1a]/20";
  }
}

function statusLabel(status: ComplianceRole["status"]): string {
  switch (status) {
    case "active":
      return "ACTIVE / VALID";
    case "pending":
      return "PENDING REVIEW";
    case "repealed":
      return "REPEALED / CRITICAL";
  }
}

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

function DashboardInfoBar() {
  return (
    <div className="bg-[#1B365D] text-white px-5 py-3">
      <div className="flex items-center justify-between text-[11px]">
        <div>
          <p className="font-bold text-[#aec7f7] uppercase tracking-wider text-[9px] mb-0.5">Institutional Dashboard</p>
          <p className="font-semibold">Next Audit Cycle: <span className="text-[#90efef]">14 days</span></p>
        </div>
        <div className="text-right">
          <p className="text-[#aec7f7] text-[9px] uppercase tracking-wider mb-0.5">Compliance Roles</p>
          <p className="font-semibold">{COMPLIANCE_ROLES.length} Active</p>
        </div>
      </div>
    </div>
  );
}

function ComplianceRolesSection() {
  return (
    <section className="mb-6">
      <h2 className="font-semibold text-[18px] text-[#1B365D] mb-3">Compliance Roles</h2>
      <div className="space-y-2">
        {COMPLIANCE_ROLES.map((role) => (
          <div
            key={role.title}
            className="bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-between shadow-sm"
          >
            <p className="font-medium text-[13px] text-[#1B365D]">{role.title}</p>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${statusColor(role.status)}`}>
              {statusLabel(role.status)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RequirementCardItem({ card }: { card: RequirementCard }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#008080]/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#008080] text-[20px]">{card.icon}</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#44474e]">{card.ref}</p>
            <h3 className="font-semibold text-[15px] text-[#1B365D]">{card.title}</h3>
          </div>
        </div>
        <span
          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
            card.priorityLevel === "critical"
              ? "bg-[#ba1a1a]/10 text-[#ba1a1a]"
              : "bg-[#008080]/10 text-[#008080]"
          }`}
        >
          {card.priorityLevel === "critical" ? "Critical" : "High"}
        </span>
      </div>
      <p className="text-[13px] text-[#44474e] mb-3">{card.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-slate-400">{card.updatedAgo}</span>
        <button className="text-[#1B365D] font-bold text-[10px] flex items-center gap-0.5 uppercase tracking-wider">
          {card.ctaLabel}
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

function DecisionTreeSection() {
  return (
    <section className="bg-[#1B365D] rounded-xl p-6 mb-6 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-semibold text-[20px] text-white mb-1">Decision Trees</h2>
        <p className="text-[13px] text-[#87a0cd] mb-4">Interactive workflows for real-time regulatory actions.</p>
        <div className="space-y-3">
          {DECISION_FLOWS.map((flow) => (
            <div
              key={flow.title}
              className="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center gap-3"
            >
              <span
                className="material-symbols-outlined text-[#008080] text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {flow.icon}
              </span>
              <div className="flex-1">
                <p className="text-white font-semibold text-[13px]">{flow.title}</p>
                <p className="text-[#87a0cd] text-[11px] mt-0.5">{flow.subtitle}</p>
              </div>
              <button className="text-[#90efef] font-bold text-[10px] uppercase tracking-wider">
                {flow.ctaLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#008080]/10 rounded-full blur-2xl -mr-16 -mt-16" />
    </section>
  );
}

function CitedLegislationSection() {
  return (
    <section className="mb-6">
      <h2 className="font-semibold text-[18px] text-[#1B365D] mb-3">Cited Legislation</h2>
      <div className="space-y-3">
        {CITED_LEGISLATION.map((item) => (
          <div key={item.ref} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#1B365D] text-[16px]">gavel</span>
              <span className="text-[11px] font-bold text-[#1B365D] uppercase tracking-wider">{item.ref}</span>
              <span className="text-[11px] text-[#44474e]">{item.title}</span>
            </div>
            <p className="text-[13px] text-[#44474e] leading-relaxed line-clamp-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecurityFooter() {
  return (
    <div className="bg-[#1B365D]/5 border border-slate-200 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-[#008080] text-[16px]">lock</span>
        <span className="text-[11px] font-bold text-[#1B365D]">Confidential Regulatory Environment</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[#008080] text-[14px]">verified</span>
        <span className="text-[11px] text-[#44474e]">Encrypted Connection Active</span>
      </div>
      <p className="text-[10px] text-slate-400 mt-2">© 2024 JuriScript Institutional Systems. All rights reserved.</p>
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
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}>
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

export default function ManufacturerRoleGuide() {
  const [activeNav, setActiveNav] = useState<string>("role-guides");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNav />
      <DashboardInfoBar />

      <main className="px-5 pt-6 pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        {/* Page header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#008080] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              Active Role: Manufacturer
            </span>
          </div>
          <h1 className="font-bold text-[26px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-2">
            Manufacturer Compliance Guide
          </h1>
          <p className="text-[14px] text-[#44474e]">
            Standard Operating Procedures — A definitive regulatory framework for pharmaceutical manufacturing. All protocols must adhere to the Drug and Cosmetics Act provisions.
          </p>
        </div>

        <ComplianceRolesSection />

        {/* Critical Requirements */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#008080] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <h2 className="font-semibold text-[18px] text-[#1B365D]">Critical Requirements</h2>
          </div>
          <div className="space-y-4">
            {REQUIREMENTS.map((card) => (
              <RequirementCardItem key={card.id} card={card} />
            ))}
          </div>
          <button className="mt-4 w-full py-3.5 bg-slate-100 text-[#1B365D] font-bold text-[11px] uppercase tracking-widest rounded-lg active:bg-slate-200 transition-colors">
            VIEW ALL REQUIREMENTS
          </button>
        </section>

        <DecisionTreeSection />
        <CitedLegislationSection />
        <SecurityFooter />
      </main>

      <BottomNav activeId={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
