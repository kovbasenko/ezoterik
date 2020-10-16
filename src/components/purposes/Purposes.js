import React from 'react';

import tarot from './img/tarot-1.jpg';

import styles from './purposes.module.scss';

function Purposes(props) {
  return (
    <div className={styles.purposes}>
      <div className={`${styles.purposesContainer} container`}>
        <div className={styles.imageContainer}>
          <img src={tarot} alt="tarot" className={styles.image} />
        </div>
        <div className={styles.descContainer}>
          <h2 className={styles.title}>Цели школы</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Изучение Таро как философско-психологической и предсказательной системы
            </li>
            <li className={styles.listItem}>
              Создание, развитие и популяризация научного подхода к изучению Таро
            </li>
            <li className={styles.listItem}>Подготовка тарологов-консультантов</li>
            <li className={styles.listItem}>Трансформация личности</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Purposes;
