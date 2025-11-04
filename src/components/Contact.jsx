import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Pendaftaran / Informasi TEC AN-NAHL');
    const body = encodeURIComponent(`Assalamu'alaikum,\n\nNama: ${form.name}\nEmail: ${form.email}\nPesan: ${form.message}`);
    window.location.href = `mailto:info@tecan-nahl.org?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Hubungi Kami</h2>
            <p className="mt-3 text-slate-600 max-w-xl">
              Siap memulai perjalanan Qur'ani Anda? Tim kami akan dengan senang hati membantu proses pendaftaran dan konsultasi program yang tepat.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-600" size={18} />
                <a href="tel:+6281234567890" className="hover:text-emerald-700">+62 812-3456-7890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-600" size={18} />
                <a href="mailto:info@tecan-nahl.org" className="hover:text-emerald-700">info@tecan-nahl.org</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-600" size={18} />
                <span>Jl. An-Nahl No. 27, Kota Anda</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
              <p className="text-sm text-emerald-900">
                Catatan: Formulir di sebelah kanan akan membuka email klien Anda untuk mengirimkan pesan pendaftaran secara otomatis.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Ceritakan kebutuhan atau program yang diinginkan"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
              >
                <Send size={18} /> Kirim Melalui Email
              </button>
            </form>
          </div>
        </div>

        <div id="about" className="mt-24">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-1">
            <div className="rounded-2xl bg-white/90 p-8">
              <h3 className="text-2xl font-bold text-emerald-900">Tentang TEC AN-NAHL</h3>
              <p className="mt-2 text-slate-700 max-w-4xl">
                TEC AN-NAHL (Tilawati Education Center An-Nahl) adalah lembaga pembinaan Al-Qur'an yang berfokus pada pengajaran membaca, menghafal, dan memaknai Al-Qur'an dengan metode Tilawati.
                Kami berkomitmen menghadirkan pembelajaran yang mudah, menyenangkan, dan berstandar, untuk membentuk generasi Qur'ani yang berakhlak mulia.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm text-slate-700">
                <div className="rounded-lg bg-emerald-50 p-4">
                  Fasilitas nyaman & lingkungan belajar kondusif
                </div>
                <div className="rounded-lg bg-emerald-50 p-4">
                  Kurikulum bertahap dengan evaluasi berkala
                </div>
                <div className="rounded-lg bg-emerald-50 p-4">
                  Sertifikat kelulusan untuk level yang ditempuh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
