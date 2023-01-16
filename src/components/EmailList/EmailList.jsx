import React from "react";
import { useSelector } from "react-redux";
import { EmailItem } from "../EmailItem/EmailItem";
import styles from "./EmailList.module.css";

export function EmailList() {
  const { emailList } = useSelector((state) => state.emails);
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {emailList.map((item) => (
          <li key={item.id}>
            <EmailItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
