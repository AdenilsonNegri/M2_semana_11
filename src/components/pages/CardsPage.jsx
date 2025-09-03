// src/components/pages/CardsPage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetInstruments from '../../hooks/useGetInstruments';
import './CardsPage.css';

const CardsPage = () => {
  const { instruments, loading, error } = useGetInstruments();

  if (loading) return <p className="text-center">Carregando instrumentos...</p>;
  if (error) return <p className="text-danger text-center">Erro: {error}</p>;

  return (
    <Container className="cards-page">
      {/* Botões de navegação */}
      <div className="button-group">
        <Link to="/cadastro" className="btn btn-primary me-2">
          Cadastro (cards)
        </Link>
        <Link to="/tabela" className="btn btn-primary">
          Listagem (tabela)
        </Link>
      </div>

      <h2 className="page-title">Lista de Instrumentos</h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {instruments.length === 0 ? (
          <Col className="text-center">
            <p>Nenhum instrumento encontrado.</p>
          </Col>
        ) : (
          instruments.map((inst) => (
            <Col key={inst.id}>
              <div className="card">
                <h5 className="card-title">{inst.nome}</h5>
                <p className="card-text">
                  <strong>Tipo:</strong> {inst.tipo}<br />
                  <strong>Marca:</strong> {inst.marca}<br />
                  <strong>Voltagem:</strong> {inst.voltagem || 'N/A'}<br />
                  <strong>Ano:</strong> {inst.ano}<br />
                  <strong>Preço:</strong> R$ {parseFloat(inst.preco).toFixed(2)}<br />
                  <strong>Peso:</strong> {inst.peso_kg} kg<br />
                  <strong>Status:</strong> <span className={`status ${inst.ativo ? 'active' : 'inactive'}`}>
                    {inst.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </p>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CardsPage;
