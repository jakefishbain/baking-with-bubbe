'use client';

interface Tab {
  id: string;
  label: string;
}

interface TabNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNav({ tabs, activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="mx-4 mb-4" aria-label="Recipe tabs">
      <div className="flex gap-2 rounded-full bg-cream p-1 shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 rounded-full py-2.5 px-4 text-sm font-serif transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-warm-pink to-soft-peach text-chocolate shadow-md'
                : 'text-chocolate/60 hover:text-chocolate'
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
