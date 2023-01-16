import React from "react";
import styles from "./EmailItem.module.css";

export function EmailItem({ item }) {
  const {
    short_description,
    subject,
    from: { name, email },
  } = item;
  return (
    <div className={styles.emailItemContainer}>
      <div className={styles.avatar}>F</div>
      <div className={styles.detailsContainer}>
        <div className={styles.from}>
          <span>From:</span>
          <span className={styles.emailId}>
            {name} {email}
          </span>
        </div>
        <div className={styles.subject}>
          <span>Subject:</span>
          <span className={styles.subjectTitle}>{subject}</span>
        </div>
        <div className={styles.shortDescription}>
          <p>{short_description}</p>
        </div>
        <div className={styles.otherDetails}>
          <span>23/12/2022 10:30am</span>
          <span className={styles.favorite}>Favorite</span>
        </div>
      </div>
    </div>
  );
}
