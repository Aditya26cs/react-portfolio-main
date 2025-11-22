import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { TechStack } from "./components/TechStack/TechStack";
import Cursor from  "./components/Cursor/Cursor"


function App() {
  return (
    <div className={styles.App}>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
