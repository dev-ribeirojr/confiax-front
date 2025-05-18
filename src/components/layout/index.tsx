import { Outlet } from "react-router";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Header } from "@/components/layout/header";
import { Separator, SidebarInset, SidebarProvider } from "@/components/ui";

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Separator />
        <div className="flex flex-1 flex-col gap-4 p-4 bg-primary/4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
