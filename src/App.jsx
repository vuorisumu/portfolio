import { Suspense } from "react";
import { HashRouter as Router } from "react-router-dom";
import GeneralInfo from "./components/GeneralInfo";
import Projects from "./components/Projects";
import About from "./components/About";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <div id="container">
          <nav>
            <Nav />
          </nav>

          <div id="content">
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
    </Router>
  );
}

export default App;
