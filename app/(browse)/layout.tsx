import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "./_components/sidebar/app-sidebar";
import AppNavbar from "./_components/navbar/app-navbar";
import { RootLayoutProps } from "@/types";

const BrowseLayout = ({ children }: RootLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full h-full">
        <AppNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default BrowseLayout;
