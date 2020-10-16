import React from 'react';

import hero from './img/transform.jpg';

import styles from './heroWay.module.scss';

function HeroWay() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.hero} id={4}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.imageContainer}>
          <img src={hero} alt="hero" className={styles.image} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Путь героя</h2>
          <p className={styles.desc}>
            Упражнения Евы Марии Ницше с элементами символдрамы. Представляет собой цикл занятий по
            проработке 22-ух Энергий Судьбы (22 Старших Аркана Таро). Включает в себя тематических
            занятия, на которых участники знакомятся с архетипами и их проявлением в бессознательном
            личности.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroWay;
