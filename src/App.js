import './App.css';
import React from 'react';
import HomePg from './Pages/HomePg';
import SkillPg from './Pages/SkillPg';
import ProjectPg from './Pages/ProjectPg';
import DefaultComp from './Components/Default';
import BlogPg from './Pages/BlogPg';
import ContactPg from './Pages/ContactPg';
import { Routes, Route } from 'react-router-dom';

function HomePageRender(props) {
  return <DefaultComp>
    <HomePg />
    <SkillPg />
    <ProjectPg />
  </DefaultComp>
}

// empty tag added below to prevent error cause by map function in default component
function BlogPageRender(props) {
  return <DefaultComp>
    <BlogPg />
    <></>
  </DefaultComp>
}

function ContactPageRender(props) {
  return <DefaultComp>
    <ContactPg />
    <></>
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
