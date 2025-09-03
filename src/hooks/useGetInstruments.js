// src/hooks/useGetInstruments.js
import { useState, useEffect } from 'react';

function useGetInstruments() {
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInstruments = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:3000/equipamentos');
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

      const data = await response.json();
      setInstruments(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Erro ao buscar instrumentos:', err);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Executa ao montar o componente
  useEffect(() => {
    fetchInstruments();
    // Não colocamos fetchInstruments no array de dependências para evitar loop
  }, []);

  // Retornamos os dados E a função para recarregar
  return { instruments, loading, error, refetch: fetchInstruments };
}

export default useGetInstruments;