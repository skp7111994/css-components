import React, { useState } from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs } = props;
    const [selectedTab, setSelectedTab] = useState(0);
    return <>
        <div className="tab-container">
            {tabs.map((tab, tabIndex) => <div key={tabIndex} className="tab-body">
                <div
                    className={`tab ${tabIndex === selectedTab && 'active'}`}
                    onClick={() => setSelectedTab(tabIndex)}
                >
                    {tab.label}
                </div>
            </div>)}
        </div>
        <div className="tab-content">
            {tabs[selectedTab].markup}
        </div>
    </>
};

export default Tabs;