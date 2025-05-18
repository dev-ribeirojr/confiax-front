export const cookiesKeys = {
  auth: import.meta.env.VITE_AUTH_COOKIE_KEY,
};

export type CookiesKeysProps = keyof typeof cookiesKeys;
