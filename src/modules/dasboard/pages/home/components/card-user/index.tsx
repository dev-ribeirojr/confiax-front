import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardUserDetails,
} from "@/components/ui";

import { format } from "date-fns";
import { CardUserMenu } from "@/modules/dasboard/pages/home/components/card-user-menu";
import { EllipsisVertical } from "lucide-react";

interface CardUserProps {
  item: UserModel;
  deleteUser: () => void;
}

export function CardUser({ item, deleteUser }: CardUserProps) {
  return (
    <Card className="p-4 relative">
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex gap-2 pr-10">
          {item.roles.map((role) => (
            <Badge variant="outline-success" key={role.id}>
              {role.role}
            </Badge>
          ))}
        </div>
        <CardUserMenu deleteUser={deleteUser}>
          <Button
            className="h-8 w-8 absolute right-3 top-3 p-0"
            variant={"ghost"}
          >
            <EllipsisVertical />
          </Button>
        </CardUserMenu>
      </div>

      <CardUserDetails email={item.email} name={item.name} />

      <div className="flex gap-2 justify-between">
        <div>
          <CardDescription>Criado em: </CardDescription>
          <CardDescription className="text-[12px]">
            {format(item.createdAt, "dd-MM-yyyy")}
          </CardDescription>
        </div>
        <div>
          <CardDescription>Atualizado em</CardDescription>
          <CardDescription className="text-[12px]">
            {format(item.updatedAt, "dd-MM-yyyy")}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
}
