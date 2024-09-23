import { Suspense } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Projects from "./components/Projects";
import About from "./components/About";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Language from "./components/Language";

function App() {
  return (
    <Suspense fallback="loading">
      <div>
        <nav>
          <Nav />
        </nav>

        <Language />

        <main>
          <GeneralInfo />
          <About />
          <Projects />
          <Cv />
          <Contact />
        </main>

        <footer>
          <p>Sumu Vuori</p>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
