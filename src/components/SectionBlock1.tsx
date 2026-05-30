import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#e5a00d] rounded-lg flex items-center justify-center">
            <Play className="text-black fill-black" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">PLAY<span className="text-[#e5a00d]">PLEX</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#inicio" className="hover:text-[#e5a00d] transition-colors">Inicio</a>
          <a href="#bibliotecas" className="hover:text-[#e5a00d] transition-colors">Bibliotecas</a>
          <a href="#pasos" className="hover:text-[#e5a00d] transition-colors">Cómo Empezar</a>
          <a href="#faq" className="hover:text-[#e5a00d] transition-colors">FAQ</a>
          <a href="#contacto" className="bg-[#e5a00d] text-black px-5 py-2 rounded-full font-bold hover:bg-[#ffb71c] transition-all transform hover:scale-105 active:scale-95">Solicitar Acceso</a>
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with generated image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_bg_1780106912776.png" 
          alt="Streaming content" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Accedé a miles de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a00d] to-[#ffda85]">películas, series y anime</span> desde cualquier dispositivo
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            PLAYPLEX te permite disfrutar contenido en calidad HD y Full HD desde Smart TV, Chromecast, Android TV, celular o computadora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto"
              className="bg-[#e5a00d] text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#ffb71c] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#e5a00d]/20"
            >
              Solicitar acceso
            </a>
            <a 
              href="#que-es"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Ver cómo funciona
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="que-es" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">¿Qué es PLAYPLEX?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Plex funciona como Netflix, pero con bibliotecas compartidas. Solo necesitás instalar la aplicación gratuita y aceptar la invitación para acceder a un mundo de entretenimiento sin límites.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Acceso desde cualquier lugar", desc: "Toda tu biblioteca en el bolsillo." },
                { title: "Aplicación gratuita", desc: "No pagues suscripciones adicionales." },
                { title: "Compatible con todo", desc: "Smart TVs, móviles, PCs y más." },
                { title: "Biblioteca organizada", desc: "Metadatos, posters y descripciones." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e5a00d]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#e5a00d]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/5 shadow-2xl relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e5a00d]/20 to-transparent blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-inner bg-black flex items-center justify-center">
                 <Play className="text-[#e5a00d]/20" size={100} />
              </div>
              <div className="mt-8 flex justify-between items-center px-2">
                <div className="flex gap-2">
                  <div className="w-12 h-2 rounded-full bg-[#e5a00d]" />
                  <div className="w-8 h-2 rounded-full bg-gray-800" />
                  <div className="w-8 h-2 rounded-full bg-gray-800" />
                </div>
                <span className="text-[#e5a00d] font-bold">100% Streaming</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
