import { useState } from 'react';

import styles from '../App.module.css';

function ThirdT() {
  const [num, setNum] = useState(0);

  const handleCalculate = (amount) => () => {
    setNum(num + amount);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>3 task</h1>
        <div className={styles.circle}>{num}</div>
        <div>
          <button onClick={handleCalculate(1)}>plus</button>
          <button onClick={handleCalculate(-3)}>minus 3</button>
        </div>
      </div>
    </>
  );
}

export default ThirdT;
