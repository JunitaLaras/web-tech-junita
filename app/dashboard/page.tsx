import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CodeBracketSquareIcon,
  IdentificationIcon,
  SparklesIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  const techStacks = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'];

  return (
    <div className="flex min-h-full flex-col justify-between gap-8">
      <div className="space-y-6">
        {/* 1. HERO WELCOME BANNER (GRADIENT CARD) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-7 text-white shadow-lg shadow-blue-500/20 md:p-9">
          {/* Dekorasi lingkaran cahaya halus di sudut */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 right-24 h-36 w-36 rounded-full bg-emerald-300/20 blur-xl" />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              {/* Avatar Inisial JL */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-xl font-bold tracking-wider backdrop-blur-md">
                JL
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium text-blue-50 backdrop-blur-sm">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  <span>Student Developer Dashboard</span>
                </div>
                <h1 className="mt-1.5 text-2xl font-bold tracking-tight md:text-3xl">
                  Halo, Junita Laras Wati!
                </h1>
                <p className="mt-1 text-sm text-blue-100">
                  NIM <span className="font-semibold text-white">3420230028</span> · Teknik Informatika
                </p>
              </div>
            </div>

            <div className="self-start rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs backdrop-blur-md sm:self-center">
              <p className="text-blue-100">Status Akademik</p>
              <p className="mt-0.5 flex items-center gap-1.5 font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Aktif · Semester 7
              </p>
            </div>
          </div>
        </div>

        {/* 2. BENTO GRID 2 KOLOM */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Kolom Kiri (7 bagian): Identitas Pengembang dengan Ikon */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm lg:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Identitas Pengembang
                </h2>
                <p className="text-xs text-slate-500">
                  Data profil resmi mahasiswa pengembang sistem
                </p>
              </div>
              <span className="rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Verified Profile
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <UserIcon className="h-4 w-4 text-blue-500" />
                  <span>Nama Lengkap</span>
                </div>
                <p className="mt-1.5 text-sm font-bold text-slate-800">
                  Junita Laras Wati
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <IdentificationIcon className="h-4 w-4 text-emerald-500" />
                  <span>Nomor Induk Mahasiswa</span>
                </div>
                <p className="mt-1.5 font-mono text-sm font-bold text-slate-800">
                  3420230028
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <AcademicCapIcon className="h-4 w-4 text-indigo-500" />
                  <span>Program Studi</span>
                </div>
                <p className="mt-1.5 text-sm font-bold text-slate-800">
                  Teknik Informatika (S1)
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <BuildingLibraryIcon className="h-4 w-4 text-sky-500" />
                  <span>Perguruan Tinggi</span>
                </div>
                <p className="mt-1.5 text-sm font-bold text-slate-800">
                  Universitas Islam As-Syafi&apos;iyah
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan (5 bagian): Informasi Mata Kuliah & Tech Stack */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm lg:col-span-5">
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CodeBracketSquareIcon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Detail Mata Kuliah
                  </h2>
                  <p className="text-xs text-slate-500">
                    Web Technology · Proyek Praktikum
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Dosen Pengampu
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800">
                  Adhitya Ahmad Pradypta, S.Kom., M.T.I
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold text-slate-500">
                  Teknologi yang Digunakan
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {techStacks.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-blue-100 bg-blue-50/70 px-2.5 py-1 text-xs font-semibold text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
              <span>Fakultas Sains &amp; Teknologi</span>
              <span className="font-semibold text-emerald-600">UIA Jakarta</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FOOTER EKSKLUSIF */}
      <footer className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3.5 text-xs text-slate-500 backdrop-blur-sm sm:flex-row">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-2.5 py-0.5 font-semibold text-white">
            Web Tech · UIA
          </span>
          <span>
            Dikembangkan oleh <strong className="text-slate-700">Junita Laras Wati</strong> (3420230028)
          </span>
        </div>
        <span className="text-slate-400">© {new Date().getFullYear()} All Rights Reserved</span>
      </footer>
    </div>
  );
}