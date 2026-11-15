import {
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  const invoices = [
    {
      id: 'INV-001',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      amount: 'Rp 1.500.000',
      date: '12 Nov 2026',
      status: 'Paid',
    },
    {
      id: 'INV-002',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      amount: 'Rp 2.350.000',
      date: '13 Nov 2026',
      status: 'Pending',
    },
    {
      id: 'INV-003',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      amount: 'Rp 890.000',
      date: '14 Nov 2026',
      status: 'Paid',
    },
    {
      id: 'INV-004',
      name: 'Steven Tey',
      email: 'steven@tey.com',
      amount: 'Rp 3.100.000',
      date: '15 Nov 2026',
      status: 'Pending',
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* 1. HEADER HALAMAN */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:flex-row sm:items-center md:px-8">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
            <DocumentTextIcon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Invoices</h1>
            <p className="text-xs text-slate-500 md:text-sm">
              Daftar tagihan dan status pembayaran pelanggan
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-95"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Buat Invoice</span>
        </button>
      </div>

      {/* 2. RINGKASAN STATISTIK SINGKAT */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-slate-400">Total Tagihan</p>
          <p className="mt-1 text-2xl font-bold text-slate-800">4 Invoices</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-slate-400">Lunas (Paid)</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600">2 Invoices</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-slate-400">Menunggu (Pending)</p>
          <p className="mt-1 text-2xl font-bold text-amber-500">2 Invoices</p>
        </div>
      </div>

      {/* 3. TABEL INVOICES SIMPEL */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="Cari nama pelanggan..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-blue-500 focus:bg-white"
            />
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50/80 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Pelanggan</th>
                <th className="px-6 py-4">Nominal</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((item) => (
                <tr key={item.id} className="transition-colors hover:bg-blue-50/30">
                  <td className="px-6 py-4 font-mono text-xs font-semibold text-blue-600">
                    {item.id}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.email}</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{item.date}</td>
                  <td className="px-6 py-4">
                    {item.status === 'Paid' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                        <CheckCircleIcon className="h-4 w-4" />
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                        <ClockIcon className="h-4 w-4" />
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}