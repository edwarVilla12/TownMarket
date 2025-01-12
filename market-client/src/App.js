import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'; // Adjust the path if necessary
import DevelopersPage from './pages/DevelopersPage';
import DeveloperDetailPage from './pages/DeveloperDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/developerdetail/:developerId" element={<DeveloperDetailPage />} />
      </Routes>
    </Router>
  );
}


export default App;
