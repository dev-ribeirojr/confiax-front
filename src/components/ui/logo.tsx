import { twMerge } from "tailwind-merge";

export function Logo({ className }: { className?: string }) {
  return (
    <img src={"src/assets/logo-confiax.webp"} className={twMerge(className)} />
  );
}
