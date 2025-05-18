import { Badge, Button, Card, CardDescription } from "@/components/ui";

import { FaEllipsisV } from "react-icons/fa";

export function CardUser() {
  return (
    <Card className="p-4 relative">
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex gap-2 pr-10">
          <Badge variant="outline">Administrador</Badge>
          <Badge variant="outline">Convidado</Badge>
        </div>

        <Button
          className="h-8 w-8 absolute right-3 top-3 p-0"
          variant={"ghost"}
        >
          <FaEllipsisV className="text-zinc-500" />
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="h-12 w-12 rounded-full bg-primary" />
        <div>
          <CardDescription className="capitalize font-semibold">
            pablo alves ribeiro
          </CardDescription>
          <CardDescription className="text-[13px]">
            email@email.com
          </CardDescription>
        </div>
      </div>

      <div className="flex gap-2 justify-between">
        <div>
          <CardDescription>Criado em: </CardDescription>
          <CardDescription className="text-[12px]">10/02/2024</CardDescription>
        </div>
        <div>
          <CardDescription>Atualizado em</CardDescription>
          <CardDescription className="text-[12px]">10/02/2024</CardDescription>
        </div>
      </div>
    </Card>
  );
}
