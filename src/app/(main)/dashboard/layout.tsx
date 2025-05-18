import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { AppSidebar } from '@/app/(main)/dashboard/_components/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteHeader } from './_components/sidebar/site-header';

interface LayoutProps {
  readonly children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
