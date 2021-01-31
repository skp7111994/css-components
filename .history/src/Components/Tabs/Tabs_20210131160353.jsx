import React from 'react';

const Tabs = (props) => {
    const { tabs } = props;
    return <>
        <div className="tab-container">
            {tabs.map(tab => <div>{tab.label}</div>)}
        </div>
    </>
};

export default Tabs;