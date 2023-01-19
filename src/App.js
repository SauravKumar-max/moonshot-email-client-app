import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmails } from "./features/emails/emailSlice";
import { EmailList, Filters } from "./components";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmails(1));
  }, [dispatch]);

  return (
    <div className="App">
      <Filters />
      <EmailList />
    </div>
  );
}

export default App;
