import React from "react";
import "./Filters.css";
import {
  filterByRead,
  filterByUnread,
  filterByFavorites,
} from "../../features/emails/emailSlice";
import { useDispatch, useSelector } from "react-redux";
import { filtersList } from "../../helpers/filter";

export function Filters() {
  const { filterBy } = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  function onFilterClick(type) {
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
            className={filterBy === item ? "active" : ""}
            onClick={() => onFilterClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
