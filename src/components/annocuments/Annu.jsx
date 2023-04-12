import React from "react";

const Annu = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };

  const mystyle1 = {
    width: "68%",
    height: "340px",
  };

  return (
    <>
      <section className="annouc background">
        <div className="container d_flex">
          <div className="img">
            <img src="./images/banner-1.png" alt="" style={mystyle} />
          </div>
          <div className="img">
            <img src="./images/banner-2.png" alt="" style={mystyle1} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annu;
