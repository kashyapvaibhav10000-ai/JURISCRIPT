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
      "License requirements",
      "GMP compliance",
    ],
    ctaLabel: "VIEW MATRIX",
  },
  {
    id: "importer",
    icon: "import_export",
    title: "Importer",
    requirements: [
      "Import regulations",
      "Prohibited drugs",
    ],
    ctaLabel: "VIEW MATRIX",
  },
  {
    id: "retailer",
    icon: "medication",
    title: "Retailer / Chemist",
    requirements: [
      "Licensing",
      "Prescription records",
    ],
    ctaLabel: "VIEW MATRIX",
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

function ComplianceAlertBanner() {
  return (
    <div className="w-full bg-[#ffdad6] border-b border-[#ba1a1a]/20 py-2.5 px-5 flex items-center gap-2">
      <span className="text-[18px]">⚠️</span>
      <p className="text-[11px] font-medium text-[#ba1a1a]">
        This is not legal advice. Always verify with CDSCO or a qualified legal professional.
      </p>
    </div>
  );
}

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

function HeroSection() {
  return (
    <div className="bg-[#1B365D] text-white px-5 py-8">
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#aec7f7] mb-2">Legal Intelligence</p>
      <h1 className="font-black text-[32px] leading-[1.1] tracking-[-0.02em] text-white mb-3">
        JuriScript
      </h1>
      <p className="text-[14px] text-[#aec7f7] leading-relaxed">
        Navigate the Drugs and Cosmetics Act with clinical precision.
      </p>
    </div>
  );
}

function SelectRoleSection() {
  return (
    <section className="px-5 mb-6">
      <h2 className="font-bold text-[20px] text-[#1B365D] mb-4 mt-6">Select Your Role</h2>
      <div className="space-y-4">
        {ROLES.map((role) => (
          <div
            key={role.id}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#1B365D]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#1B365D] text-[24px]">{role.icon}</span>
              </div>
              <h3 className="font-bold text-[18px] text-[#1B365D]">{role.title}</h3>
            </div>
            <ul className="space-y-2 mb-5">
              {role.requirements.map((req) => (
                <li key={req} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-[#008080] text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-[14px] text-[#44474e]">{req}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-[#1B365D] text-white rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 active:bg-[#152a4a] transition-colors">
              {role.ctaLabel}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function PenaltyMatrixSection() {
  return (
    <section className="px-5 mb-6">
      <div className="bg-[#1B365D]/5 border border-[#1B365D]/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#1B365D] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
          <h2 className="font-bold text-[18px] text-[#1B365D]">Penalty Matrix</h2>
        </div>
        <button className="w-full mt-4 py-3 bg-[#1B365D] text-white rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 active:bg-[#152a4a] transition-colors">
          VIEW MATRIX
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}

function LegalQuoteSection() {
  return (
    <section className="px-5 mb-6">
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <span className="material-symbols-outlined text-[#1B365D] text-[28px] mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>
          format_quote
        </span>
        <p className="text-[14px] text-[#44474e] italic leading-relaxed">
          &quot;No person shall manufacture for sale or for distribution, or sell, or stock or exhibit...&quot;
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#1B365D]">Section 18</p>
          <button className="text-[11px] font-semibold text-[#008080] flex items-center gap-0.5 hover:underline">
            Read Full Text
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
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

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState<string>("home");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <ComplianceAlertBanner />
      <TopNav />
      <HeroSection />

      <div className="pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        <SelectRoleSection />
        <PenaltyMatrixSection />
        <LegalQuoteSection />
      </div>

      <BottomNav activeId={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
