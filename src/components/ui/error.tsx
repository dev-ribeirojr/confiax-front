import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { If } from "@/components/ui/if";
import { X } from "lucide-react";

interface ErrorProps {
  isLoading?: boolean;
  mutation?: () => void | Promise<void>;
}

export function Error({ isLoading, mutation }: ErrorProps) {
  return (
    <div className=" flex-1 flex items-center justify-center flex-col">
      <div className="h-18 w-18 bg-red-400 rounded-full flex items-center justify-center p-4 mb-4">
        <X className="text-white" size={40} />
      </div>

      <CardDescription>
        Ops, ocorreu um erro ao tentar carregar os dados!
      </CardDescription>
      <CardDescription>Tente novamente!</CardDescription>

      <If condition={!!mutation}>
        <Button className="mt-4" isLoading={isLoading} onClick={mutation}>
          Tentar novamente!
        </Button>
      </If>
    </div>
  );
}
