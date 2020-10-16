import React from 'react';

import styles from './contacts.module.scss';

function Contacts() {
  return (
    <div className={styles.contacts} id={6}>
      <div className={styles.background}>
        <div className={`${styles.contactsContainer} container`}>
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.city}>г. Черкассы</p>
          <ul className={styles.list}>
            <li className={`${styles.listItem} ${styles.whatsApp}`}>
              <h3 className={styles.contactTitle}>WhatsApp</h3>
              <p>+38(093)508-19-21</p>
            </li>
            <li className={`${styles.listItem} ${styles.viber}`}>
              <h3 className={styles.contactTitle}>Viber</h3>
              <p>+38(093)508-19-21</p>
            </li>
            <li className={`${styles.listItem} ${styles.telegram}`}>
              <h3 className={styles.contactTitle}>Telegram</h3>
              <p>+38(093)508-19-21</p>
            </li>
            <li className={`${styles.listItem} ${styles.skype}`}>
              <h3 className={styles.contactTitle}>Skype</h3>
              <p>Anuta18506</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
