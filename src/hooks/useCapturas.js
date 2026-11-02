import { useState, useEffect } from "react";
import {
  listarCapturas,
  criarCaptura,
  atualizarCaptura,
  removerCaptura,
} from "../services/api";

export default function useCapturas() {
  const [capturas, setCapturas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        setCapturas(await listarCapturas());
      } catch {
        setErro("Não foi possível carregar suas capturas.");
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  const adicionar = async (dados) => {
    try {
      const nova = await criarCaptura({
        ...dados,
        data: new Date().toLocaleDateString("pt-BR"),
      });
      setCapturas((atual) => [nova, ...atual]);
    } catch {
      setErro("Não foi possível adicionar a captura.");
    }
  };

  const mover = async (id, categoria) => {
    try {
      const atualizada = await atualizarCaptura(id, { categoria });
      setCapturas((atual) => atual.map((c) => (c.id === id ? atualizada : c)));
    } catch {
      setErro("Não foi possível mover a captura.");
    }
  };

  const remover = async (id) => {
    try {
      await removerCaptura(id);
      setCapturas((atual) => atual.filter((c) => c.id !== id));
    } catch {
      setErro("Não foi possível remover a captura.");
    }
  };

  return { capturas, carregando, erro, adicionar, mover, remover };
}