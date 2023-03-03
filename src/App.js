import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
