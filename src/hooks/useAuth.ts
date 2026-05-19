import { useAuthContext } from "../context/AuthContext";

export function useAuth() {
  const auth = useAuthContext();

  return {
    ...auth,
    user: auth.currentUser,
  };
}
