import React, { useState } from "react";
import "./Filters.css";
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
    <div className={"filter-container"}>
      <div>Filter By:</div>
      <div className={"filter-btns"}>
        {filtersList.map((item) => (
          <button
            key={item}
            type="button"
            className={activeFilter === item ? "active" : ""}
            onClick={() => onFilterClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
