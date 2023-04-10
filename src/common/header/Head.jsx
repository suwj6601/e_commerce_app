import React from "react";
import "./Header.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">0388373872</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">tranvansu2001@gmail.com</label>
          </div>

          <div className="right row RText">
            <label htmlFor="">Theme FAQ's</label>
            <label htmlFor="">Need Helps</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
