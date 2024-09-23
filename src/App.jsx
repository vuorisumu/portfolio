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
      <div id="container">
        <nav>
          <Nav />
        </nav>

        <div id="content">
          <Language />
          <main>
            <GeneralInfo />
            <About />
            <Projects />
            <Cv />
            <Contact />
          </main>
        </div>
        <footer>
          <p>Sumu Vuori</p>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
