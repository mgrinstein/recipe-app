import React from "react";

export const Recipe = (props) => {
  return (
    <div id="recipe" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Recipe</h2>
          <p>
            Check out below this traditional recipe (external link):
          </p>
          <br></br>
          <a
                  href="https://www.iheartbrazil.com/brazilian-carrot-cake/"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                >
                  Visit
                </a>{" "}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr className="text-end" class="solid"/>

                <p>
        May your 2023 Pride Month have been as sweet as this cake!
        <br></br>
        <i>I mean, June!</i>
        </p>

        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
