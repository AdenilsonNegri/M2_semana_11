
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CardsPage from "./components/pages/CardsPage";
import TablePage from "./components/pages/TablePage";
import './App.css';

function App() {
  return (
    <Router>  
       <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/tabela" element={<TablePage />} />
      </Routes>  
    </Router>
  );
}

export default App;

