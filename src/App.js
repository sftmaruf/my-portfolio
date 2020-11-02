import './App.css';
import About from './Components/About/About';
import Headers from './Components/Headers/Headers/Headers';
import Projects from './Components/Projects/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div id = 'home' className = 'p-5'>
      <Headers/>
      <About/>
      <Skills/>
      <Projects />
    </div> 
  );
}

export default App;
