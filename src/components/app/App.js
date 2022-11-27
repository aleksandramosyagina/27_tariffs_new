import React from 'react';

import styles from './app.module.css';
import Tariffs from '../Tariffs/Tariffs';
import data from '../data/data.json';

const color = ['blue', 'green', 'red', 'black'];
const title_color = ['deep_blue', 'deep_green', 'deep_red', 'deep_black']
class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        {
          data.map((plan, index) =>
            <Tariffs
            color={color[index]}
            title_color={title_color[index]}
            key={index}
            isSelected={plan.isSelected}
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
