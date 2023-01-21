import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmailBody } from "../../features/emails/emailSlice";
import { EmailBody } from "../EmailBody/EmailBody";
import { EmailItem } from "../EmailItem/EmailItem";
import { Skeleton } from "../Skeleton/Skeleton";
import "./EmailList.css";

export function EmailList() {
  const { status, filteredList, emailBody } = useSelector(
    (state) => state.emails
  );
  const dispatch = useDispatch();

  function openEmailBody(item) {
    dispatch(selectEmailBody(item));
  }

  return (
    <div className={"container"}>
      {status === "IDLE" || status === "LOADING" ? (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className={emailBody ? "list-body-container" : ""}>
          {filteredList.length === 0 ? (
            <div className={emailBody ? "empty-list-body" : "empty-list"}>
              <p>No Record Found!</p>
            </div>
          ) : (
            <ul className={emailBody ? "list-body" : "list"}>
              {filteredList.map((item) => (
                <li key={item.id} onClick={() => openEmailBody(item)}>
                  <EmailItem item={item} />
                </li>
              ))}
            </ul>
          )}
          {emailBody && (
            <div className="email-body">
              <EmailBody />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
