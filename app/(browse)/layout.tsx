import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './_components/sidebar/app-sidebar'

const BrowseLayout = () => {
  return (
    <SidebarProvider>
        <AppSidebar/>
    </SidebarProvider>
  )
}

export default BrowseLayout