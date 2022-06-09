import { useState, useEffect } from 'react';
import Services from '../../components/Service';
import SmoothScroll from 'smooth-scroll';
import FeaturesTiles from './../../components/sections/FeaturesTiles';
import Testimonial from './../../components/sections/Testimonial';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      {/* <Services /> */}
      <main className="site-content">
        <FeaturesTiles />
        <Testimonial topDivider />
      </main>

    </div>
  );
};

export default App;
