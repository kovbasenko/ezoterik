import React from 'react';

import styles from './main.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <div className={`${styles.mainContainer} container`}>
        <h1 className={styles.title}>Школа психологического Таро и эзотерики</h1>
        <p className={styles.description}>Счастлив тот, кто постиг суть вещей!</p>
      </div>
    </div>
  );
}

export default Main;
