'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'group relative flex h-[48px] grow items-center justify-center gap-3 rounded-2xl p-3 text-sm font-semibold transition-all duration-300 ease-out active:scale-95 md:flex-none md:justify-start md:px-4',
              {
                // Tampilan saat menu SEDANG AKTIF
                'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25':
                  isActive,
                // Tampilan & efek hover saat menu TIDAK AKTIF
                'border border-slate-200/70 bg-white/80 text-slate-600 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/70 hover:text-blue-600 hover:shadow-sm':
                  !isActive,
              },
            )}
          >
            {/* Ikon dengan animasi zoom & miring tipis saat di-hover */}
            <LinkIcon
              className={clsx(
                'w-5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3',
                {
                  'text-white': isActive,
                  'text-slate-500 group-hover:text-blue-600': !isActive,
                },
              )}
            />

            {/* Nama menu dengan efek geser halus ke kanan saat di-hover */}
            <p className="hidden transition-transform duration-300 ease-out group-hover:translate-x-1 md:block">
              {link.name}
            </p>

            {/* Titik indikator bercahaya di kanan khusus untuk menu yang aktif */}
            {isActive && (
              <span className="ml-auto hidden h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] md:block" />
            )}
          </Link>
        );
      })}
    </>
  );
}