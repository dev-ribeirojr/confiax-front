import { deleteCookies } from "@/lib";
import { useUserStore } from "@/stores";

export function useSignOut() {
  const { logOut } = useUserStore();

  async function signOut() {
    deleteCookies("auth");
    logOut();
  }

  return {
    signOut,
  };
}
