import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx"
import { Portfolio } from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Avatar from "./components/Avatar.jsx";
import About from './components/About.jsx'
import Education from "./components/Education.jsx";


function App() {
  // DarkMode Variable Manually Controlled
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="darkMode-color p-6 ">
          <Hero />
          <About/>
          <Education/>
          <Services/>
          <Portfolio/>
          <Testimonials/>
          <Contact />
          <Footer/>
      </main>
    </div>
  );
}

export default App;
