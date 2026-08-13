import React from 'react';
import '../assets/css/domain-filter.css';

const DomainFilter = ({ activeDomain, onDomainChange }) => {
  const tabs = [
    { id: 'dev', label: 'Developer', icon: 'code-slash-outline' },
    { id: 'sales', label: 'Sales & Marketing', icon: 'trending-up-outline' },
    { id: 'all', label: 'All', icon: 'grid-outline' }
  ];

  return (
    <div className="domain-filter-wrapper">
      <div className="domain-filter-container" role="tablist" aria-label="Portfolio Domain Filter">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeDomain === tab.id}
            className={`domain-filter-btn ${activeDomain === tab.id ? 'active' : ''}`}
            onClick={() => onDomainChange(tab.id)}
          >
            <ion-icon name={tab.icon}></ion-icon>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainFilter;
