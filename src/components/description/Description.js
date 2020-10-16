import React from 'react';

import game from './img/game.jpg';
import psalm from './img/psalm.jpg';
import runes from './img/runes.jpg';
import tarot from './img/tarot.jpg';
import way from './img/way.jpg';

import styles from './description.module.scss';

function Description() {
  return (
    <article className={styles.description}>
      <div className={`${styles.descriptionContainer} container`}>
        <ul className={styles.imageContainer}>
          <li>
            <img className={styles.image} src={tarot} alt="img1" />
          </li>
          <li>
            <img className={styles.image} src={runes} alt="img2" />
          </li>
          <li>
            <img className={styles.image} src={psalm} alt="img3" />
          </li>
          <li>
            <img className={styles.image} src={way} alt="img4" />
          </li>
          <li>
            <img className={styles.image} src={game} alt="img5" />
          </li>
        </ul>
        <div className={styles.descriptionBlock}>
          <h2 className={styles.title}>Направления школы</h2>
          <div className={styles.descriptionListContainer}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Изучение классических колод Таро (А.Уэйта, Марсельского, Кроули)
              </li>
              <li className={styles.listItem}>Изучение оракулов Ленорман, Манара, 78 дверей</li>
              <li className={styles.listItem}>Изучение метафорических карт</li>
              <li className={styles.listItem}>Изучение рун</li>
              <li className={styles.listItem}>Магия молитв</li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Трансформационные игры («Таро квест», «Дороги перемен», «Черное и белое»)
              </li>
              <li className={styles.listItem}>
                Трансформационный психологический курс с использованием метода символограммы и Таро
                - "Путь героя"
              </li>
              <li className={styles.listItem}>
                Расчет предназначения по методу А.Шхановской (Нумерология и Таро)
              </li>
              <li className={styles.listItem}>Психологические и Таро консультации</li>
            </ul>
          </div>
          <p className={styles.descriptionText}>Формы обучения: очная, дистанционная, выездная.</p>
        </div>
      </div>
    </article>
  );
}

export default Description;
