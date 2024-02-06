import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </main>
    </div>
  );
}
