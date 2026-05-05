"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

type OffenceCategory = "all" | "public-safety" | "adulteration" | "corporate-fraud";

interface OffenceEntry {
  id: string;
  section: string;
  status: "critical" | "statutory" | "amended" | "repealed";
  title: string;
  firstConviction: string;
  subsequentConviction: string;
  category: OffenceCategory[];
}

type NavItem = {
  icon: string;
  label: string;
  id: string;
};

// ------------------------------------------------------------
// Data (sourced from Stitch HTML only)
// ------------------------------------------------------------

const OFFENCES: OffenceEntry[] = [
  {
    id: "sec-27a",
    section: "SEC. 27(a)",
    status: "critical",
    title: "Manufacture of Adulterated Drugs",
    firstConviction: "Imprisonment up to 10 years, Fine not less than 10 Lakhs",
    subsequentConviction: "Imprisonment for life, Fine not less than 20 Lakhs",
    category: ["all", "adulteration"],
  },
  {
    id: "sec-144",
    section: "SEC. 144",
    status: "statutory",
    title: "Unlawful Assembly Participation",
    firstConviction: "Imprisonment up to 6 months and/or Fine",
    subsequentConviction: "Imprisonment up to 2 years and Mandatory Fine",
    category: ["all", "public-safety"],
  },
  {
    id: "sec-420",
    section: "SEC. 420",
    status: "amended",
    title: "Cheating and Dishonesty",
    firstConviction: "Imprisonment up to 7 years and Fine",
    subsequentConviction: "Enhanced Imprisonment up to 10 years",
    category: ["all", "corporate-fraud"],
  },
  {
    id: "sec-377",
    section: "SEC. 377",
    status: "repealed",
    title: "Unnatural Offences",
    firstConviction: "Provisions related to consensual acts struck down by higher judiciary mandate.",
    subsequentConviction: "—",
    category: ["all"],
  },
];

const CATEGORY_FILTERS: { id: OffenceCategory; label: string }[] = [
  { id: "all", label: "All Offences" },
  { id: "public-safety", label: "Public Safety" },
  { id: "adulteration", label: "Adulteration" },
  { id: "corporate-fraud", label: "Corporate Fraud" },
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

function statusStyles(status: OffenceEntry["status"]): {
  badge: string;
  label: string;
} {
  switch (status) {
    case "critical":
      return { badge: "bg-[#ba1a1a] text-white", label: "Critical Warning" };
    case "statutory":
      return { badge: "bg-[#1B365D] text-white", label: "Statutory Rule" };
    case "amended":
      return {
        badge: "bg-amber-100 text-amber-800 border border-amber-300",
        label: "Amended / Pending",
      };
    case "repealed":
      return {
        badge: "bg-slate-100 text-slate-500 border border-slate-200",
        label: "Repealed",
      };
  }
}

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function AlertBanner() {
  return (
    <div className="w-full bg-[#ba1a1a] py-2.5 px-5 flex items-start justify-center text-white sticky top-0 z-[60]">
      <span className="material-symbols-outlined mr-2 text-[18px] shrink-0 mt-0.5" aria-hidden="true">
        warning
      </span>
      <p className="font-semibold text-[10px] uppercase tracking-wider leading-tight">
        Legal Disclaimer: Information for research purposes only. Always consult legal counsel.
      </p>
    </div>
  );
}

function TopNav() {
  return (
    <header className="sticky top-[38px] w-full z-50 flex items-center justify-between px-5 h-14 bg-white border-b border-slate-200">
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

function CategoryFilters({
  active,
  onChange,
}: {
  active: OffenceCategory;
  onChange: (c: OffenceCategory) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 mb-5 no-scrollbar">
      {CATEGORY_FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-colors ${
            active === f.id
              ? "bg-[#1B365D] text-white border-[#1B365D]"
              : "bg-white text-[#44474e] border-slate-200 active:bg-slate-50"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

function OffenceCard({ offence }: { offence: OffenceEntry }) {
  const styles = statusStyles(offence.status);
  const isRepealed = offence.status === "repealed";
  return (
    <div className="bg-white border border-slate-200 rounded p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${styles.badge}`}>
          {styles.label}
        </span>
        <span className="text-[11px] font-bold text-[#1B365D]">{offence.section}</span>
      </div>
      <h3 className="font-semibold text-[16px] text-[#1B365D] mb-3">{offence.title}</h3>
      {isRepealed ? (
        <p className="text-[14px] text-[#44474e]">{offence.firstConviction}</p>
      ) : (
        <div className="space-y-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
              First Conviction
            </p>
            <p className="text-[14px] text-[#44474e]">{offence.firstConviction}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Subsequent Conviction
            </p>
            <p className="text-[14px] text-[#44474e]">{offence.subsequentConviction}</p>
          </div>
        </div>
      )}
    </div>
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

export default function PenaltyMatrix() {
  const [activeCategory, setActiveCategory] = useState<OffenceCategory>("all");
  const [activeNav, setActiveNav] = useState<string>("penalty");

  const filtered = OFFENCES.filter((o) => o.category.includes(activeCategory));

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <AlertBanner />
      <TopNav />

      <main className="px-5 pt-6 pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="font-bold text-[28px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-2">
            Penalty Matrix
          </h1>
          <p className="text-[15px] text-[#44474e]">
            Statutory penalties for various offences under the current legal framework.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2.5 mb-5">
          <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          <span className="text-[14px] text-slate-400">Search offences...</span>
        </div>

        {/* Category filters */}
        <CategoryFilters active={activeCategory} onChange={setActiveCategory} />

        {/* Offence cards */}
        <div className="space-y-4">
          {filtered.map((offence) => (
            <OffenceCard key={offence.id} offence={offence} />
          ))}
        </div>
      </main>

      <BottomNav activeId={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
