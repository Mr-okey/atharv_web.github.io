import './App.css';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <div id='main'>
        <Homepage />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
