import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={16} country="in" category="general" />} />
        <Route exact path="/business" element={<News key="business" pageSize={16} country="in" category="business" />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={16} country="in" category="entertainment" />} />
        <Route exact path="/health" element={<News key="health" pageSize={16} country="in" category="health" />} />
        <Route exact path="/science" element={<News key="science" pageSize={16} country="in" category="science" />} />
        <Route exact path="/sports" element={<News key="sports" pageSize={16} country="in" category="sports" />} />
        <Route exact path="/technology" element={<News key="technology" pageSize={16} country="in" category="technology" />} />
      </Routes>
    </Router>
  );
}
export default App;
