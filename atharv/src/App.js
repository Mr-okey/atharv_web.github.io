import './App.css';
import Dashboard from './components/Dashboard';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <div id='main'>
        <h1 id='app-title'>Atharv Vyas</h1>
        <Page />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
