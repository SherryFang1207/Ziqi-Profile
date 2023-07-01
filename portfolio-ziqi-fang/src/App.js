import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";


function App() {
  // DarkMode Variable Manually Controlled
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="darkMode-color">
          <Hero />
      </main>
    </div>
  );
}

export default App;
