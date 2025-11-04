import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#programs', label: 'Program' },
    { href: '#about', label: 'Tentang' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <BookOpen size={20} />
            </span>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-wider text-emerald-700">TEC AN-NAHL</div>
              <div className="text-xs text-slate-500">Tilawati Education Center</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-emerald-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition-colors">
              Daftar Sekarang
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-emerald-600 px-3 py-2 text-white text-center"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
