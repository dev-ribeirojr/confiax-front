import { cookiesKeys, type CookiesKeysProps } from "@/lib/cookies/keys.cookies";
import Cookies from "js-cookie";

export async function getCookies(key: CookiesKeysProps) {
  return Cookies.get(cookiesKeys[key]);
}
