import { Edit, UserX } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import type { ReactNode } from "react";

interface CardUserMenuProps {
  children: ReactNode;
  deleteUser: () => void;
}

export function CardUserMenu({ children, deleteUser }: CardUserMenuProps) {
  const options = [
    {
      onClik: () => {},
      description: "Editar usuário",
      icon: <Edit />,
    },
    {
      onClik: deleteUser,
      description: "Excluir usuário",
      icon: <UserX />,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {options.map((item, index) => (
            <>
              <DropdownMenuItem key={index} onClick={item.onClik}>
                {item.icon}
                <span>{item.description}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
