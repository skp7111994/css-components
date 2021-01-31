import React, { useState } from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs } = props;
    const [selectedTab, setSelectedTab] = useState(0);
    return <>
        <div className="tab-container">
            {tabs.map((tab, tabIndex) => <div>
                <div
                    className={`tab ${tabIndex === selectedTab && 'active'}`}
                    key={tabIndex}
                    onClick={() => setSelectedTab(tabIndex)}
                >
                    {tab.label}
                </div>
                <div>
                    {tab.markup}
                </div>
            </div>)}
        </div>
    </>
};

export default Tabs;