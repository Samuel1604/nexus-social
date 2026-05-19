import { useAuthContext } from "../context/AuthContext";
import { useUI } from "./useUI";

/**
 * useAuthGuard — wraps any action so it only runs when the user is logged in.
 *
 * Usage:
 *   const guard = useAuthGuard();
 *   <button onClick={guard(() => toggleFollow(userId), 'follow people')}>Follow</button>
 *
 * If the user is NOT authenticated:
 *   → Shows the LoginPromptModal with a contextual reason message.
 * If the user IS authenticated:
 *   → Runs the action normally.
 */
export function useAuthGuard() {
  const { isAuth } = useAuthContext();
  const { promptLogin } = useUI();

  /**
   * @param {Function} action   - the function to run if authenticated
   * @param {string}   reason   - human-readable reason shown in the prompt
   *                             e.g. "follow people", "like posts", "join rooms"
   */
  return (action: (...args: unknown[]) => unknown, reason = "do that") =>
    (...args: unknown[]) => {
      if (!isAuth) {
        promptLogin(reason);
        return;
      }
      return action(...args);
    };
}
