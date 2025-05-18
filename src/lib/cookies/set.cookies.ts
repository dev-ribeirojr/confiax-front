import { cookiesKeys, type CookiesKeysProps } from "@/lib/cookies/keys.cookies";
import Cookies from "js-cookie";

export function setCookies(
  key: CookiesKeysProps,
  params: string,
  options?: Cookies.CookieAttributes
) {
  Cookies.set(cookiesKeys[key], params, {
    expires: 7,
    ...options,
  });
}
