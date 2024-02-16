import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <ToastContainer
        theme="dark"
        transition:Slide
        position="top-right"
        autoClose={5000}
        pauseOnHover={false}
        draggable
        className="fixed z-50"
      />
    </BrowserRouter>
  );
};

export default App;
