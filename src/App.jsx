import Hero from './Hero';
import Projects from './Projects';
import { useFetchProjects } from './fetchProjects';

const App = () => {
  useFetchProjects();
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
};
export default App;
