"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface TopicCategory {
  id: string;
  label: string;
  icon: string;
  rulesCount: string;
  title: string;
  sections: string[];
}

type NavItem = {
  icon: string;
  label: string;
  id: string;
};

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const CATEGORIES: TopicCategory[] = [
  {
    id: "introduction",
    label: "Introduction",
    icon: "explore",
    rulesCount: "12 Rules",
    title: "The Act & Rules Overview",
    sections: ["Section 1", "Section 3", "Section 5"],
  },
  {
    id: "production",
    label: "Production",
    icon: "factory",
    rulesCount: "45 Rules",
    title: "Manufacture for Sale",
    sections: ["Section 18", "Section 33", "Schedule M"],
  },
  {
    id: "distribution",
    label: "Distribution",
    icon: "storefront",
    rulesCount: "28 Rules",
    title: "Sale of Drugs",
    sections: ["Rule 61", "Rule 65", "Section 27"],
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "local_shipping",
    rulesCount: "18 Rules",
    title: "Import of Drugs",
    sections: ["Section 10", "Rule 40"],
  },
  {
    id: "compliance",
    label: "Compliance",
    icon: "verified",
    rulesCount: "34 Rules",
    title: "Labeling & Packing",
    sections: ["Rule 96", "Rule 104", "Schedule H"],
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

function DisclaimerBanner() {
  return (
    <div className="w-full bg-amber-50 border-b border-amber-200 py-2 px-5 flex items-center gap-2">
      <span className="material-symbols-outlined text-amber-600 text-[14px]">info</span>
      <p className="text-[10px] font-medium text-amber-700">
        Regulatory Disclaimer: Data current as of October 2023
      </p>
    </div>
  );
}

function CategoryCard({ category }: { category: TopicCategory }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm active:scale-[0.98] transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1B365D]/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#1B365D] text-[20px]">{category.icon}</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#44474e]">{category.label}</p>
            <h3 className="font-semibold text-[16px] text-[#1B365D]">{category.title}</h3>
          </div>
        </div>
        <span className="text-[11px] font-bold text-[#008080] bg-[#008080]/10 px-2 py-0.5 rounded-full">
          {category.rulesCount}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.sections.map((section) => (
          <span
            key={section}
            className="text-[10px] font-medium bg-slate-100 text-[#44474e] px-2 py-0.5 rounded border border-slate-200"
          >
            {section}
          </span>
        ))}
      </div>
    </div>
  );
}

function CitationFinderCard() {
  return (
    <div className="bg-[#1B365D] rounded-xl p-6 relative overflow-hidden">
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#008080]/20 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[#008080] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            gavel
          </span>
        </div>
        <h3 className="font-bold text-[20px] text-white mb-2">Need a specific Section?</h3>
        <p className="text-[14px] text-[#87a0cd] mb-6">
          Use the Citation Finder to jump directly to any rule or subsection by ID.
        </p>
        <button className="w-full bg-[#008080] text-white py-3.5 rounded-lg font-bold text-[14px] hover:bg-[#006666] transition-colors active:scale-95">
          Open Finder
        </button>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#008080]/10 rounded-full blur-2xl -mr-16 -mt-16" />
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

export default function TopicMap() {
  const [activeNav, setActiveNav] = useState<string>("topic-map");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNav />
      <DisclaimerBanner />

      <main className="px-5 pt-6 pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="font-bold text-[28px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-2">
            Topic Map
          </h1>
          <p className="text-[15px] text-[#44474e]">
            Navigate through the hierarchical structure of the Drugs and Cosmetics Act.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-4 mb-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Citation Finder */}
        <CitationFinderCard />
      </main>

      <BottomNav activeId={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
