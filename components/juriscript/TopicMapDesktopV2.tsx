"use client";

// Screen 10: "Topic Map - Desktop" (screenId c03c627594ec41efa992cce3305a0079)
// Full desktop layout with footer and stats bar

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface TopicCategory {
  id: string;
  label: string;
  icon: string;
  rulesCount: string;
  rulesNumber: number;
  title: string;
  items: string[];
  ctaLabel: string;
}

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const CATEGORIES: TopicCategory[] = [
  {
    id: "introduction",
    label: "INTRODUCTION",
    icon: "shield",
    rulesCount: "12 Rules",
    rulesNumber: 12,
    title: "Section 1 Short Title & Extent",
    items: ["Section 1", "Section 3 Definitions", "Section 5 Advisory Boards"],
    ctaLabel: "View full hierarchy",
  },
  {
    id: "production",
    label: "PRODUCTION",
    icon: "factory",
    rulesCount: "45 Rules",
    rulesNumber: 45,
    title: "Section 18 Prohibition of Mfg",
    items: ["Section 18 Prohibition of Mfg", "Section 33 Power to make rules", "Schedule M GMP Standards"],
    ctaLabel: "View production protocols",
  },
  {
    id: "distribution",
    label: "DISTRIBUTION",
    icon: "storefront",
    rulesCount: "32 Rules",
    rulesNumber: 32,
    title: "Rule 61 Licensing forms",
    items: ["Rule 61 Licensing forms", "Rule 65 Sale Conditions", "Section 27 Penalties for sale"],
    ctaLabel: "Explore retail rules",
  },
  {
    id: "logistics",
    label: "LOGISTICS",
    icon: "local_shipping",
    rulesCount: "28 Rules",
    rulesNumber: 28,
    title: "Section 10 Import Prohibitions",
    items: ["Section 10 Import Prohibitions", "Rule 40 Import Procedure"],
    ctaLabel: "Review import logs",
  },
  {
    id: "compliance",
    label: "COMPLIANCE",
    icon: "verified",
    rulesCount: "88 Rules",
    rulesNumber: 88,
    title: "Rule 96 Labeling Manner",
    items: ["Rule 96 Labeling Manner", "Rule 104 Packing Limits", "Schedule H Prescription Drugs"],
    ctaLabel: "View labeling standards",
  },
  {
    id: "misc",
    label: "Miscellaneous & Amendments",
    icon: "more_horiz",
    rulesCount: "New chapters being indexed weekly",
    rulesNumber: 0,
    title: "Amendments 2024",
    items: [],
    ctaLabel: "View updates",
  },
];

const NAV_LINKS = ["Home", "Topic Map", "Role Guides", "Penalty", "FAQ"];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function TopNavDesktop({
  activeLink,
  onSelectLink,
}: {
  activeLink: string;
  onSelectLink: (l: string) => void;
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
                onClick={() => onSelectLink(link)}
                className={`text-[13px] font-semibold transition-colors ${
                  activeLink === link
                    ? "text-[#1B365D] border-b-2 border-[#1B365D] pb-0.5"
                    : "text-[#44474e] hover:text-[#1B365D]"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-50 rounded-full" aria-label="Search">
            <span className="material-symbols-outlined text-[#1B365D] text-[20px]">search</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#1B365D] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">account_circle</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <div className="bg-[#1B365D]/5 border-b border-slate-200 py-3">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#008080] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          <span className="text-[12px] font-semibold text-[#1B365D]">168 Active Sections</span>
        </div>
        <div className="h-3 w-px bg-slate-300" />
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#008080] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span className="text-[12px] font-semibold text-[#1B365D]">542 Linked Rules</span>
        </div>
        <div className="h-3 w-px bg-slate-300" />
        <span className="text-[11px] text-[#44474e]">Verified Institutional Data — Last updated: Oct 2024</span>
        <div className="ml-auto">
          <button className="flex items-center gap-1.5 text-[12px] font-semibold text-[#1B365D] hover:underline">
            <span className="material-symbols-outlined text-[16px]">filter_list</span>
            Expand All
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({ category }: { category: TopicCategory }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-xl bg-[#1B365D]/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[#1B365D] text-[28px]">{category.icon}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#44474e]">{category.label}</p>
            <span className="text-[10px] font-bold text-[#008080] bg-[#008080]/10 px-2 py-0.5 rounded-full">
              {category.rulesCount}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {category.items.map((item) => (
              <span
                key={item}
                className="text-[11px] bg-slate-100 text-[#44474e] px-2 py-0.5 rounded border border-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
          <button className="text-[12px] font-semibold text-[#1B365D] flex items-center gap-1 hover:underline">
            {category.ctaLabel}
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CitationFinderSection() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 mt-8 shadow-sm">
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-xl bg-[#1B365D]/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[#1B365D] text-[28px]">manage_search</span>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-[24px] text-[#1B365D] mb-2">Citation Finder</h2>
          <p className="text-[14px] text-[#44474e] mb-5">
            Instantly locate any statutory provision by entering the specific Section or Rule identifier. Our crawler will jump you directly to the precise subsection.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Section or Rule ID..."
              className="flex-1 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#1B365D] text-[#1a1b1e]"
            />
            <button className="bg-[#1B365D] text-white px-6 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#152a4a] transition-colors">
              Jump to ID
            </button>
          </div>
        </div>
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
            <p className="text-[13px] text-[#aec7f7]">
              The definitive digital repository for the Drugs and Cosmetics Act of India. Simplifying pharmaceutical law through structured data and modern UI.
            </p>
          </div>
          {[
            { heading: "The Act", links: ["Topic Map", "Schedules", "Amendments 2024", "Statutory Forms"] },
            { heading: "Tools", links: ["Penalty Matrix", "Role Guides", "Citation Generator", "Mobile App"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Data Licensing", "Accessibility"] },
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
          <p className="text-[12px] text-[#aec7f7]">© 2024 JuriScript Legal Tech. All Rights Reserved.</p>
          <p className="text-[11px] text-[#87a0cd]">
            Institutional Disclaimer: For informational purposes only. Consult legal counsel for definitive regulatory compliance.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function TopicMapDesktopV2() {
  const [activeLink, setActiveLink] = useState("Topic Map");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <TopNavDesktop activeLink={activeLink} onSelectLink={setActiveLink} />
      <StatsBar />

      <main className="max-w-[1280px] mx-auto px-8 py-10">
        <div className="mb-8">
          <h1 className="font-bold text-[40px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
            Topic Map
          </h1>
          <p className="text-[16px] text-[#44474e] max-w-3xl">
            Navigate through the hierarchical structure of the Drugs and Cosmetics Act with high-fidelity indexing and cross-referenced regulatory mapping.
          </p>
        </div>

        <div className="space-y-5">
          {CATEGORIES.map((cat) => (
            <CategoryRow key={cat.id} category={cat} />
          ))}
        </div>

        <CitationFinderSection />
      </main>

      <Footer />
    </div>
  );
}
