import React from 'react';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="inline-flex p-1 bg-white/5 rounded-xl border border-white/10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-3 rounded-lg font-ubuntu font-medium transition-all duration-300 ${
            activeTab === tab
              ? 'bg-brand-purple/20 text-white shadow-sm'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
