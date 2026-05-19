import type { Dispatch, SetStateAction } from "react";

export interface User {
  id?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  image?: string;
  username?: string;
  address?: {
    city: string;
  };
  occupation?: string;
  interests?: string[];
  bio?: string;
  followers?: number;
  following?: number;
  company?: {
    title?: string;
    name?: string;
  };
  posts?: number;
  isVerified?: boolean;
  createdAt?: string;
  
} 

export interface Login {
    email: string;
    firstName: string,
    lastName: string,
  password: string;
}
export interface Context {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loading?: boolean;
  login: (login: Login) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

export interface Account extends User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface Accounts {
  accounts: Account[];
}
