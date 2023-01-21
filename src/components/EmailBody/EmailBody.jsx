import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nameInitial } from "../../helpers/avatar";
import { formatDate } from "../../helpers/formatDate";
import { getEmailBody } from "../../services/emailBody";
import { Skeleton } from "../Skeleton/Skeleton";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../features/emails/emailSlice";
import "./EmailBody.css";
import { convertToPlain } from "../../helpers/emailBody";

export function EmailBody() {
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(false);
  const { emailBody, markedFavouriteIds } = useSelector(
    (state) => state.emails
  );
  const dispatch = useDispatch();

  const { id, subject, from, date } = emailBody;
  const { name } = from;
  const formatedDate = formatDate(date);
  const avatar = nameInitial(name);

  const isMarkedFavorite = markedFavouriteIds.includes(id);

  useEffect(() => {
    setLoading(true);
    getEmailBody(id).then((res) => {
      setLoading(false);
      setBody(res.body);
    });
  }, [id]);

  function markAsFavorite() {
    dispatch(addToFavourite(id));
  }

  function unMarkAsFavorite() {
    dispatch(removeFromFavourite(id));
  }

  return (
    <div className="body-container">
      <div className="avatar">{avatar}</div>
      <div className="main">
        <div className="heading">
          <h4>{subject}</h4>
          {isMarkedFavorite ? (
            <button className="unmark" type="button" onClick={unMarkAsFavorite}>
              Unmark as favorite
            </button>
          ) : (
            <button className="mark" type="button" onClick={markAsFavorite}>
              Mark as favorite
            </button>
          )}
        </div>

        <div className="date">{formatedDate}</div>
        {loading ? (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className="content">
            {convertToPlain(body)?.map((text, index) => (
              <p key={index + "body"}>{text}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
