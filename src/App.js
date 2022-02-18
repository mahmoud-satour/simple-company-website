import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Pricing from "./Components/Pricing/Pricing";
import Team from "./Components/Team/Team";
import Work from "./Components/Work/Work";







function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Team />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
    </div>  
  );
}

export default App;
