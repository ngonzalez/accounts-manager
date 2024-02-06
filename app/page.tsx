import * as React from 'react';
import Image from 'next/image';
import SideNav from '@/app/ui/dashboard/sidenav';
import type { Route } from "nextjs-routes";
 
export default function Index() {

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="flex min-h-screen flex-col p-6">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block p-5"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden p-5"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </main>
    </div>
  );
}
