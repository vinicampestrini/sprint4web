const categorias = ["Estudos", "Pessoal", "Outros"];

const cores = {
  Estudos: "bg-blue-100",
  Pessoal: "bg-pink-100",
  Outros: "bg-amber-100",
};

export default function CaptureCard({ captura, onMover, onRemover }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md">
      <div
        className={`flex h-48 w-full items-center justify-center text-7xl ${
          cores[captura.categoria] ?? "bg-gray-100"
        }`}
      >
        {captura.icone}
      </div>

      <div className="p-4">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-[#05005d]">
          {captura.categoria}
        </span>

        <h3 className="mt-3 font-titulo text-lg font-semibold text-[#05005d]">
          {captura.titulo}
        </h3>
        <p className="text-sm text-gray-500">{captura.data}</p>

        <div className="mt-4 flex gap-2">
          <select
            value={captura.categoria}
            onChange={(e) => onMover(captura.id, e.target.value)}
            aria-label={`Mover ${captura.titulo} para outra categoria`}
            className="flex-1 rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-[#05005d] outline-none focus:border-[#05005d]"
          >
            {categorias.map((c) => (
              <option key={c} value={c}>
                Mover para {c}
              </option>
            ))}
          </select>

          <button
            onClick={() => onRemover(captura.id)}
            className="rounded-lg border border-red-300 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            Remover
          </button>
        </div>
      </div>
    </article>
  );
}