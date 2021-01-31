import React from 'react';
import './App.css';
import Tabs from './Components/Tabs/Tabs';

function App() {
  const tabs = [
    {
      label: 'First',
      markup: <p>First Component loaded</p>,
    },
    {
      label: 'Second',
      markup: <p>Second Component loaded</p>,
    },
    {
      label: 'Third',
      markup: <p>Third Component loaded</p>,
    },
    {
      label: 'Fourth',
      markup: <p>Fourth Component loaded</p>,
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
