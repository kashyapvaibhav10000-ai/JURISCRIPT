"use client";

// Screen 6: "Manufacturer Guide - Desktop" (screenId 7663c1f488f74712b41f47480d329299)
// Mobile-width (390px) desktop variant — minimal nav + compliance layout

import { useState } from "react";

type NavItem = { icon: string; label: string; id: string };

const NAV_ITEMS: NavItem[] = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "account_tree", label: "Topic Map", id: "topic-map" },
  { icon: "assignment_ind", label: "Role Guides", id: "role-guides" },
  { icon: "gavel", label: "Penalty", id: "penalty" },
];

export default function ManufacturerGuideDesktopAlt() {
  const [activeNav, setActiveNav] = useState<string>("role-guides");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      {/* Header */}
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

      <main className="px-5 pt-6 pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        {/* Role badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[#008080] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
            Role: Manufacturer
          </span>
          <span className="text-[11px] font-semibold text-slate-400">SOP-2024-MFG</span>
        </div>

        <h1 className="font-bold text-[26px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
          Manufacturer Compliance Guide
        </h1>
        <p className="text-[14px] text-[#44474e] mb-6">
          Standard Operating Procedures — A definitive regulatory framework for ensuring high-standard manufacturing through rigorous documentation and quality control.
        </p>

        {/* Non-compliance warning */}
        <div className="flex items-start gap-2 bg-[#ffdad6] border border-[#ba1a1a]/20 rounded-lg p-4 mb-6">
          <span className="material-symbols-outlined text-[#ba1a1a] text-[18px] shrink-0">warning</span>
          <p className="text-[13px] text-[#ba1a1a] font-medium">
            Non-compliance may result in immediate suspension of operating licenses and criminal liability.
          </p>
        </div>

        {/* Status card */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#44474e]">System Status</p>
              <p className="font-bold text-[#1B365D] text-[16px] mt-0.5">Active Role: Manufacturer</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Ref ID: SOP-2024-MFG</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008080]" />
              <span className="text-[11px] font-semibold text-[#008080]">System Active</span>
            </div>
          </div>
        </div>

        {/* Critical Requirements */}
        <h2 className="font-semibold text-[20px] text-[#1B365D] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#008080] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Critical Requirements
        </h2>
        <div className="space-y-3 mb-6">
          {[
            { icon: "verified_user", label: "Manufacturing License", note: "Priority: Critical" },
            { icon: "fact_check", label: "GMP Compliance", note: "Priority: Critical" },
            { icon: "biotech", label: "Laboratory Records", note: "Priority: High" },
            { icon: "inventory", label: "Batch Manufacturing Records", note: "Priority: High" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-3 shadow-sm"
            >
              <div className="w-9 h-9 rounded-full bg-[#008080]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#008080] text-[18px]">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[14px] text-[#1B365D]">{item.label}</p>
                <p className="text-[11px] text-[#44474e]">{item.note}</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-[18px]">chevron_right</span>
            </div>
          ))}
        </div>

        <button className="w-full py-3.5 bg-slate-100 text-[#1B365D] font-bold text-[11px] uppercase tracking-widest rounded-lg active:bg-slate-200 transition-colors mb-6">
          View Full Checklist
        </button>
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center bg-white border-t border-slate-200 h-16 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex flex-col items-center justify-center flex-1 transition-colors ${
                isActive ? "text-[#1B365D] font-bold" : "text-slate-400"
              }`}
            >
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                {item.icon}
              </span>
              <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
