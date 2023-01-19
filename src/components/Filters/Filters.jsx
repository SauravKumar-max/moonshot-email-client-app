import React, { useState } from "react";
import styles from "./Filters.module.css";
import {
  filterByRead,
  filterByUnread,
  filterByFavorites,
} from "../../features/emails/emailSlice";
import { useDispatch } from "react-redux";

export function Filters() {
  const filtersList = ["Unread", "Read", "Favorites"];
  const [activeFilter, setActiveFilter] = useState("");
  const dispatch = useDispatch();

  function onFilterClick(type) {
    setActiveFilter(type);
    type === "Unread" && dispatch(filterByUnread());
    type === "Read" && dispatch(filterByRead());
    type === "Favorites" && dispatch(filterByFavorites());
  }

  return (
    <div className={styles.container}>
      <div>Filter By:</div>
      <div className={styles.filterBtns}>
        {filtersList.map((item) => (
          <button
            key={item}
            type="button"
            className={activeFilter === item ? styles.active : ""}
            onClick={() => onFilterClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
