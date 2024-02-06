import {
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Dashboard', href: '/dashboard', icon: DocumentDuplicateIcon },
];

export default function NavLinks() {
  return (
    <div className="dark dark:bg-gray-800 dark:text-white text-black">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
                          'bg-default-50 flex h-[48px] grow items-center justify-center gap-2 rounded-md p-2 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
                          {},
                        )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}