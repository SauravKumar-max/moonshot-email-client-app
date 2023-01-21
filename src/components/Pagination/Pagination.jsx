import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../features/emails/emailSlice";
import "./Pagination.css";

export function Pagination() {
  const [pageNo, setPageNo] = useState(0);
  const { totalRecords } = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  const chunkSize = 10;
  const pageCount = Math.ceil(totalRecords / chunkSize);
  const pageCountArr = [...Array(pageCount)];

  function onPageCountClick(count) {
    setPageNo(count);
    pageNo !== count && dispatch(getEmails(count + 1));
  }

  return (
    <>
      {totalRecords > 0 && (
        <div className="pagination">
          <p>Pagination:</p>
          {pageCountArr.map((_, index) => (
            <button
              key={index + "pagination"}
              type="button"
              className={pageNo === index ? "current-page" : "page-number"}
              onClick={() => onPageCountClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
