import { motion } from 'motion/react';
import { STEPS, DEVICES, LIBRARIES } from '../data';

export function Steps() {
  return (
    <section id="pasos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Cómo empezar en 5 minutos</h2>
          <p className="text-gray-400">Seguí estos pasos simples para activar tu cuenta.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative text-center group"
            >
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#e5a00d]/40 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:border-[#e5a00d]/50 transition-all transform group-hover:-translate-y-2">
                  <step.icon size={32} className="text-[#e5a00d]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#e5a00d] text-black rounded-full font-bold flex items-center justify-center text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Devices() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e5a00d]/5 blur-[100px] rounded-full" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Dispositivos compatibles</h2>
            <p className="text-gray-400 mb-12 text-lg">Funciona en los dispositivos que ya tenés en casa.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {DEVICES.map((device, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="p-6 bg-white/5 rounded-2xl group-hover:bg-[#e5a00d]/10 transition-colors">
                    <device.icon className="text-gray-400 group-hover:text-[#e5a00d] transition-colors" size={40} />
                  </div>
                  <span className="text-gray-300 font-medium">{device.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Libraries() {
  return (
    <section id="bibliotecas" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Bibliotecas disponibles</h2>
            <p className="text-gray-400">Explorá nuestro inmenso catálogo organizado por categorías.</p>
          </div>
          <div className="hidden lg:flex gap-2">
             <div className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-gray-500 uppercase tracking-widest">Premium Content</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {LIBRARIES.map((lib, i) => (
            <motion.div
              key={lib.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={lib.image} 
                alt={lib.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-xl mb-1">{lib.name}</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{lib.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
