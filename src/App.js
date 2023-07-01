import React from "react";
import MouseParticles from 'react-mouse-particles';

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <MouseParticles g={0} color="#CFFF00" cull="col,image-wrapper" radius="28" num="5"/>
    <Navbar />
    <Header />
    <Intro />
    <AboutUs />
    {/* <SpecialMenu /> */}
    {/* <Chef /> */}
    
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
