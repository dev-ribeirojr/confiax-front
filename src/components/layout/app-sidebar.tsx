import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";

import {
  Logo,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui";
import type { ComponentProps } from "react";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="my-2">
        <Logo className="w-[180px]" />
      </SidebarHeader>
      <Separator className="mb-2" />
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
