import './App.css';
import HomePg from './Pages/HomePg';
import DefaultComp from './Components/Default';

function App() {
  return (
    <div className="App">
      <DefaultComp>
        <HomePg />
      </DefaultComp>
    </div>
  );
}

export default App;
