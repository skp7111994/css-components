import React from 'react';
import './App.css';
import Tabs from './Components/Tabs/Tabs';

function App() {
  const tabs = [
    {
      label: 'First',
      markup: (
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur esse pariatur minima magnam consequatur?
          </p>
        </div>
      ),
    },
    {
      label: 'Second',
      markup: <p>Second Component loaded</p>,
    },
    // {
    //   label: 'Third',
    //   markup: <p>Third Component loaded</p>,
    // },
    // {
    //   label: 'Fourth',
    //   markup: <p>Fourth Component loaded</p>,
    // },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
