'use client'; // Penggunaan useActionState harus mencantumkan ini

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import Footer from '@/app/ui/footer';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions'; // autentikasi

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-50 p-4 sm:p-6 overflow-y-auto">
      {/* 1. HEADER / BANNER */}
      <div className="w-full flex flex-col items-center">
        <Link
          href="/"
          title="Kembali ke Beranda"
          className="flex h-20 w-full shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 p-4 shadow-md md:h-36 md:rounded-3xl"
        >
          <Image
            src="/logo/uia-logo.png.png"
            width={500}
            height={152}
            className="block h-12 w-auto object-contain md:h-28"
            alt="Banner UIA"
            priority
          />
        </Link>
      </div>

      {/* 2. FORM LOGIN (DI TENGAH LAYAR) */}
      <div className="mx-auto my-6 md:my-10 w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-slate-200/60 p-6 sm:p-8 transition-all duration-300">
        <form action={formAction} className="space-y-4">
          <div className="flex-1 rounded-2xl bg-gray-50/80 px-6 pb-4 pt-8">
            <h1 className={`${lusitana.className} mb-4 text-2xl font-bold text-gray-900`}>
              Silakan Masuk dengan akun Anda.
            </h1>
            <div className="w-full space-y-4">
              <div>
                <label
                  className="mb-2 block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-xl border border-gray-200/80 py-[10px] pl-10 text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-white/70 backdrop-blur-md focus:bg-white focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/15 shadow-sm transition-all"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ketikkan alamat email"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors" />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-2 block text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-xl border border-gray-200/80 py-[10px] pl-10 text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-white/70 backdrop-blur-md focus:bg-white focus:border-blue-500/80 focus:ring-4 focus:ring-blue-500/15 shadow-sm transition-all"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Ketikkan Kata Sandi"
                    required
                    minLength={6}
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
            <Button className="mt-6 w-full" aria-disabled={isPending}>
              Masuk <ArrowRightIcon className="ml-auto h-5 w-5 text-white/90" />
            </Button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* 3. FOOTER */}
      <Footer />
    </main>
  );
}