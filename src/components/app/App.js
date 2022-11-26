import React from 'react';

import './app.module.css';
import Tariffs from '../Tariffs/Tariffs';
import data from '../data/data.json';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          data.map((plan) =>
            <Tariffs
              name={plan.name}
              price={plan.price}
              speed={plan.speed}
              info={plan.info}
            ></Tariffs>
          )
        }
      </div >
    );
  }
}
export default App;
