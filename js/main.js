/* PlayPlex Static Logic */

const DATA = {
    steps: [
        { number: 1, title: "Instalar Plex", description: "Descargá la app oficial de Plex en tu dispositivo preferido.", icon: 'download' },
        { number: 2, title: "Crear Cuenta", description: "Registrate gratis con tu mail en plex.tv.", icon: 'user-plus' },
        { number: 3, title: "Solicitar Acceso", description: "Envianos tu mail de registro para recibir la invitación.", icon: 'mail' },
        { number: 4, title: "Aceptar Invitación", description: "Aceptá el aviso en tu cuenta y verás nuestras bibliotecas.", icon: 'check' },
        { number: 5, title: "¡A Disfrutar!", description: "Ya podés empezar a ver todo el contenido disponible.", icon: 'play-circle' }
    ],
    devices: [
        { name: "Android TV", icon: 'tv' },
        { name: "Google TV", icon: 'tv' },
        { name: "Chromecast", icon: 'cast' },
        { name: "Smart TV Samsung", icon: 'monitor' },
        { name: "Smart TV LG", icon: 'monitor' },
        { name: "Fire TV", icon: 'gamepad-2' },
        { name: "Android", icon: 'smartphone' },
        { name: "iPhone", icon: 'apple' },
        { name: "Windows", icon: 'laptop' },
        { name: "Mac", icon: 'laptop' }
    ],
    libraries: [
        { id: "movies", name: "Películas", description: "Estrenos y clásicos en la mejor calidad.", image: "img/library_movies.png" },
        { id: "series", name: "Series", description: "Todas las temporadas de tus shows favoritos.", image: "img/library_movies.png" },
        { id: "anime-series", name: "Anime Series", description: "Los mejores títulos directos desde Japón.", image: "img/library_anime.png" },
        { id: "anime-movies", name: "Anime Películas", description: "Largometrajes épicos de animación.", image: "img/library_anime.png" },
        { id: "argentinas", name: "Películas Argentinas", description: "Lo mejor del cine nacional.", image: "img/library_movies.png" },
        { id: "cartoons", name: "Dibujos Animados", description: "Para los más chicos.", image: "img/library_anime.png" },
        { id: "child", name: "Películas Infantiles", description: "Mundo mágico para toda la familia.", image: "img/library_anime.png" },
        { id: "retro", name: "Series Retro", description: "Clásicos que marcaron una época.", image: "img/library_retro.png" }
    ],
    advantages: [
        "Sin publicidad", "Acceso desde cualquier lugar", "Actualizaciones frecuentes", 
        "Bibliotecas organizadas", "Compatible con Smart TV", "Audio dual", "Calidad HD y Full HD"
    ],
    faqs: [
        { question: "¿Qué es Plex?", answer: "Plex es una plataforma de streaming que te permite acceder a una biblioteca de medios compartida. Es muy similar a Netflix pero el contenido proviene de nuestro servidor dedicado." },
        { question: "¿Necesito pagar Plex?", answer: "No, la cuenta de Plex es totalmente gratuita. Existe una versión 'Pass' que ofrece funciones extra, pero para ver nuestro contenido no es necesaria." },
        { question: "¿Cómo recibo acceso?", answer: "Debes crearte una cuenta en plex.tv, luego completas el formulario de nuestra web con ese mail y te enviaremos una invitación." },
        { question: "¿Funciona en Smart TV?", answer: "Sí, la mayoría de los Smart TVs actuales tienen la aplicación de Plex disponible en su tienda de apps." },
        { question: "¿Puedo usar Chromecast?", answer: "¡Claro! Podés transmitir desde la app de tu celular directamente al Chromecast." },
        { question: "¿Tiene subtítulos?", answer: "Sí, casi todo nuestro contenido cuenta con audio dual (Español Latino/Inglés) y múltiples opciones de subtítulos." },
        { question: "¿Puedo verlo fuera de casa?", answer: "Sí, siempre que tengas una conexión a internet estable podés disfrutar de PLAYPLEX en cualquier lugar del mundo." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initPopulate();
    initAnimations();
    initFAQ();
    initForm();
    lucide.createIcons();
});

function initNavbar() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function initPopulate() {
    // Populate Steps
    const stepsGrid = document.getElementById('steps-grid');
    if (stepsGrid) {
        DATA.steps.forEach((step, index) => {
            const div = document.createElement('div');
            div.className = 'relative text-center group reveal';
            div.style.transform = 'translateY(30px)';
            div.innerHTML = `
                ${index < DATA.steps.length - 1 ? '<div class="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#e5a00d] to-transparent z-0"></div>' : ''}
                <div class="relative z-10">
                    <div class="w-20 h-20 bg-[#141414] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:border-[#e5a00d]/50 transition-all transform group-hover:-translate-y-2">
                        <i data-lucide="${step.icon}" class="text-[#e5a00d] w-8 h-8"></i>
                        <div class="absolute -top-2 -right-2 w-8 h-8 bg-[#e5a00d] text-black rounded-full font-bold flex items-center justify-center text-sm shadow-lg">
                            ${step.number}
                        </div>
                    </div>
                    <h3 class="text-white font-bold mb-2">${step.title}</h3>
                    <p class="text-gray-500 text-sm">${step.description}</p>
                </div>
            `;
            stepsGrid.appendChild(div);
        });
    }

    // Populate Devices
    const devicesGrid = document.getElementById('devices-grid');
    if (devicesGrid) {
        DATA.devices.forEach(device => {
            const div = document.createElement('div');
            div.className = 'flex flex-col items-center gap-4 group reveal';
            div.style.transform = 'scale(0.8)';
            div.innerHTML = `
                <div class="p-6 bg-white/5 rounded-2xl group-hover:bg-[#e5a00d]/10 transition-colors">
                    <i data-lucide="${device.icon}" class="text-gray-400 group-hover:text-[#e5a00d] transition-colors w-10 h-10"></i>
                </div>
                <span class="text-gray-300 font-medium">${device.name}</span>
            `;
            devicesGrid.appendChild(div);
        });
    }

    // Populate Libraries
    const librariesGrid = document.getElementById('libraries-grid');
    if (librariesGrid) {
        DATA.libraries.forEach(lib => {
            const div = document.createElement('div');
            div.className = 'group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer reveal';
            div.style.transform = 'scale(0.9)';
            div.innerHTML = `
                <img src="${lib.image}" alt="${lib.name}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-white font-bold text-xl mb-1">${lib.name}</h3>
                    <p class="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">${lib.description}</p>
                </div>
            `;
            librariesGrid.appendChild(div);
        });
    }

    // Populate Advantages
    const advantagesGrid = document.getElementById('advantages-grid');
    if (advantagesGrid) {
        DATA.advantages.forEach(adv => {
            const div = document.createElement('div');
            div.className = 'flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors reveal';
            div.style.transform = 'translateY(10px)';
            div.innerHTML = `
                <div class="w-6 h-6 bg-[#e5a00d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div class="w-2 h-2 bg-[#e5a00d] rounded-full"></div>
                </div>
                <span class="text-gray-200 font-medium">${adv}</span>
            `;
            advantagesGrid.appendChild(div);
        });
    }

    // Populate FAQ
    const faqList = document.getElementById('faq-list');
    if (faqList) {
        DATA.faqs.forEach(faq => {
            const div = document.createElement('div');
            div.className = 'border-b border-white/10 last:border-0 overflow-hidden';
            div.innerHTML = `
                <button class="faq-btn w-full py-6 flex items-center justify-between text-left group">
                    <span class="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">${faq.question}</span>
                    <div class="faq-icon text-gray-500 transition-transform duration-300">
                        <i data-lucide="chevron-down" class="w-6 h-6"></i>
                    </div>
                </button>
                <div class="faq-answer max-h-0 opacity-0 transition-all duration-300 overflow-hidden">
                    <p class="pb-6 text-gray-400 leading-relaxed">${faq.answer}</p>
                </div>
            `;
            faqList.appendChild(div);
        });
    }
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initFAQ() {
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';

            // Close others
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = '0px';
                ans.style.opacity = '0';
            });
            document.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');
            document.querySelectorAll('.faq-btn span').forEach(s => s.classList.remove('text-[#e5a00d]'));

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
                btn.querySelector('span').classList.add('text-[#e5a00d]');
            } else {
                answer.style.maxHeight = '0px';
                answer.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
                btn.querySelector('span').classList.remove('text-[#e5a00d]');
            }
        });
    });
}

function initForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const btn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Estado de carga
            btn.disabled = true;
            btn.querySelector('span').innerText = 'Enviando...';
            status.classList.remove('hidden', 'bg-red-500/20', 'text-red-500', 'bg-green-500/20', 'text-green-500');
            status.classList.add('block', 'bg-white/5', 'text-gray-400');
            status.innerText = 'Procesando solicitud...';

            const data = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.classList.replace('text-gray-400', 'text-green-500');
                    status.classList.replace('bg-white/5', 'bg-green-500/20');
                    status.innerText = '¡Solicitud enviada con éxito! Te contactaremos pronto.';
                    form.reset();
                } else {
                    throw new Error();
                }
            } catch (error) {
                status.classList.replace('text-gray-400', 'text-red-500');
                status.classList.replace('bg-white/5', 'bg-red-500/20');
                status.innerText = 'Ups! Hubo un problema. Por favor intentá de nuevo.';
            } finally {
                btn.disabled = false;
                btn.querySelector('span').innerText = 'Solicitar ahora';
            }
        });
    }
}
