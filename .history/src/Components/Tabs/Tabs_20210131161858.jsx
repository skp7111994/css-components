import React from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs } = props;
    return <>
        <div className="tab-container">
            {tabs.map((tab, tabIndex) => <div className="tab" key={tabIndex}>{tab.label}</div>)}
        </div>
    </>
};

export default Tabs;