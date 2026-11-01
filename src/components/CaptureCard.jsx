
export default function CaptureCard({ titulo, categoria, data, descricao }) {
  return (
    <article className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-[#102a43]">{titulo}</h3>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
          {categoria}
        </span>
      </div>

      <p className="mt-3 text-gray-600">{descricao}</p>

      <p className="mt-4 text-sm text-gray-400">{data}</p>
    </article>
  );
}
