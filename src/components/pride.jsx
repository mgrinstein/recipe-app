import { Image } from "./image";
import React from "react";

export const Pride = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Pride</h2>
          <p>
          As we celebrate Pride Month in June  celebration and commemoration of lesbian, gay, bisexual, and transgender pride. 
          </p>
          <br></br>
          <h3>Did you know?</h3>
          <p>The concept of the Pride Month began with a series of riots for gay liberation in New York City.</p>
          <a
                  href="https://en.wikipedia.org/wiki/Pride_Month#Origins"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                >
              Learn more 
                </a>{" "}
                <h3>What does pride month mean to you?</h3>

        </div>
        {/* <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div> */}
      </div>
    </div>
  );
};
