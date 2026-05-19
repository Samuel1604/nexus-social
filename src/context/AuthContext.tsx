import React, { createContext, useCallback, useContext, useState } from "react";
import type { Account, User } from "../types/auth";

const ACCOUNTS_KEY = "nexus_account";
const SESSION_KEY = "nexus_session";

type AuthView = "login" | "register";
type SessionUser = Omit<Account, "password">;
type AuthResult = { success: boolean; message: string };

type AuthContextValue = {
  currentUser: SessionUser | null;
  isAuth: boolean;
  authView: AuthView;
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
  login: (credentials: Pick<Account, "email" | "password">) => AuthResult;
  register: (
    account: Pick<Account, "email" | "password" | "firstName" | "lastName">,
  ) => AuthResult;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
};

// --- Helpers --------

const getAccounts = (): Account[] => {
  try {
    // This demo app keeps accounts in localStorage instead of a backend.
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]") as Account[];
  } catch {
    return [];
  }
};

const saveAccounts = (accounts: Account[]) => {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
};

const getSession = (): SessionUser | null => {
  try {
    return JSON.parse(
      localStorage.getItem(SESSION_KEY) || "null",
    ) as SessionUser | null;
  } catch {
    return null;
  }
};

const saveSession = (user: SessionUser) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

const toSessionUser = (account: Account): SessionUser => {
  // Never expose the stored password through the auth context session value.
  const { password: _password, ...sessionUser } = account;
  void _password;
  return sessionUser;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const initialSession = getSession();
  const [currentUser, setCurrentUser] = useState<SessionUser | null>(
    initialSession,
  );
  const [isAuth, setIsAuth] = useState(() => !!initialSession);
  const [authView, setAuthView] = useState<AuthView>("login");

  const register = useCallback(
    ({
      email,
      password,
      firstName,
      lastName,
    }: Pick<
      Account,
      "email" | "password" | "firstName" | "lastName"
    >): AuthResult => {
      const accounts = getAccounts();
      const normalizedEmail = email.trim().toLowerCase();

      // Normalize emails so duplicate accounts cannot be created by casing.
      if (accounts.find((account) => account.email === normalizedEmail)) {
        return { success: false, message: "Email already exists" };
      }

      const newUser: Account = {
        id: Date.now(),
        email: normalizedEmail,
        password,
        firstName: firstName.trim() || "User",
        lastName: lastName.trim(),
        username: normalizedEmail
          .split("@")[0]
          .replace(/[^a-z0-9_]/gi, "_")
          .toLowerCase(),
        image: `https://dummyjson.com/image/avatar/${Math.floor(Math.random() * 40) + 1}`,
        address: { city: "Your city" },
        occupation: "Professional",
        interests: [],
        bio: "",
        followers: 0,
        following: 0,
        posts: 0,
        isVerified: false,
        createdAt: new Date().toISOString(),
      };

      saveAccounts([...accounts, newUser]);

      const sessionUser = toSessionUser(newUser);
      saveSession(sessionUser);
      setCurrentUser(sessionUser);
      setIsAuth(true);
      return { success: true, message: "Registration successful" };
    },
    [],
  );

  const login = useCallback(
    ({ email, password }: Pick<Account, "email" | "password">): AuthResult => {
      const accounts = getAccounts();
      const user = accounts.find(
        (account) =>
          account.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          account.password === password,
      );

      if (!user) {
        return { success: false, message: "Invalid email or password" };
      }

      const sessionUser = toSessionUser(user);
      saveSession(sessionUser);
      setCurrentUser(sessionUser);
      setIsAuth(true);
      return { success: true, message: "Login successful" };
    },
    [],
  );

  const logout = useCallback(() => {
    clearSession();
    setCurrentUser(null);
    setIsAuth(false);
  }, []);

  const updateProfile = useCallback((updates: Partial<User>) => {
    setCurrentUser((prev) => {
      if (!prev) return prev;

      const updated = { ...prev, ...updates };
      saveSession(updated);

      // Keep persisted account data in sync with the active session copy.
      const accounts = getAccounts();
      const idx = accounts.findIndex((account) => account.id === updated.id);

      if (idx !== -1) {
        accounts[idx] = { ...accounts[idx], ...updates };
        saveAccounts(accounts);
      }

      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuth,
        authView,
        setAuthView,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return ctx;
};
