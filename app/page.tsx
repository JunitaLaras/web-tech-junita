import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-50 p-4 sm:p-6">
      {/* 1. HEADER / BANNER */}
      <div className="flex h-24 shrink-0 items-center justify-between rounded-2xl bg-blue-500 px-6 py-4 shadow-md md:h-40 md:rounded-3xl md:px-10">
        <Image
          src="/logo/uia-logo.png.png"
          width={500}
          height={152}
          className="block h-14 w-auto object-contain md:h-28"
          alt="Banner UIA"
          priority
        />
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="mt-6 flex grow flex-col gap-6 md:flex-row">
        {/* Kartu Selamat Datang */}
        <div className="flex flex-col justify-center gap-6 rounded-3xl bg-white border border-gray-200/80 px-6 py-10 shadow-xl shadow-slate-200/50 md:w-2/5 md:px-12">
          <div className="space-y-3">
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase">
              Portal Pembelajaran
            </span>
            <h1 className={`${lusitana.className} text-3xl font-bold text-gray-900 md:text-4xl`}>
              Selamat Datang!
            </h1>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Ini adalah situs web pembelajaran{' '}
              <a
                href="https://nextjs.org/learn/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline-offset-4 hover:underline"
              >
                Mata Kuliah Web Teknologi
              </a>
              .
            </p>
          </div>

          {/* Kartu Info Dosen Pengampu */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Dosen Pengampu
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-800 md:text-base">
              Adhitya Ahmad Pradypta, S.Kom., M.T.I
            </p>
          </div>

          {/* Tombol Log in */}
          <Link
            href="/login"
            className="flex items-center justify-center gap-3 self-start rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-lg md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5" />
          </Link>
        </div>

        {/* Sisi Kanan: Hero Images */}
        <div className="flex items-center justify-center rounded-3xl bg-white/60 border border-gray-200/60 p-6 md:w-3/5 md:px-16 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block rounded-xl shadow-md"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden rounded-xl shadow-md"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>

      {/* 3. FOOTER */}
      <Footer />
    </main>
  );
}