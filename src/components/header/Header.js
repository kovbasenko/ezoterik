import React from 'react';
import Media from 'react-media';

import logo from '../../services/img/pentacle.png';

import styles from './header.module.scss';

function Header() {
  const scrollTo = id => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <Media
          queries={{
            desctop: '(min-width: 1280px)',
          }}
        >
          {matches =>
            matches.desctop ? (
              <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                  <li className={styles.navitagionListItem}>
                    <a href={null} className={styles.navigationLink} onClick={() => scrollTo(1)}>
                      Таро
                    </a>
                  </li>
                  <li className={styles.navitagionListItem}>
                    <a href={null} className={styles.navigationLink} onClick={() => scrollTo(2)}>
                      Магия Рун
                    </a>
                  </li>
                  <li className={styles.navitagionListItem}>
                    <a href={null} className={styles.navigationLink} onClick={() => scrollTo(3)}>
                      Магия псалмов
                    </a>
                  </li>
                  <li className={styles.navitagionListItem}>
                    <a href={null} className={styles.navigationLink} onClick={() => scrollTo(4)}>
                      Путь героя
                    </a>
                  </li>
                  <li className={styles.navitagionListItem}>
                    <a href={null} className={styles.navigationLink} onClick={() => scrollTo(5)}>
                      Трансформационные игры
                    </a>
                  </li>
                  <li className={styles.navitagionListItem}>
                    <a href={null} className={styles.navigationLink} onClick={() => scrollTo(6)}>
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            ) : null
          }
        </Media>
      </div>
    </header>
  );
}

export default Header;
