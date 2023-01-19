import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmailBody } from "../../features/emails/emailSlice";
import { EmailItem } from "../EmailItem/EmailItem";
import { Skeleton } from "../Skeleton/Skeleton";
import styles from "./EmailList.module.css";

export function EmailList() {
  const { status, filteredList } = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  function openEmailBody(item) {
    dispatch(selectEmailBody(item));
  }
  return (
    <div className={styles.container}>
      {status === "IDLE" || status === "LOADING" ? (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={styles.list}>
          {filteredList.map((item) => (
            <li key={item.id} onClick={() => openEmailBody(item)}>
              <EmailItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
