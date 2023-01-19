import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../helpers/formatDate";
import styles from "./EmailItem.module.css";

export function EmailItem({ item }) {
  const { readIds } = useSelector((state) => state.emails);
  const {
    id,
    subject,
    short_description,
    from: { name, email },
  } = item;
  return (
    <div
      className={
        readIds.includes(id) ? styles.readContainer : styles.unReadContainer
      }
    >
      <div className={styles.avatar}>F</div>
      <div className={styles.detailsContainer}>
        <div className={styles.from}>
          <span>From:</span>
          <div className={styles.emailId}>
            <span className={styles.name}>{name}</span>{" "}
            <span>{"<" + email + ">"}</span>
          </div>
        </div>
        <div className={styles.subject}>
          <span>Subject:</span>
          <span className={styles.subjectTitle}>{subject}</span>
        </div>
        <div className={styles.shortDescription}>
          <p>{short_description}</p>
        </div>
        <div className={styles.otherDetails}>
          <span>{formatDate(item.date)}</span>
          <span className={styles.favorite}>Favorite</span>
        </div>
      </div>
    </div>
  );
}
