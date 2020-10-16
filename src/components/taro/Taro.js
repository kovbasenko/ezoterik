import React from 'react';

import tarot from './img/tarot.jpg';

import styles from './taro.module.scss';

function Taro() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.tarot} id={1}>
      <div className={`${styles.tarotContainer} container`}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Карты Таро</h2>
          <p className={styles.desc}>
            Карты Таро – это 78 древних карточных изображений, наполненные сакральными символами
            магии, астрологии и каббалы. Кто поймет значения символов, тому откроются тайны
            вселенной, жизни и души человека. Кто научится понимать расклады Таро, тот станет
            властелином своей жизни.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={tarot} alt="tarot" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Taro;
