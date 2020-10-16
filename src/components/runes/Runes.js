import React from 'react';

import runes from './img/runes.jpg';

import styles from './runes.module.scss';

function Runes() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.runes} id={2}>
      <div className={`${styles.runesContainer} container`}>
        <div className={styles.imageContainer}>
          <img src={runes} alt="runes" className={styles.image} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Магия Рун</h2>
          <p className={styles.desc}>
            Руны — это вытянутые и угловатые буквы древних германцев, предков современных англичан,
            голландцев, немцев, датчан, норвежцев и шведов. Руны являются носителями определенных
            видов энергий, которые присущи всем живым организмам. Руническая система раскрывает
            внутренний потенциал, который заложен в каждом человеке изначально.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
      </div>
    </div>
  );
}

export default Runes;
