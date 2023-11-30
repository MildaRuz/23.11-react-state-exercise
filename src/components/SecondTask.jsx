import { useState } from 'react';

import styles from '../App.module.css';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function SecondT() {
  const [shape, setShape] = useState(true);
  const [random, setRandom] = useState(rand(5, 25));

  const randomChange = () => {
    setRandom(rand(5, 25));
  };

  const shapeChange = () => {
    setShape(!shape);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>2 task</h1>
        <div className={shape ? styles.circle : styles.square}>{random}</div>
        <div>
          <button onClick={shapeChange}>Change</button>
          <button onClick={randomChange}>Random</button>
        </div>
      </div>
    </>
  );
}

export default SecondT;
