import { LayoutDashboard, UserPlus } from "lucide-react";
import { twMerge } from "tailwind-merge";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Novo usuário",
    url: "#",
    icon: UserPlus,
  },
];

export function NavMain() {
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
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
