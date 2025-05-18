import type { CookiesKeysProps } from "@/lib/cookies/keys.cookies";
import Cookies from "js-cookie";

export function deleteCookies(key: CookiesKeysProps) {
  Cookies.remove(key);
}
