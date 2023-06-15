import './App.css';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';

const handleResizeWindow = () => {
  const elem = document.getElementById("main")
  // Resize the window to the desired dimensions
  // window.resizeTo(800, 600);
  // document.body.style.zoom = "80%";

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

};

function App() {
  return (
    <div className="App">
      <div id="resize-pg-btn" onClick={handleResizeWindow}>FullScreen 💢</div>

      <div id='main'>
        {/* <Scrollbar /> */}
        <Homepage />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
