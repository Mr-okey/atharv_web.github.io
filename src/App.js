import './App.css';
import HomePg from './Pages/HomePg';
import SkillPg from './Pages/SkillPg';
import DefaultComp from './Components/Default';

function App() {
  return (
    <div className="App">
      <DefaultComp>
        <HomePg />
        <SkillPg />
      </DefaultComp>
    </div>
  );
}

export default App;
