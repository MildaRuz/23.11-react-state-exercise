import { useState } from 'react';

import styles from '../App.module.css';

function FirstT() {
  const [shape, setShape] = useState(true);
  const shapeChange = () => {
    setShape(!shape);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>1 task</h1>
        <div className={shape ? styles.circle : styles.square}></div>

        <button onClick={shapeChange}>Change</button>
      </div>
    </>
  );
}

export default FirstT;
