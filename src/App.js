import './App.css';
import React from 'react';
import HomePg from './Pages/HomePg';
import SkillPg from './Pages/SkillPg';
import ProjectPg from './Pages/ProjectPg';
import DefaultComp from './Components/Default';
import { Routes, Route } from 'react-router-dom';

function DefaultelementRender(props) {
  return <DefaultComp>
    <HomePg />
    <SkillPg />
    <ProjectPg />
  </DefaultComp>
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DefaultelementRender />} />
      </Routes>
    </div>
  );
}

export default App;
