import { BookOpenCheck, Users, GraduationCap, Clock } from 'lucide-react';

const programs = [
  {
    title: 'Tahsin & Tilawah',
    desc: 'Perbaikan makhraj, tajwid, dan irama Tilawati hingga tartil.',
    icon: BookOpenCheck,
    badge: 'Semua Usia',
  },
  {
    title: 'Tahfidz Al-Qur\'an',
    desc: 'Program hafalan bertahap dengan murajaah terstruktur dan setoran rutin.',
    icon: GraduationCap,
    badge: 'Target Bertahap',
  },
  {
    title: 'Kelas Anak & Remaja',
    desc: 'Belajar fun dan interaktif sesuai usia dengan pengajar bersertifikat.',
    icon: Users,
    badge: 'Usia 5-18',
  },
  {
    title: 'Kelas Dewasa & Umum',
    desc: 'Fokus baca benar dan indah, cocok untuk pemula hingga mahir.',
    icon: Clock,
    badge: 'Fleksibel',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Program Unggulan</h2>
          <p className="mt-3 text-slate-600">
            Kurikulum berbasis metode Tilawati yang tersertifikasi, difasilitasi oleh pengajar berpengalaman.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ title, desc, icon: Icon, badge }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-emerald-100 hover:ring-emerald-200 shadow-sm hover:shadow transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Icon size={20} />
                </span>
                <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1 ring-1 ring-emerald-200">
                  {badge}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">
                Daftar sekarang →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
