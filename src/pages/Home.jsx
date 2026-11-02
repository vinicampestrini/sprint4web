import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

import img1 from "../assets/imagens/img1.png";
import img2 from "../assets/imagens/img2.png";
import img3 from "../assets/imagens/img3.png";

const equipe = [
  { nome: "Alyson Souto", funcao: "Storytelling & Software Total Experience Design" },
  { nome: "Guilherme Vilela", funcao: "Web Development" },
  { nome: "Vinícius Campestrini", funcao: "Front-End Design" },
  { nome: "Vinícius Honda", funcao: "Computational Thinking With Python" },
];

const imagens = [
  { src: img1, alt: "Tela da câmera JOVI com o Smart Save" },
  { src: img2, alt: "Tela de organização das capturas" },
  { src: img3, alt: "Menu de categorias do Smart Save" },
];

const passos = [
  {
    numero: "1",
    titulo: "Capture",
    texto: "O estudante tira fotos e prints normalmente com a câmera do smartphone JOVI.",
    icone: "bx-camera",
  },
  {
    numero: "2",
    titulo: "Organize",
    texto: "O Smart Save sugere se cada imagem é de Estudos ou Pessoal, e o usuário pode ajustar.",
    icone: "bx-folder-open",
  },
  {
    numero: "3",
    titulo: "Encontre",
    texto: "Filtre por categoria, mova ou remova itens e ache o material certo em segundos.",
    icone: "bx-search-alt",
  },
];

const publico = [
  {
    titulo: "Quem são",
    texto: "Estudantes de 18 a 25 anos, do ensino técnico à graduação, que vivem com o celular na mão.",
    icone: "bx-user",
  },
  {
    titulo: "Como usam o celular",
    texto: "Fotografam lousas, slides, exercícios e documentos, misturando tudo com fotos pessoais.",
    icone: "bx-mobile-alt",
  },
  {
    titulo: "Por que é relevante",
    texto: "A galeria bagunçada faz perder tempo antes de provas e entregas. O Smart Save reduz a desordem e deixa o material de estudo à mão.",
    icone: "bx-time-five",
  },
];

export default function Home() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const aoMudar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const aoEnviar = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <>
      <Header />

      <main className="bg-white text-[#102a43] font-sans antialiased" style={{ fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
        {/* A Solução / Hero & Problema & Como Funciona */}
        <section id="solucao" aria-labelledby="titulo-solucao" className="relative">
          {/* Hero Banner */}
          <div className="flex min-h-[550px] flex-col items-center justify-center bg-gradient-to-b from-[#05005d] to-[#0a087a] px-6 py-28 text-center text-white shadow-md">
         
            <h1
              id="titulo-solucao"
              className="font-titulo text-4xl font-extrabold tracking-tight md:text-6xl"
            >
              JOVI SMART SAVE
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
              Uma funcionalidade inteligente para smartphones JOVI que organiza
              automaticamente as fotos, prints e documentos dos estudantes em
              duas categorias: Estudos e Pessoal.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#publico-alvo"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-[#05005d] shadow-lg transition-all hover:bg-blue-50 hover:scale-105"
              >
                Conheça a solução <i className="bx bx-down-arrow-alt text-lg"></i>
              </a>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-[#05005d] hover:scale-105"
              >
                Testar API do Smart Save <i className="bx bx-right-arrow-alt text-lg"></i>
              </Link>
            </div>
          </div>

          {/* O Problema */}
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 border-b border-blue-100">
            <article className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-8 md:p-10 shadow-sm border border-blue-100 text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#05005d] bg-blue-100/60 px-3 py-1 rounded-full">
                <i className="bx bx-error-circle text-base"></i> Desafio Atual
              </span>
              <h2 className="mt-4 font-titulo text-3xl font-bold text-[#05005d] md:text-4xl">
                O problema
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#102a43]">
                O celular virou o caderno do estudante, mas a galeria mistura
                anotações, slides e documentos com fotos pessoais. Na hora de
                estudar ou entregar um trabalho, encontrar o material certo
                toma tempo e gera estresse.
              </p>
            </article>
          </div>

          {/* Como Funciona */}
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 bg-blue-50/40 border-b border-blue-100">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#05005d] bg-blue-100/60 px-3 py-1 rounded-full">
                <i className="bx bx-list-check text-base"></i> Passo a Passo
              </span>
              <h2 className="mt-4 font-titulo text-3xl font-bold text-[#05005d] md:text-4xl">
                Como funciona
              </h2>
              <p className="mt-2 text-blue-900/70">Simples, automático e direto ao ponto.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {passos.map((p) => (
                <article
                  key={p.numero}
                  className="group relative rounded-2xl bg-white p-8 pt-12 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-blue-100"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#05005d] font-titulo text-xl font-bold text-white shadow-md group-hover:scale-110 transition-transform">
                    {p.numero}
                  </div>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#05005d] text-2xl">
                    <i className={`bx ${p.icone}`}></i>
                  </div>
                  <h3 className="font-titulo text-2xl font-bold text-[#05005d]">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#102a43]">{p.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Público-Alvo */}
        <section
          id="publico-alvo"
          aria-labelledby="titulo-publico"
          className="bg-blue-50/80 px-6 py-24 md:px-[8%] border-b border-blue-100"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#05005d] bg-blue-200/50 px-3 py-1 rounded-full">
                <i className="bx bx-group text-base"></i> Usuários
              </span>
              <h2
                id="titulo-publico"
                className="mt-4 text-center font-titulo text-3xl font-bold text-[#05005d] md:text-4xl"
              >
                Público-Alvo
              </h2>
              <p className="mt-2 text-blue-900/70">Feito sob medida para quem estuda.</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {publico.map((item) => (
                <article key={item.titulo} className="rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg border border-blue-100/80">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#05005d] text-2xl">
                    <i className={`bx ${item.icone}`}></i>
                  </div>
                  <h3 className="font-titulo text-xl font-bold text-[#05005d]">
                    {item.titulo}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#102a43]">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section
          id="galeria"
          aria-labelledby="titulo-galeria"
          className="overflow-hidden bg-white px-6 py-24 md:px-[4%] border-b border-blue-100"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#05005d] bg-blue-100/60 px-3 py-1 rounded-full">
                <i className="bx bx-images text-base"></i> Visualização
              </span>
              <h2
                id="titulo-galeria"
                className="mt-4 text-center font-titulo text-3xl font-bold text-[#05005d] md:text-4xl"
              >
                Galeria
              </h2>
              <p className="mt-2 text-blue-900/70">Veja a interface do aplicativo em ação.</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
              {imagens.map((imagem, index) => (
                <figure
                  key={index}
                  className="flex h-[650px] items-center justify-center overflow-hidden md:h-[700px]"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full scale-[3] object-contain transition duration-300 hover:scale-[3.15]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section
          id="equipe"
          aria-labelledby="titulo-equipe"
          className="bg-blue-50/50 px-6 py-24 md:px-[8%] border-b border-blue-100"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#05005d] bg-blue-100/60 px-3 py-1 rounded-full">
                <i className="bx bx-code-alt text-base"></i> Colaboradores
              </span>
              <h2
                id="titulo-equipe"
                className="mt-4 text-center font-titulo text-3xl font-bold text-[#05005d] md:text-4xl"
              >
                Nossa Equipe
              </h2>
              <p className="mt-2 text-blue-900/70">Conhecem a dor do estudante e constroem a solução.</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {equipe.map((membro) => (
                <TeamCard key={membro.nome} nome={membro.nome} funcao={membro.funcao} />
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          aria-labelledby="titulo-contato"
          className="bg-white px-6 py-24 md:px-[8%]"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#05005d] bg-blue-100/60 px-3 py-1 rounded-full">
                <i className="bx bx-envelope text-base"></i> Fale Conosco
              </span>
              <h2
                id="titulo-contato"
                className="mt-4 text-center font-titulo text-3xl font-bold text-[#05005d] md:text-4xl"
              >
                Contato
              </h2>
              <p className="mt-2 text-blue-900/70">Tem alguma dúvida ou sugestão? Entre em contato conosco.</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
              <address className="space-y-6 text-lg not-italic text-[#102a43] rounded-2xl bg-blue-50/80 p-8 border border-blue-100 shadow-sm">
                <h3 className="font-titulo text-xl font-bold text-[#05005d] mb-4 flex items-center gap-2">
                  <i className="bx bx-info-circle text-2xl"></i> Informações de Contato
                </h3>
                <div className="flex items-center gap-3">
                  <i className="bx bx-envelope text-xl text-[#05005d]"></i>
                  <span className="font-semibold text-[#05005d]">E-mail:</span>
                  <a href="mailto:NextLevel@gmail.com" className="hover:underline text-blue-900">NextLevel@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="bx bx-phone text-xl text-[#05005d]"></i>
                  <span className="font-semibold text-[#05005d]">Telefone:</span>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="bx bx-map text-xl text-[#05005d]"></i>
                  <span className="font-semibold text-[#05005d]">Endereço:</span>
                  <span>FIAP - Av. Paulista, 1106</span>
                </div>
              </address>

              <form onSubmit={aoEnviar} className="space-y-5 rounded-2xl bg-blue-50/40 p-8 shadow-md border border-blue-100">
                <label className="block text-sm font-semibold text-[#102a43]">
                  Nome
                  <div className="relative mt-1.5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                      <i className="bx bx-user text-lg"></i>
                    </span>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={aoMudar}
                      required
                      placeholder="Seu nome completo"
                      className="w-full rounded-xl border border-blue-200 bg-white pl-11 pr-4 py-3 outline-none transition focus:border-[#05005d] focus:ring-2 focus:ring-[#05005d]/20"
                    />
                  </div>
                </label>

                <label className="block text-sm font-semibold text-[#102a43]">
                  E-mail
                  <div className="relative mt-1.5">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                      <i className="bx bx-at text-lg"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={aoMudar}
                      required
                      placeholder="seu.email@exemplo.com"
                      className="w-full rounded-xl border border-blue-200 bg-white pl-11 pr-4 py-3 outline-none transition focus:border-[#05005d] focus:ring-2 focus:ring-[#05005d]/20"
                    />
                  </div>
                </label>

                <label className="block text-sm font-semibold text-[#102a43]">
                  Mensagem
                  <div className="relative mt-1.5">
                    <span className="absolute top-3 left-4 text-gray-400">
                      <i className="bx bx-message-detail text-lg"></i>
                    </span>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={aoMudar}
                      required
                      rows={4}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full rounded-xl border border-blue-200 bg-white pl-11 pr-4 py-3 outline-none transition focus:border-[#05005d] focus:ring-2 focus:ring-[#05005d]/20 resize-none"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#05005d] py-3.5 font-semibold text-white shadow-md transition-all hover:bg-[#07007a] hover:shadow-lg active:scale-[0.99]"
                >
                  <i className="bx bx-send text-lg"></i> Enviar mensagem
                </button>

                {enviado && (
                  <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-emerald-700 bg-emerald-50 py-2.5 rounded-xl border border-emerald-200" role="status">
                    <i className="bx bx-check-circle text-lg"></i> Mensagem enviada! Obrigado pelo contato.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}