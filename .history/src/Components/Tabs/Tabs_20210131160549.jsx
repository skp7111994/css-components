import React from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs } = props;
    return <>
        <div className="tab-container">
            {tabs.map(tab => <div className="tab">
                <div className="tab-header">
                    {tab.label}
                </div>
            </div>)}
        </div>
    </>
};

export default Tabs;