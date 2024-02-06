import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Providers } from './providers';

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} antialiased dark dark:bg-gray-800 dark:text-white text-black`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
