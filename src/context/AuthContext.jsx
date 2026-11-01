
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    return localStorage.getItem("smartsave_usuario");
  });

  function login(email) {
    localStorage.setItem("smartsave_usuario", email);
    setUsuario(email);
  }

  function logout() {
    localStorage.removeItem("smartsave_usuario");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
