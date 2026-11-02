import { Link } from "react-router-dom";

export default function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#05005d] px-[5%] py-5">
      <nav className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
        <a 
          href="#solucao" 
          onClick={(e) => handleScroll(e, "solucao")} 
          className="font-bold text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          Solução
        </a>
        <a 
          href="#publico-alvo" 
          onClick={(e) => handleScroll(e, "publico-alvo")} 
          className="font-bold text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          Público-Alvo
        </a>
        <a 
          href="#galeria" 
          onClick={(e) => handleScroll(e, "galeria")} 
          className="font-bold text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          Galeria
        </a>
        <a 
          href="#equipe" 
          onClick={(e) => handleScroll(e, "equipe")} 
          className="font-bold text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          Nossa Equipe
        </a>
        <a 
          href="#contato" 
          onClick={(e) => handleScroll(e, "contato")} 
          className="font-bold text-white cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          Contato
        </a>

        <Link
          to="/login"
          className="rounded-lg bg-white px-4 py-2 font-bold text-[#05005d] transform hover:scale-105 transition-transform duration-300"
        >
          Acessar API
        </Link>
      </nav>
    </header>
  );
}