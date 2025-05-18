import type { ReactNode } from "react";

interface IfProps {
  condition: boolean;
  children: ReactNode;
  elseRender?: ReactNode;
}

export function If({ children, condition, elseRender }: IfProps) {
  return condition ? children : elseRender;
}
