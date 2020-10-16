import React from 'react';

import book from './img/book.jpg';

import styles from './psalmMagic.module.scss';

function PsalmMagic() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.psalm} id={3}>
      <div className={`${styles.psalmContainer} container`}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Магия псалмов</h2>
          <p className={styles.desc}>
            Использование псалмов как магических текстов известно спервых веков христианства. Однако
            цельные тексты магического употребления Псалмов оформились в период с IX по XVII век на
            основе устной каббалистической традиции.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={book} alt="psalm" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default PsalmMagic;
