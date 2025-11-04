import { CheckCircle, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300 opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-200">
              <CheckCircle size={16} /> Lembaga Pendidikan Al-Qur'an
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Tilawati Education Center An-Nahl
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Mencetak generasi Qur'ani melalui pembelajaran Tilawati yang tartil, fasih, dan menyenangkan. TEC AN-NAHL menghadirkan program berkualitas untuk semua usia, dari pemula hingga mahir.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#programs" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 transition-colors">
                Lihat Program
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50">
                <Play size={18} /> Konsultasi Pendaftaran
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
              {[
                'Metode Tilawati Standar Nasional',
                'Pengajar Bersertifikat',
                'Kelas Anak, Remaja, Dewasa',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-1 ring-1 ring-emerald-100">
              <div className="h-full w-full rounded-xl bg-white grid place-items-center p-6">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-emerald-600 to-emerald-800">
                    TEC
                  </div>
                  <div className="mt-1 text-slate-500 tracking-wide">AN-NAHL</div>
                  <p className="mt-4 text-slate-600 max-w-sm mx-auto">
                    "Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
