"use client";

import { useState } from "react";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

interface TopicCategory {
  id: string;
  number: string;
  label: string;
  icon: string;
  rulesCount: string;
  description: string;
  items: string[];
  hasExploreAll?: boolean;
  isNew?: boolean;
}

// ------------------------------------------------------------
// Data
// ------------------------------------------------------------

const CATEGORIES: TopicCategory[] = [
  {
    id: "introduction",
    number: "01",
    label: "INTRODUCTION",
    icon: "explore",
    rulesCount: "12 Rules",
    description:
      "Foundational legal frameworks defining the scope, jurisdiction, and fundamental definitions of the scriptural mandate. Covers preliminary provisions and governing acts.",
    items: ["Section 101", "Rule 1.4A", "Jurisdiction"],
  },
  {
    id: "production",
    number: "02",
    label: "PRODUCTION",
    icon: "factory",
    rulesCount: "28 Rules",
    description:
      "Regulations governing creative output, licensing, and ethical manufacturing standards.",
    items: ["Art 22", "Standard V"],
  },
  {
    id: "distribution",
    number: "03",
    label: "DISTRIBUTION",
    icon: "storefront",
    rulesCount: "45 Rules",
    description:
      "Logistical legalities regarding the transmission of assets across digital and physical borders.",
    items: ["Border Protocol 4.2", "Inter-state Assets"],
    hasExploreAll: true,
  },
  {
    id: "logistics",
    number: "04",
    label: "LOGISTICS",
    icon: "local_shipping",
    rulesCount: "15 Rules",
    description:
      "Managing the physical movement of regulated goods and the liability frameworks governing third-party transporters.",
    items: ["Section 404.C", "Transit Rule 9"],
  },
  {
    id: "compliance",
    number: "05",
    label: "COMPLIANCE",
    icon: "verified",
    rulesCount: "Updated 2 days ago",
    description:
      "Mandatory adherence protocols, auditing cycles, and reporting structures required to maintain jurisdictional standing. This section includes the new Section 144 amendments.",
    items: ["Auditing Standard 7.1", "Section 144 (Amended)", "Quarterly Reporting"],
    isNew: true,
  },
];

const NAV_LINKS = ["Home", "Topic Map", "Role Guides", "Penalty"];

// ------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------

function AlertBanner() {
  return (
    <div className="w-full bg-[#008080] text-white py-2 px-8 flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px]">notifications_active</span>
      <p className="text-[11px] font-semibold">
        Regulatory Alert: New Amendments to Compliance Section Active from Oct 2024
      </p>
    </div>
  );
}

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
        <button className="p-2 hover:bg-slate-50 rounded-full" aria-label="Search">
          <span className="material-symbols-outlined text-[#1B365D] text-[20px]">search</span>
        </button>
      </div>
    </header>
  );
}

function CategoryRow({ category }: { category: TopicCategory }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-5">
        {/* Icon + number */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#1B365D]/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#1B365D] text-[24px]">{category.icon}</span>
          </div>
          <span className="text-[11px] font-bold text-[#44474e]">CATEGORY {category.number}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-[18px] text-[#1B365D]">{category.label}</h3>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                category.isNew
                  ? "bg-[#008080] text-white"
                  : "bg-[#008080]/10 text-[#008080]"
              }`}
            >
              {category.rulesCount}
            </span>
          </div>
          <p className="text-[14px] text-[#44474e] leading-relaxed mb-4">{category.description}</p>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span
                key={item}
                className="text-[11px] font-medium bg-slate-100 text-[#44474e] px-2.5 py-1 rounded-full border border-slate-200"
              >
                {item}
              </span>
            ))}
            {category.hasExploreAll && (
              <button className="text-[11px] font-semibold text-[#008080] flex items-center gap-0.5 hover:underline">
                Explore All
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CitationFinder() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-[#1B365D] rounded-2xl p-8 mt-8">
      <div className="max-w-2xl mx-auto text-center">
        <span className="material-symbols-outlined text-[#008080] text-[40px] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
          manage_search
        </span>
        <h2 className="font-bold text-[28px] text-white mb-2">Citation Finder</h2>
        <p className="text-[15px] text-[#87a0cd] mb-6">
          Lost in the text? Enter any case ID, statute number, or regulatory fragment to instantly locate its position within the Topic Map.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter Section or Rule ID..."
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-[#008080]"
          />
          <button className="bg-[#008080] text-white px-6 py-3 rounded-lg font-bold text-[14px] hover:bg-[#006666] transition-colors">
            Find Citation
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Main component
// ------------------------------------------------------------

export default function TopicMapDesktop() {
  const [activeLink, setActiveLink] = useState("Topic Map");

  return (
    <div className="text-[#1a1b1e] bg-[#faf9fd] min-h-screen">
      <AlertBanner />
      <TopNavDesktop activeLink={activeLink} onSelectLink={setActiveLink} />

      <main className="max-w-[1280px] mx-auto px-8 py-10">
        <div className="mb-8">
          <h1 className="font-bold text-[40px] leading-[1.2] tracking-[-0.01em] text-[#1B365D] mb-3">
            Topic Map
          </h1>
          <p className="text-[16px] text-[#44474e] max-w-2xl">
            Navigate the jurisdictional landscape through our structured regulatory categories and rule-based hierarchies.
          </p>
        </div>

        <div className="space-y-5">
          {CATEGORIES.map((cat) => (
            <CategoryRow key={cat.id} category={cat} />
          ))}
        </div>

        <CitationFinder />
      </main>
    </div>
  );
}
