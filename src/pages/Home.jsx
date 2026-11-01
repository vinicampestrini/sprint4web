import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

const equipe = [
  {
    nome: "Alyson Souto",
    funcao: "Storytelling & Software Total Experience Design",
  },
  {
    nome: "Guilherme Vilela",
    funcao: "Web Development",
  },
  {
    nome: "Vinícius Campestrini",
    funcao: "Front-End Design",
  },
  {
    nome: "Vinícius Honda",
    funcao: "Computational Thinking With Python",
  },
];

const imagens = [
  {
    src: img1,
    alt: "Imagem do projeto Smart Save",
  },
  {
    src: img2,
    alt: "Imagem da solução Smart Save",
  },
  {
    src: img3,
    alt: "Imagem da proposta Smart Save",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Solução */}
        <section
          id="solucao"
          className="flex min-h-[550px] flex-col items-center justify-center bg-[#05005d] px-6 py-24 text-center text-white"
        >
          <h1 className="font-titulo text-4xl font-bold tracking-tight md:text-6xl">
            JOVI SMART SAVE
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed md:text-xl">
            Uma solução inteligente para ajudar estudantes a organizar
            suas fotos, documentos e anotações. Com o Smart Save, seus
            conteúdos ficam organizados e mais fáceis de encontrar.
          </p>

          <a
            href="#publico-alvo"
            className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-[#05005d] transition hover:bg-blue-100"
          >
            Conheça a solução
          </a>
        </section>

        {/* Público-alvo */}
        <section
          id="publico-alvo"
          className="px-6 py-20 md:px-[10%]"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-titulo text-3xl font-bold text-[#05005d] md:text-4xl">
              Público-Alvo
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#102a43]">
              O JOVI Smart Save foi pensado para estudantes que utilizam
              seus smartphones para registrar conteúdos acadêmicos e
              pessoais. A solução busca facilitar a organização de fotos,
              anotações e documentos, tornando a rotina mais prática.
            </p>
          </div>
        </section>

{/* Galeria */}
<section
  id="galeria"
  className="overflow-hidden bg-white px-6 py-20 md:px-[4%]"
>
  <div className="mx-auto max-w-7xl">
    <h2 className="text-center font-titulo text-3xl font-bold text-[#05005d] md:text-4xl">
      Galeria
    </h2>

    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
      {imagens.map((imagem, index) => (
        <figure
          key={index}
          className="flex h-[500px] items-center justify-center overflow-hidden md:h-[700px]"
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

        {/* Equipe */}
        <section
          id="equipe"
          className="px-6 py-20 md:px-[8%]"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-titulo text-3xl font-bold text-[#05005d] md:text-4xl">
              Nossa Equipe
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {equipe.map((membro, index) => (
                <TeamCard
                  key={index}
                  nome={membro.nome}
                  funcao={membro.funcao}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="bg-blue-50 px-6 py-20 text-center"
        >
          <h2 className="font-titulo text-3xl font-bold text-[#05005d] md:text-4xl">
            Contato
          </h2>

          <div className="mt-8 space-y-3 text-lg text-[#102a43]">
            <p>
              <strong>E-mail:</strong> NextLevel@gmail.com
            </p>

            <p>
              <strong>Telefone:</strong> (11) 99999-9999
            </p>

            <p>
              <strong>Endereço:</strong> FIAP - Av. Paulista, 1106
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}