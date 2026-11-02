import { useState } from "react";
import { Link } from "react-router-dom";
import useCapturas from "../hooks/useCapturas";
import CaptureCard from "../components/CaptureCard";
import Footer from "../components/Footer";

const filtros = ["Todas", "Estudos", "Pessoal"];

const palavrasEstudo = [
  "aula", "prova", "slide", "exercício", "exercicio", "resumo",
  "anotação", "anotações", "anotacoes", "trabalho", "python",
  "cálculo", "calculo", "física", "fisica", "web", "algoritmo",
];

function sugerirCategoria(titulo) {
  const texto = titulo.toLowerCase();
  return palavrasEstudo.some((p) => texto.includes(p)) ? "Estudos" : "Pessoal";
}

export default function SmartSave() {
  const { capturas, carregando, erro, adicionar, mover, remover } =
    useCapturas();
  const [filtro, setFiltro] = useState("Todas");
  const [novoTitulo, setNovoTitulo] = useState("");
  const [categoriaManual, setCategoriaManual] = useState(null);

  const sugerida = sugerirCategoria(novoTitulo);
  const categoriaEscolhida = categoriaManual ?? sugerida;

  const visiveis =
    filtro === "Todas"
      ? capturas
      : capturas.filter((c) => c.categoria === filtro);

  const aoEnviar = (e) => {
    e.preventDefault();
    if (!novoTitulo.trim()) return;

    adicionar({
      titulo: novoTitulo.trim(),
      categoria: categoriaEscolhida,
      icone: categoriaEscolhida === "Estudos" ? "📚" : "📷",
    });

    setNovoTitulo("");
    setCategoriaManual(null);
  };

  return (
    <>
      {/* Header com o mesmo estilo e botão para voltar ao início */}
      <header className="sticky top-0 z-50 bg-[#05005d] px-[5%] py-5">
        <nav className="flex flex-wrap items-center justify-between gap-5">
          <Link to="/" className="font-bold text-white flex items-center gap-2 hover:opacity-90 transition">
            <i className="bx bx-arrow-back text-lg"></i> Voltar para o Início
          </Link>

          <div className="flex items-center gap-4">
            <span className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white text-sm">
              JOVI Smart Save - Painel
            </span>
          </div>
        </nav>
      </header>

      <main className="px-6 py-12 md:px-[8%]">
        <h1 className="text-center font-titulo text-3xl font-bold text-[#05005d]">
          Minhas Capturas
        </h1>

        <form
          onSubmit={aoEnviar}
          className="mx-auto mt-8 max-w-3xl rounded-xl bg-blue-50 p-5 shadow-sm border border-blue-100"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              placeholder="Nome da captura (ex: Slide da aula de Web)"
              aria-label="Nome da captura"
              className="flex-1 rounded-lg border border-blue-200 bg-white px-4 py-2 outline-none focus:border-[#05005d]"
            />

            <select
              value={categoriaEscolhida}
              onChange={(e) => setCategoriaManual(e.target.value)}
              aria-label="Categoria"
              className="rounded-lg border border-blue-200 bg-white px-4 py-2 outline-none focus:border-[#05005d]"
            >
              <option value="Estudos">Estudos</option>
              <option value="Pessoal">Pessoal</option>
            </select>

            <button
              type="submit"
              className="rounded-lg bg-[#05005d] px-5 py-2 font-semibold text-white transition hover:opacity-90"
            >
              Adicionar
            </button>
          </div>

          {novoTitulo.trim() && (
            <p className="mt-3 text-sm text-gray-600">
              {categoriaManual
                ? "Categoria escolhida por você."
                : `Sugestão automática: ${sugerida}. Você pode mudar acima.`}
            </p>
          )}
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`rounded-lg px-5 py-2 font-semibold transition ${
                filtro === f
                  ? "bg-[#05005d] text-white shadow-sm"
                  : "bg-blue-50 text-[#05005d] hover:bg-blue-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {carregando && <p className="mt-10 text-center text-blue-900">Carregando...</p>}
        {erro && <p className="mt-10 text-center text-red-600">{erro}</p>}

        {!carregando && visiveis.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            Nenhuma captura nesta categoria.
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((c) => (
            <CaptureCard
              key={c.id}
              captura={c}
              onMover={mover}
              onRemover={remover}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}