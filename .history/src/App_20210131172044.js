import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Tabs from './Components/Tabs/Tabs';

function App() {
  const tabs = [
    {
      label: 'First',
      markup: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          corrupti quisquam obcaecati non et tempora harum totam deserunt eius
          nihil, incidunt, veniam tenetur quae soluta repellat omnis ullam
          similique exercitationem facere velit eaque consequuntur molestiae. A,
          porro odio. Quaerat in accusantium beatae? Suscipit, fugiat odit
          temporibus facilis tempore repudiandae quae, nostrum, eius iusto
          asperiores eveniet! Velit consequatur aperiam repudiandae incidunt
          pariatur porro ut, error dolorum, voluptatem vel esse iure unde earum,
          officiis laborum fugit doloribus atque officia ipsum! Sit voluptas
          omnis ipsa, rem nam consequatur!
        </div>
      ),
    },
    {
      label: 'Second',
      markup: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptatibus molestiae cum minima, commodi nam.
        </p>
      ),
    },
    {
      label: 'Third',
      markup: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          eum rerum reiciendis sunt ratione vero corrupti temporibus autem nemo,
          voluptatum, esse fugiat beatae deserunt debitis consequatur modi fuga
          adipisci animi illum! Eius doloribus quisquam expedita voluptatibus
          numquam dolores quod cumque itaque. Libero maiores, sunt minus
          mollitia unde provident sint ut. Quas in adipisci nostrum ea ad
          dolorum fugiat autem dolorem reiciendis minima. Nostrum natus quod
          laborum expedita quisquam nihil iste eius rerum, voluptatum omnis
          magnam enim doloremque laboriosam ex aperiam! Aliquam aut, earum,
          aspernatur eos omnis odio laudantium molestias blanditiis voluptates
          nulla eum sequi vero tenetur placeat? Ex dicta rem voluptatum, eius
          eaque vel quia itaque eveniet tempora, libero incidunt cumque fugit ea
          deleniti velit sunt quibusdam molestiae officiis assumenda
          perspiciatis facilis aliquam similique laboriosam. Sit alias unde rem
          eveniet quaerat, vel doloremque odit amet veniam? Nemo delectus
          repudiandae adipisci odio, animi quas. Ad accusamus adipisci quo
          quaerat veniam debitis, minima cum soluta a, voluptatibus hic officia
          saepe impedit, quasi cupiditate obcaecati odio ullam qui. Ipsa at
          blanditiis nisi, ab ducimus corporis accusantium quis in doloribus,
          mollitia adipisci perferendis ullam sint vero, sit ratione facilis a
          sunt. Provident, nihil voluptatum.
        </p>
      ),
    },
    {
      label: 'Fourth',
      markup: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla iste
          cumque vero, earum impedit doloribus et quia perspiciatis id sed
          distinctio. Dolor amet repellat officia recusandae incidunt, cum
          commodi impedit praesentium dolore. Accusamus blanditiis maxime
          maiores accusantium possimus facilis. Tenetur.
        </p>
      ),
    },
  ];
  return (
    <BrowserRouter>
      <div>
        <Tabs tabs={tabs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
