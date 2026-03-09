"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthMode = "login" | "signup";

interface AuthModalContextType {
  isOpen: boolean;
  authMode: AuthMode;
  openLogin: () => void;
  openSignup: () => void;
  closeAuth: () => void;
  toggleMode: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  const openLogin = () => {
    setAuthMode("login");
    setIsOpen(true);
  };

  const openSignup = () => {
    setAuthMode("signup");
    setIsOpen(true);
  };

  const closeAuth = () => {
    setIsOpen(false);
  };

  const toggleMode = () => {
    setAuthMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <AuthModalContext.Provider
      value={{ isOpen, authMode, openLogin, openSignup, closeAuth, toggleMode }}
    >
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
}
