import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { logout } from '@/app/lib/actions';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-3">
      <Link
        className="mb-3 flex flex-col justify-between rounded-3xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/50 p-4 shadow-sm transition-all hover:shadow-md"
        href="/"
      >
        <Image
          src="/logo/uia-logo.png.png"
          width={220}
          height={68}
          className="h-11 w-auto self-start object-contain"
          alt="Logo UIA"
        />
        <div className="mt-4 border-t border-blue-100/80 pt-3">
          <p className="text-xs font-extrabold tracking-wider text-blue-700 uppercase">
            WEB TECHNOLOGY
          </p>
          <p className="mt-0.5 text-[11px] font-medium text-slate-500">
            Teknik Informatika · UIA
          </p>
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-3xl border border-slate-200/60 bg-white/50 p-4 md:flex md:flex-col md:justify-end">
          <div className="rounded-2xl bg-slate-50 p-3 text-[11px] text-slate-500">
            <p className="font-semibold text-slate-700">Portal Mahasiswa</p>
            <p className="mt-0.5">NPM: 3420230028</p>
          </div>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white p-3 text-sm font-semibold text-slate-700 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-5" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}