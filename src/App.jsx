
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CardsPage from "./components/pages/CardsPage";
import TablePage from "./components/pages/TablePage";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar simples */}
        <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Cards</Link>
          <Link to="/tabela">Tabela</Link>
        </nav>

        {/* Rotas da aplicação */}
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="/tabela" element={<TablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

