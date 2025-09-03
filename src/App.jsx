// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsPage from './components/pages/CardsPage';
import TablePage from './components/pages/TablePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/tabela" element={<TablePage />} />        
        <Route path="/" element={<CardsPage />} /> {/* Página inicial */}
      </Routes>
    </Router>
  );
}

export default App;