import { useState } from 'react';

import styles from '../App.module.css';

function FifthT() {
  const [square, setSquare] = useState([]);

  const handleAdd = (color) => {
    setSquare([...square, color]);
  };

  const handleReset = () => {
    setSquare([]);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>5 task</h1>

        <div className={styles.containerRowDirection}>
          {square.map((e) => {
            return <div className={e === 'red' ? styles.redSquare : styles.blueSquare}></div>;
          })}
        </div>
        <div>
          <button onClick={() => handleAdd('red')}>Add Red</button>
          <button onClick={() => handleAdd('blue')}>Add Blue</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default FifthT;
