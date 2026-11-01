
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    login(email);
    navigate("/smartsave");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#000d55] to-[#1b4bdb] px-6 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <Link
          to="/"
          className="text-sm font-bold text-[#1457d9] hover:underline"
        >
          ← Voltar para o início
        </Link>

        <div className="mt-8 text-center">
          <h1 className="font-['Bebas_Neue'] text-5xl text-[#05005d]">
            Smart Save
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            Entre na sua conta, use qualquer email e senha
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-bold text-[#102a43]">
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-bold text-[#102a43]">
              Senha
            </label>

            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#05005d] py-3 font-bold text-white transition hover:bg-[#1457d9]"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Demonstração acadêmica: utilize qualquer e-mail e senha.
        </p>
      </div>
    </main>
  );
}
