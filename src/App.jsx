import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Contact />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} TEC AN-NAHL — Tilawati Education Center An-Nahl. All rights reserved.
          </p>
          <p>
            Dibangun dengan cinta untuk Al-Qur'an.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
