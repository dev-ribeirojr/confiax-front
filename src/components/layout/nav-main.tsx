import { LayoutDashboard, UserPlus, UserRoundPen } from "lucide-react";
import { twMerge } from "tailwind-merge";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";

export function NavMain() {
  const { pathname } = useLocation();

  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: pathname === "/",
    },
    {
      title: "Cadastrar Usuário",
      url: "/new-user",
      icon: UserPlus,
      isActive: pathname === "/new-user",
    },
    ...(pathname.includes("edit-user")
      ? [
          {
            title: "Edição de usuário",
            url: pathname,
            icon: UserRoundPen,
            isActive: true,
          },
        ]
      : []),
  ];

  return (
    <SidebarMenu className="p-2">
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={item.isActive}
            className={twMerge(
              item.isActive && "bg-primary! text-white!",
              !item.isActive && "border",
              "p-3 h-9"
            )}
          >
            <Link to={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
