import React, { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto
const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  // Estado para saber si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Aquí puedes verificar la autenticación, por ejemplo, usando cookies o localStorage
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setIsAuthenticated(true);
      // console.log("Login exitoso");
    }
  });

  const login = (email, password) => {

    const userData = {
      email: email,
      password: password,
    };

    // console.log(userData);

    if (email === "1@1.es" && password === "1234") {
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", userData); // Crear el item en el localStorage
      // console.log("Login exitoso");
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

// Crear un hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};