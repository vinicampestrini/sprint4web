const BASE_URL = "https://6ae7819e56b2ee1e5440727c.mockapi.io";

async function request(caminho, opcoes = {}) {
  const resposta = await fetch(`${BASE_URL}${caminho}`, {
    headers: { "Content-Type": "application/json" },
    ...opcoes,
  });

  if (!resposta.ok) {
    throw new Error("Erro ao acessar a API");
  }

  return resposta.json();
}

export const listarCapturas = () => request("/capturas");

export const criarCaptura = (dados) =>
  request("/capturas", { method: "POST", body: JSON.stringify(dados) });

export const atualizarCaptura = (id, dados) =>
  request(`/capturas/${id}`, { method: "PUT", body: JSON.stringify(dados) });

export const removerCaptura = (id) =>
  request(`/capturas/${id}`, { method: "DELETE" });