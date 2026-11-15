'use client';

import { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const dummyCustomers = [
  {
    id: '1',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    totalInvoices: 3,
    totalPending: 'Rp 1.500.000',
    totalPaid: 'Rp 4.200.000',
  },
  {
    id: '2',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    totalInvoices: 2,
    totalPending: 'Rp 0',
    totalPaid: 'Rp 3.100.000',
  },
  {
    id: '3',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    totalInvoices: 4,
    totalPending: 'Rp 850.000',
    totalPaid: 'Rp 5.600.000',
  },
  {
    id: '4',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    totalInvoices: 1,
    totalPending: 'Rp 750.000',
    totalPaid: 'Rp 0',
  },
];

export default function Page() {
  const [search, setSearch] = useState('');

  const filteredCustomers = dummyCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:flex-row sm:items-center md:px-8">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
            <UserGroupIcon className="h-6 w-6" />
          </div>
          <div>
            <h1 className={`${lusitana.className} text-2xl font-bold text-slate-900 md:text-3xl`}>
              Customers
            </h1>
            <p className="text-xs text-slate-500 md:text-sm">
              Daftar pelanggan dan ringkasan pembayaran
            </p>
          </div>
        </div>

        <span className="self-start rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 sm:self-center">
          Total: {filteredCustomers.length} Pelanggan
        </span>
      </div>

      {/* Kotak Pencarian & Tabel */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="relative max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama atau email pelanggan..."
            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
          <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <th className="pb-3 pr-4">Nama Pelanggan</th>
                <th className="pb-3 px-4">Email</th>
                <th className="pb-3 px-4 text-center">Total Invoice</th>
                <th className="pb-3 px-4">Pending</th>
                <th className="pb-3 pl-4">Paid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="transition-colors hover:bg-blue-50/40"
                >
                  <td className="py-4 pr-4 font-semibold text-slate-800">
                    {customer.name}
                  </td>
                  <td className="py-4 px-4 text-slate-500">{customer.email}</td>
                  <td className="py-4 px-4 text-center font-medium text-slate-700">
                    {customer.totalInvoices}
                  </td>
                  <td className="py-4 px-4 font-medium text-amber-600">
                    {customer.totalPending}
                  </td>
                  <td className="py-4 pl-4 font-semibold text-emerald-600">
                    {customer.totalPaid}
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