import { useState, useEffect } from "react";
import { Services } from "../../components/service";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

const App = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default App;
