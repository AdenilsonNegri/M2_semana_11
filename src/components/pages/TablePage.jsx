
import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetInstruments from "../../hooks/useGetInstruments";
import "./TablePage.css";

const TablePage = () => {
  const { instruments, loading, error, refetch } = useGetInstruments();

  return (
    <Container className="table-page">
      {/* Botões centralizados */}
      <div className="button-group">
        <Link to="/cards">
          <Button variant="primary" className="custom-btn me-3">
            Listagem (cards)
          </Button>
        </Link>
        <Button
          variant="primary"
          className="custom-btn"
          onClick={refetch} // ✅ Chama a função para recarregar
          disabled={loading}
        >
          {loading ? 'Atualizando...' : 'Listagem (tabela)'}
        </Button>
      </div>

      <h2 className="page-title">Lista de Instrumentos</h2>

      {error && <div className="alert alert-danger">Erro: {error}</div>}

      {loading ? (
        <p className="text-center">Carregando instrumentos...</p>
      ) : (
        <div className="table-container">
          <Table bordered hover responsive className="custom-table">
            <thead className="table-primary">
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Marca</th>
                <th>Voltagem</th>
                <th>Ano</th>
                <th>Preço (R$)</th>
                <th>Peso (kg)</th>
                <th>Ativo</th>
              </tr>
            </thead>
            <tbody>
              {instruments.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    Nenhum instrumento encontrado.
                  </td>
                </tr>
              ) : (
              instruments.map((inst) => (
                <tr key={inst.id}>
                  <td>{inst.nome}</td>
                  <td>{inst.tipo}</td>
                  <td>{inst.marca}</td>
                  <td>{inst.voltagem}</td>
                  <td>{inst.ano}</td>
                  <td>{inst.preco.toFixed(2)}</td>
                  <td>{inst.peso_kg}</td>
                  <td>{inst.ativo ? "true" : "false"}</td>
                </tr>
              ))
            )}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default TablePage;
