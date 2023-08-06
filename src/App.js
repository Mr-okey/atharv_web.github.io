import './App.css';
import React from 'react';
import HomePg from './Pages/HomePg';
import SkillPg from './Pages/SkillPg';
import ProjectPg from './Pages/ProjectPg';
import DefaultComp from './Components/Default';
import { Routes, Route } from 'react-router-dom';

function HomePageRender(props) {
  return <DefaultComp>
    <HomePg />
    <SkillPg />
    <ProjectPg />
  </DefaultComp>
}

function BlogPageRender(props) {
  return <DefaultComp>
    <HomePg />
    <SkillPg />
    <ProjectPg />
  </DefaultComp>
}

function ContactPageRender(props) {
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
        <Route exact path="/blog" element={<BlogPageRender />} />
        <Route exact path="/" element={<HomePageRender />} />
        <Route exact path="/contact" element={<ContactPageRender />} />
      </Routes>
    </div>
  );
}

export default App;
