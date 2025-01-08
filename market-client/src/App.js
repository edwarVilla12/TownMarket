import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DevelopersPage from './pages/DevelopersPage';
import FreelanceModePage from './pages/FreelanceModePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/freelance-mode" element={<FreelanceModePage />} />
      </Routes>
    </Router>
  );
}

export default App;