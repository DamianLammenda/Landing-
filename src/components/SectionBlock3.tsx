import { motion } from 'motion/react';
import { Languages, Subtitles, CheckCircle2 } from 'lucide-react';
import { ADVANTAGES } from '../data';

export function AudioDual() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e5a00d]/10 to-transparent blur-xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5a00d]/30 text-xs font-bold text-[#e5a00d] uppercase tracking-widest mb-6">
              Experiencia Inmersiva
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Todo el contenido disponible en audio dual</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#e5a00d]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Languages size={28} className="text-[#e5a00d]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Idiomas Seleccionables</h4>
                  <p className="text-gray-400">Elegí entre Español Latino o Inglés Original en el momento que quieras.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#e5a00d]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Subtitles size={28} className="text-[#e5a00d]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Subtítulos Personalizados</h4>
                  <p className="text-gray-400">Contamos con múltiples opciones de subtítulos para adaptarnos a tu gusto.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 italic">SPA</div>
              <span className="text-gray-500 font-medium">Latino</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 italic">ENG</div>
              <span className="text-gray-500 font-medium">Original</span>
            </motion.div>
            <div className="col-span-2 bg-gradient-to-r from-gray-900/50 to-transparent p-6 rounded-3xl border-l-2 border-[#e5a00d] flex items-center gap-4">
              <CheckCircle2 className="text-[#e5a00d]" />
              <span className="text-gray-300">Más de 5,000 títulos listos para ver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Advantages() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Por qué elegir PLAYPLEX</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-6 h-6 bg-[#e5a00d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-[#e5a00d] rounded-full" />
              </div>
              <span className="text-gray-200 font-medium">{adv.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Download() {
  const stores = [
    { name: "Android", link: "https://play.google.com/store/apps/details?id=com.plexapp.android" },
    { name: "iPhone / iOS", link: "https://apps.apple.com/app/plex/id383457173" },
    { name: "Windows PC", link: "https://www.plex.tv/media-server-downloads/#plex-app" },
    { name: "Mac OS", link: "https://www.plex.tv/media-server-downloads/#plex-app" },
    { name: "Smart TV", link: "https://www.plex.tv/apps-devices/" }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Descargar Plex</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Empezá a disfrutar hoy mismo. Elegí tu plataforma y descargá la aplicación oficial.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {stores.map((store, i) => (
            <motion.a
              key={i}
              href={store.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              {store.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
