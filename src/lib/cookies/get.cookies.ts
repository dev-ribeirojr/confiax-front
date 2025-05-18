import type { CookiesKeysProps } from "@/lib/cookies/keys.cookies";
import Cookies from "js-cookie";

export function getCookies(key: CookiesKeysProps) {
  return Cookies.get(key);
}
