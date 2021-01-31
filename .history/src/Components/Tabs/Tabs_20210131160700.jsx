import React from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs } = props;
    return <>
        <div className="tab-container">
            {tabs.map(tab => <div className="tab">{tab.label}</div>)}
        </div>
    </>
};

export default Tabs;