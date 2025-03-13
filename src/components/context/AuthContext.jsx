import React, { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto
const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Aquí puedes verificar la autenticación del usuario
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setIsAuthenticated(true);
    }
  });

  const login = (email, password) => {

    const userData = {
      email: email,
      password: password,
    };

    if (email === "1@1.es" && password === "1234",
      email === "2@2.es" && password === "1234"
    ) {
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", userData); // Se crea el item en el localStorage
    }
  };

  const logout = () => {
    setUser(null);

    setIsAuthenticated(false);
    localStorage.removeItem("user"); // Limpiar el localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoginOpen, setIsLoginOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};