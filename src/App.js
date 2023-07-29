import './App.css';
import HomePg from './Pages/HomePg';
import SkillPg from './Pages/SkillPg';
import ProjectPg from './Pages/ProjectPg';
import DefaultComp from './Components/Default';

function App() {
  return (
    <div className="App">
      <DefaultComp>
        <ProjectPg />
        <HomePg />
        <SkillPg />
      </DefaultComp>
    </div>
  );
}

export default App;
