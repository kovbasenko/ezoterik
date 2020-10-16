import React from 'react';

import transform from './img/transform.jpg';

import styles from './transform.module.scss';

function TransformGames() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.transform} id={5}>
      <div className={`${styles.transformContainer} container`}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Трансформационные игры</h2>
          <p className={styles.desc}>
            Трансформационные игры - это захватывающий способ познания себя, новый взгляд на ваши
            цели и мечты, изучение ваших жизненных стратегий. <br /> Несмотря на игровой формат
            трансформационные игры - это тренинг с глубокой проработкой вашего вопроса, проблемы или
            желания.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={transform} alt="transform" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default TransformGames;
