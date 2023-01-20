import React from "react";
import { useSelector } from "react-redux";
import { nameInitial } from "../../helpers/avatar";
import { formatDate } from "../../helpers/formatDate";
import "./EmailItem.css";

export function EmailItem({ item }) {
  const { readIds, markedFavouriteIds } = useSelector((state) => state.emails);
  const { id, subject, short_description, from, date } = item;
  const { name, email } = from;
  const alreadyRead = readIds.includes(id);
  const avatar = nameInitial(name);
  const formatedDate = formatDate(date);
  const isMarkedFavorite = markedFavouriteIds.includes(id);
  return (
    <div
      className={alreadyRead ? "item-container read" : "item-container unread"}
    >
      <div className={"avatar"}>{avatar}</div>
      <div className={"details"}>
        <div className={"email-from"}>
          <span>From:</span>
          <div className={"email-id"}>
            <span className={"name"}>{name}</span>{" "}
            <span>{"<" + email + ">"}</span>
          </div>
        </div>
        <div className={"subject"}>
          <span>Subject:</span>
          <span className={"subject-title"}>{subject}</span>
        </div>
        <div className={"short-description"}>
          <p>{short_description}</p>
        </div>
        <div className={"other-details"}>
          <span>{formatedDate}</span>
          {isMarkedFavorite && <span className={"favorite"}>Favorite</span>}
        </div>
      </div>
    </div>
  );
}
