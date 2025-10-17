import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import RapidlyGrowing from "./components/RapidlyGrowing";
import Process from "./components/Process";
import Challenges from "./components/Challenges";

import Solutions from "./components/Solutions";
import Targets from "./components/Targets";
import WhatWillYouGet from "./components/WhatWillYouGet";
import Curriculum from "./components/Curriculum";
import Why from "./components/Why";
import Regret from "./components/Regret";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import WhatKnow from "./components/WhatKnow";
import Footer from "./components/Footer";
import Mentor from "./components/Mentor";
import Ebooks from "./components/Ebooks";
import Careers from "./components/Carrers";
import WhoJoin from "./components/WhoJoin";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <RapidlyGrowing />

      <Challenges />
      <Solutions />
      <Process />
      <WhatWillYouGet />
      <Ebooks />
      <Careers />
      <WhoJoin />
      <Targets />
      <Curriculum />
      <Mentor />
      <Why />
      <Regret />
      <WhatKnow />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
