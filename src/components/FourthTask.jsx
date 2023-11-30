import { useState } from 'react';

import styles from '../App.module.css';

function FourthT() {
  const [square, setSquare] = useState(0);

  const handleAdd = () => {
    setSquare(square + 1);
    return;
  };
  const squares = [];
  for (let i = 0; i < square; i++) {
    squares.push(<div className={styles.blueSquare}></div>);
  }
  return (
    <>
      <div className={styles.container}>
        <h1>4 task</h1>
        <div className={styles.containerRowDirection}>{squares}</div>

        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}

export default FourthT;
