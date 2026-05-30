import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Send, MessageSquare, Mail, MapPin } from 'lucide-react';
import { FAQS } from '../data';

function FAQItem({ faq }: { faq: any; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#e5a00d]' : 'text-gray-300 group-hover:text-white'}`}>
          {faq.question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e5a00d]' : 'text-gray-500'}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="bg-white/5 rounded-[2rem] p-8 border border-white/5 shadow-2xl">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-black relative">
       <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#e5a00d]/10 to-transparent blur-[120px]" />
       
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Solicitar acceso</h2>
            <p className="text-gray-400 mb-10 text-lg">Unite a nuestra comunidad y empezá a disfrutar del mejor catálogo. Completá tus datos y te contactaremos a la brevedad.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#e5a00d]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email de contacto</h4>
                  <p className="text-[#e5a00d]">gestionusuarios05@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-[#e5a00d]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Soporte 24/7</h4>
                  <p className="text-gray-400">Estamos para ayudarte con cualquier configuración.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-10 rounded-[3rem] border border-white/5 backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#e5a00d] focus:ring-1 focus:ring-[#e5a00d] transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Correo electrónico (Plex)</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#e5a00d] focus:ring-1 focus:ring-[#e5a00d] transition-all"
                  placeholder="tu@mail.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Dispositivo principal</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#e5a00d] focus:ring-1 focus:ring-[#e5a00d] transition-all appearance-none">
                  <option className="bg-black">Smart TV</option>
                  <option className="bg-black">Smartphone / Tablet</option>
                  <option className="bg-black">PC / Consola</option>
                  <option className="bg-black">Chromecast / TV Box</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#e5a00d] text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#ffb71c] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#e5a00d]/10"
              >
                Solicitar acceso <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#e5a00d] rounded flex items-center justify-center">
                <ChevronDown className="-rotate-90 text-black" size={18} />
              </div>
              <span className="text-xl font-bold text-white uppercase tracking-wider">PLAYPLEX</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Tu plataforma de entretenimiento personal. La mejor experiencia de streaming ahora a tu alcance.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="space-y-4">
              <h5 className="text-white font-bold">Navegación</h5>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#bibliotecas" className="hover:text-white transition-colors">Bibliotecas</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold">Legal</h5>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold">Redes</h5>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
          <p>© 2026 PLAYPLEX. Todos los derechos reservados.</p>
          <p>Gestionado por gestionusuarios05@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
