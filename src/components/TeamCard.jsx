
export default function TeamCard({ nome, funcao }) {
  return (
    <article className="rounded-2xl border border-blue-100 bg-[#f5f9ff] p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
      <h3 className="font-['Bebas_Neue'] text-2xl text-[#1457d9]">
        {nome}
      </h3>

      <p className="mt-3 text-lg text-[#102a43]">
        {funcao}
      </p>
    </article>
  );
}
