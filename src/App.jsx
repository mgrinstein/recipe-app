import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
import { Recipe } from "./components/recipe";
import { Pride } from "./components/pride";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Recipe data={landingPageData.Recipe} />
      {/* <Pride data={landingPageData.Pride} /> */}
      {/*<Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
