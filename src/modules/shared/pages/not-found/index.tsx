import { Button } from "@/components/ui";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-[70px] font-bold italic text-primary">404</h1>
        <p>Página não encontrada!</p>
        <Link to={"/"}>
          <Button className="mt-4">Ir para a página inícial</Button>
        </Link>
      </div>
    </div>
  );
}
