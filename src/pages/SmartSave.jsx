
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CaptureCard from "../components/CaptureCard";
import useAuth from "../hooks/useAuth";

export default function SmartSave() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const capturas = [
    {
      id: 1,
      titulo: "Anotações de programação",
      categoria: "Estudos",
      data: "01/11/2026",
      descricao: "Anotações sobre lógica de programação e algoritmos.",
    },
    {
      id: 2,
      titulo: "Documento pessoal",
      categoria: "Pessoal",
      data: "30/10/2026",
      descricao: "Documento identificado e organizado pelo Smart Save.",
    },
    {
      id: 3,
      titulo: "Resumo de matemática",
      categoria: "Estudos",
      data: "28/10/2026",
      descricao: "Resumo de conteúdo para revisão de estudos.",
    },
  ];

  const capturasFiltradas =
    categoriaSelecionada === "Todas"
      ? capturas
      : capturas.filter(
          (captura) => captura.categoria === categoriaSelecionada
        );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <header className="flex flex-wrap items-center justify-between gap-4 bg-[#05005d] px-6 py-5 text-white md:px-12">
        <h1 className="font-['Bebas_Neue'] text-3xl tracking-wide">
          Smart Save
        </h1>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm sm:block">{usuario}</span>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-white px-4 py-2 font-bold text-[#05005d] transition hover:bg-blue-100"
          >
            Sair
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <section>
          <h2 className="font-['Bebas_Neue'] text-4xl text-[#0b3b91] md:text-5xl">
            Meu Smart Save
          </h2>

          <p className="mt-2 text-lg text-gray-600">
            Organize suas imagens e documentos em um só lugar.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total de capturas</p>
            <p className="mt-2 text-4xl font-bold text-[#1457d9]">
              {capturas.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Categorias disponíveis</p>
            <p className="mt-2 text-4xl font-bold text-[#1457d9]">2</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-['Bebas_Neue'] text-3xl text-[#0b3b91]">
              Minhas capturas
            </h2>

            <select
              value={categoriaSelecionada}
              onChange={(event) =>
                setCategoriaSelecionada(event.target.value)
              }
              className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-[#102a43] outline-none focus:border-blue-600"
            >
              <option value="Todas">Todas as categorias</option>
              <option value="Estudos">Estudos</option>
              <option value="Pessoal">Pessoal</option>
            </select>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capturasFiltradas.map((captura) => (
              <CaptureCard
                key={captura.id}
                titulo={captura.titulo}
                categoria={captura.categoria}
                data={captura.data}
                descricao={captura.descricao}
              />
            ))}
          </div>

          {capturasFiltradas.length === 0 && (
            <p className="mt-6 text-gray-500">
              Nenhuma captura encontrada nessa categoria.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
