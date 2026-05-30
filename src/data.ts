import { 
  Monitor, 
  Smartphone, 
  Tv, 
  Laptop, 
  Cast, 
  Apple, 
  Gamepad2,
  CheckCircle2,
  PlayCircle,
  UserPlus,
  Mail,
  Check,
  Download,
  Info,
  Layers,
  Zap,
  ShieldCheck,
  RefreshCw,
  Library as LibraryIcon
} from 'lucide-react';
import { Step, Benefit, Device, Library, FAQ, Advantage } from './types';

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Instalar Plex",
    description: "Descargá la app oficial de Plex en tu dispositivo preferido.",
    icon: Download
  },
  {
    number: 2,
    title: "Crear Cuenta",
    description: "Registrate gratis con tu mail en plex.tv.",
    icon: UserPlus
  },
  {
    number: 3,
    title: "Solicitar Acceso",
    description: "Envianos tu mail de registro para recibir la invitación.",
    icon: Mail
  },
  {
    number: 4,
    title: "Aceptar Invitación",
    description: "Aceptá el aviso en tu cuenta y verás nuestras bibliotecas.",
    icon: Check
  },
  {
    number: 5,
    title: "¡A Disfrutar!",
    description: "Ya podés empezar a ver todo el contenido disponible.",
    icon: PlayCircle
  }
];

export const BENEFITS: Benefit[] = [
  { title: "Acceso desde cualquier lugar", icon: Zap },
  { title: "Aplicación gratuita", icon: Smartphone },
  { title: "Compatible con todo", icon: Monitor },
  { title: "Reproducción sencilla", icon: PlayCircle },
  { title: "Biblioteca organizada", icon: Layers }
];

export const DEVICES: Device[] = [
  { name: "Android TV", icon: Tv },
  { name: "Google TV", icon: Tv },
  { name: "Chromecast", icon: Cast },
  { name: "Smart TV Samsung", icon: Monitor },
  { name: "Smart TV LG", icon: Monitor },
  { name: "Fire TV", icon: Gamepad2 },
  { name: "Android", icon: Smartphone },
  { name: "iPhone", icon: Apple },
  { name: "Windows", icon: Laptop },
  { name: "Mac", icon: Laptop }
];

export const LIBRARIES: Library[] = [
  {
    id: "movies",
    name: "Películas",
    description: "Estrenos y clásicos en la mejor calidad.",
    image: "/src/assets/images/library_movies_1780106929354.png"
  },
  {
    id: "series",
    name: "Series",
    description: "Todas las temporadas de tus shows favoritos.",
    image: "/src/assets/images/library_movies_1780106929354.png"
  },
  {
    id: "anime-series",
    name: "Anime Series",
    description: "Los mejores títulos directos desde Japón.",
    image: "/src/assets/images/library_anime_1780106945972.png"
  },
  {
    id: "anime-movies",
    name: "Anime Películas",
    description: "Largometrajes épicos de animación.",
    image: "/src/assets/images/library_anime_1780106945972.png"
  },
  {
    id: "argentinas",
    name: "Películas Argentinas",
    description: "Lo mejor del cine nacional.",
    image: "/src/assets/images/library_movies_1780106929354.png"
  },
  {
    id: "cartoons",
    name: "Dibujos Animados",
    description: "Para los más chicos y los no tan chicos.",
    image: "/src/assets/images/library_anime_1780106945972.png"
  },
  {
    id: "informants",
    name: "Películas Infantiles",
    description: "Mundo mágico para toda la familia.",
    image: "/src/assets/images/library_anime_1780106945972.png"
  },
  {
    id: "retro",
    name: "Series Retro",
    description: "Clásicos que marcaron una época.",
    image: "/src/assets/images/library_retro_1780106962134.png"
  }
];

export const ADVANTAGES: Advantage[] = [
  { text: "Sin publicidad" },
  { text: "Acceso desde cualquier lugar" },
  { text: "Actualizaciones frecuentes" },
  { text: "Bibliotecas organizadas" },
  { text: "Compatible con Smart TV" },
  { text: "Audio dual" },
  { text: "Calidad HD y Full HD" }
];

export const FAQS: FAQ[] = [
  {
    question: "¿Qué es Plex?",
    answer: "Plex es una plataforma de streaming que te permite acceder a una biblioteca de medios compartida. Es muy similar a Netflix pero el contenido proviene de nuestro servidor dedicado."
  },
  {
    question: "¿Necesito pagar Plex?",
    answer: "No, la cuenta de Plex es totalmente gratuita. Existe una versión 'Pass' que ofrece funciones extra, pero para ver nuestro contenido no es necesaria."
  },
  {
    question: "¿Cómo recibo acceso?",
    answer: "Debes crearte una cuenta en plex.tv, luego completas el formulario de nuestra web con ese mail y te enviaremos una invitación."
  },
  {
    question: "¿Funciona en Smart TV?",
    answer: "Sí, la mayoría de los Smart TVs actuales tienen la aplicación de Plex disponible en su tienda de apps."
  },
  {
    question: "¿Puedo usar Chromecast?",
    answer: "¡Claro! Podés transmitir desde la app de tu celular directamente al Chromecast."
  },
  {
    question: "¿Tiene subtítulos?",
    answer: "Sí, casi todo nuestro contenido cuenta con audio dual (Español Latino/Inglés) y múltiples opciones de subtítulos."
  },
  {
    question: "¿Puedo verlo fuera de casa?",
    answer: "Sí, siempre que tengas una conexión a internet estable podés disfrutar de PLAYPLEX en cualquier lugar del mundo."
  }
];
