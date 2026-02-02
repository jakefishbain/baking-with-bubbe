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
    <nav className="mx-4 md:mx-6 lg:mx-8 mb-4 md:mb-6" aria-label="Recipe tabs">
      <div className="flex gap-2 rounded-full bg-white border-2 border-bubbe-blue/20 p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 rounded-full py-3 px-4 md:py-3.5 md:px-6 text-sm md:text-base font-bold font-body transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-bubbe-blue text-white'
                : 'text-bubbe-gray hover:text-bubbe-dark hover:bg-bubbe-blue/10'
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
