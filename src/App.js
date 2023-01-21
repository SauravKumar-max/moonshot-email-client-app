import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmails } from "./features/emails/emailSlice";
import { EmailList, Filters, Pagination } from "./components";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmails(1));
  }, [dispatch]);

  return (
    <div className="App">
      <div className="filter-and-pagination">
        <Filters />
        <Pagination />
      </div>
      <EmailList />
    </div>
  );
}

export default App;
