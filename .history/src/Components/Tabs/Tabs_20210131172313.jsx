import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs, showPath } = props;
    const history = useHistory();
    const [selectedTab, setSelectedTab] = useState(0);
    const onTabChange = (currentIndex, label) => {
        setSelectedTab(currentIndex);
        if (showPath) {
            history.push(`${label.toLowerCase()}`);
        }
    }
    return <>
        <div className="tab-container">
            {tabs.map((tab, tabIndex) => <div key={tabIndex} className="tab-body">
                <div
                    className={`tab ${tabIndex === selectedTab ? 'active' : ''}`}
                    onClick={() => onTabChange(tabIndex, tab.label)}
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