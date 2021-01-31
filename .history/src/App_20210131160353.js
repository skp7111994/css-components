import React from 'react';
import './App.css';
import Tabs from './Components/Tabs/Tabs';

function App() {
  const tabs = [
    {
      label: 'First',
    },
    {
      label: 'Second',
    },
    {
      label: 'Third',
    },
    {
      label: 'Fourth',
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
